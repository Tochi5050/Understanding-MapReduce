const fs = require('fs')

const dotenv = require('dotenv')

dotenv.config()

const HOST = process.env.HOST

function getMapInput(fileName){
  const path = `${HOST}/${fileName}`

  return fs.readFileSync(path, 'utf-8')
}

function emitMapResult(key, value) {
  const fileName = `${HOST}/map_results/${key}.txt`

  fs.appendFileSync(fileName, value + '\n')
}

function getReduceInputs(){
  const fileNames = fs.readdirSync(`map_results`, 'utf-8')
  const inputs = []
  for(const file of fileNames){
    const key = file.split('.')[0]
    const fileContents = fs.readFileSync(`map_results/${file}`, 'utf-8')

    inputs.push([key, fileContents.split('\n').filter(value => value !== '')])
  }
  
  return inputs
  
}


function reduceResult (key, value){
  fs.appendFileSync(`reduce_results/results.txt`, key + ':' + '' + value + '\n')
}




module.exports.getMapInput = getMapInput
module.exports.emitMapResult = emitMapResult
module.exports.getReduceInputs = getReduceInputs
module.exports.reduceResult = reduceResult