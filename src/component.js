import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'

const PrintReport = ({ children }) =>
  <Container>
    {children}
  </Container>

PrintReport.propTypes = {
  children: PropTypes.node
}

export default PrintReport
