import React from 'react';
import {GA} from "../../../actions/ga";

function Footer(props){
  return(
    <div className="GlabsContainer">
      <div className="ResponsiveContainer">
      <div id="Footer" className=" ">
        
        <h3>
            {props.PartnerZone.PartnerZoneFooter + ' '}  
            <a  
                href={props.PartnerZone.PartnerZoneURL} 
                className="ReadMore" 
                onClick={()=>{GA('Link Clicked','Footer - PartnerZone',props.PartnerZone.PartnerZoneURL)} }
              > 
                {props.PartnerZone.PartnerZoneLabel}
            </a>
          </h3>
          <div className="InnerFooter " >
              {
                  props.UI.PartnerZoneLinks.map((Link,i)=>{
                      return(
                          <div key={i} className="PartnerZoneLinks">
                            <a href={Link.URL}  onClick={()=>{GA('Link Clicked','Footer - PartnerZone',props.PartnerZone.PartnerZoneURL)}} > 
                              {Link.Label} 
                            </a>
                          </div>
                       
                      )
                  })
                }
          </div>
        </div>
        </div>
      </div>
  )
}
export default Footer;