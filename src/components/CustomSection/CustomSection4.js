import React from 'react';
import css from './CustomSection4.module.css';
import Calendar from 'react-calendar'; 
import classNames from 'classnames';

const CustomSectionComponent4 = props =>{

    // const {sectionName, description,blocks} = props;
    // const content = blocks[0].text.content;
    // const title = blocks[0].title;

//   const hireTopTalent = (event)=>{
//     event.preventDefault();
//     history.push("/s?pub_role=Freelancers");
//   }

    return (
        <>
            <div className={css.container +' '+ css.textCenter +' '+ css.sectionBgWhite+' '+ css.desktop}>
            <div className={css.row}>
                <figure >
                    <img src={s3}/>
                    <figcaption>
                        <h3>TaylorMade, Full set</h3>
                        <p>
                            TaylorMade full set in Scothdale, AZ<br/>
                            Price: $55/Day<br/>
                            5 Days
                        </p>

                    </figcaption>
                </figure>

                <figure>
                    <img src={s3}/>
                    <figcaption>
                        <h3>TaylorMade, Full set</h3>
                        <p>
                            TaylorMade full set in Scothdale, AZ<br/>
                            Price: $55/Day<br/>
                            5 Days
                        </p>

                    </figcaption>
                </figure>
                <figure>
                    <img src={s3}/>
                    <figcaption>
                        <h3>TaylorMade, Full set</h3>
                        <p>
                            TaylorMade full set in Scothdale, AZ<br/>
                            Price: $55/Day<br/>
                            5 Days
                        </p>

                    </figcaption>
                </figure>
            </div>
            </div>

           
        
        </>
      
    );
};


export default CustomSectionComponent4;
