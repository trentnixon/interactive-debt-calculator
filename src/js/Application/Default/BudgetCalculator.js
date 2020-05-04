import React from 'react'
import Measures from "./js/Stateful/Measures"
import BudgetTotal from  "./js/Stateful/BudgetTotalsFooter";
const BudgetCalculator = ()=>{
  return(
      <div className="Application">
          <Measures />
          <BudgetTotal />
      </div>
  )
}

export default  BudgetCalculator