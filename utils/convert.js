export default function convertManifest(oriManifest)  {
  let newManifest = {};
  let newManifestLocales = {};
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
    if(defaultLocale in oriManifest['locales']) {
      newManifest['name'] = oriManifest['locales'][defaultLocale].name;
      newManifest['description'] =
        oriManifest['locales'][defaultLocale].description;
    } else {
      newManifest['name'] = oriManifest['name'];
      newManifest['description'] = oriManifest['description'];
    }
    newManifestLocales = oriManifest['locales'];
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
  return {
    manifest: newManifest,
    locales: newManifestLocales
  };
}
