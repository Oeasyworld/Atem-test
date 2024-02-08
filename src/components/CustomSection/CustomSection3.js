import React from 'react';
import css from './CustomSection3.module.css';
import s3 from '../../assets/product1.PNG';
import comma from '../../assets/comma.PNG';
import leftIcon from '../../assets/leftImg.PNG';
import smallImage from '../../assets/smallImage.PNG';
import rightIcon from '../../assets/rightImg.PNG';
import imgline from '../../assets/imgline.PNG';
import img1 from '../../assets/img1.PNG';
import gal1 from '../../assets/gal1.PNG';
import gal2 from '../../assets/gal2.PNG';
import gal3 from '../../assets/gal3.PNG';
import gal4 from '../../assets/gal4.PNG';
import gal5 from '../../assets/gal5.PNG';
import gal6 from '../../assets/gal6.PNG';
import gal7 from '../../assets/gal7.PNG';

import gal9 from '../../assets/gal9.PNG';
import gal10 from '../../assets/gal10.PNG';
import gal11 from '../../assets/gal11.PNG';
import gal8 from '../../assets/gal8.PNG';

import logo1 from '../../assets/logo1.PNG';
import logo2 from '../../assets/logo2.PNG';
import logo3 from '../../assets/logo3.PNG';
import logo4 from '../../assets/logo4.PNG';
import logo5 from '../../assets/logo5.PNG';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa3, faCalendar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { H3 } from '../Heading/Heading';



