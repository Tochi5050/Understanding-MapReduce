const MapReduce = require('./map_reduce')

function reduce(key, value){
    const valueCount = value.length

    return MapReduce.reduceResult(key, valueCount)
}

const output = MapReduce.getReduceInputs()

for(const input of output){
    console.log(input[0], input[1])
    reduce(input[0], input[1])
}