import React from 'react';
import {GA} from "../../../actions/ga";

const ClientDetails = props => (
  <div className="ClientDetails">   
        <span>{props.Client.Lead}</span> 
          <a 
            href={props.Client.CTA}
            target="_blank"  
            rel="noopener noreferrer"
            data-category="Link Clicked"
            onClick={ () => {GA('Link Clicked', 'Header - Client Logo', props.Client.CTA)}}
          >
              <img src={props.Client.Logo} alt={props.Client.Client} />
          </a>
        
    </div>
);

export default ClientDetails;