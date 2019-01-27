const fs = require('fs')

let readFileSync = () => {
    //read file sync , return type buffer
    let fileData = fs.readFileSync('file.txt')
    console.log('this is file buffer')
    console.log(fileData)
    
    let encodedFile = fs.readFileSync('file.txt','utf8')
    console.log('this is encoded file')
    console.log(encodedFile)
}

let readFileAsync = () => {
    console.log('file reading started')
   // let fileData = fs.readFile('file.txt')
   // console.log('file reading completed')
   // console.log(fileData)

    fs.readFile('file.txt','utf8', (err, fileData) => {
        if(err){
            console.log('some error occured while reading the file')
            console.log(err)
        } else {
            console.log('success')
            console.log(fileData)
        }
    })
}

let readDirSync = () => {
    //returns array
    let dirData = fs.readdirSync('newdir')
    console.log(dirData)
}

let readDirAsync = () => {
    //return array of file list
    fs.readdir('newdir',(err,file) => {
        if(err){
            console.log(err)
        }else {
            console.log(file)
        }
    })
}

module.exports = {
    readDirAsync: readDirAsync,
    readDirSync: readDirSync,
    readFileSync: readFileSync,
    readFileAsync: readFileAsync
}