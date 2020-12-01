// Backend
const AdmZip = require('adm-zip');

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const zip = new AdmZip();
  zip.addLocalFile('./env-config.js');
  zip.addLocalFile('./yarn.lock');
  const downloadName = `manifest-convert-30.zip`;
  const data = zip.toBuffer();
  res.setHeader('Content-Type','application/zip');
  res.setHeader('Content-Disposition',`attachment; filename=${downloadName}`);
  res.setHeader('Content-Length',data.length);
  res.end(data);
};

