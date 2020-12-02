import React from 'react'
import axios, { post } from 'axios';
import clsx from 'clsx';

import utilStyles from '../styles/utils.module.css';

const sections = {
  section1: {
    imageSrc: '/home-center/_presentation/kaios.png',
    imageSrcSet:
      '/home-center/_presentation/kaios.png?ratio=2 2x, img/home-center/_presentation/kaios.png?ratio=3 3x',
    title: 'KaiOS, enable tomorrow',
    description: (
      <>
        Reach millions of new users through the KaiStore, the home for apps on
        phones powered by KaiOS.
      </>
    )
  },
  section5: {
    imageSrc: '/home-center/_kaistore/kaistore.png',
    title: 'KaiStore',
    description: (
      <>
        KaiStore is a service channel to showcase your product and allow users
        to install an app on their phones.
      </>
    )
  }
};

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
        const root = document.getElementById('root');
        if(root.querySelector('a') !== null) {
          root.removeChild(root.querySelector('a'));
        }
        const a = document.createElement('a');
        a.setAttribute('id', 'manifest-download');
        a.setAttribute('href', `/api/download?uuid=${response.data.uuid}`);
        a.innerHTML = 'Download converted manifest';
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
      <>
        <style jsx global>{`
      body {
        margin: 0px;
      }
    `}</style>
      <section className={clsx(utilStyles.modularBanner, utilStyles.withBg, utilStyles.section1)}>
        <img
          src={sections.section1.imageSrc}
          srcSet={sections.section1.imageSrcSet}
          className={clsx(utilStyles.bannerImage, utilStyles.bannerImageRight)}
        />
        <div className={clsx(utilStyles.bannerText)}>
          <h1>{sections.section1.title}</h1>
          <p>{sections.section1.description} </p>
        </div>
      </section>
      <div id="root" className={utilStyles.root}>
        <form className={utilStyles.form} onSubmit={this.onFormSubmit}>
          <h1 className={utilStyles.title}>Manifest Convertor</h1>
          <div className={utilStyles.inputfileBox}>
            <input type="file" id="file" className={utilStyles.inputfile} onChange={this.onChange} />
              <label htmlFor="file">
                <span id="file-name" className={utilStyles.fileBox}/>
                <span className={utilStyles.fileButton}>
                 Select File
               </span>
              </label>
          </div>
          <button className={utilStyles.buttonConvert} type="submit">Upload</button>
        </form>
      </div>
        <section className={clsx(utilStyles.modularBanner, utilStyles.withBg, utilStyles.section5)}>
          <img
            src={sections.section5.imageSrc}
            srcSet={sections.section5.imageSrcSet}
            className={clsx(utilStyles.bannerImage, utilStyles.bannerImageRight)}
          />
          <div className={clsx(utilStyles.bannerText)}>
            <h1>{sections.section5.title}</h1>
            <p>{sections.section5.description} </p>
          </div>
        </section>
        </>
    )
  }
}

export default SimpleReactFileUpload
