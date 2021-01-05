// Backend
import formidable from 'formidable';
import { v4 as uuidv4 } from 'uuid';
const fs = require('fs-extra');
const os = require('os');

import convert from '../../utils/convert';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm({
    uploadDir: os.tmpdir(),
    keepExtensions: true
  });
  form.keepExtensions = true;
  form.onPart = (part) => {
    form.handlePart(part);
  }
  form.parse(req, (err, fields, files) => {
    fs.readFile(files.file.path, (err, data) => {
      const converted = convert(JSON.parse(data));
      // write default locale manifest
      const newManifest = JSON.stringify(converted.manifest, undefined, 2);
      const uuid = uuidv4();
      fs.mkdirSync(`${os.tmpdir()}/${uuid}`);
      fs.outputFileSync(`${os.tmpdir()}/${uuid}/manifest.webmanifest`, newManifest);
      // other locale manifest
      let localesManifest = converted.manifest;
      const locales = converted.locales;
      for(const [key, value] of Object.entries(locales)) {
        if(key === converted.manifest['lang']) {
          // default lang manifest already generated
          continue;
        }
        for(const [k, v] of Object.entries(value)) {
          if(k in localesManifest) {
            localesManifest[k] = v;
          }
        }
        localesManifest['lang'] = key;
        fs.outputFileSync(
          `${os.tmpdir()}/${uuid}/manifest.${key}.webmanifest`,
          JSON.stringify(localesManifest, undefined, 2)
        );
      }
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ uuid: uuid, success: true }));
    });
  });
};
