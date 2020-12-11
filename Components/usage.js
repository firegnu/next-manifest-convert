import React from 'react'

function Usage() {
  return (
    <div className="p-6 max-w-xl mx-auto bg-green-200 rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-24 w-24" src="/logo_2.svg" alt="convert usage"/>
      </div>
      <div>
        <div className="text-xl font-medium text-black">USAGE</div>
        <p className="text-gray-900">1: Select your KaiOS 2.5 manifest from your file</p>
        <p className="text-gray-900">2: Click "Upload" to upload your KaiOS 2.5 manifest</p>
        <p className="text-gray-900">3: Click "Download converted manifest" to download your manifest in KaiOS 3.0
          manifest format</p>
      </div>
    </div>
  )
}

export default Usage;
