import React from 'react'
import Navbar from '../components/NavbarPage/Navbar'
import Footer from '../components/FooterPage/Footer'
import BlogAndComments from '../components/BlogsPage/Blog'

function BlogMain() {
  return (
    <>
      <Navbar></Navbar>
      <BlogAndComments></BlogAndComments>
      <Footer></Footer>
    </>
  )
}

export default BlogMain
