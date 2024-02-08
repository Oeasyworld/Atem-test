import React from 'react';
import css from './CustomSection5.module.css';
import { ArcherContainer, ArcherElement } from 'react-archer';


const CustomSectionComponent5 = props =>{

    const {sectionName, description,blocks} = props;
    const content = blocks[0].text.content;
    const title = blocks[0].title;

    const content1 = blocks[1].text.content;
    const title1 = blocks[1].title;

    const content2 = blocks[2].text.content;
    const title2 = blocks[2].title;

  return (

    <>
    
    <div className={css.container +' '+ css.textCenter +' '+ css.sectionBgWhite+' '+ css.desktop}>

        <div className={css.containerMain}>
           <ArcherContainer strokeColor="#964be2">
                <div className={css.aboutContent}>
                        <ArcherElement id="element1"
                                 relations={[
                                    {
                                       targetId: "element2",
                                       targetAnchor: "left",
                                       sourceAnchor: "right",
                                   },
                               ]}
                            >
                            <div className={css.circle}>
                                1
                            </div>
                        </ArcherElement>
                        
                        <p>
                            <span className={css.description}>{title.content}</span><br/>
                            {content}
                        </p>
                            
                    </div>

                    <div className={css.aboutContent}>


                        <ArcherElement id="element2"
                                 relations={[
                                    {
                                       targetId: "element3",
                                       targetAnchor: "left",
                                       sourceAnchor: "right",
                                      
                                   },
                               ]}
                            >
                            <div className={css.circle}>
                                2
                            </div>
                        </ArcherElement>

                        <p>
                            <span className={css.description}>{title1.content}</span><br/>
                            {content1}
                        </p>
                            
                    </div>

                    <div className={css.aboutContent}>

                        <ArcherElement id="element3">
                            <div className={css.circle}>
                                3
                            </div>
                        </ArcherElement>
                        
                        <p>
                            <span className={css.description}>{title2.content}</span><br/>
                            {content2}
                        </p>
                            
                    </div>

           </ArcherContainer>
            
                
                   
           
        </div>
        
		
	</div>


    <div className={css.mobile}>
        <ArcherContainer strokeColor="#964be2">
                <div className={css.aboutContent}>
                        <ArcherElement id="element1"
                                 relations={[
                                    {
                                       targetId: "element2",
                                       targetAnchor: "left",
                                       sourceAnchor: "right",
                                   },
                               ]}
                            >
                            <div className={css.circle}>
                                1
                            </div>
                        </ArcherElement>
                        
                        <p>
                            <span className={css.description}>{title.content}</span><br/>
                            {content}
                        </p>
                            
                    </div>

                    <div className={css.aboutContent}>


                        <ArcherElement id="element2"
                                 relations={[
                                    {
                                       targetId: "element3",
                                       targetAnchor: "left",
                                       sourceAnchor: "right",
                                      
                                   },
                               ]}
                            >
                            <div className={css.circle}>
                                2
                            </div>
                        </ArcherElement>

                        <p>
                            <span className={css.description}>{title1.content}</span><br/>
                            {content1}
                        </p>
                            
                    </div>

                    <div className={css.aboutContent}>

                        <ArcherElement id="element3">
                            <div className={css.circle}>
                                3
                            </div>
                        </ArcherElement>
                        
                        <p>
                            <span className={css.description}>{title2.content}</span><br/>
                            {content2}
                        </p>
                            
                    </div>

           </ArcherContainer>
    </div>
    
    </>
   
    

   
  );
};


export default CustomSectionComponent5;
