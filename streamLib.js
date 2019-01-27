const fs = require('fs')

let readFileStream = () => {
    let readStream = fs.createReadStream('bigTextFile.txt')

    readStream.on('data',(chunk) => {
        console.log(chunk)
    })

    readStream.on('end',() => {
        console.log('File read operation : successful')
    })
}

let writeFileStream = () => {
    let writeStream = fs.createWriteStream('fileStream.txt')
    writeStream.write('write stream\n')
    writeStream.write('Another line \n')
    writeStream.end()
    console.log('file write success')
}

let generateBigTextFile = () => {
    const writeStream = fs.createWriteStream('./bigTextFile.txt')
    console.log('wrting to file approx 900mb file will be generated')
    for( let i=0; i<=1e6; i++){
        writeStream.write('Lorem ipsum dolor sit amet')
    }
    writeStream.end()
    console.log('file complete write')
}

let copyFile = () => {
    let readStream = fs.createReadStream('bigTextFile.txt')
    let writeStream = fs.createWriteStream('copied.txt')
    readStream.on('data',(chunk) => {
        writeStream.write(chunk)
    })
    readStream.on('end',() => {
        console.log('file read complete')
        writeStream.end()
        console.log('file write complete')
    })
}

module.exports = {
    readFileStream: readFileStream,
    writeFileStream: writeFileStream,
    generateBigTextFile: generateBigTextFile,
    copyFile: copyFile
}