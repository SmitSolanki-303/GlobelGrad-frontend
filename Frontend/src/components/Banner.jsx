import React from 'react'
import { motion } from "framer-motion";
import bannerImage from "../assets/414.jpg";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import p1 from "../assets/home_p1.jpg";
import { Link } from 'react-router-dom';
function Banner() {
  return (
    <>
    
    <div className='max-w-screen-2xl mx-auto container md:px-20 px-4 flex flex-col md:flex-row '>
        <div className=' order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-40  '>
            <h1 className='text-7xl font-bold content-center leading-tight'>The Most Popular  
                <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent transition-all duration-300 hover:from-blue-700 hover:via-Pink-700 hover:to-red-700'> Protfolio Builder</span> Tool !!!</h1>
            <p className='mt-5 md:mt-10 mb-5 md:mb-10'>Create beautiful, customizable portfolios with ease using our powerful, user-friendly tool.
            Showcase your skills, projects, and achievements with interactive and professional portfolio designs.
            </p>
            <div className='flex flex-row'>
                <Link to="/register" className='w-1/4 p-3 md:p-4 rounded-full border m-1 bg-purple-600 hover:bg-yellow-500 text-white hover:text-black duration-300 text-center'> Get start</Link>
                <Link to="privacy-policy" className='w-3/4 p-3 md:p-4 rounded-full border m-1 bg-cyan-500 hover:bg-pink-400 text-white hover:text-black text-center'>Privacy Policy</Link>
            </div>
        </div>
        <motion.div
          className="z-10 order-1 md:order-2 w-full md:w-1/2 flex items-center justify-center relative overflow-hidden  mt-12 md:mt-40"
          whileHover={{ scale: 1.02, rotate: -2 }} // 3D Zoom & slight tilt on hover
        >
          {/* Image with Animation */}
          <motion.img
            src={bannerImage} // Replace with your image URL
            alt="Banner Image"
            className="w-full h-full md:h-[500px] object-cover rounded-xl shadow-lg ml-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }} // Zoom-in effect on hover
          />
        </motion.div>
    </div>
    <div className='max-w-screen-2xl mx-auto md:px-20 px-4 flex flex-col'>
      {/* First Row with Icons/Text */}
      <div className='flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-10 md:gap-16 my-10'>
        <div className='flex flex-row items-center'>
          <img src={f1} alt="Generate Portfolio" className="w-20 h-20 border rounded-xl mr-3" />
          <div className="text-md font-semibold">Generate the Portfolio Easily</div>
        </div>

        <div className='flex flex-row items-center'>
          <img src={f2} alt="Deployed Portfolio" className="w-20 h-20 border rounded-xl mr-3 " />
          <div className="text-md font-semibold">Deployed Portfolio Link</div>
        </div>

        <div className='flex flex-row items-center'>
          <img src={f3} alt="Save Time" className="w-20 h-20 border rounded-xl mr-3" />
          <div className="text-md font-semibold">Save Time</div>
        </div>
      </div>
    </div>

    <div className='max-w-screen-2xl mx-auto md:px-60 px-4 text-justify  '>
        <p className="text-gray-700 leading-relaxed mb-10 ">
          At <strong>GlobelGrad</strong>, we empower students and professionals to build stunning, customizable portfolios with ease. 
          Our platform simplifies the process of showcasing your skills, projects, and achievements in a visually compelling and interactive way. 
          Whether you're a designer, developer, writer, or freelancer, <strong>GlobelGrad</strong> helps you create a strong digital presence that stands out.
          <br /><br />
          With an intuitive interface and powerful customization options, we make portfolio building effortless—so you can focus on what matters most: 
          your career growth and personal brand.
        </p>
        <div className='flex flex-col item-center'>
          <img src={p1} alt="Homepage fisrt image -p1" className='w-full h-full border rounded-md' />
        </div>
        <p className="text-gray-700 leading-relaxed py-10 ">
        Powered by our smart drag-and-drop editing tools and features, you can create a creative portfolio website in minutes. GlobelGrad’s website builder lets you get down to business right away. Start inspired with professionally designed and fully editable portfolio website templates, create a new one on your own, or create a website mockup to visualize your design. Showcase your past projects, work experiences, and best skills through beautiful graphs, timelines, and images. Get any free stock video footage or stock photos into your chosen portfolio layout with a simple drag and drop. Import your own fonts or use our free font library and present text into eye-catching headers and font combinations. Then, publish on the web easily with a free GlobelGrad domain or purchase a custom one for you.
        </p>
    </div>
    

    </>
  )
}

export default Banner
