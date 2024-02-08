import React from 'react';
import css from './CustomSection9.module.css';
import s3 from '../../assets/icons/icon5.PNG';
import s1 from '../../assets/icons/icon6.PNG';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const CustomSectionComponent9 = props =>{

    const {sectionName,description,blocks,title} = props;

    const content1 = blocks[0];
    const content1Title = content1.title.content;
    const content1Text = content1.text.content;
    //const content1Img = content1.media.image.attributes.variants.original400.url;
    
    const content2 = blocks[1];
    const content2Title = content2.title.content;
    const content2Text = content2.text.content;

    const content3 = blocks[2];
    const content3Title = content3.title.content;
    const content3Text = content3.text.content;

    const content4 = blocks[3];
    const content4Title = content4.title.content;
    const content4Text = content4.text.content;

    const content5 = blocks[4];
    const content5Title = content5.title.content;
    const content5Text = content5.text.content;

    const content6 = blocks[5];
    const content6Title = content6.title.content;
    const content6Text = content6.text.content;

    const content7 = blocks[6];
    const content7Title = content7.title.content;
    const content7Text = content7.text.content;

    const content8 = blocks[7];
    const content8Title = content8.title.content;
    const content8Text = content8.text.content;

    

  return (
   
    <>
                
        <div className={css.container +' '+ css.textCenter +' '+ css.sectionBgWhite +' '+ css.desktop}>

                
            <div className={css.containerMain}>

            <div className={css.col}>
                    
                    <img className={css.icon5} src={s1}/>
                    <div>
                                <h2 className={css.description}>
                                    {title.content}<br/>
                                </h2>
                    </div>
            </div>
            <div className={classNames(css.col50,css.fontSmall)}>
                    
                            <div className={css.row4}>
                                <div>
                                    <p >
                                        {content1Title}<br/>
                                        <span>{content1Text}</span>
                                    </p>
                                </div>

                                <FontAwesomeIcon icon={faPlus}/>
                            </div>

                            <div className={css.row4}>
                                <div>
                                    <p >
                                        {content2Title}<br/>
                                        <span>{content2Text}</span>
                                    </p>
                                </div>
                                <FontAwesomeIcon icon={faPlus}/>
                            </div>
                        
                            <div className={css.row4}>
                                <div>
                                    <p >
                                        {content3Title}<br/>
                                        <span>{content3Text}</span>
                                    </p>
                                </div>
                                <FontAwesomeIcon icon={faPlus}/>
                            </div>

                            <div className={css.row4}>
                                <div>
                                    <p >
                                        {content4Title}<br/>
                                        <span>{content4Text}</span>
                                    </p>
                                </div>
                                <FontAwesomeIcon icon={faPlus}/>
                            </div>

                            <div className={css.row4}>
                                <div>
                                    <p >
                                        {content1Title}<br/>
                                        <span>{content1Text}</span>
                                    </p>
                                </div>

                                <FontAwesomeIcon icon={faPlus}/>
                            </div>

                            <div className={css.row4}>
                                <div>
                                    <p >
                                        {content2Title}<br/>
                                        <span>{content2Text}</span>
                                    </p>
                                </div>
                                <FontAwesomeIcon icon={faPlus}/>
                            </div>
                        
                            <div className={css.row4}>
                                <div>
                                    <p >
                                        {content3Title}<br/>
                                        <span>{content3Text}</span>
                                    </p>
                                </div>
                                <FontAwesomeIcon icon={faPlus}/>
                            </div>

                            <div className={css.row4}>
                                <div>
                                    <p >
                                        {content4Title}<br/>
                                        <span>{content4Text}</span>
                                    </p>
                                </div>
                                <FontAwesomeIcon icon={faPlus}/>
                            </div>

                            <div className={css.row4}>
                                <div>
                                    <p >
                                        {content4Title}<br/>
                                        <span>{content4Text}</span>
                                    </p>
                                </div>
                                <FontAwesomeIcon icon={faPlus}/>
                            </div>

            </div>
                

                
            </div>

        </div>

        <div className={css.mobile}>
            <div className={css.col}>
                    
                    <img className={css.icon5} src={s1}/>
                    <div>
                                <h2 className={css.description}>
                                    {title.content}<br/>
                                </h2>
                    </div>
            </div>
            <div className={classNames(css.col50,css.fontSmall)}>
                    
                    <div className={css.row4}>
                        <div>
                            <p >
                                {content1Title}<br/>
                                <span>{content1Text}</span>
                            </p>
                        </div>

                        <FontAwesomeIcon icon={faPlus}/>
                    </div>

                    <div className={css.row4}>
                        <div>
                            <p >
                                {content2Title}<br/>
                                <span>{content2Text}</span>
                            </p>
                        </div>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                
                    <div className={css.row4}>
                        <div>
                            <p >
                                {content3Title}<br/>
                                <span>{content3Text}</span>
                            </p>
                        </div>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>

                    <div className={css.row4}>
                        <div>
                            <p >
                                {content4Title}<br/>
                                <span>{content4Text}</span>
                            </p>
                        </div>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>

                    <div className={css.row4}>
                        <div>
                            <p >
                                {content1Title}<br/>
                                <span>{content1Text}</span>
                            </p>
                        </div>

                        <FontAwesomeIcon icon={faPlus}/>
                    </div>

                    <div className={css.row4}>
                        <div>
                            <p >
                                {content2Title}<br/>
                                <span>{content2Text}</span>
                            </p>
                        </div>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                
                    <div className={css.row4}>
                        <div>
                            <p >
                                {content3Title}<br/>
                                <span>{content3Text}</span>
                            </p>
                        </div>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>

                    <div className={css.row4}>
                        <div>
                            <p >
                                {content4Title}<br/>
                                <span>{content4Text}</span>
                            </p>
                        </div>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>

                    <div className={css.row4}>
                        <div>
                            <p >
                                {content4Title}<br/>
                                <span>{content4Text}</span>
                            </p>
                        </div>
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>

            </div>
        </div>
    
    </>
   

  );
};

export default CustomSectionComponent9;
