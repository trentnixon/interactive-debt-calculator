import React, { useEffect } from 'react'
import {  useSelector } from "react-redux";
// useDispatch,

// Import Stateless
import MeasureH1 from "../Stateless/H1"
import MeasureCopy from "../Stateless/P"
import MeasureSource from "../Stateless/Source"

// Import Stateful
import AmountCTA from "./Amount"

var _ = require('lodash');

const Measures =()=>{
    const APP = useSelector(state => state.APP);

    const CheckGroup = (Group, Position)=>{
        let BtnState=[APP.SwitchState[Position],false]
        
        if(Group.length>0){
            let Find =  _.findIndex(APP.Groups, function(o) { return o['key'] === Group; })

            if(APP.Groups[Find].value === true && APP.SwitchState[Position]=== false){
               BtnState = [APP.SwitchState[Position], APP.Groups[Find].value]
            }
        }

       return BtnState;
    }

    useEffect(()=>{},[APP.Groups])
    return(
        <div className="MeasuresContainer">
            {
                APP.APPLICATION[0].map((m,i)=>{
                   
                    return(
                        <div className="Measures" key={i}>
                            <div className="Content">
                                <MeasureH1 Copy={m.title} /> 
                                <MeasureCopy Copy={m.description} />
                                <MeasureSource Copy={m.source} URL={m.sourcelink}/>
                            </div>
                                <AmountCTA BtnState={CheckGroup( m.group, i)} Position={i} Amount={m.amount} Group={m.group} />
                        </div>  
                    )
                })
            }
        </div>
    )
}

export default Measures;