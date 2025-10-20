import { getData } from "./getData.js";
import fs from 'node:fs/promises'
import path from 'node:path'
export async function addNewSighting(newSighting){
    try{
        let data=await getData()
        data.push(newSighting)
        const filepath=path.join('data','data.json')
        await fs.writeFile(filepath,JSON.stringify(data,null,2),'utf8')
    }
    catch(err){
        throw new Error(err)
    }
}

    