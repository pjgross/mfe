import { mount } from 'auth/AuthApp'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default ({ onSignIn }) => {
  // get reference to current element
  const ref = useRef(null)
  // get the history object for the container
  const history = useHistory()

  // call mount on component load only passing in current element
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({pathname: nextPathname}) => {
        const { pathname } = history.location
        // check the paths to see whether they need to change, if not we will get an infinite loop
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
      onSignIn: () => {
        onSignIn()
      }
    })

    history.listen(onParentNavigate)
  }, [] )

  return <div ref={ref} />

}