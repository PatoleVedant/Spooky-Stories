import path from "node:path";
import fs from "node:fs/promises";
import { sendResponse } from "./sendResponse.js";
import { getContentType } from "./getContentType.js";
export async function serveStatic(baseDir, response, request) {
  const publicDir = path.join(baseDir, "public");
  const filePath = path.join(
    publicDir,
    request.url === "/" ? "index.html" : request.url
  );
  const ext=path.extname(filePath)
  const contentType=getContentType(ext)
  try {
    const content = await fs.readFile(filePath);
    sendResponse(response, 200, contentType, content);
  } catch (err) {
    if(err.code=='ENOENT'){
        const errFilePath=path.join(publicDir,'404.html')
        const errContent=await fs.readFile(errFilePath)
        sendResponse(response,404,'text/html',errContent)
    }
    else{
        const serverError=`<html><h1>SERVER ERROR: ${err.code}</h1></html>`
        sendResponse(response,500,'text/html',serverError)
}
  }
}
