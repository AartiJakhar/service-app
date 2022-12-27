import Head from 'next/head'
import About from '../components/basicpage/About'
import Blog from '../components/basicpage/Blogs'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/SMART.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>
      </Head>
      <Header/>
        <About/>
        <Blog/>
     
     
    </>
  )
}
