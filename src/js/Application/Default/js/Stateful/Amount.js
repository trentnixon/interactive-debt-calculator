import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {kFormatter} from "../../actions/actions"
var _ = require('lodash');

const AmountCTA = (data) =>{

    const [BtnGroupState, setBtnGroup] = useState(false)
    const [BtnSelected, setBtnSelected] = useState(false)
    const [BtnClass, setBtnClass] = useState("Open")
    const [BtnLabel, setBtnLabel] = useState('Rule In')
    const APP = useSelector(state => state.APP);
    const dispatch = useDispatch()
   

    /* ****************************************************************** */
    /* ****************************************************************** */

    const CreateValue=(Val)=>{
        let newValue;
        if(!BtnSelected){ newValue = (parseInt(APP.TrackingBar.GatheredAmount,10) + parseInt(Val,10))}
        else if(BtnSelected){ newValue = (parseInt(APP.TrackingBar.GatheredAmount,10) - parseInt(Val,10))}
        return newValue;
    }

    const ChangeGroup = (Group)=>{
        if(Group.length>0){
            let Find =  _.findIndex(APP.Groups, function(o) { return o['key'] === Group; })

            APP.Groups[Find].value= !APP.Groups[Find].value;
           
            dispatch({ type:"STORE_BUDGET_GROUPS", payload:APP.Groups});
        }
    }

    const LabelCheck=()=>{

        if(data.BtnState[0]){ 
            setBtnClass("Closed")
            setBtnLabel('Rule Out')
        }
        else{
            if(data.BtnState[1]){
                setBtnClass("UnAvailable")
                setBtnLabel('UnAvailable')
                setBtnGroup(true)
            }else{
                setBtnClass("Open")
                setBtnLabel('Rule In')
                setBtnGroup(false)
            }
           
        }
       
    }
    /* ****************************************************************** */

    // User CTA Function
    const onClick=(e)=>{

        APP.SwitchState[data.Position] = !APP.SwitchState[data.Position];

        ChangeGroup(data.Group)
        
        dispatch({ type: 'STORE_GATHERED', payload:CreateValue(e.target.value) })
        
        dispatch({ type:"STORE_SWITCH_STATE", payload:APP.SwitchState});
        
        setBtnSelected(!BtnSelected)
        
    }

    
    useEffect(()=>{
 
        LabelCheck()
       // CheckGroup()
    },[data.BtnState,BtnSelected])

    return(
        <div className="Amount">
            <p>${kFormatter(data.Amount)}</p>
            <button className={BtnClass} disabled={BtnGroupState}  value={data.Amount} onClick={onClick}>{BtnLabel} </button>
        </div>
    )
}
export default AmountCTA;