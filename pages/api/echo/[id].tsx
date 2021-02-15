export default function echo(req:NextApiRequest,res:NextApiResponse){
    res.statusCode=200
    res.setHeader("Content-type",'application/json')
    res.end(req.query.id)
}