import React from 'react'

function Header() {
  return (
    <header className="fixed bg-purple-800 shadow-md z-50 w-full px-5 py-2 flex justify-between items-center">
      <img className="h-24 w-24" src="/logo.svg" alt="convert usage" />
    </header>
  )
}

export default Header;
