import React from 'react'
import axios, { post } from 'axios';

import utilStyles from '../styles/utils.module.css';

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
      this.fileUpload(this.state.file).then((response)=>{
        console.log(response.data.downloadLink);
        const root = document.getElementById('root');
        if(root.querySelector('a') !== null) {
          root.removeChild(root.querySelector('a'));
        }
        const a = document.createElement('a');
        a.setAttribute('id', 'manifest-download');
        a.setAttribute('href', '/api/download');
        a.innerHTML = 'Download convert link';
        root.appendChild(a);
      })
    }
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
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
      <div id="root">
        <form onSubmit={this.onFormSubmit}>
          <h1>Upload your 2.5 manifest</h1>
          <input type="file" onChange={this.onChange} />
          <button type="submit">Upload</button>
        </form>
      </div>
    )
  }
}



export default SimpleReactFileUpload
