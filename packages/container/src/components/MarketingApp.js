import { mount } from 'marketing/MarketingApp'
import React, { useRef, useEffect } from 'react'

export default () => {
  // get reference to current element
  const ref = useRef(null)
  
  // call mount on component load only passing in current element
  useEffect(() => {
    mount(ref.current)
  })

  return <div ref={ref} />

}
