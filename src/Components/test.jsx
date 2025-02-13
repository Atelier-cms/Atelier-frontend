// // //old header
// // import { useState, useEffect, useRef } from 'react';
// // import '/src/App.css';
// // import { Link } from 'react-router-dom';

// // function Header() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const menuRef = useRef(null); // Reference for the dropdown menu

// //   // Close menu on outside click
// //   useEffect(() => {
// //     const handleOutsideClick = (event) => {
// //       if (menuRef.current && !menuRef.current.contains(event.target)) {
// //         setIsMenuOpen(false); // Close the menu if clicked outside
// //       }
// //     };

// //     document.addEventListener('mousedown', handleOutsideClick);

// //     return () => {
// //       document.removeEventListener('mousedown', handleOutsideClick);
// //     };
// //   }, []);

// //   return (
// //     <div className="bg-gray-900 text-lg text-white h-16 w-full py-4 px-24 flex items-center justify-between sticky top-0 z-10">
// //       <Link to="/" className="font-bold text-2xl">
// //         Atelier
// //       </Link>

// //       {/* Centered Links (Hidden on smaller screens) */}
// //       <div className="hidden md:flex flex-1 justify-left pl-20 text-gray-400 gap-10 text-sm font-base">
// //         <Link to="about">About</Link>
// //         <Link to="services">Our Services</Link>
// //         <Link to="work">Components</Link>
// //         <Link to="work">Socials</Link>
// //       </div>

// //       {/* Hamburger Menu */}
// //       <div
// //         className="flex md:hidden flex-col items-end gap-1 cursor-pointer"
// //         onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle dropdown menu
// //       >
// //         <div className="w-6 h-0.5 bg-white"></div>
// //         <div className="w-6 h-0.5 bg-white"></div>
// //         <div className="w-6 h-0.5 bg-white"></div>
// //       </div>

// //       {/* Right-aligned Button (Hidden on smaller screens) */}
// //       <div className="hidden md:flex bg-cyan-300 h-9 w-32 rounded-3xl items-center justify-center">
// //         <Link to="work" className="font-bold text-black text-xs">
// //           WORK WITH US
// //         </Link>
// //       </div>

// //       {/* Dropdown Menu */}
// //       {isMenuOpen && (
// //         <div
// //           ref={menuRef} // Attach ref to the dropdown menu
// //           className="absolute top-16 right-4 bg-gray-800 w-48 rounded-lg shadow-lg z-20 flex flex-col text-sm font-semibold"
// //         >
// //           <Link
// //             to="about"
// //             className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
// //             onClick={() => setIsMenuOpen(false)} // Close dropdown on click
// //           >
// //             About
// //           </Link>
// //           <Link
// //             to="services"
// //             className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
// //             onClick={() => setIsMenuOpen(false)}
// //           >
// //             Our Services
// //           </Link>
// //           <Link
// //             to="work"
// //             className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
// //             onClick={() => setIsMenuOpen(false)}
// //           >
// //             Components
// //           </Link>
// //           <Link
// //             to="work"
// //             className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
// //             onClick={() => setIsMenuOpen(false)}
// //           >
// //             Socials
// //           </Link>
// //           <Link
// //             to="work"
// //             className="px-4 py-2 hover:bg-gray-700 text-cyan-300"
// //             onClick={() => setIsMenuOpen(false)}
// //           >
// //             Get in touch
// //           </Link>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default Header;




// //grid code
// "use client"

// import React, { useEffect, useRef } from "react"

// export default function Grid() {
//   const canvasRef = useRef(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext("2d")
//     if (!ctx) return

//     const width = canvas.width
//     const height = canvas.height
//     const gridSize = 10
//     const cellSize = width / gridSize

//     let progress = 0
//     let lastProgress = 0

//     const points = [
//       { x: 9, y: 9 },
//       { x: 7, y: 9 },
//       { x: 7, y: 7.5 },
//       { x: 5, y: 7.5 },
//       { x: 5, y: 6 },
//       { x: 3, y: 6 },
//       { x: 3, y: 4.5 },
//       { x: 1, y: 4.5 },
//       { x: 1, y: 3 },
//       { x: 0, y: 3 },
//     ]

//     // Draw grid with transparent lines
//     const drawGrid = () => {
//       ctx.strokeStyle = "rgba(255, 255, 255, 0)"  // Fully transparent grid lines
//       ctx.lineWidth = 1

//       for (let i = 0; i <= gridSize; i++) {
//         const pos = i * cellSize

//         // Vertical lines
//         ctx.beginPath()
//         ctx.moveTo(pos, 0)
//         ctx.lineTo(pos, height)
//         ctx.stroke()

//         // Horizontal lines
//         ctx.beginPath()
//         ctx.moveTo(0, pos)
//         ctx.lineTo(width, pos)
//         ctx.stroke()
//       }
//     }

//     const drawZigzag = (start, end) => {
//       ctx.beginPath()
//       ctx.strokeStyle = "#00ffff"
//       ctx.lineWidth = 1

//       for (let i = Math.floor(start); i < Math.min(points.length - 1, Math.ceil(end)); i++) {
//         const startPoint = points[i]
//         const endPoint = points[i + 1]
//         const startX = startPoint.x * cellSize
//         const startY = startPoint.y * cellSize
//         const endX = endPoint.x * cellSize
//         const endY = endPoint.y * cellSize

//         if (i === Math.floor(start)) {
//           const t = start - Math.floor(start)
//           ctx.moveTo(startX + t * (endX - startX), startY + t * (endY - startY))
//         } else {
//           ctx.lineTo(startX, startY)
//         }

