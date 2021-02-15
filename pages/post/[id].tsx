import {useState,useEffect} from React
import {useRouter} from 'next/router'
import MainLayout from '../../components/MainLayout'
interface PostPageProps{
    post:MyPost
}
export default function Post({post:serverPost}){
    const [post,setPost]=useState(serverPost)
    const router=useRouter()
    useEffect(()=>{
        async function load(){
            const response=await fetch(process.env.API_URL + router.query.id)
            const data=await response.json()
            setPost(data)
        }
        if(!serverPost){
            load()
        }
    },[])
    if(!post){
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }
    const router=useRouter()
    return (
        <MainLayout>
            <h1>{post.title}</h1>
            <hr/>
            <p>{post.body}</p>
            <Link href={'/posts'}><a>Back to posts</a></Link>
            <h1>post {router.query.id}</h1>
        </MainLayout>
    )
}
// Post.getInitialProps=async({query,req})=>{
//     if(!req){
//         return {
//             post:null
//         }
//     }
//     const response=await fetch('hhtp://localhost:4200/posts' + query.id)
//     const post=await response.json()
//     return {
//         posts
//     }
// }
interface PostNextPageContent extends NextPageContent{
    query:{
        id:string
    }
}
export async function getServerSideProps({query,req}:NextPageContent){
            // if(!req){
    //             return {
    //                 post:null
    //             }
    //         }
            
            const response=await fetch('hhtp://localhost:4200/posts' + query.id)
            const post:MyPost=await response.json()
            return {
                props:{post}
                
            }
}