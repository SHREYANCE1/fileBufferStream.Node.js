const fs = require('fs')

let writeFileSync = () => {
    //write file sync , return type buffer
    let fileText = "hello this is file handling"
    fs.writeFileSync('file.txt',fileText)
   
}

let writeFileAsync = () => {
    console.log('file writeing started')
   // let fileData = fs.writeFile('file.txt')
   // console.log('file writeing completed')
   // console.log(fileData)
   let fileText = "hello this is file handling"
    fs.writeFile('write.txt',fileText, (err, fileData) => {
        if(err){
            console.log('some error occured while writeing the file')
            console.log(err)
        } else {
            console.log('success')
            
        }
    })
}

module.exports = {
    writeFileSync: writeFileSync,
    writeFileAsync: writeFileAsync
}