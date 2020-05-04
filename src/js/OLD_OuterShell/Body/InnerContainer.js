import React from 'react';
//import {GA} from "../../../actions/ga";

const GlabsContainer = props => (
    <div id={props.Position} className="GlabsContainer">
        <div className="ResponsiveContainer">
            {props.children}
        </div>
    </div>
);

export default GlabsContainer;