const MapReduce = require('./map_reduce')

function map (text){
   const lines = text.split('\n')

   for (const line of lines){
    const latency = parseInt(line)

    if(latency < 10000){
        MapReduce.emitMapResult('under_10_seconds', 1)
    }else{
        MapReduce.emitMapResult('over_10_seconds', 1)
    }
   }
}


const mapInput = MapReduce.getMapInput('latencies.txt')

map(mapInput)

module.exports.map = map