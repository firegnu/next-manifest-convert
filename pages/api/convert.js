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

const strictFileName = 'manifest.webapp';

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
      const newManifest = JSON.stringify(convert(JSON.parse(data)), undefined, 2);
      const uuid = uuidv4();
      fs.mkdirSync(`${os.tmpdir()}/${uuid}`);
      fs.outputFileSync(`${os.tmpdir()}/${uuid}/next.webmanifest`, newManifest);
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ uuid: uuid, success: true }));
    });
  });
};
