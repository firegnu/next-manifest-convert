// Backend
import formidable from 'formidable';
import { v4 as uuidv4 } from 'uuid';
const fs = require('fs-extra');
const os = require('os');

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
    if (part.filename === strictFileName) {
      // console.log(part);
      form.handlePart(part);
    } else {
      console.log(`${part.name} is not allowed`);
    }
  }
  form.parse(req, (err, fields, files) => {
    fs.readFile(files.file.path, (err, data) => {
      const user1 = {
        "id": 1,
        "name": "John Doe",
        "age": 22
      };
      const data1 = JSON.stringify(user1);

      const user2 = {
        "id": 2,
        "name": "jinxin",
        "age": 38
      };
      const data2 = JSON.stringify(user2);
      const uuid = uuidv4();
      fs.mkdirSync(`${os.tmpdir()}/${uuid}`);
      fs.outputFileSync(`${os.tmpdir()}/${uuid}/en-US.webmanifest`, data1);
      fs.outputFileSync(`${os.tmpdir()}/${uuid}/en-CH.webmanifest`, data2);
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ uuid: uuid, success: true }));
    });
  });
};
