import Link from 'next/link'
import MainLayout from '../../components/MainLayout'
export default function Index(){
    return (
        
        <MainLayout title="home page">
        <Head>

        </Head>
        <h1>Hello next.js</h1>
        // <p><a href="/about">About</a></p>
        // <p><a href="/posts">posts</a></p>
        <p><Link><a href={"/about"}>About</a></Link></p>
        <p><Link><a href={"/posts"}>posts</a></Link></p>    
        </MainLayout>
        
    )
}