const source = process.argv[2]
const target = process.argv[3]

const obj = require(source)

function objectIterator(obj,fn){
  if(Array.isArray(obj)){
    obj = obj.map((val)=>{
      if(val instanceof Object){
        return objectIterator(val,fn)
      }
      return fn(val)
    })
  }
  Object.keys(obj).forEach((key)=>{
    if(obj[key] instanceof Object){
      objectIterator(obj[key],fn)
    }
    else{
      obj[key] = fn(obj[key])
    }
  })
  return obj
}

function maskValue(val){
  const strLen = `${val}`.length
  return 'X'.repeat(strLen)
}

objectIterator(obj,maskValue)

const fs = require('fs')
fs.writeFileSync(target, JSON.stringify(obj))