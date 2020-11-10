import {
  validateString,
  validateFieldWithEnum,
  validateIconObj,
  validateStringWithRegex,
  validateFieldWithArrayString
} from './utils';

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
  validateString('name', manifest, requiredErrors);
}

const validateDescription = (manifest, requiredErrors) => {
  validateString('description', manifest, requiredErrors);
}

const validateLang = (manifest, requiredErrors) => {
  validateStringWithRegex('lang', manifest, requiredErrors);
}

const validateThemeColor = (manifest, requiredErrors) => {
  validateString('theme_color', manifest, requiredErrors);
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
  validateFieldWithEnum('orientation', manifest, requiredErrors, ENUM_ORIENTATION);
}

const validateStartUrl = (manifest, requiredErrors) => {
  validateString('start_url', manifest, requiredErrors);
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
        if(Object.keys(error).length > 0) {
          iconErrors.push(error);
        }
      })
      if(iconErrors.length > 0) {
        requiredErrors.icons = iconErrors;
      }
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
  validateFieldWithEnum('dir', manifest, optionsErrors, ENUM_DIR);
}

const validateScope = (manifest, optionsErrors) => {
  validateString('scope', manifest, optionsErrors);
}

const validateDisplay = (manifest, optionsErrors) => {
  const ENUM_DISPLAY = [
    'fullscreen',
    'standalone',
    'minimal-ui',
    'browser'
  ];
  validateFieldWithEnum('display', manifest, optionsErrors, ENUM_DISPLAY);
}

const validateBackgroundColor = (manifest, optionsErrors) => {
  validateString('background_color', manifest, optionsErrors);
}

const validateRelatedApplications = (manifest, optionsErrors) => {
  // todo: related_applications fields
}

const validatePreferRelatedApplications = (manifest, optionsErrors) => {
  // todo: prefer_related_applications fields
}

const validateCategories = (manifest, optionsErrors) => {
  validateFieldWithArrayString('categories', manifest, optionsErrors);
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
  const requiredFieldsError = validateRequiredFields(oldManifest);
  const optionFieldsError = validateOptionFields(oldManifest);
  return {
    'RequiredFields': Object.keys(requiredFieldsError).length > 0 ? requiredFieldsError : 'Required fields have no error!!!',
    'OptionalFields': Object.keys(optionFieldsError).length > 0 ? optionFieldsError : 'Optional fields have no error!!!',
  }
}
