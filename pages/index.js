import utilStyles from '../styles/utils.module.css';

const modifyFields = (oldManifest) => {
  if (/^[\],:{}\s]*$/.test(oldManifest.value.replace(/\\["\\\/bfnrtu]/g, '@').
  replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
  replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
    const oriManifest = JSON.parse(oldManifest.value);
    let newManifest = {};
    // the same keys and values
    const pwaFields = [
      'name',
      'short_name',
      'description',
      'theme_color',
      'background_color',
      'orientation',
    ];

    pwaFields.forEach((key) => {
      if (key in oriManifest) {
        newManifest[key] = oriManifest[key];
        delete oriManifest[key];
      }
    });

    // get default_loacle
    let defaultLocale = '';

    // default_locale -> lang
    if ('default_locale' in oriManifest) {
      defaultLocale = oriManifest['default_locale'];
      newManifest['lang'] = oriManifest['default_locale'];
      delete oriManifest['default_locale'];
    } else {
      defaultLocale = 'en-US';
      newManifest['lang'] = 'en-US';
    }

    // transfer name and description fields of default locale and remove locales
    if ('locales' in oriManifest) {
      newManifest['name'] = oriManifest['locales'][defaultLocale].name;
      newManifest['description'] =
        oriManifest['locales'][defaultLocale].description;
      delete oriManifest['locales'];
    }

    // launch_path -> start_url
    if ('launch_path' in oriManifest) {
      newManifest['start_url'] = oriManifest['launch_path'];
      delete oriManifest['launch_path'];
    }
    // icons
    if ('icons' in oriManifest) {
      const iconsObj = oriManifest['icons'];
      let iconsResult = [];

      Object.keys(iconsObj).reduce((pre, item) => {
        const extname = iconsObj[item].split('.').pop();
        const newFormat = {
          src: iconsObj[item],
          type: `image/${extname}`,
          sizes: `${item}x${item}`,
        };
        pre.push(newFormat);
        return pre;
      }, iconsResult);
      newManifest['icons'] = iconsResult;
      delete oriManifest['icons'];
    }
    if(Object.keys(oriManifest).length > 0) {
      newManifest['b2g_features'] = oriManifest;
      // add core property and version to manifest b2g_features item
      if('type' in oriManifest) {
        const appType = oriManifest['type'];
        if(appType === 'certified' || appType === 'priviliged') {
          newManifest['b2g_features']['core'] = true;
        }
      }
      if('version' in oriManifest) {
        newManifest['b2g_features']['version'] = oriManifest['version'];
      } else {
        newManifest['b2g_features']['version'] = '0.1';
      }
    }
    const pretty = JSON.stringify(newManifest, undefined, 2);
    document.getElementById('newmanifest').value = pretty;
  }else{
    document.getElementById('newmanifest').value = 'Your 2.5 Manifest format is incorrect! Please check and try again！';
  }
}

const handleClick = (e) =>  {
  modifyFields(document.getElementById('orimanifest'));
}

function Home() {
  return (
    <>
     <div>
       <h1 className={utilStyles.headerTitle}>Convert Manifest from KaiOS2.5.4 to KaiOS3.0</h1>
     </div>
     <div className={utilStyles.convertcontainer}>
      <div className={utilStyles.converttextarea}>
        <h3>2.5.4 Manifest</h3>
        <textarea className={utilStyles.convertcontent} id="orimanifest">
        </textarea>
      </div>
      <div className={utilStyles.button} onClick={handleClick}>
        Convert
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
