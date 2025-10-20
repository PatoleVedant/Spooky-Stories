import sanitizeHtml from "sanitize-html"

export async function sanitizeInput(data){
    const sanitizedData={}
        for(const [key,value] of Object.entries(data)){
            if(typeof value==='string'){
                sanitizedData[key]=await sanitizeHtml(value,{allowedTags:['b'],allowedAttributes: {}})
            }
            else{
                sanitizedData[key]=value
            }
        }
    
    return sanitizedData
}