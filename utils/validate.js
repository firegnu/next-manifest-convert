/*
 Required fields:
   name or short_name: string
   description: string
   lang: string
   theme_color: string
   orientation: string
   start_url: string
   icons: Array of Object
 */

/*
 Optional:
   dir: string
   scope: string
   display: string
   background_color: string
   related_applications: Array of Object
   prefer_related_applications: boolean
   categories: Array of strings
   screenshots: Array of Object
   shortcuts: Array of Object
 */

// validate required fields
const validateName = (manifest, requiredErrors) => {
  if ('name' in manifest) {
    if(typeof(manifest['name']) !== 'string') {
      requiredErrors.name = 'manifest name field type should be string';
    }
  } else {
    requiredErrors.name = 'manifest name field is required';
  }
}

const validateDescription = (manifest, requiredErrors) => {
  if ('description' in manifest) {
    if(typeof(manifest['description']) !== 'string') {
      requiredErrors.description = 'manifest description field type should be string';
    }
  } else {
    requiredErrors.description = 'manifest description field is required';
  }
}

const validateLang = (manifest, requiredErrors) => {
  if('lang' in manifest) {
    const manifestLang = manifest['lang'];
    if(typeof(manifestLang) !== 'string') {
      requiredErrors.lang = 'manifest lang field type should be string!';
    } else {
      if(!/^\w*(-\w*)*$/.test(manifestLang)) {
        requiredErrors.lang = 'manifest lang field type should be correct format!';
      }
    }
  } else {
    requiredErrors.lang = 'manifest lang field is required!'
  }
}

const validateThemeColor = (manifest, requiredErrors) => {
  if ('theme_color' in manifest) {
    if(typeof(manifest['theme_color']) !== 'string') {
      requiredErrors.theme_color = 'manifest theme_color field type should be string';
    }
  } else {
    requiredErrors.theme_color = 'manifest theme_color field is required';
  }
}

const validateOritation = (manifest, requiredErrors) => {
  const ENUM_ORIENTATION = [
    'any',
    'natural',
    'landscape',
    'landscape-primary',
    'landscape-secondary',
    'portrait',
    'portrait-primary',
    'portrait-secondary'
  ];
  if ('orientation' in manifest) {
    if(typeof(manifest['orientation']) !== 'string') {
      requiredErrors.orientation = 'manifest orientation field type should be string';
    } else {
      const orientation = manifest['orientation'];
      if(!ENUM_ORIENTATION.includes(orientation)) {
        requiredErrors.orientation = 'manifest orientation field value not correct';
      }
    }
  } else {
    requiredErrors.orientation = 'manifest orientation field is required';
  }
}

const validateStartUrl = (manifest, requiredErrors) => {
  if ('start_url' in manifest) {
    if(typeof(manifest['start_url']) !== 'string') {
      requiredErrors.start_url = 'manifest start_url field type should be string';
    }
  } else {
    requiredErrors.start_url = 'manifest start_url field is required';
  }
}

const validateIconObj = (iconObj) => {
  let error = {};
  // icons src validate
  if ('src' in iconObj) {
    if(typeof(iconObj['src']) !== 'string') {
      error.src = 'manifest icons field icon type should be string';
    }
  } else {
    error.src = 'manifest icons field icon is required';
  }
  // icons size validate
  if('sizes' in iconObj) {
    const sizes = iconObj['sizes'];
    if(typeof(sizes) !== 'string') {
      error.sizes = 'manifest icons field size type should be string';
    } else {
      if(!/^\s*\d+x\d+(\s+\d+x\d+)*\s*$/.test(sizes)) {
        error.sizes = 'manifest icons field sizes should be correct format!';
      }
    }
  } else {
    error.sizes = 'manifest icons field size is required!'
  }
  return error;
}

const validateIcons = (manifest, requiredErrors) => {
  if('icons' in manifest) {
    const icons = manifest['icons'];
    if(!Array.isArray(icons)) {
      requiredErrors.icons = 'manifest icons field should be Array';
    } else {
      let iconErrors = [];
      icons.forEach((icon) => {
        const error = validateIconObj(icon);
        iconErrors.push(error);
      })
      requiredErrors.icons = iconErrors;
    }
  } else {
    requiredErrors.icons = 'manifest icons field is required';
  }
}

