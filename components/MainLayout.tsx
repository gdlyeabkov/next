export function MainLayout({children,title='Next app'}){
    return (
        <>
        <Head>
            <title>{title} | next course</title>
            <meta name="description" content="youtube"/>
            <meta name="keywords" content="nextjs"/>
        </Head>
            <nav>
                <h1>Navigation</h1>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                
                {children}    
            </main>
    <style jsx>{`
        nav{
            position:fixed;
            height:60px;
            left:0;
            top:0;
            display:flex;
            justify-content:space-around;
            align-items:center;
            rigth:0;
            background:darkblue;

        }
        nav a{
            color:#fff;
            text-decoration:none;
        }
        main{
            margin-top:60px;
            padding:1rem;
        }
    `}</style>
        </>
    )
}