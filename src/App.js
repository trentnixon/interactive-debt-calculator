import React from 'react';
import { useSelector } from "react-redux";
import LoadingScreen from "./js/pages/Loading";
import Main from "./js/pages/Main";

// Import Functions

import { FetchData } from "./actions/Load";

// Include CSS
import './App.css';
/**
 * Fetch the project Content an dset up the UI
 */
const Content = new FetchData(); 


// EDIT THESE VALUES FOR EACH PROJECT
let http =null;
const CDN = 'https://gdn-cdn.s3.amazonaws.com/embed/2020/04/debtcalculator/';
const AppType =['revenueMeasures','expenseMeasures','totals'];
/** End Edit  */

if(process.env.NODE_ENV === 'development'){ http = '/';}
else if(process.env.NODE_ENV === 'production'){ http = CDN; }
Content.start(AppType);  

const App =()=>{
  const UI = useSelector(state => state.UI);
  if(UI.UI_SET !== false){ return ( <Main />);}
  else{ return( <LoadingScreen/> )}
}

export default App;