import React, { useState } from "react";
import {Link} from 'react-router-dom';
import bg1 from '../../assets/login_1.jpg';
import bg2 from '../../assets/login_2.jpg'
function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <>
    <div className="bg-slate-300 bg-cover bg-center transition-all duration-700"
    style={{ backgroundImage: `url(${isSignUp ? bg2 : bg1})`}}>
        <div className="flex items-center justify-center min-h-screen">
        
        <div className="relative w-[850px] h-[500px] flex flex-col bg-white shadow-lg rounded-xl overflow-hidden">
        
            {/* Animated Left Section (Intro) */}
            <div className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-10 text-white transition-all duration-700 ${
            isSignUp ? "translate-x-full bg-gradient-to-r from-indigo-400 to-violet-500" : "bg-gradient-to-r from-pink-400 to-rose-500"
            }`}>
            <h2 className="text-3xl font-bold">{isSignUp ? "Welcome Back!" : "Join Us Today"}</h2>
            <p className="text-sm mt-2">{isSignUp ? "Sign in to continue" : "Create an account to get started"}</p>
            <button 
                className={`mt-6 px-6 py-2 border border-white rounded-full text-lg font-semibold hover:bg-white transition ${isSignUp ? "hover:text-indigo-500" : "hover:text-rose-500"}`}
                onClick={() => setIsSignUp(!isSignUp)}
            >
                {isSignUp ? "SIGN IN" : "SIGN UP"}
            </button>
            </div>

            {/* Right Section - Forms */}
            
            <div className={`relative w-1/2 h-full flex flex-col  items-center justify-center px-10 transition-all duration-700  ${
            isSignUp ? "translate-x-0 " : "translate-x-full "
            }`}>
            <h2 className={`text-2xl font-semibold text-black isSignUp:text-rose-400 ${isSignUp ? "text-indigo-500" : "text-rose-500"}`}>{isSignUp ? "Sign Up" : "Sign In "}</h2>
            <form className="mt-6 w-full">
                {isSignUp && (
                <input type="text" placeholder="Full Name" className="w-full p-2 mb-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"/>
                )}
                <input type="email" placeholder="Email Address" className={`w-full p-2 mb-3 border rounded-md outline-none focus:ring-2 ${isSignUp ?"focus:ring-blue-400" :"focus:ring-rose-400"} `}/>
                <input type="password" placeholder="Password" className={`w-full p-2 mb-3 border rounded-md outline-none focus:ring-2  ${isSignUp ?"focus:ring-blue-400" :"focus:ring-rose-400"}`}/>
                <button className={`w-full py-2 text-white rounded-lg  transition ${isSignUp ? "hover:bg-violet-500 bg-indigo-500" : "hover:bg-pink-500 bg-rose-500"}` }>
                {isSignUp ? "SIGN UP" : "SIGN IN"}
                </button>
            </form>
            <p className="mt-3 text-gray-500 text-sm">{isSignUp ? "Already have an account?" : "Don't have an account?"} 
                <span className="text-blue-500 cursor-pointer ml-1" onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? "Sign In" : "Sign Up"}
                </span>
            </p>
            </div>
            <Link to="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 
                     transition-all duration-300 hover:scale-125 hover:bg-slate-100 
                     hover:w-10 hover:h-10 flex items-center justify-center text-gray-500">✕</button>
        </Link>
        </div>
        </div>
    </div>
    </>
  );
}

export default Login;
