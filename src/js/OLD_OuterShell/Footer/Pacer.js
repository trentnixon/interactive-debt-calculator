import React from 'react'
import { useScrollPercentage } from 'react-scroll-percentage'
 
const Component = () => {
  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  })
 
  return (
    <div ref={ref}>
      <h2>{`Percentage scrolled: ${percentage.toPrecision(2)}%.`}</h2>
    </div>
  )
}

export default Component;