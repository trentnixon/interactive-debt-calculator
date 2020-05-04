import React from 'react';

import PartnerZone from "./PartnerZone";
import ClientDetails from "./ClientDetails";

const TopBanner = props => (
      <div id="TopBar">
                <PartnerZone  PartnerZone={props.PartnerZone}/>
                <ClientDetails Client={props.Client} />
        </div>
);

export default TopBanner;