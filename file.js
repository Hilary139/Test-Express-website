// intro to file system or (fs)

const fs = require('fs');

// read files in node
fs.readFile('./Docs/example.docx', (err, data ) => {
    if (err) { // checking for error
        console.log(err);
    }
    console.log(data.toString());
});



// writing a file
fs.writeFile('./Docs/example.docx', 'Written by Hilary',  () => {
    console.log('file was writing')
});

// creating a file that dosent exist
fs.writeFile('./Docs/newFile.txt', 'I created it recently ', () => {
    console.log('file was created and written successfully')
});

// directory creation
if (fs.existsSync('./assets')){ // this checks if the directory is available
// this code runs if the above statement is false
fs.mkdir('./assets',(err) => {
    if(err) {
        console.log('error');
    };
    console.log('file was created successfully')
});
 } else(fs.rmdir('./assets', (err) => {
     if(err) {
         console.log('folder deleted');
     }
}));



// deleting files
if (fs.existsSync){
    fs.unlink('./Dos/newFile.txt', (err) => {

        if(err) {
            console.log('error detected wile deleting file')
        }
        console.log('folder deleted');

    });
}; 