const fs = require('fs')

function fileReader(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(data)
    })
}

fileReader('file.txt');