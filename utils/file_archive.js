const fileHandle = require('./fs');
const file_system = require('fs');
const archiver = require('archiver');

const extract = require('extract-zip');


exports.fileArchive = function (filename) {



    try {
        var output = file_system.createWriteStream(`local_store/${filename}.zip`);
        var archive = archiver('zip');

        output.on('close', function () {
            console.log(archive.pointer() + ' total bytes');
            console.log('archiver has been finalized and the output file descriptor has closed.');
        });

        archive.on('error', function (err) {
            throw err;
        });

        archive.pipe(output);

        archive.file(`local_store/${filename}`, { name: filename });

        archive.finalize()
            .then(() => {
                fileHandle.remove_file(filename);
            });

        return true;

    }
    catch (err) {
        return false;
    }


}


exports.unfileArchive = function (filename) {


    try {
        extract(`local_store/${filename}`, { dir: process.cwd() + '/local_store' })
            .then(() => {
                fileHandle.remove_file(filename);

            });

        console.log('Extraction complete')
    } catch (err) {
        console.log(err);
    }
}

