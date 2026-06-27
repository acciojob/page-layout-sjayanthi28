import React from "react";
//import React from 'react'

 function PageLayout({header, footer, children}) {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  )
}
export default PageLayout