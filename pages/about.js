import MainLayout from '../../components/MainLayout'
import Router from 'next/router'
import Head from 'next/head'
import React from 'react'
export default function About(title){
    const linkClickHandler=()=>{

    }
    return (
        
        <MainLayout title="about page">
        <Head>
            
        <title>Next title</title>    
        </Head>
        <h1>{title}</h1>
    
        <button onClick={linkClickHandler}>go back to home</button>
        <button onClick={()=>Router.push('/posts')}>go to posts</button>
        </MainLayout>
        
    )
}
About.getInitialProps=async()={
    const response=await fetch('http://localhost:4200/about')
    const data=await response.json()
    return {
        title:data.title
    }
}