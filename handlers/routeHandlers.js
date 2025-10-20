import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sendResponse } from "../utils/sendResponse.js";
import {addNewSighting} from "../utils/addNewSighting.js"

//Handle get
export async function handleGet(response){
    const data=await getData()
    const JSONdata=JSON.stringify(data)
    sendResponse(response,200,'application/json',JSONdata)
}

//Handle post

export async function handlePost(request,response){
    try{
    const parsedBody=await parseJSONBody(request)
    await addNewSighting(parsedBody)
    sendResponse(response,201,'application/json',JSON.stringify(parsedBody))
    }
    catch(err){
        sendResponse(response,400,'application/json',JSON.stringify({error : err}))
    }

}