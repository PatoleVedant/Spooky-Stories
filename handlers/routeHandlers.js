import { getData } from "../utils/getData.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { sendResponse } from "../utils/sendResponse.js";
import {addNewSighting} from "../utils/addNewSighting.js"
import { sanitizeInput } from "../utils/sanitizeInput.js";

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
    const sanitizedData=await sanitizeInput(parsedBody)
    await addNewSighting(sanitizedData)
    sendResponse(response,201,'application/json',JSON.stringify(sanitizedData))
    }
    catch(err){
        sendResponse(response,400,'application/json',JSON.stringify({error : err}))
    }

}