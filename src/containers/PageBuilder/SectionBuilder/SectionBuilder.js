import React from 'react';
import { arrayOf, bool, func, node, object, oneOf, shape, string } from 'prop-types';
import classNames from 'classnames';

// Section components
import SectionArticle from './SectionArticle';
import SectionCarousel from './SectionCarousel';
import SectionColumns from './SectionColumns';
import SectionFeatures from './SectionFeatures';


// Styles
// Note: these contain
// - shared classes that are passed as defaultClasses
// - dark theme overrides
// TODO: alternatively, we could consider more in-place way of theming components
import css from './SectionBuilder.module.css';
import SectionFooter from './SectionFooter';
import { H2, ListingCard } from '../../../components';
import SearchPage from '../../SearchPage/SearchPageWithMap';
import ListingCard2 from '../../../components/ListingCard/ListingCard2';
import devOps from '../../../assets/devops2.png';
import kubernates from '../../../assets/kubernates2.png';
import docker from '../../../assets/docker2.png';
import jenkins from '../../../assets/jenkins2.png';
import azure from '../../../assets/azure.png';
import gitlab from '../../../assets/gitlab2.png';
import aws from '../../../assets/aws2.png';
import googlecloud from '../../../assets/googlecloud2.png';

import CustomSectionComponent2 from '../../../components/CustomSection/CustomSection2';
import CustomSectionComponent3 from '../../../components/CustomSection/CustomSection3';
import CustomSectionComponent4 from '../../../components/CustomSection/CustomSection4';
import CustomSectionComponent5 from '../../../components/CustomSection/CustomSection5';
import CustomSectionComponent6 from '../../../components/CustomSection/CustomSection6';
import CustomSectionComponent7 from '../../../components/CustomSection/CustomSection7';
import CustomSectionComponent8 from '../../../components/CustomSection/CustomSection8';
import CustomSectionComponent9 from '../../../components/CustomSection/CustomSection9';
import CustomSectionComponent10 from '../../../components/CustomSection/CustomSection10';
import CustomSectionComponent11 from '../../../components/CustomSection/CustomSection11';


// These are shared classes.
// Use these to have consistent styles between different section components
// E.g. share the same title styles
const DEFAULT_CLASSES = {
  sectionDetails: css.sectionDetails,
  title: css.title,
  description: css.description,
  ctaButton: css.ctaButton,
  blockContainer: css.blockContainer,
};

/////////////////////////////////////////////
// Mapping of section types and components //
/////////////////////////////////////////////

const defaultSectionComponents = {
  article: { component: SectionArticle },
  carousel: { component: SectionCarousel },
  columns: { component: SectionColumns },
  features: { component: SectionFeatures },
  footer: { component: SectionFooter },
};

//////////////////////
// Section builder //
//////////////////////

const SectionBuilder = props => {
  const { sections, options ,listings} = props;
  const { sectionComponents = {}, isInsideContainer, ...otherOption } = options || {};

  // If there's no sections, we can't render the correct section component
  if (!sections || sections.length === 0) {
    return null;
  }

  // Selection of Section components
  const components = { ...defaultSectionComponents, ...sectionComponents };
  const getComponent = sectionType => {
    const config = components[sectionType];
    return config?.component;
  };

  //console.log(listings+"                 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

  let first = true;
  return (
    <>
    
      {sections.map((section, index) => {
        const Section = getComponent(section.sectionType);
        // If the default "dark" theme should be applied (when text color is white).
        // By default, this information is stored to customAppearance field
        const isDarkTheme = section?.appearance?.textColor === 'white';
        const classes = classNames({ [css.darkTheme]: isDarkTheme });

        const listing = first?<H2 className={css.listing}>Listings will be loaded soon</H2>:"";
        //console.log(index+"                 dddddddddddddddddddddddddddddddddddddddddddddddddd");

       
        
        first = false;

        if (Section) {
          return (
            <>
             
             
             {index === 0? (
              <>
            
             
              </>
                
              ) : ""}

              

              {index === 1? (
                <CustomSectionComponent2
                  key={`${section.sectionId}_${index}`}
                  className={classes}
                  defaultClasses={DEFAULT_CLASSES}
                  isInsideContainer={isInsideContainer}
                  options={otherOption}
                  {...section}
                />
              ) : ""}

              {index === 2? (
               <CustomSectionComponent3
                key={`${section.sectionId}_${index}`}
                className={classes}
                defaultClasses={DEFAULT_CLASSES}
                isInsideContainer={isInsideContainer}
                options={otherOption}
                {...section}
              />
              ) : ""}

              {index === 3? (
                ""
              ) :""}

              {index === 4? (
                ""
              ) :""}

              {index === 5? (
                ""
              ) :""}

              {index === 6? (
                ""
              ) :""}

              {index === 7? (
                ""
              ) :""}

              {index === 8? (
                ""
              ) :""}

              {index === 9? (
                ""
              ) :""}

              {index === 10? (
                ""
              ) :""}


            </>
           
          );
        } else {
          // If the section type is unknown, the app can't know what to render
          console.warn(`Unknown section type (${section.sectionType}) detected.`);
          return null;
        }


        
      })}
    </>
  );
};

