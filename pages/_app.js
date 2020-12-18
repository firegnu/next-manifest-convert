import React from 'react'
import axios, {post} from 'axios';

import Header from '../Components/header';
import Footer from '../Components/footer';
import Title from '../Components/title';
import Usage from '../Components/usage';

import '../styles/globals.css';

class SimpleReactFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    }
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.strictFileName = 'manifest.webapp';
  }

  onChange(e) {
    this.setState({file: e.target.files[0]});
    document.getElementById("file-name").innerHTML = e.target.files[0].name;
    const file = e.target.files[0];
    if (file.name !== this.strictFileName) {
      alert('Wrong fileName! Must be manifest.webapp!');
      document.getElementById('file').value = '';
      document.getElementById("file-name").innerHTML = 'Select a file';
    } else {
      document.getElementById("file-name").innerHTML = 'Converting...';
      this.fileUpload(file).then(async (response) => {
        const root = document.getElementById('root');
        if (root.querySelector('a') !== null) {
          root.removeChild(root.querySelector('a'));
        }
        const a = document.createElement('a');
        a.setAttribute('id', 'manifest-download');
        a.setAttribute('class', 'hidden');
        a.setAttribute('href', `/api/download?uuid=${response.data.uuid}`);
        a.innerHTML = 'Downloaded Converted Manifest';
        root.appendChild(a);
        a.click();
        document.getElementById('file').value = '';
        document.getElementById("file-name").innerHTML = 'Select a file';
      })
    }
  }

  fileUpload(file) {
    const url = '/api/convert';
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData, config);
  }

  render() {
    return (
      <div>
        <Header/>
        <div id="root" className="flex">
          <form className="text-center m-auto">
            <div className="flex w-full items-center justify-center bg-grey-lighter mt-8 mb-8">
              <label
                className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
                <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>
                </svg>
                <span id="file-name" className="mt-2 text-base leading-normal">Select a file</span>
                <input type='file' id="file" className="hidden" onChange={this.onChange}/>
              </label>
            </div>
            <Usage/>
          </form>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default SimpleReactFileUpload

