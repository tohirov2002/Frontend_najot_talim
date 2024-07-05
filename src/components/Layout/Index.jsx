import React from 'react'
import LayoutHeader from './LayoutHeader'
import LayoutFooter from './LayoutFooter'

const Layout = (props) => {
  return (
    <div className="flex flex-col min-h-screen">
          <LayoutHeader/>
            <div className="flex-auto">
            {props.children}
            </div>
           <LayoutFooter/>
        </div>
  )
}

export default Layout