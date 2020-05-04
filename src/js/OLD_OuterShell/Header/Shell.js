import React, { useState, useEffect } from 'react';

//import TopBanner from "./TopBanner";
import HeaderTitles from "./HeaderTitles";

let ReturnHeight;

function Header(props){

  let [BottomMargin, SetMargin ] = useState(0);

  useEffect(() => {
    ReturnHeight = Math.floor(document.getElementById('MainTitle').clientHeight/1.5);
    SetMargin(Math.floor(ReturnHeight)) 
  })
  return(
    // <TopBanner Client={props.Client} PartnerZone={props.PartnerZone}  />
    <div id="Header"  style={ { marginBottom:BottomMargin+"px" } }>
          <div id="BG_Image_Container">
            <div id="BG_Image" style={ { backgroundImage: `url(${props.Header.HeaderImage})` } } ></div>
          </div>
        
        <div className="FlexHeader">
          <div></div>
          <HeaderTitles Header={props.Header.Header} TabHeader={props.Header.TabHeader}  SubHeader={props.Header.SubHeader} Client={props.Client} />   
        </div>
              
  </div>  
  )
}  
export default Header;