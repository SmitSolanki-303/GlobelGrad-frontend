// import React, { useEffect, useState } from 'react'
// import {Link} from 'react-router-dom'
// function Navbar() {

    
//     const [theme,setTheme] = useState(
//         localStorage.getItem("theme")?localStorage.getItem("theme") : "light");

//     const element = document.documentElement;
//     useEffect(() => {
//         if( theme === "dark"){
//             element.classList.add("dark");
//             localStorage.setItem("Theme","dark");
//             document.body.classList.add("dark");
//         }
//         else{
//             element.classList.remove("dark");
//             localStorage.setItem("Theme","light");
//             document.body.classList.remove("dark");
//         }   
//     },[theme]);
    
//     const [sticky,setSticky] = useState(false);
//     useEffect(()=>{
//         const HandleScroll=()=>{
//             if(window.scrollY >0){
//                 setSticky(true);
//             }
//             else{
//                 setSticky(false);
//             }
//         }
//         window.addEventListener('scroll',HandleScroll);
//         return ()=>{
//             window.removeEventListener('scroll',HandleScroll);
//         }

//     })
//     const navItems = ( 
//         <>
//             <Link to='/'><li className='hover:text-pink-500'><a>Home</a></li></Link>
//             <Link to='/register'><li className='hover:text-pink-500'><a>Register</a></li></Link>
//             <Link to='/jd'><li className='hover:text-pink-500'><a>JobMatcher</a></li></Link>
//             <Link to='/blog'><li className='hover:text-pink-500'><a>Blogs</a></li></Link>
//             <li className='hover:text-pink-500'><a></a></li>
            
//         </>
//      );
//   return (
//     <>
//     <div className={`max-w-screen-2xl mx-auto container dark:bg-black dark:text-white md:px-20 px-2 fixed left-0 right-0 top-0 z-50 items-center
//         ${
//             sticky
//             ?" sticky-navbar shadow-md bg-slate-100 duration-500 transition-all ease-in-out"
//             :""
//         }`
//     }>
//         <div className="navbar ">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                 <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                     <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor">
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M4 6h16M4 12h8m-8 6h16" />
//                     </svg>
//                 </div>
//                 <ul
//                     tabIndex={0}
//                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow hover:text-pink-500">
//                     {navItems}
//                 </ul>
//                 </div>
//                 <a className="btn btn-ghost text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 transition-all duration-300 hover:from-blue-600 hover:via-purple-500 hover:to-pink-500 hover:scale-110 hover:rotate-2 hover:shadow-lg hover:shadow-cyan-500/50">
//                 GlobelGrad
//                 </a>

//             </div>
//             <div className='navbar-end '>
//                 <div className="navbar-center hidden lg:flex ">
//                     <ul className="menu menu-horizontal px-1 ">
//                         {navItems}
//                     </ul>
//                 </div>
//                 <div className='hidden md:block'>
//                     <label className=" px-4 py-3 rounded-md flex items-center gap-2">
//                         <input type="text" className="grow p-1 dark:bg-black dark:text-white " placeholder="Search" />
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 16 16"
//                             fill="currentColor"
//                             className="h-5 w-5 opacity-70">
//                             <path
//                             fillRule="evenodd"
//                             d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//                             clipRule="evenodd" />
//                         </svg>
//                     </label>
//                 </div>
//                     <label className="swap swap-rotate ml-3">
//                 {/* this hidden checkbox controls the state */}
//                 <input type="checkbox" className="theme-controller" value="synthwave" />

//                 {/* sun icon */}
//                 <svg
//                     className="swap-off h-8 w-8 fill-current"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     onClick={() => setTheme(theme === "light"? "dark" : "light")}
//                     >
//                     <path
//                     d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//                 </svg>

//                 {/* moon icon */}
//                 <svg
//                     className="swap-on h-8 w-8 fill-current"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     onClick={() => setTheme(theme === "dark"?"light" :"dark")}>
//                     <path
//                     d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//                 </svg>
//                 </label>
//                 <div className="">
//                 <Link to="/login" className="bg-pink-500 text-white p-3 rounded-md hover:bg-black duration-300 cursor-pointer m-2">
//                     Login
//                 </Link>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Navbar


import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from '../../firebase/config'; // Adjust the path as needed

function Navbar() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const [sticky, setSticky] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const navigate = useNavigate();
    const auth = getAuth(app);

    // Monitor authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [auth]);

    // Handle logout
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    // Theme handling
    const element = document.documentElement;
    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("Theme", "dark");
            document.body.classList.add("dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("Theme", "light");
            document.body.classList.remove("dark");
        }
    }, [theme]);
    
    // Sticky navbar handling
    useEffect(() => {
        const HandleScroll = () => {
            setSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', HandleScroll);
        return () => {
            window.removeEventListener('scroll', HandleScroll);
        };
    }, []);

    // Conditional navigation items based on authentication
    const navItems = (
        <>
            <Link to='/'><li className='hover:text-pink-500'><a>Home</a></li></Link>
            {currentUser && (
                <>
                    <Link to='/register'><li className='hover:text-pink-500'><a>Register</a></li></Link>
                    <Link to='/jd'><li className='hover:text-pink-500'><a>JobMatcher</a></li></Link>
                    <Link to='/blog'><li className='hover:text-pink-500'><a>Blogs</a></li></Link>
                </>
            )}
        </>
    );

    return (
        <>
            <div className={`max-w-screen-2xl mx-auto container dark:bg-black dark:text-white md:px-20 px-2 fixed left-0 right-0 top-0 z-50 items-center
                ${sticky ? " sticky-navbar shadow-md bg-slate-100 duration-500 transition-all ease-in-out" : ""}`
            }>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow hover:text-pink-500">
                                {navItems}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 transition-all duration-300 hover:from-blue-600 hover:via-purple-500 hover:to-pink-500 hover:scale-110 hover:rotate-2 hover:shadow-lg hover:shadow-cyan-500/50">
                            GlobelGrad
                        </a>
                    </div>
                    <div className='navbar-end'>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navItems}
                            </ul>
                        </div>
                        {currentUser && (
                            <div className='hidden md:block'>
                                <label className="px-4 py-3 rounded-md flex items-center gap-2">
                                    <input type="text" className="grow p-1 dark:bg-black dark:text-white" placeholder="Search" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-5 w-5 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </label>
                            </div>
                        )}
                        <label className="swap swap-rotate ml-3">
                            <input type="checkbox" className="theme-controller" value="synthwave" />
                            <svg
                                className="swap-off h-8 w-8 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>
                            <svg
                                className="swap-on h-8 w-8 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                        <div className="">
                            {loading ? (
                                <div className="bg-gray-300 text-gray-500 p-3 rounded-md m-2">
                                    Loading...
                                </div>
                            ) : currentUser ? (
                                <div className="flex items-center">
                                    <span className="hidden md:inline mr-2 text-sm">
                                        {currentUser.displayName || currentUser.email}
                                    </span>
                                    <button 
                                        onClick={handleLogout}
                                        className="bg-pink-500 text-white p-3 rounded-md hover:bg-black duration-300 cursor-pointer m-2"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <Link to="/login" className="bg-pink-500 text-white p-3 rounded-md hover:bg-black duration-300 cursor-pointer m-2">
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;