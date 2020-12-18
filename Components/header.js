import React from 'react'

function Header() {
  return (
    <header className="bg-purple-800 shadow-md z-50 w-full px-5 flex items-center">
      <img className="h-24 w-24" src="/logo.svg" alt="convert usage" />
      <p
        className="text-lg font-bold leading-relaxed inline-block ml-7 mr-4 py-2 whitespace-no-wrap uppercase text-white"
      >
        Next Manifest Convertor
      </p>
    </header>
  )
}

export default Header;