const CustomSectionComponent3 = props =>{

    //
    // const {sectionName,description,blocks,title} = props;
    // const content0 = blocks[0];
    // const content0Img = content0.media.image.attributes.variants.square400.url;
    // const blockTitle = blocks[0].title;
    // const content1 = blocks[1];
    // const content1Img = content1.media.image.attributes.variants.square400.url;
    // const content2 = blocks[2];
    // const content2Img = content2.media.image.attributes.variants.square400.url;
    // const content3 = blocks[3];
    // const content3Img = content3.media.image.attributes.variants.square400.url;
    // const content4 = blocks[4];
    // const content4Img = content4.media.image.attributes.variants.square400.url;
    // const contentArray = content4.title.content.split("&");
    // const dev1Name = contentArray[0];
    // const dev1Profession = contentArray[1];


    // const content5 = blocks[5];
    // const content5Img = content5.media.image.attributes.variants.square400.url;
    // const contentArray5 = content5.title.content.split("&");
    // const dev1Name5 = contentArray5[0];
    // const dev1Profession5 = contentArray5[1];



    // const content6 = blocks[6];
    // const content6Img = content6.media.image.attributes.variants.square400.url;
    // const contentArray6 = content6.title.content.split("&");
    // const dev1Name6 = contentArray6[0];
    // const dev1Profession6 = contentArray6[1];

   
    

  return (
    <>

    <div className={css.container }>
        <div className={css.bg_white}>
            <h2 className={css.magLeft7}>
                Recently viewed
            </h2>
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

        <div className={css.section}>
               <div className={css.header}>
                <h2>Join thousand of jolfers enjoying WedgeAway.</h2>
                <div>
                    <img className={css.dirIcon} src={leftIcon}/>
                    <img className={css.dirIcon} src={rightIcon}/>
                </div>
               </div>

               <div className={classNames(css.centerContent)}>
                    <figure className={classNames(css.col4,css.shadowBg)}>
                        <div className={css.comma}>
                            <img src={comma}/>
                        </div>
                        <p> 
                            "As a weekend golfer, I want quality clubs without the 
                            commitment of buying. WedgeAway was a game-changer!
                            The clubs I rented were top notch and fantastic condition.
                            The ease of booking and customer service was like a breath of fresh air.
                            Delivered right to my local course, too! Will definately be usind Wedge for all 
                            my golf outings"
                        </p>
                       <div className={css.rowFlex}>
                        <img src={smallImage}/>
                        <div>
                            <h3>Lee W</h3><br/>
                            <p>Holmbarg farm in Bristow, NW.</p>
                            <div className={css.imgline}>
                                <img  src={imgline}/>
                            </div>
                            
                            <div>
                                <span class="fa fa-star checked rating"></span>
                                <span class="fa fa-star checked rating"></span>
                                <span class="fa fa-star checked rating"></span>
                                <span class="fa fa-star rating"></span>
                                <span class="fa fa-star rating"></span>
                            </div>
                           
                        </div>
                        

                       </div>
                    </figure>
                    <figure className={classNames(css.col4,css.shadowBg)}>
                        <div className={css.comma}>
                            <img src={comma}/>
                        </div>
                        <p> 
                            "As a weekend golfer, I want quality clubs without the 
                            commitment of buying. WedgeAway was a game-changer!
                            The clubs I rented were top notch and fantastic condition.
                            The ease of booking and customer service was like a breath of fresh air.
                            Delivered right to my local course, too! Will definately be usind Wedge for all 
                            my golf outings"
                        </p>
                       <div className={css.rowFlex}>
                        <img src={smallImage}/>
                        <div>
                            <h3>Lee W</h3><br/>
                            <p>Holmbarg farm in Bristow, NW.</p>
                            <div className={css.imgline}>
                                <img  src={imgline}/>
                            </div>
                            <div>
                                <span class="fa fa-star checked rating"></span>
                                <span class="fa fa-star checked rating"></span>
                                <span class="fa fa-star checked rating"></span>
                                <span class="fa fa-star rating"></span>
                                <span class="fa fa-star rating"></span>
                            </div>
                           
                        </div>
                        

                       </div>
                    </figure>

                    <figure className={classNames(css.col4,css.shadowBg)}>
                        <div className={css.comma}>
                            <img src={comma}/>
                        </div>
                        <p> 
                            "As a weekend golfer, I want quality clubs without the 
                            commitment of buying. WedgeAway was a game-changer!
                            The clubs I rented were top notch and fantastic condition.
                            The ease of booking and customer service was like a breath of fresh air.
                            Delivered right to my local course, too! Will definately be usind Wedge for all 
                            my golf outings"
                        </p>
                       <div className={css.rowFlex}>
                        <img src={smallImage}/>
                        <div>
                            <h3>Lee W</h3><br/>
                            <p>Holmbarg farm in Bristow, NW.</p>
                            <div className={css.imgline}>
                                <img  src={imgline}/>
                            </div>
                            <div>
                                <span class="fa fa-star checked rating"></span>
                                <span class="fa fa-star checked rating"></span>
                                <span class="fa fa-star checked rating"></span>
                                <span class="fa fa-star rating"></span>
                                <span class="fa fa-star rating"></span>
                            </div>
                           
                        </div>
                        

                       </div>
                    </figure>
               </div>
               
            </div>
                    
        </div>


        <div className={ classNames(css.section_main) }>
                        <h2 className={css.margin_3}>
                        Clubs for Rent near Los Angeles, CA
                        </h2>
                        <p className={css.margin_3}>Clubs for Rent near Los Angeles, CA Not your location? See spots near you</p>
                        <div className={css.row3}>
                            <figure >
                                <img src={img1}/>
                                <figcaption>
                                    <h4>TaylorMade, Full set</h4>
                                    <p>
                                        TaylorMade full set in Scothdale, AZ<br/>
                                        Price: $55/Day<br/>
                                        <FontAwesomeIcon className={css.marginR_2} icon={faCalendar}/>
                                        5 Days
                                        
                                    </p>

                                </figcaption>
                            </figure>

                            <figure>
                                <img src={img1}/>
                                <figcaption>
                                <h4>TaylorMade, Full set</h4>
                                    
                                    <p>
                                        TaylorMade full set in Scothdale, AZ<br/>
                                        Price: $55/Day<br/>
                                        <FontAwesomeIcon className={css.marginR_2} icon={faCalendar}/>
                                        5 Days
                                        
                                    </p>

                                </figcaption>
                            </figure>
                            <figure>
                                <img src={img1}/>
                                <figcaption>
                                <h4>TaylorMade, Full set</h4>
                                    <p>
                                        TaylorMade full set in Scothdale, AZ<br/>
                                        Price: $55/Day<br/>
                                        <FontAwesomeIcon className={css.marginR_2} icon={faCalendar}/>
                                        5 Days
                                        
                                    </p>

                                </figcaption>
                            </figure>
                        </div>

                    
                        <div className={css.row3}>
                            <figure >
                                <img src={img1}/>
                                <figcaption>
                                    <h4>TaylorMade, Full set</h4>
                                    <p>
                                        TaylorMade full set in Scothdale, AZ<br/>
                                        Price: $55/Day<br/>
                                        <FontAwesomeIcon className={css.marginR_2} icon={faCalendar}/>
                                        5 Days
                                        
                                    </p>

                                </figcaption>
                            </figure>

                            <figure>
                                <img src={img1}/>
                                <figcaption>
                                <h4>TaylorMade, Full set</h4>
                                    
                                    <p>
                                        TaylorMade full set in Scothdale, AZ<br/>
                                        Price: $55/Day<br/>
                                        <FontAwesomeIcon className={css.marginR_2} icon={faCalendar}/>
                                        5 Days
                                        
                                    </p>

                                </figcaption>
                            </figure>
                            <figure>
                                <img src={img1}/>
                                <figcaption>
                                <h4>TaylorMade, Full set</h4>
                                    <p>
                                        TaylorMade full set in Scothdale, AZ<br/>
                                        Price: $55/Day<br/>
                                        <FontAwesomeIcon className={css.marginR_2} icon={faCalendar}/>
                                        5 Days
                                        
                                    </p>

                                </figcaption>
                            </figure>
                        </div>


                        <div className={css.center_item}>
                            <button className={css.viewmore}>View More</button>
                        </div>
                        
                    </div>

        <div className={ classNames(css.section_main,css.padding_top_A) }>
            <div className={classNames(css.bg_violet, css.col6,css.flex_con)}>
                <div className={css.margin_small}>
                    <h2>
                        Book your clubs for your next
                        Golf Trip for the group with WedgeAway.
                    </h2>
                    <p>
                        Booking for the entire group is easy with WedgeAway! Just select our group rental
                        option, and add all of the club rentals you’d like to your cart at once. For group rentals
                        of 10 set or more, we offer free delivery to your hotel, AirBnb or course of your choice
                        in the area.
                    </p>
                    <div className={css.magTop5}>
                        <button className={css.tripnow}>Book Your Group Trip Now</button>
                    </div>
                    
                </div>
                
            </div>
            <div className={css.col6}>
                <div className={ classNames(css.col6,css.margin_small_bottom)}>
                    <img src={gal1}/>
                </div>
                <div className={ classNames(css.col6,css.margin_small_bottom)}>
                    <img src={gal2}/>
                </div>
                <div className={css.col6}>
                    <img src={gal3}/>
                </div>
                <div className={css.col6}>
                    <img src={gal4}/>
                </div>
            </div>

            
        </div>

        <div className={css.container }>
        <div className={css.bg_white}>
            <h3 className={classNames( css.magLeft5)}>
                It’s Prime Golf Season for These Warm Destinations
            </h3>
                <div className={css.row}>
                <figure >
                <a><img src={gal7}/></a>
                    <figcaption className={classNames(css.text_center)}>
                        <h3>Florida </h3>
                        

                    </figcaption>
                </figure>

                <figure>
                    <a><img src={gal6}/></a>
                    <figcaption className={classNames( css.text_center)}>
                        <h3>Las Vegas</h3>
                        

                    </figcaption>
                </figure>
                <figure>
                <a><img src={gal5}/></a>
                    <figcaption className={classNames( css.text_center)}>
                        <h3>Hawaii</h3>
                       

                    </figcaption>
                </figure>
            </div>

           
        </div>
    </div>

    <div className={ classNames(css.section_main,css.padding_top_A) }>
            <div className={classNames(css.bg_violet, css.col6,css.flex_con)}>
                <div className={css.margin_small}>
                    <h3>FOR CLUB OWNERS</h3>
                    <h2>
                    Earn money from your clubs &
                    Join the WedgeAway Community
                    </h2>

                    <ul>
                        <li> Host verified renter using your clubs.</li>
                        <li>List for free and earn up to $20,000 per year.</li>
                        <li>Stay 100% in control of your schedule.</li>
                    </ul>
                    
                    <div className={css.magTop5}>
                        <button className={css.tripnow}>Learn More</button>
                    </div>
                    
                </div>
                
            </div>
            <div className={css.col6}>
                <div>
                    <div className={ classNames(css.col6,css.margin_small_bottom)}>
                        <img src={gal8} className={classNames(css.resize)}/>
                    </div>
                    <div className={ classNames(css.col6,css.margin_small_bottom)}>
                        <img src={gal9} className={classNames(css.resize)}/>
                    </div>
                    
                </div>
                
               
                <div>
                    <div  className={classNames( css.col6,css.resize)}>
                        <img src={gal10} className={classNames(css.resize)}/>
                    </div>
                    <div  className={classNames( css.col6,css.resize)}>
                        <img src={gal11} className={classNames(css.resize)}/>
                    </div>
                    
                </div>

               
                
                
                
            </div>

           
        </div>

        <div className={classNames(css.section3)}>
                <h2>View Clubs Based on Popular Brand</h2>
                <div className={css.d_inline_img}>
                    <a href='www.golfer.com'><img src={logo1} /></a>
                    <a href='www.golfer.com'><img src={logo2} /></a>
                    <a href='www.golfer.com'><img src={logo3} /></a>
                    <a href='www.golfer.com'><img src={logo4}/></a>
                    <a href='www.golfer.com'><img src={logo5} /></a>
                </div> 
        </div>

        <div className={ classNames(css.section_main,css.padding_top_A) }>
           
                <h2>Explore Clubs By State</h2>

                <div className={css.d_flex_row}>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    <div>
                        <b>Alaska</b><br/>
                        <p>12 Available Packages</p>
                    </div>

                    <div>
                        <b>Arizona</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Arkansas</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>California</b><br/>
                        <p>12 Available Packages</p>
                    </div>

                    
                    
                </div>
                <div className={css.d_flex_row}>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>

                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                </div>
                <div className={css.d_flex_row}>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>

                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                </div>
                <div className={css.d_flex_row}>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>

                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                </div>
                <div className={css.d_flex_row}>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>

                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                </div>
                <div className={css.d_flex_row}>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>

                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                </div>
                <div className={css.d_flex_row}>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>

                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                </div>
                <div className={css.d_flex_row}>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>

                    <div>
                        <b>Alabama</b><br/>
                        <p>12 Available Packages</p>
                    </div>
                    
                </div>
      
        </div>


    <div className={css.mobile}>
                  
                        
    </div>

    </>
  );
};

export default CustomSectionComponent3;
