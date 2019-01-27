const Buffer = require('buffer').Buffer

//creating an empty buffer
let allocateBuffer = () => {
    const buffer = Buffer.alloc(10)
    console.log(buffer)
}

//creating a buffer from text
let fromAbufferFromText = () => {
    let text =`This is a text buffer
     This is a text bufferThis is a text buffervvv
      vThis is a text bufferThis is a text bufferThis
       is a text bufferThis is a text bufferThis is a text bu
       fferThis is a text bufferThis is a text bufferThis is a 
       text bufferThis is a text  This is a text buffer This is a text buffer`
    const textBuffer = Buffer.from(text)
    console.log('this is a buffer text')
    console.log(textBuffer)
    
}
//writing to buffers
let writingToBuffer = () => {
    const buffer = Buffer.alloc(10)
    console.log('this is empty buffer')
    console.log(buffer)

    buffer.write('Hello World')
    console.log('This is a raw buffer')
    console.log(buffer)

    //only 10 characters will be printed
    console.log('encode the buffer')
    console.log(buffer.toString())
}

let readingFromBuffer = () => {
    const buffer = Buffer.alloc(100)
    buffer.write('123456789123456789123456789123456789')
    //read from buffer

    //reading from buffer
    console.log(buffer.toString('ascii',0,15))

}

let compareBuffer = () => {
    const buffer = Buffer.from('This is a buffer')
    const brotherBuffer = Buffer.from('This is a buffer')
    const notBrotherBuffer = Buffer.from('this is different')
    console.log(buffer.compare(brotherBuffer)) //same returns 0
    console.log(buffer.compare(notBrotherBuffer))  //different returns 1
}

let copyBuffer = () => {
    const buffer = Buffer.from('thisisiabuffer')
    console.log(buffer)
    const buf = Buffer.alloc(20)
    console.log('copy buffer')
    buffer.copy(buf)
    console.log(buf)
}

module.exports = {
    allocateBuffer: allocateBuffer,
    fromAbufferFromText: fromAbufferFromText,
    writingToBuffer: writingToBuffer,
    compareBuffer: compareBuffer,
    readingFromBuffer: readingFromBuffer,
    copyBuffer: copyBuffer
}