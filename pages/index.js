import convert from "../utils/convert";
import validate from "../utils/validate";

import utilStyles from '../styles/utils.module.css';

const validateJson = (oldManifest) => {
  if (/^[\],:{}\s]*$/.test(oldManifest.value.replace(/\\["\\\/bfnrtu]/g, '@').
  replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
  replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
    return true;
  } else {
    return false;
  }
}

const validateFields = (oldManifest) => {
  if (validateJson(oldManifest)) {
    const validateResults = validate(JSON.parse(oldManifest.value));
    const pretty = JSON.stringify(validateResults, undefined, 2);
    document.getElementById('newmanifest').value = pretty;
  } else {
    document.getElementById('newmanifest').value = 'Your 2.5 Manifest format is incorrect! Please check and try again！';
  }
}

const convertFields = (oldManifest) => {
  if (validateJson(oldManifest)) {
    const newManifest = convert(JSON.parse(oldManifest.value));
    const pretty = JSON.stringify(newManifest, undefined, 2);
    document.getElementById('newmanifest').value = pretty;
  }else{
    document.getElementById('newmanifest').value = 'Your 2.5 Manifest format is incorrect! Please check and try again！';
  }
}

const convertManifest = (e) =>  {
  convertFields(document.getElementById('orimanifest'));
}

const validateManifest = (e) => {
  validateFields(document.getElementById('orimanifest'));
}

const prettyManifest = (e) => {
  const oriManifest = document.getElementById('orimanifest');
  if (validateJson(oriManifest)) {
    const pretty = JSON.stringify(JSON.parse(oriManifest.value), undefined, 2);
    oriManifest.value = pretty;
  }else{
    document.getElementById('newmanifest').value = 'Your 2.5 Manifest format is incorrect! Please check and try again！';
  }
}

function Home() {
  return (
    <>
     <div>
       <h1 className={utilStyles.headerTitle}>Convert Manifest from KaiOS2.5.4 to KaiOS3.0</h1>
     </div>
     <div className={utilStyles.convertcontainer}>
      <div className={utilStyles.converttextarea}>
        <div className={utilStyles.prettyWrapper}>
          <h3>2.5.4 Manifest</h3>
          <div className={utilStyles.buttonPretty} onClick={prettyManifest}>
            Pretty
          </div>
        </div>
        <textarea className={utilStyles.convertcontent} id="orimanifest">
        </textarea>
      </div>
       <div className={utilStyles.buttonWrapper}>
          <div className={utilStyles.buttonConvert} onClick={convertManifest}>
            CONVERT
          </div>
           <div className={utilStyles.buttonValidate} onClick={validateManifest}>
             VALIDATE
           </div>
       </div>
      <div className={utilStyles.converttextarea}>
        <h3>3.0 Manifest</h3>
        <textarea className={utilStyles.convertcontent} id="newmanifest" readOnly>
        </textarea>
      </div>
    </div>
      </>
  )
}

export default Home;
