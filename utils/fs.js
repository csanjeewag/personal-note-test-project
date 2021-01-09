var fs = require("fs");
const randomstring = require("randomstring");


exports.fileSave = function (text) {


  const encriptcode = randomstring.generate(10);
  const filename = encriptcode + '.txt';

  fs.writeFile(`${process.cwd()}/local_store/${filename}`, text, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });

  return filename;

}

exports.updateSave = function (text, filename) {

  console.log(filename);

  fs.writeFile(`${process.cwd()}/local_store/${filename}`, text, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });

  return filename;

}


exports.remove_file = function (filename) {


  try {
    fs.unlinkSync('local_store/' + filename);
    return true
  }
  catch (err) {
    console.log(err);
    return false
  }
}


exports.readfile = function (file) {

  try {
    var data = fs.readFileSync(`${process.cwd()}/local_store/${file}`, 'utf8');
    return data;
  } catch (e) {
    console.log('Error:', e.stack);
  }

}

