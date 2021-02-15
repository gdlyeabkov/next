interface MessageNextApiRequest extends NextApiRequest{
    query:{
        messsage?:string
    }
}
export default function echo(req:NextApiRequest,res:NextApiResponse){
    res.statusCode=200
    res.setHe
    res.setHeader("Content-type",'application/json')
    res.end(JSON.stringify({
        message:req.query.message ?? "Base message"
    }))
}