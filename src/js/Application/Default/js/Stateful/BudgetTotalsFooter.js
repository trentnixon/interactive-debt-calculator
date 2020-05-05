import React, { useEffect } from 'react'
import {  useSelector } from "react-redux";
import {kFormatter} from "../../actions/actions"
// useDispatch
const BudgetTotal=()=>{
    const APP = useSelector(state => state.APP);
    useEffect(()=>{},[APP.TrackingBar.GatheredAmount])
    return(
        <div className="BudgetTotal">
           <h1>${kFormatter(APP.TrackingBar.GatheredAmount)}</h1> 
        </div>
    )
}
export default BudgetTotal;