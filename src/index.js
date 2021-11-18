import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import PrintReport from './PrintReport'

const NewTabReport = () =>
  <PrintReport name='testing123'>
    <div className='body'>
      <div className='header'>
        <div className='header__company'>130 - (DEMO) ABC COMPANY</div>
        <div className='header__title'>
          <div className='header__title--name'>Technician Details</div>
          <div className='header__title--payperiod'>Pay Period: 04/01/2021 - 04/14/2021</div>
        </div>
      </div>
      <div className='employee'>
        <div className='employee__info'>
          <div className='employee__info--name'>ADAMS, JOHN</div>
          <div className='employee__info--code'>(JADAMS85)</div>
        </div>
        <div className='employee__check'>Check# 1502</div>
      </div>
    </div>
  </PrintReport>

ReactDOM.render(<NewTabReport />, document.getElementById('root'))