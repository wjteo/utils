function creatLargeObject(){
  const obj = {}
  for(let i=1;i<=1675;i++){
    const fieldname = 'field' + i
    obj[fieldname] = createLongStr()
  }
  return obj
}

function createLongStr(){
  const longStr = '0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789'.repeat(100)
  return longStr
}

function appendStr(original,append){
  original = original+append
}

//-------------------------------------


const data = []

data.push({"field1": "hello world"})
data.push({"field1": "hellow world again"})
data.push(creatLargeObject())
data.push({"field1": "hello world yet again"})
data.push({"field1": "hello world yet again another time"})

const fs = require('fs')
fs.writeFileSync('./dummy.json', JSON.stringify(data))