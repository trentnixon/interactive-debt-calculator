import React from 'react';
import {GA} from "../../../../actions/ga";

function PartnerZone(props){
    return(
        <div id="PartnerZone">
        <a 
        href={props.PartnerZone.PartnerZoneURL}
            className="ReadMore"
            onClick={()=>{GA('Link Clicked','Footer - PartnerZone',props.PartnerZone.PartnerZoneURL)} }
        >
            {props.PartnerZone.PartnerZoneFooter}<br /> <strong>{props.PartnerZone.PartnerZoneLabel}</strong> 
        </a>
    </div>
    )
}
export default PartnerZone;