const validateRequiredFields = (manifest, errors) => {
  let requiredErrors = {};
  validateName(manifest, requiredErrors);
  validateDescription(manifest, requiredErrors);
  validateLang(manifest, requiredErrors);
  validateThemeColor(manifest, requiredErrors);
  validateOritation(manifest, requiredErrors);
  validateStartUrl(manifest, requiredErrors);
  validateIcons(manifest, requiredErrors);
  return requiredErrors;
}

// validate option fields

const validateDir = (manifest, optionsErrors) => {
  const ENUM_DIR = [
    'rtl',
    'ltr',
    'auto'
  ];
  if ('dir' in manifest) {
    if(typeof(manifest['dir']) !== 'string') {
      optionsErrors.dir = 'manifest dir field type should be string';
    } else {
      const dir = manifest['dir'];
      if(!ENUM_DIR.includes(dir)) {
        optionsErrors.dir = 'manifest dir field value not correct';
      }
    }
  } else {
    optionsErrors.dir = 'manifest dir field is null';
  }
}

const validateScope = (manifest, optionsErrors) => {
  if ('scope' in manifest) {
    if(typeof(manifest['scope']) !== 'string') {
      optionsErrors.scope = 'manifest scope field type should be string';
    }
  } else {
    optionsErrors.scope = 'manifest scope field is null';
  }
}

const validateDisplay = (manifest, optionsErrors) => {
  const ENUM_DISPLAY = [
    'fullscreen',
    'standalone',
    'minimal-ui',
    'browser'
  ];
  if ('display' in manifest) {
    if(typeof(manifest['display']) !== 'string') {
      optionsErrors.display = 'manifest display field type should be string';
    } else {
      const display = manifest['display'];
      if(!ENUM_DISPLAY.includes(display)) {
        optionsErrors.display = 'manifest display field value not correct';
      }
    }
  } else {
    optionsErrors.display = 'manifest display field is null';
  }
}

const validateBackgroundColor = (manifest, optionsErrors) => {
  if ('background_color' in manifest) {
    if(typeof(manifest['background_color']) !== 'string') {
      optionsErrors.background_color = 'manifest background_color field type should be string';
    }
  } else {
    optionsErrors.background_color = 'manifest background_color field is null';
  }
}

const validateRelatedApplications = (manifest, optionsErrors) => {
  // todo: related_applications fields
}

const validatePreferRelatedApplications = (manifest, optionsErrors) => {
  // todo: prefer_related_applications fields
}

const validateCategories = (manifest, optionsErrors) => {
  if('categories' in manifest) {
    const categories = manifest['categories'];
    if(!Array.isArray(categories)) {
      optionsErrors.categories = 'manifest categories field should be Array';
    } else {
      let categoriesErrors = [];
      categories.forEach((category) => {
        if(typeof(category) !== 'string') {
          categoriesErrors.push({
            category: 'manifest categories field category should be String'
          });
        }
      })
      if(categoriesErrors.length > 0) {
        optionsErrors.categories = categoriesErrors;
      }
    }
  } else {
    optionsErrors.categories = 'manifest categories field is null';
  }
}

const validateScreenshots = (manifest, optionsErrors) => {
  // todo: screenShots fields
}

const validateShortcuts = (manifest, optionsErrors) => {
  // todo: shortCuts fields
}

const validateOptionFields = (manifest) => {
  let optionsErrors = {};
  validateDir(manifest, optionsErrors);
  validateScope(manifest, optionsErrors);
  validateDisplay(manifest, optionsErrors);
  validateBackgroundColor(manifest, optionsErrors);
  validateRelatedApplications(manifest, optionsErrors);
  validatePreferRelatedApplications(manifest, optionsErrors);
  validateCategories(manifest, optionsErrors);
  validateScreenshots(manifest, optionsErrors);
  validateShortcuts(manifest, optionsErrors);
  return optionsErrors;
}

export default function validate(oldManifest) {
  return {
    'requiredFields': validateRequiredFields(oldManifest),
    'optionFields': validateOptionFields(oldManifest)
  }
}
