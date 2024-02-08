import React from 'react';
import css from './CustomSection8.module.css';
import s3 from '../../assets/icons/icon5.PNG';
import classNames from 'classnames';

const CustomSectionComponent8 = props =>{

    const {sectionName,description,blocks,title} = props;

    const content1 = blocks[0];
    const content1Title = content1.title.content;
    const content1Text = content1.text.content;
    const content1Img = content1.media.image.attributes.variants.original400.url;
    
    const content2 = blocks[1];
    const content2Title = content2.title.content;
    const content2Text = content2.text.content;

    const content3 = blocks[2];
    const content3Title = content3.title.content;
    const content3Text = content3.text.content;

    const content4 = blocks[3];
    const content4Title = content3.title.content;
    const content4Text = content3.text.content;

    const content5 = blocks[4];
    const content5Title = content3.title.content;
    const content5Text = content3.text.content;
    

  return (

    <>
        <div className={css.container +' '+ css.textCenter +' '+ css.sectionBgWhite+' '+ css.desktop}>
            <div className={css.containerMain}>

            <div className={css.imgDiv}>
                    <img className={css.fullImg} src={content1Img}/>
            </div>
            

                <div>
                    <div className={classNames(css.col50,css.fontSmall)}>
                        
                    
                        <div>
                            <h2 className={css.description}>
                                {title.content}<br/>
                            </h2>
                        </div>

                        <div className={css.row2}>
                            <div className={css.row3}>
                                <div >
                                    <img className={css.icon2} src={s3}/>
                                </div>
                                <div>
                                    <p className={css.fontSmall} >
                                        <span className={css.subTitle2}>{content1Title}</span><br/>
                                        <span>{content1Text}</span>
                                    </p>
                                </div>
                            </div>

                            <div className={css.row3}>
                                <div >
                                    <img className={css.icon2} src={s3}/>
                                </div>
                                <div>
                                    <p className={css.fontSmall} >
                                        <span className={css.subTitle2}>{content2Title}</span><br/>
                                        <span>{content2Text}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        
                        <div className={css.row2}>
                            <div className={css.row3}>
                                <div >
                                    <img className={css.icon2} src={s3}/>
                                </div>
                                <div>
                                    <p className={css.fontSmall} >
                                        <span className={css.subTitle2}>{content3Title}</span><br/>
                                        <span>{content3Text}</span>
                                    </p>
                                </div>
                            </div>
                            <div className={css.row3}>
                                <div >
                                    <img className={css.icon2} src={s3}/>
                                </div>
                                <div>
                                    <p className={css.fontSmall} >
                                        <span className={css.subTitle2}>{content4Title}</span><br/>
                                        <span>{content4Text}</span>
                                    </p>
                                </div>
                            </div>

                        </div>
                    
                    </div>
                </div>
            </div>

        </div>

        <div className={css.mobile}>
        
            <img className={css.fullImg} src={content1Img}/>

            <div className={classNames(css.col50,css.fontSmall)}>
                        
                    
                        <div>
                            <h2 className={css.description}>
                                {title.content}<br/>
                            </h2>
                        </div>

                        
                            <div className={css.row3}>
                                <div >
                                    <img className={css.icon2} src={s3}/>
                                </div>
                                <div>
                                    <p className={css.fontSmall} >
                                        <span className={css.subTitle2}>{content1Title}</span><br/>
                                        <span>{content1Text}</span>
                                    </p>
                                </div>
                            </div>

                            <div className={css.row3}>
                                <div >
                                    <img className={css.icon2} src={s3}/>
                                </div>
                                <div>
                                    <p className={css.fontSmall} >
                                        <span className={css.subTitle2}>{content2Title}</span><br/>
                                        <span>{content2Text}</span>
                                    </p>
                                </div>
                            </div>


                            <div className={css.row3}>
                                <div >
                                    <img className={css.icon2} src={s3}/>
                                </div>
                                <div>
                                    <p className={css.fontSmall} >
                                        <span className={css.subTitle2}>{content3Title}</span><br/>
                                        <span>{content3Text}</span>
                                    </p>
                                </div>
                            </div>
                            <div className={css.row3}>
                                <div >
                                    <img className={css.icon2} src={s3}/>
                                </div>
                                <div>
                                    <p className={css.fontSmall} >
                                        <span className={css.subTitle2}>{content4Title}</span><br/>
                                        <span>{content4Text}</span>
                                    </p>
                                </div>
                            </div>

                       
                    
                    </div>

        </div>
    </>
   
    

  );
};

export default CustomSectionComponent8;
