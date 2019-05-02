const fs = require('fs');

module.exports = {
    save: function (data) {
        fs.writeFile((`${__dirname}/../../data/projects.json`), JSON.stringify(data), (err) => {
            if (err) return console.error(err);
        });
    },
    read: function (file) {
         fs.readFile(file, (error, data)=> {
            if (error) return 'error read file'
            console.log('file:' + error);
            console.log(data);
        })
    }
}

