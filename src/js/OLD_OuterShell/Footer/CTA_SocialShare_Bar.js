import React from 'react';
import GlabsContainer from "../Body/InnerContainer";
import PartnerZone from  "./Components/CTA";
import ShareOptions from "./Components/SocialContainer";


function Footer(props){
    return(
        <div id="Footer" >
                <GlabsContainer>
                    <div>
                        <ShareOptions {... props} />
                    </div>
                    <div>
                        <PartnerZone  {... props} PartnerZone={props.PartnerZone}
                        />
                    </div>
                </GlabsContainer>
        </div>
    )
}
export default Footer;