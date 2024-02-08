import React from 'react';
import css from './CustomSection7.module.css';
import s3 from '../../assets/icons/icon5.PNG';
import classNames from 'classnames';

const CustomSectionComponent7 = props =>{

    const {sectionName,description,blocks,title} = props;
    const content1 = blocks[0];
    const content1Title = content1.title.content;
    const content1Text = content1.text.content;
    
    const content2 = blocks[1];
    const content2Title = content2.title.content;
    const content2Text = content2.text.content;

    const content3 = blocks[2];
    const content3Title = content3.title.content;
    const content3Text = content3.text.content;
    


    //
    const content4 = blocks[3];
    const content4Img = content4.media.image.attributes.variants.square400.url;
    const contentArray = content4.title.content.split("&");
    const dev1Name = contentArray[0];
    const dev1Profession = contentArray[1];

    const contentArrayText = content4.text.content.split("&");
    const content4Years = contentArrayText[0];
    const content4Projects = contentArrayText[1];


  return (

    <>
        <div className={css.container +' '+ css.textCenter +' '+ css.sectionBgWhite+' '+ css.desktop}>

            <div className={css.containerMain}>

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
                </div>

                <div className={css.featureDev} >
                        <img className={css.featuredPhoto} src={content4Img}/>

                        <div className={css.padding20}>
                            <div className={css.row2}>
                                <span className={css.subTitlesName}>{dev1Name}</span><br/>
                                
                                <div className={css.subTitlesProfession }>
                                    <img className={css.icon} src={s3}/>
                                    <span >{dev1Profession}</span><br/>
                                </div>
                            </div>
                            
                            <div className={css.row2}>
                                <p className={css.desP}>
                                    Year of experience<br/>
                                    <span className={css.yearOfExperience}>{content4Years}</span> 
                                </p> 

                                <p className={css.desP}>
                                    Number of realized Projects<br/>
                                    <span className={css.yearOfExperience}>{content4Projects}</span> 
                                </p> 

                            </div>
                            

                            <div>
                                <button className={css.profBtn}>Adobe Illustrator</button>
                                <button className={css.profBtn}>Sketch</button>
                                <button className={css.profBtn}>Figma</button>
                                <button className={css.profBtn}>JavaScript</button>
                                <button className={css.profBtn}>PHP</button>
                                <button className={css.profBtn}>Wordpress</button>
                                <button className={css.profBtn}>React</button>
                            </div>
                        
                        </div>

                    </div>
            </div>

        </div>


        <div className={css.mobile}>

                    <div className={css.featureDev} >
                        <img className={css.featuredPhoto} src={content4Img}/>

                        <div className={css.padding20}>
                            
                            <span className={css.subTitlesName}>{dev1Name}</span><br/>
                            
                            <div className={css.subTitlesProfession }>
                                <img className={css.icon} src={s3}/>
                                <span >{dev1Profession}</span><br/>
                            </div>
                        
                            <p className={css.desP}>
                                Year of experience<br/>
                                <span className={css.yearOfExperience}>{content4Years}</span> 
                            </p> 

                            <p className={css.desP}>
                                Number of realized Projects<br/>
                                <span className={css.yearOfExperience}>{content4Projects}</span> 
                            </p> 

                            <div>
                                <button className={css.profBtn}>Adobe Illustrator</button>
                                <button className={css.profBtn}>Sketch</button>
                                <button className={css.profBtn}>Figma</button>
                                <button className={css.profBtn}>JavaScript</button>
                                <button className={css.profBtn}>PHP</button>
                                <button className={css.profBtn}>Wordpress</button>
                                <button className={css.profBtn}>React</button>
                            </div>
                        
                        </div>

                    </div>


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
                </div>


        </div>
    
    </>
   
    

  );
};

export default CustomSectionComponent7;
