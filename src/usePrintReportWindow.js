import { createContext, useContext } from 'react'

export const PrintReportWindowContext = createContext(null)

const usePrintReportWindow = () => {
  return useContext(PrintReportWindowContext)
}

export default usePrintReportWindow
