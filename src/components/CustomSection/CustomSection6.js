import React from 'react';
import css from './CustomSection6.module.css';
import s3 from '../../assets/icons/icon5.PNG';
import classNames from 'classnames';

const CustomSectionComponent6 = props =>{


    const {sectionName,description,blocks,title} = props;
    // const content0 = blocks[0];
    // const content0Img = content0.media.image.attributes.variants.square400.url;
    // const blockTitle = blocks[0].title;
    // const content1 = blocks[1];
    // const content1Img = content1.media.image.attributes.variants.square400.url;
    // const content2 = blocks[2];
    // const content2Img = content2.media.image.attributes.variants.square400.url;
    // const content3 = blocks[3];
    // const content3Img = content3.media.image.attributes.variants.square400.url;
    const content4 = blocks[0];
    const content4Img = content4.media.image.attributes.variants.square400.url;
    const contentArray = content4.title.content.split("&");
    const dev1Name = contentArray[0];
    const dev1Profession = contentArray[1];


    const content5 = blocks[1];
    const content5Img = content5.media.image.attributes.variants.square400.url;
    const contentArray5 = content5.title.content.split("&");
    const dev1Name5 = contentArray5[0];
    const dev1Profession5 = contentArray5[1];



    const content6 = blocks[2];
    const content6Img = content6.media.image.attributes.variants.square400.url;
    const contentArray6 = content6.title.content.split("&");
    const dev1Name6 = contentArray6[0];
    const dev1Profession6 = contentArray6[1];


    const content7 = blocks[3];
    const content7Img = content7.media.image.attributes.variants.square400.url;
    const contentArray7 = content7.title.content.split("&");
    const dev1Name7 = contentArray7[0];
    const dev1Profession7 = contentArray6[1];



  return (

    <>
    
    <div className={css.container +' '+ css.textCenter +' '+ css.sectionBgWhite+' '+ css.desktop}>


        <div className={css.sectionTitle}>{description.content}</div>
        <div className={css.devMenus}>
            

           <button>All</button>
           <button>Custom Developers</button>
           <button>CRM Developers</button>
           <button>E-Commerce Developers</button>

        </div>

        <div className={css.containerMain}>

            <div className={css.devCard} >
                    <img className={css.roundEdge} src={content4Img}/>

                    <div className={css.padding20}>
                        <span className={css.subTitlesName}>{dev1Name}</span><br/>
                        
                        <div className={css.subTitlesProfession }>
                            <img className={css.icon} src={s3}/>
                            <span >{dev1Profession}</span><br/>
                        </div>

                        <p className={css.desP}>
                            Year of experience<br/>
                        <span className={css.yearOfExperience}>{content4.text.content}</span> 
                        </p>  
                    </div>
                    

                </div>

                <div className={css.devCard} >
                    <img className={css.roundEdge} src={content5Img}/>

                    <div className={css.padding20}>
                        <span className={css.subTitlesName}>{dev1Name5}</span><br/>
                        
                        <div className={css.subTitlesProfession}>
                            <img className={css.icon} src={s3}/>
                            <span >{dev1Profession5}</span><br/>
                        </div>

                        <p className={css.desP}>
                            Year of experience<br/>
                        <span className={css.yearOfExperience}>{content5.text.content}</span> 
                        </p>  
                    </div>
                    

                </div>

                <div className={css.devCard} >
                    <img className={css.roundEdge} src={content6Img}/>

                    <div className={css.padding20}>
                        <span className={css.subTitlesName}>{dev1Name6}</span><br/>
                        
                        <div className={css.subTitlesProfession}>
                            <img className={css.icon} src={s3}/>
                            <span >{dev1Profession6}</span><br/>
                        </div>

                        <p className={css.desP}>
                            Year of experience<br/>
                        <span className={css.yearOfExperience}>{content6.text.content}</span> 
                        </p>  
                    </div>
                    

                </div>

                
                <div className={css.devCard} >
                    <img className={css.roundEdge} src={content7Img}/>

                    <div className={css.padding20}>
                        <span className={css.subTitlesName}>{dev1Name7}</span><br/>
                        
                        <div className={css.subTitlesProfession}>
                            <img className={css.icon} src={s3}/>
                            <span >{dev1Profession7}</span><br/>
                        </div>
                        <p className={css.desP}>
                            Year of experience<br/>
                        <span className={css.yearOfExperience}>{content7.text.content}</span> 
                        </p>  
                    </div>
                </div>

                
            
        </div>
		
	</div>

    <div className={css.mobile}>
        <div className={css.sectionTitle}>{description.content}</div>

            <div className={css.devCard} >
                    <img className={classNames(css.profileImg, css.roundEdge)} src={content5Img}/>

                    <div className={css.padding20}>
                        <span className={css.subTitlesName}>{dev1Name5}</span><br/>
                        
                        <div className={css.subTitlesProfession}>
                            <img className={css.icon} src={s3}/>
                            <span >{dev1Profession5}</span><br/>
                        </div>

                        <p className={css.desP}>
                            Year of experience<br/>
                        <span className={css.yearOfExperience}>{content5.text.content}</span> 
                        </p>  
                    </div>
            </div>

            <div className={css.devCard} >
                    <img className={classNames(css.profileImg, css.roundEdge)} src={content6Img}/>

                    <div className={css.padding20}>
                        <span className={css.subTitlesName}>{dev1Name6}</span><br/>
                        
                        <div className={css.subTitlesProfession}>
                            <img className={css.icon} src={s3}/>
                            <span >{dev1Profession6}</span><br/>
                        </div>

                        <p className={css.desP}>
                            Year of experience<br/>
                        <span className={css.yearOfExperience}>{content6.text.content}</span> 
                        </p>  
                    </div>
            </div>

            <div className={css.devCard} >
                    <img className={classNames(css.profileImg, css.roundEdge)} src={content7Img}/>

                    <div className={css.padding20}>
                        <span className={css.subTitlesName}>{dev1Name7}</span><br/>
                        
                        <div className={css.subTitlesProfession}>
                            <img className={css.icon} src={s3}/>
                            <span >{dev1Profession7}</span><br/>
                        </div>

                        <p className={css.desP}>
                            Year of experience<br/>
                        <span className={css.yearOfExperience}>{content7.text.content}</span> 
                        </p>  
                    </div>
            </div>
    </div>
    
    
    </>
   
    





   
  );
};


export default CustomSectionComponent6;
