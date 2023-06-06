const fs = require("fs")
const path = require("path")
const md5File = require('md5-file')

const getAllFiles = function(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

const getHash = function(path){
  return md5File.sync(path)
}

const main=()=>{
  const refHash = getHash('./ref/index.html')
  console.log(`hash of reference file: ${refHash}`)

  const filesToCheck = getAllFiles('./check').filter((file) => {
    return file.endsWith('html')
  })
  console.log(`${filesToCheck.length} file found`)

  console.log('Files with different hash:')
  filesToCheck.forEach((file)=>{
    const fileHash = getHash(file);
    if(fileHash!=refHash){
      console.log(file) 
    }else{
      fs.unlinkSync(file)
    }
  })
}

main();
