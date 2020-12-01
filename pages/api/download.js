// Backend
const AdmZip = require('adm-zip');
const os = require('os');
const fs = require('fs');
const path = require('path');

function walk(directory, filepaths = []) {
  const files = fs.readdirSync(directory);
  for (let filename of files) {
    const filepath = path.join(directory, filename);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, filepaths);
    } else if (path.extname(filename) === '.webmanifest') {
      filepaths.push(filepath);
    }
  }
  return filepaths;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const zip = new AdmZip();
  const allFiles = walk(`${os.tmpdir()}/${req.query.uuid}`);
  allFiles.forEach(manifestFile => {
    zip.addLocalFile(manifestFile);
  });
  const downloadName = `manifest-convert-30.zip`;
  const data = zip.toBuffer();
  res.setHeader('Content-Type','application/zip');
  res.setHeader('Content-Disposition',`attachment; filename=${downloadName}`);
  res.setHeader('Content-Length',data.length);
  res.end(data);
};

