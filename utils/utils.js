export function validateJson(json) {
  if (/^[\],:{}\s]*$/.test(json.value.replace(/\\["\\\/bfnrtu]/g, '@').
  replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
  replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
    return true;
  } else {
    return false;
  }
}

export function validateString(field, manifest, errors) {
  if (field in manifest) {
    if(typeof(manifest[field]) !== 'string') {
      errors[field] = `manifest ${field} field type should be string`;
    }
  } else {
    errors[field] = `manifest ${field} field is required`;
  }
}

export function validateFieldWithEnum(field, manifest, errors, enumValus) {
  if (field in manifest) {
    if(typeof(manifest[field]) !== 'string') {
      errors[field] = `manifest ${field} field type should be string`;
    } else {
      if(!enumValus.includes(manifest[field])) {
        errors[field] = `manifest ${field} field value not correct`;
      }
    }
  } else {
    errors[field] = `manifest ${field} field is required`;
  }
}

export function validateIconObj(iconObj) {
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
    error.sizes = 'manifest icons field size is required!';
  }
  return error;
}

export function validateStringWithRegex(field, manifest, errors) {
  if(field in manifest) {
    const fieldValue = manifest[field];
    if(typeof(fieldValue) !== 'string') {
      errors[field] = 'manifest lang field type should be string!';
    } else {
      if(!/^\w*(-\w*)*$/.test(fieldValue)) {
        errors[field] = 'manifest lang field type should be correct format!';
      }
    }
  } else {
    errors[field] = 'manifest lang field is required!'
  }
}

export function validateFieldWithArrayString(field, manifest, errors) {
  if(field in manifest) {
    const fieldValues = manifest[field];
    if(!Array.isArray(fieldValues)) {
      errors[field] = 'manifest categories field should be Array';
    } else {
      let fieldErrors = [];
      fieldValues.forEach((value) => {
        if(typeof(value) !== 'string') {
          fieldErrors.push({
            field: `manifest ${field} field category should be String`
          });
        }
      })
      if(fieldErrors.length > 0) {
        errors[field] = fieldErrors;
      }
    }
  } else {
    errors.categories = 'manifest categories field is null';
  }
}
