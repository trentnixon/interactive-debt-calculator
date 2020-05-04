import React from 'react';

// Import Layout Components

import Header from "./Header/Shell";
import GlabsContainer from "./Body/InnerContainer";
import BodyCopy from "./Body/BodyCopy";
import SocialBar from "./Footer/SocialMediaIcons";
import Footer from "./Footer/Footer";

function OuterShell(props){

return(
      <div id="Live" >
            <Header    
                Header={props.UI.Header} 
                Client={props.UI.Client} 
                PartnerZone={props.UI.PartnerZone} 
            />

            <GlabsContainer Position="Top">
              <BodyCopy   BodyCopy={props.UI.BodyCopy} Position="Top" {... props} />
            </GlabsContainer>
           
              {props.children} 

            <GlabsContainer Position="Bottom">
              <BodyCopy   BodyCopy={props.UI.BodyCopy} Position="Bottom" />
            </GlabsContainer>

            <SocialBar  
              {... props} 
              PartnerZone={props.UI.PartnerZone} 
            />
            <Footer 
              {... props} 
              PartnerZone={props.UI.PartnerZone} 
            />
      </div>
)
      
};
export default OuterShell;