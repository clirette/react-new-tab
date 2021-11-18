import React, { useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import PrintReport from './component'
import { PrintReportWindowContext } from './usePrintReportWindow'

const PrintReportContainer = ({ name, children }) => {
  const windowRef = useRef(null)
  const [container, setContainer] = useState(null)

  useEffect(() => {
    windowRef.current = window.open('', '', '')
    if (windowRef.current) {
      const element = windowRef.current.document.createElement('div')
      windowRef.current.document.title = name
      windowRef.current.document.body.appendChild(element)
      setContainer(element)

      const stylesheets = Array.from(document.styleSheets)
      stylesheets.forEach(stylesheet => {
        if (stylesheet.href) {
          const newStyleElement = document.createElement('link')
          newStyleElement.rel = 'stylesheet'
          newStyleElement.href = stylesheet.href
          windowRef.current.document.head.appendChild(newStyleElement)
        } else if (stylesheet && stylesheet.cssRules && stylesheet.cssRules.length > 0) {
          const newStyleElement = document.createElement('style')
          Array.from(stylesheet.cssRules).forEach(rule => {
            newStyleElement.appendChild(document.createTextNode(rule.cssText))
          })
          windowRef.current.document.head.appendChild(newStyleElement)
        }
      })
    }

    return () => windowRef.current?.close()
  }, [name])

  if (container == null) {
    return null
  }

  return ReactDOM.createPortal(
    <PrintReportWindowContext.Provider value={windowRef.current}>
      <PrintReport>
        {children}
      </PrintReport>
    </PrintReportWindowContext.Provider>,
    container)
}

PrintReportContainer.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node
}

export default PrintReportContainer
