import axios from 'axios';
import store from "../store/store";
var _ = require('lodash');

export function FetchData(){

    /** Set Properties */
       
    /** Set Methods */ 
 
    this.start = (AppType) => {

        // Create Json Array 
        this.init=['https://interactive.guim.co.uk/docsdata/18_y5YluHYv2dl4I8X91gQNwXAPJkNkhM_30EbDxBMTQ.json']
        
        // Fetch Json Data for build and load into Reducers
        axios.all(this.init.map(l => axios.get(l)))
        .then(axios.spread(function (...res) { 
                // Store the returned Values to the Reducer

                console.log(res[0].data.sheets);
                let AppData=[], Groups=[], SwitchState=[]

                // Filter Json into Usable Groups
                AppType.map((type,i)=>{
                        AppData.push(res[0].data.sheets[type]);
                        return true 
                })
            
                // Create trackable Group Object 
               AppData[0].map((m,i)=>{
                    let Find =  _.find(Groups, function(o) { return o['key'] === m.group; })
                    if(Find === undefined && m.group.length>0){ Groups.push({key:m.group,value:false})}
                   
                    SwitchState.push(false)
                   // Measures[i].Switch=false
                    return true
               })

               //console.log(SwitchState);
                // Store Data
                store.dispatch({ type:"STORE_INTERACTIVE", payload:AppData});
                store.dispatch({ type:"STORE_BUDGET_GROUPS", payload:Groups});
                store.dispatch({ type:"STORE_SWITCH_STATE", payload:SwitchState});
                
                // SET UI to True
                store.dispatch({ type:"UI_SET", payload:true });

            })
        )
        .catch(function (error) { console.log(error); });
    }
}