const ListingView = props =>{
  //listings[0].id.uuid
  const{listings,images} = props;
  const lists = listings;
  
  const hasListings = lists !== undefined;
   if(hasListings){
    return <div>     
      <ul>
        <div className={classNames(css.textCenter,css.marginT) }><h2 >Our Developers</h2></div>
        <div className={css.mainContainer}>
                  <div className={classNames(css.container, css.marginB)}> 

           {hasListings?
               lists.map((list,index)=>{
                if(index > 5)return "";
      
               return (
                
                    <div className={css.listItem}><ListingCard2  listing={list} images={images} index={index} /></div>
                 
         
               )
               
               
            })
           :""
           }
         
         </div>
        </div>
      </ul>
    </div>
   }
  return(
    ""
  );
}

const Partners = props =>{
  const {first} = props;
  console.log(first + "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiSectionBuilderidddddddddddddddddddddddddddd");
  //if(!first)return;
  return(
    <div className={css.partners}>
      <span className={css.tech}>Technologies:</span>
      <img src={devOps}/>
      <img src={kubernates}/>
      <img src={docker}/>
      <img className={css.jenk} src={jenkins}/>
      <img src={azure}/>
      <img src={gitlab}/>
      <img src={aws}/>
      <img src={googlecloud}/>
    </div>
  );
}

const propTypeSection = shape({
  sectionId: string.isRequired,
  sectionType: oneOf(['article', 'carousel', 'columns', 'features']).isRequired,
  // Plus all kind of unknown fields.
  // BlockBuilder doesn't really need to care about those
});

const propTypeOption = shape({
  fieldComponents: shape({ component: node, pickValidProps: func }),
  blockComponents: shape({ component: node }),
  sectionComponents: shape({ component: node }),
  // isInsideContainer boolean means that the section is not taking
  // the full viewport width but is run inside some wrapper.
  isInsideContainer: bool,
});

const defaultSections = shape({
  sections: arrayOf(propTypeSection),
  options: propTypeOption,
});

const customSection = shape({
  sectionId: string.isRequired,
  sectionType: string.isRequired,
  // Plus all kind of unknown fields.
  // BlockBuilder doesn't really need to care about those
});
const propTypeOptionForCustomSections = shape({
  fieldComponents: shape({ component: node, pickValidProps: func }),
  blockComponents: shape({ component: node }),
  sectionComponents: shape({ component: node }).isRequired,
  // isInsideContainer boolean means that the section is not taking
  // the full viewport width but is run inside some wrapper.
  isInsideContainer: bool,
});

const customSections = shape({
  sections: arrayOf(customSection),
  options: propTypeOptionForCustomSections.isRequired,
  listings:object,
});

SectionBuilder.defaultProps = {
  sections: [],
  options: null,
  listings:[]
};

SectionBuilder.propTypes = oneOf([defaultSections, customSections]).isRequired;

export default SectionBuilder;
