import React from 'react';
import { arrayOf, bool, func, node, number, object, shape, string } from 'prop-types';
import classNames from 'classnames';
import { LinkedLogo } from '../../../../components';

import Field from '../../Field';
import BlockBuilder from '../../BlockBuilder';

import SectionContainer from '../SectionContainer';
import css from './SectionFooter.module.css';

// The number of columns (numberOfColumns) affects styling

const GRID_CONFIG = [
  { contentCss: css.contentCol1, gridCss: css.gridCol1 },
  { contentCss: css.contentCol2, gridCss: css.gridCol2 },
  { contentCss: css.contentCol3, gridCss: css.gridCol3 },
  { contentCss: css.contentCol4, gridCss: css.gridCol4 },
];

const getIndex = numberOfColumns => numberOfColumns - 1;

const getContentCss = numberOfColumns => {
  const contentConfig = GRID_CONFIG[getIndex(numberOfColumns)];
  return contentConfig ? contentConfig.contentCss : GRID_CONFIG[0].contentCss;
};

const getGridCss = numberOfColumns => {
  const contentConfig = GRID_CONFIG[getIndex(numberOfColumns)];
  return contentConfig ? contentConfig.gridCss : GRID_CONFIG[0].gridCss;
};

// Section component that's able to show blocks in multiple different columns (defined by "numberOfColumns" prop)
const SectionFooter = props => {
  const {
    sectionId,
    className,
    rootClassName,
    numberOfColumns,
    socialMediaLinks,
    slogan,
    appearance,
    copyright,
    blocks,
    options,
  } = props;

  // If external mapping has been included for fields
  // E.g. { h1: { component: MyAwesomeHeader } }
  const fieldComponents = options?.fieldComponents;
  const fieldOptions = { fieldComponents };
  const linksWithBlockId = socialMediaLinks?.map(sml => {
    return {
      ...sml,
      blockId: sml.link.platform,
    };
  });

  const showSocialMediaLinks = socialMediaLinks?.length > 0;

  // use block builder instead of mapping blocks manually

  return (
    <SectionContainer
      as="footer"
      id={sectionId}
     
     
      appearance={appearance}
      options={fieldOptions}
    >
        <div className={classNames(css.desktop)}>
          <div className={classNames(css.footerMain)}>
              <div className={classNames(css.content, getContentCss(numberOfColumns))}>
                <div>
                  <LinkedLogo rootClassName={css.logoLink} logoClassName={css.logoImage} />
                </div>
                
              
                
                <div className={classNames(css.grid, getGridCss(numberOfColumns))}>
                  <BlockBuilder blocks={blocks} options={options} />
                  
                </div>
                
              </div>

              <div>
                <hr/>
                <div className={css.footerSocial}>
                  {showSocialMediaLinks ? (
                        <div className={css.icons}>
                          <span className={css.marginR20}>Follow Us</span>
                          <BlockBuilder blocks={linksWithBlockId} options={options} />
                        
                        </div>
                      ) : null}

                    <Field data={copyright} className={css.copyright} />
                </div>
              
                
              </div>
          </div>
          
       
      </div>
      <div className={classNames(css.mobile)}>
              <div>
                <LinkedLogo rootClassName={css.logoLink} logoClassName={css.logoImage} />
              </div>

              <div className={classNames( getGridCss(numberOfColumns))}>
                <BlockBuilder blocks={blocks} options={options} />
                
              </div>

              <div>
                {showSocialMediaLinks ? (
                      <div className={css.icons}>
                        <span>Follow Us</span><br/>
                        <BlockBuilder blocks={linksWithBlockId} options={options} />
                      
                      </div>
                    ) : null}

                  <Field data={copyright} className={css.copyright} />
              </div>
      </div>
      
    </SectionContainer>
  );
};

const propTypeOption = shape({
  fieldComponents: shape({ component: node, pickValidProps: func }),
});

SectionFooter.defaultProps = {
  className: null,
  rootClassName: null,
  textClassName: null,
  numberOfColumns: 1,
  socialMediaLinks: [],
  slogan: null,
  copyright: null,
  appearance: null,
  blocks: [],
  options: null,
};

SectionFooter.propTypes = {
  sectionId: string.isRequired,
  className: string,
  rootClassName: string,
  numberOfColumns: number,
  socialMediaLinks: arrayOf(object),
  slogan: object,
  copyright: object,
  appearance: object,
  blocks: arrayOf(object),
  options: propTypeOption,
};

export default SectionFooter;
