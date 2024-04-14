const fs = require('fs')

const dotenv = require('dotenv')

dotenv.config()


const hosts = process.env.HOST.split(',')


for(const host of hosts){
    const fileNames = fs.readdirSync(`${host}/map_results`, 'utf-8')

    for(const file of fileNames){
        const key = file.split('.')[0]
        const path = `map_results/${key}.txt`
        const fileName = fs.readFileSync(`${host}/map_results/${key}.txt`, 'utf-8')
        fs.appendFileSync(path, fileName)
    }
}