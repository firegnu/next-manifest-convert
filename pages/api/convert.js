// Backend
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./uploads";
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    console.log(err, fields, files);
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ downloadLink: '11-11-22-333-444' }, null, 2));
  });
};
