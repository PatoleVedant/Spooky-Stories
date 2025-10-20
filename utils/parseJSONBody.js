export async function parseJSONBody(request){
    let body=''
    for await(const chunk of request){
        body +=chunk
    }
    try{
    const parsedBody=JSON.parse(body)
    return parsedBody
    }
    catch(err){
        throw new Error(`Invalid JSON format : ${err}`)
    }
}