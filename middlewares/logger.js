export const logger = (req,_,next) => {
    console.log(`Original URL: ${req.originalUrl}`)
    console.log(`URL Params: ${JSON.stringify(req.params)}`)
    console.log(`URL Body: ${JSON.stringify(req.body)}`)
    console.log(`URL Head: ${JSON.stringify(req.headers)}`)
    console.log(`URL Query: ${JSON.stringify(req.query)}`)
    console.log(`IP Address: ${JSON.stringify(req.ip)}`)
    console.log(`Method: ${JSON.stringify(req.method)}`)
    console.log(`URL: ${JSON.stringify(req.url)}`)
    console.log(`request: ${(req)}`)
    next()
} 
