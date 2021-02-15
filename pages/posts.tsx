import {useState,useEffect} from 'react'
import MainLayout from '../../components/MainLayout'
interface PostsPageProps{
    posts:any[]
}
export default function Post({post:serverPosts}:PostPageProps){
    const [posts,setPosts]=useState(serverPosts)
    useEffect(()=>{
        async function load(){
            const response=await fetch('hhtp://localhost:4200/posts')
            const json=await response.json()
            setPosts(json)
        }
        if(!serverPosts){
            load()
        }
    },[])
    if(!posts){
        return (
            <MainLayout>
                <p>Loading.......</p>
            </MainLayout>
        )
    }
    return (
        <MainLayout>
        <h1>Posts page</h1>
        <ul>
            {posts.map(post=>(
                <li key={[post.id]}
                >
                    <Link href={"posts/post/[id]"} as={'/posts/${post.id}'}><a>{post.title}</a></Link>
                </li>
            ))}
            {JSON.stringify(posts,null,2)}
        </ul>
        </MainLayout>
    )
}
Posts.getInitialProps=async({req,}:NextPageContext)=>{
    if(!req){
        return {
            posts:null
        }
    }
    const response=await fetch(process.env.API_URL + '/posts')
    const posts:MyPost[]=await response.json()
    return {
        posts
    }

}