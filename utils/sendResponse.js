export function sendResponse(response,statusCode,contentType,content){
    response.writeHead(statusCode,{'Content-Type' : contentType})
    response.end(content)
}