import React from 'react'

function Header() {
  return (
    <div className="header">
      <h2 className="header__where">Where in the world?</h2>
      <div className="header__dark-mode-wrapper">
        <i class="fas fa-moon header__dark-mode-text-moon"></i>
        <h2 className="header__dark-mode-text">Dark Mode</h2>
      </div>
    </div>
  )
}

export default Header
