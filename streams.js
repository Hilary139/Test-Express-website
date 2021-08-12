const fs = require('fs');

const readstream = fs.createReadStream('./Docs/chunkFile.rtf');
const writestream = fs.createWriteStream('./Docs/chunkFile.rtf');

readstream.on('data', (chunk) => {
    console.log('--new chunks--')
    console.log(chunk.toLocaleString())
    //writeStream.write('\nNEW CHUNK\n') 
    //writeStream.write(chunk);
});


 // piping
// easier way of writing files
 // readstream.pipe(writeStream);