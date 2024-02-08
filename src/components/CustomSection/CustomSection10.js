import React from 'react';
import css from './CustomSection10.module.css';
import s3 from '../../assets/backg.png';
import classNames from 'classnames';
const CustomSectionComponent10 = props =>{

    const {sectionName,description,blocks,title} = props;
    
  return (

    <>
      <div className={classNames( css.container,css.desktop)} style={{backgroundImage:`url(${s3})`,backgroundSize:'cover'}}>
          <div className={css.containerMain}>
            <div className={css.col}>
                  <div>
                      <h2 className={css.description}>
                          {title.content}<br/>
                      </h2>
                  </div>
                  <button className={css.roundBtn}>Start Hiring Now</button>
            </div>
          </div>
      </div>

      <div className={css.mobile} style={{backgroundImage:`url(${s3})`,backgroundSize:'cover'}}>
          <h2 className={css.description}>
                {title.content}<br/>
          </h2>
          <button className={css.roundBtn}>Start Hiring Now</button>
      </div>


    </>
    

  );
};

export default CustomSectionComponent10;
