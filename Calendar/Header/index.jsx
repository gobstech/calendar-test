import React from 'react'
import { capitalizeFirstLetter } from '..'

const Header = ({nav, prevMonth, nextMonth}) => {
  return (
    <div className="header">
      <div className="monthDisplay">{capitalizeFirstLetter(nav.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' }))}</div>
      <div>
        <button id="backButton" onClick={prevMonth}>Anterior</button>
        <button id="nextButton" onClick={nextMonth}>Próximo</button>
      </div>
    </div>
  )
}

export default Header
