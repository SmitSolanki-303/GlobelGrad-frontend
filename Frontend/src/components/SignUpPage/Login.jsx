    // import React, { useState } from "react";
    // import {Link} from 'react-router-dom';
    // import bg1 from '../../assets/login_1.jpg';
    // import bg2 from '../../assets/login_2.jpg'
    // function Login() {
    // const [isSignUp, setIsSignUp] = useState(false);

    // return (
    //     <>
    //     <div className="bg-slate-300 bg-cover bg-center transition-all duration-700"
    //     style={{ backgroundImage: `url(${isSignUp ? bg2 : bg1})`}}>
    //         <div className="flex items-center justify-center min-h-screen">
            
    //         <div className="relative w-[850px] h-[500px] flex flex-col bg-white shadow-lg rounded-xl overflow-hidden">
            
    //             {/* Animated Left Section (Intro) */}
    //             <div className={`absolute w-1/2 h-full flex flex-col items-center justify-center px-10 text-white transition-all duration-700 ${
    //             isSignUp ? "translate-x-full bg-gradient-to-r from-indigo-400 to-violet-500" : "bg-gradient-to-r from-pink-400 to-rose-500"
    //             }`}>
    //             <h2 className="text-3xl font-bold">{isSignUp ? "Welcome Back!" : "Join Us Today"}</h2>
    //             <p className="text-sm mt-2">{isSignUp ? "Sign in to continue" : "Create an account to get started"}</p>
    //             <button 
    //                 className={`mt-6 px-6 py-2 border border-white rounded-full text-lg font-semibold hover:bg-white transition ${isSignUp ? "hover:text-indigo-500" : "hover:text-rose-500"}`}
    //                 onClick={() => setIsSignUp(!isSignUp)}
    //             >
    //                 {isSignUp ? "SIGN IN" : "SIGN UP"}
    //             </button>
    //             </div>

    //             {/* Right Section - Forms */}
                
    //             <div className={`relative w-1/2 h-full flex flex-col  items-center justify-center px-10 transition-all duration-700  ${
    //             isSignUp ? "translate-x-0 " : "translate-x-full "
    //             }`}>
    //             <h2 className={`text-2xl font-semibold text-black isSignUp:text-rose-400 ${isSignUp ? "text-indigo-500" : "text-rose-500"}`}>{isSignUp ? "Sign Up" : "Sign In "}</h2>
    //             <form className="mt-6 w-full">
    //                 {isSignUp && (
    //                 <input type="text" placeholder="Full Name" className="w-full p-2 mb-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"/>
    //                 )}
    //                 <input type="email" placeholder="Email Address" className={`w-full p-2 mb-3 border rounded-md outline-none focus:ring-2 ${isSignUp ?"focus:ring-blue-400" :"focus:ring-rose-400"} `}/>
    //                 <input type="password" placeholder="Password" className={`w-full p-2 mb-3 border rounded-md outline-none focus:ring-2  ${isSignUp ?"focus:ring-blue-400" :"focus:ring-rose-400"}`}/>
    //                 <button className={`w-full py-2 text-white rounded-lg  transition ${isSignUp ? "hover:bg-violet-500 bg-indigo-500" : "hover:bg-pink-500 bg-rose-500"}` }>
    //                 {isSignUp ? "SIGN UP" : "SIGN IN"}
    //                 </button>
    //             </form>
    //             <p className="mt-3 text-gray-500 text-sm">{isSignUp ? "Already have an account?" : "Don't have an account?"} 
    //                 <span className="text-blue-500 cursor-pointer ml-1" onClick={() => setIsSignUp(!isSignUp)}>
    //                 {isSignUp ? "Sign In" : "Sign Up"}
    //                 </span>
    //             </p>
    //             </div>
    //             <Link to="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 
    //                     transition-all duration-300 hover:scale-125 hover:bg-slate-100 
    //                     hover:w-10 hover:h-10 flex items-center justify-center text-gray-500">✕</button>
    //         </Link>
    //         </div>
    //         </div>
    //     </div>
    //     </>
    // );
    // }

    // export default Login;



    import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { app } from '../../firebase/config';
import bg1 from '../../assets/login_1.jpg';
import bg2 from '../../assets/login_2.jpg';

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
      if (isSignUp) {
        // Create new user
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Update profile with full name
        await updateProfile(userCredential.user, {
          displayName: fullName
        });
        
        console.log("User registered successfully:", userCredential.user);
        navigate("/"); // Redirect to home page after successful signup
      } else {
        // Sign in existing user
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User signed in successfully:", userCredential.user);
        navigate("/"); // Redirect to home page after successful login
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setError(getFirebaseErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  // Function to get user-friendly error messages
  const getFirebaseErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'This email is already registered. Please sign in instead.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/weak-password':
        return 'Password should be at least 6 characters long.';
      case 'auth/user-not-found':
        return 'No account found with this email. Please sign up.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      default:
        return 'An error occurred. Please try again later.';
    }
  };

  return (
    <>
      <div className="bg-slate-300 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${isSignUp ? bg2 : bg1})` }}>
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
            <div className={`relative w-1/2 h-full flex flex-col items-center justify-center px-10 transition-all duration-700 ${
              isSignUp ? "translate-x-0 " : "translate-x-full "
            }`}>
              <h2 className={`text-2xl font-semibold text-black ${isSignUp ? "text-indigo-500" : "text-rose-500"}`}>
                {isSignUp ? "Sign Up" : "Sign In "}
              </h2>
              
              {error && (
                <div className="w-full mt-2 p-2 bg-red-100 text-red-700 text-sm rounded-md">
                  {error}
                </div>
              )}
              
              <form className="mt-6 w-full" onSubmit={handleSubmit}>
                {isSignUp && (
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full p-2 mb-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                )}
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className={`w-full p-2 mb-3 border rounded-md outline-none focus:ring-2 ${isSignUp ? "focus:ring-blue-400" : "focus:ring-rose-400"}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  className={`w-full p-2 mb-3 border rounded-md outline-none focus:ring-2 ${isSignUp ? "focus:ring-blue-400" : "focus:ring-rose-400"}`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="submit"
                  className={`w-full py-2 text-white rounded-lg transition ${
                    isSignUp ? "hover:bg-violet-500 bg-indigo-500" : "hover:bg-pink-500 bg-rose-500"
                  }`}
                  disabled={loading}
                >
                  {loading ? "Processing..." : (isSignUp ? "SIGN UP" : "SIGN IN")}
                </button>
              </form>
              <p className="mt-3 text-gray-500 text-sm">
                {isSignUp ? "Already have an account?" : "Don't have an account?"} 
                <span 
                  className="text-blue-500 cursor-pointer ml-1" 
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </span>
              </p>
            </div>
            <Link to="/">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 
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