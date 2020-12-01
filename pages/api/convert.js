// Backend
import formidable from 'formidable';
const fs = require('fs');

export const config = {
  api: {
    bodyParser: false,
  },
};

const strictFileName = 'manifest.webapp';

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./";
  form.keepExtensions = true;
  form.onPart = (part) => {
    if (part.filename === strictFileName) {
      // console.log(part);
      form.handlePart(part);
    } else {
      console.log(`${part.name} is not allowed`);
    }
  }
  form.parse(req, (err, fields, files) => {
    console.log('ccccc');
    console.log(files.file.path);
    fs.readFile(files.file.path, (err, data) => {
      console.log(JSON.parse(data));
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ success: true }));
    });
  });
};
