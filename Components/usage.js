import React from 'react'

function Usage() {
  return (
    <div className="p-6 max-w-xl mx-auto bg-green-200 rounded-xl shadow-md flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img className="h-24 w-24" src="/logo_2.svg" alt="convert usage"/>
      </div>
      <div>
        <div className="text-xl font-medium text-black">USAGE</div>
        <p className="text-gray-900 text-left">1: Select your KaiOS 2.5 manifest from your folder.</p>
        <p className="text-gray-900 text-left">2: Click "Upload" to upload your KaiOS 2.5 manifest.</p>
        <p className="text-gray-900 text-left">3: Click "Download converted manifest" to download your manifest in KaiOS 3.0
          manifest format.</p>
        <p className="text-gray-900 text-left">4: Unzip converted 3.0 manifest zip file.</p>
        <p className="text-gray-900 text-left">5: Replace 2.5 manifest from your folder with all 3.0 manifest(s).</p>
      </div>
    </div>
  )
}

export default Usage;