//         if (i === Math.ceil(end) - 1) {
//           const t = end - Math.floor(end)
//           ctx.lineTo(startX + t * (endX - startX), startY + t * (endY - startY))
//         } else {
//           ctx.lineTo(endX, endY)
//         }
//       }

//       ctx.stroke()
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height)
//       drawGrid()

//       progress += 0.03 // Medium speed animation
//       if (progress > points.length - 1) {
//         progress = 0
//         lastProgress = 0
//       }

//       if (progress - lastProgress > 1) {
//         lastProgress = progress - 1
//       }

//       drawZigzag(lastProgress, progress)

//       requestAnimationFrame(animate)
//     }

//     animate()

//     return () => {
//       // Cleanup
//     }
//   }, [])

//   return (
//     <div className="relative w-80 h-80 p-4">
//       <canvas ref={canvasRef} width={320} height={320} className="w-full h-full" />
//     </div>
//   )
// }



// import { useState } from "react";
// import Footer from "../Components/Footer";
// import axios from 'axios'
// const BACKEND_URL = import.meta.env.VITE_BACKEND;


// function Work() {

//     const submitHandler = (e) => {
//         e.preventDefault();

//         // Basic form validation
//         if (!firstname || !lastname || !email || !country || !phone || !message) {
//             alert("Please fill in all fields.");
//             return;
//         }

//         // Validate email format
//         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         if (!emailPattern.test(email)) {
//             alert("Please enter a valid email address.");
//             return;
//         }

//         // Validate phone number (simple validation for numbers only)
//         const phonePattern = /^[0-9]+$/;
//         if (!phonePattern.test(phone)) {
//             alert("Please enter a valid phone number.");
//             return;
//         }

//         // console.log("Form Submitted", { firstname, lastname, email, country, phone, message });
//     };


//     const [firstname, setFirstname] = useState('');
//     const [lastname, setLastname] = useState('');
//     const [email, setEmail] = useState('');
//     const [country, setCountry] = useState('');
//     const [phone, setPhone] = useState('');
//     const [message, setMessage] = useState('');

//     const handlesubmit=async(req,res)=>{
//         try {
//             await axios.post(`${BACKEND_URL}/api/v1/user/form`, {firstname, lastname, email, country, phone, message})
//             console.log({firstname, lastname, email, country, phone, message});
            
//         } catch (error) {
//             console.log(error);
            
//         }
        
//     }
    
//     return (
//         <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white w-full min-h-screen">
//             {/* Tag line */}
//             <div className="text-center font-sans px-4 pt-20">
//                 <h1 className="font-semibold uppercase text-sky-200 text-2xl sm:text-3xl md:text-4xl">
//                     CONNECT WITH US
//                 </h1>
//             </div>

//             {/* Form section */}
//             <div className="w-full max-w-2xl border border-white flex flex-col items-center mx-auto mt-10 rounded-3xl p-6 py-10">
//                 <h3 className="text-xl pt-4">Welcome to Atelier</h3>
//                 <p className="text-gray-300 pt-2">Fill out this details form so we can connect with you.</p>

//                 <form 
//                     onSubmit={submitHandler} 
//                     className="w-full flex flex-col items-center mt-8"
//                 >
//                     <div className="w-full">
//                         <div className="flex sm:flex-col lg:flex-row gap-10 sm:gap-4 w-full justify-center mb-6">
//                             <input
//                                 value={firstname}
//                                 onChange={(e) => setFirstname(e.target.value)}
//                                 placeholder="First Name"
//                                 className="bg-transparent text-sm border-b border-gray-500 pb-2 w-full outline-none"
//                             />
//                             <input
//                                 value={lastname}
//                                 onChange={(e) => setLastname(e.target.value)}
//                                 placeholder="Last Name"
//                                 className="bg-transparent text-sm border-b border-gray-500 pb-2 w-full outline-none"
//                             />
//                         </div>

//                         {/* Email */}
//                         <div className="flex w-full justify-center mb-6">
//                             <input
//                                 type="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 placeholder="Email Address"
//                                 className="bg-transparent text-sm border-b border-gray-500 pb-2 w-full outline-none"
//                             />
//                         </div>

//                         {/* Country and Phone - Responsive layout */}
//                         <div className="flex sm:flex-col lg:flex-row gap-10 sm:gap-4 w-full justify-center mb-6">
//                             <input
//                                 value={country}
//                                 onChange={(e) => setCountry(e.target.value)}
//                                 placeholder="Country"
//                                 className="bg-transparent text-sm border-b border-gray-500 pb-2 w-full outline-none"
//                             />
//                             <input
//                                 type="tel"
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                                 placeholder="Phone"
//                                 className="bg-transparent text-sm border-b border-gray-500 pb-2 w-full outline-none"
//                             />
//                         </div>

//                         {/* Message */}
//                         <div className="flex w-full justify-center mb-6">
//                             <textarea
//                                 value={message}
//                                 onChange={(e) => setMessage(e.target.value)}
//                                 placeholder="Message"
//                                 className="bg-transparent text-sm border-b border-gray-500 pb-2 w-full outline-none resize-none h-20"
//                             />
//                         </div>

//                         {/* Submit Button */}
//                         <div className="mt-8">
//                             <button 
//                                 type="submit" 
//                                 className="font-bold text-white border border-cyan-300 text-md h-12 w-40 rounded-full flex items-center justify-center hover:bg-cyan-300 hover:text-black transition duration-300"
//                                 onClick={handlesubmit}
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Work;
