import http from 'node:http'
import { serveStatic } from './utils/serveStatics.js'
import { getData } from './utils/getData.js'
import { handleGet } from './handlers/routeHandlers.js'
import { handlePost } from './handlers/routeHandlers.js'
const PORT = 8000
const __dirname=import.meta.dirname


const server=http.createServer(async (request,response) =>{

   if(request.url==='/api'){
      if(request.method==='GET'){
         return await handleGet(response)
      }
      else if(request.method==='POST'){
         return await handlePost(request,response)
      }
   }
   
   else if (request.url.startsWith('/api')!='/api'){
   return await serveStatic(__dirname,response,request) 
   }
})

server.listen(PORT,() => console.log("Server Running on PORT 8000 ")) 