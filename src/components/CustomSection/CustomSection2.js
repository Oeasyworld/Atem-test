import React from 'react';
import css from './CustomSection.module.css';

import w1 from '../../assets/banner.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faHeart, faSignIn, faEnvelope} from '@fortawesome/free-solid-svg-icons'


const CustomSectionComponent2 = props =>{

    const {sectionName, description,blocks} = props;
    const content = blocks[0].text.content;
    const title = blocks[0].title;

  return (
   
    <>

    <div className={css.container +' '+ css.textCenter}>
        <div className={css.containerMain}>
        <div className={css.d_inline_top}>
            <a className={css.btn} href='www.golfer.com'>List My Clubs </a>
            <a href='www.golfer.com'>Why #RentLocal</a>
            <a href='www.golfer.com'>Help </a>
            <a href='www.golfer.com'>Inbox</a>
            
          </div> 
          <div className={css.d_inline}>
            <a href='www.golfer.com'>Golf Digest</a>
            <a href='www.golfer.com'>LINKS Magazine</a>
            <a href='www.golfer.com'>LIV Golf </a>
            <a href='www.golfer.com'>Golf Monthly</a>
            <a href='www.golfer.com'>TaylorMade</a>
          </div> 


        </div>
        <div className={css.bg_gray}>
           <h4>Wedgeaway offer of thousand of golf club sets from local golfer accross the US</h4> 
        </div>

       
        
		
	</div>
    
   
    </>
    

    

   
  );
};


export default CustomSectionComponent2;
