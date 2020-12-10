import React from 'react'
import axios, { post } from 'axios';

import '../styles/globals.css';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

class SimpleReactFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.strictFileName = 'manifest.webapp';
  }
  onFormSubmit(e){
    e.preventDefault();
    const { file } = this.state;
    if(file.name !== this.strictFileName) {
      alert('Wrong fileName! Must be manifest.webapp!');
    } else {
      this.fileUpload(this.state.file).then(async (response)=>{
        const root = document.getElementById('convertButton');
        if(root.querySelector('a') !== null) {
          root.removeChild(root.querySelector('a'));
        }
        await sleep(1000);
        const a = document.createElement('a');
        a.setAttribute('id', 'manifest-download');
        a.setAttribute('class', 'px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2');
        a.setAttribute('href', `/api/download?uuid=${response.data.uuid}`);
        a.innerHTML = 'Downloaded Converted Manifest';
        root.appendChild(a);
      })
    }
  }
  onChange(e) {
    this.setState({file:e.target.files[0]});
    document.getElementById("file-name").innerHTML = e.target.files[0].name;
  }
  fileUpload(file){
    const url = '/api/convert';
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData,config);
  }

  render() {
    return (
        <div id="root" className="flex h-screen">
          <form className="text-center m-auto" onSubmit={this.onFormSubmit}>
            <div className="group mb-6 border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
              <p className="text-6xl text-black font-extrabold">Manifest Convertor</p>
            </div>
            <div className="flex w-full items-center justify-center bg-grey-lighter mt-8">
              <label
                className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-500 hover:text-white">
                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>
                </svg>
                <span id="file-name" className="mt-2 text-base leading-normal">Select a file</span>
                <input type='file' id="file" className="hidden" onChange={this.onChange} />
              </label>
            </div>
            <div className="py-8" id="convertButton">
              <button className="px-4 py-1 mr-4 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" type="submit">
                Upload
              </button>
            </div>
            <div className="p-6 max-w-xl mx-auto bg-gray-100 rounded-xl shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img className="h-24 w-24" src="/logo.svg" alt="convert usage" />
              </div>
              <div>
                <div className="text-xl font-medium text-black">USAGE</div>
                <p className="text-gray-500">1: Select your KaiOS 2.5 manifest from your file</p>
                <p className="text-gray-500">2: Click "Upload" to upload your KaiOS 2.5 manifest</p>
                <p className="text-gray-500">3: Click "Download converted manifest" to download your manifest in KaiOS 3.0 manifest format</p>
              </div>
            </div>
          </form>
        </div>
    )
  }
}

export default SimpleReactFileUpload

