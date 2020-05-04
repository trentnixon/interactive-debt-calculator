import React from 'react'
const MeasureSource=(data)=>{
    return(
    <p className="MeasureCopy">Source : <a href={data.URL} target="_blank">{data.Copy}</a> </p>
    )
}
export default MeasureSource;