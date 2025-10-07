// import React, { useState } from "react";
// import ordinary1 from "../../assets/home/ordi1.png";
// import ordinary2 from "../../assets/home/ordi2.png";
// import ordinary3 from "../../assets/home/ordi3.png";
// import right from "../../assets/rightarrow.png";
// import left from "../../assets/leftarrow.png";

// const Homeproduct = () => {
//   const slides = [
//     { img: ordinary1, text: "SERUM", bg: "bg-red-300", className: "img-serum" },
//     { img: ordinary2, text: "MOISTURIZER", bg: "bg-pink-300", className: "img-moist" },
//     { img: ordinary3, text: "CLEANSER", bg: "bg-red-400", className: "img-clean" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleRight = () => {
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   };

//   const handleLeft = () => {
//     setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="mt-6">
//       <p className="font-semibold text-2xl text-center mb-4">
//         Unveil Your Radiance by Veloura Éternelle Guide
//       </p>

//       <div
//         className={`relative w-full overflow-hidden rounded shadow transition-colors duration-500 ${slides[currentIndex].bg}`}
//       >
//         {/* Sliding Images */}
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-full flex justify-center p-4 relative"
//             >
//               <img
//                 src={slide.img}
//                 alt={slide.text}
//                 className={`${slide.className} z-10 object-contain`}
//               />
//               <p className="absolute inset-0 flex items-center justify-center text-white/80 font-bold text-7xl md:text-9xl transition-all duration-500 text-center">
//                 {slide.text}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Left Arrow */}
//         <img
//           src={left}
//           alt="left"
//           className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 cursor-pointer"
//           onClick={handleLeft}
//         />

//         {/* Right Arrow */}
//         <img
//           src={right}
//           alt="right"
//           className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 cursor-pointer"
//           onClick={handleRight}
//         />
//       </div>
//     </div>
//   );
// };

// export default Homeproduct;


import React from 'react'
import cleanser from "../../assets/homeproduct/cleanser.jpeg";
import serum from "../../assets/homeproduct/homeserum.jpeg";
import toner from "../../assets/homeproduct/toner.jpeg"
import product1 from "../../assets/homeproduct/product1.mp4"
import product2 from "../../assets/homeproduct/product2.mp4"
import product3 from "../../assets/homeproduct/product3.mp4"
import product4 from "../../assets/homeproduct/product4.mp4"
import product5 from "../../assets/homeproduct/product5.mp4"
import product7 from "../../assets/homeproduct/product7.mp4"
import product6 from "../../assets/homeproduct/product6.mp4"

const Homeproduct = () => {
  return (
   <div className='flex'>
   
    <div className='space-y-1'>
      <div className='flex gap-0.5'>
    <video
    className="w-[100px] h-[150px] rounded md:w-[200px] object-cover"
    src={product2}
    autoPlay     
    loop        
    muted 
    playsInline />
    <video
    className="w-[100px] h-[150px] rounded md:w-[200px] object-cover"
    src={product3}
    autoPlay     
    loop        
    muted 
    playsInline/>
    <video
    className="w-[100px] h-[150px] rounded md:w-[200px] object-cover"
    src={product4}
    autoPlay     
    loop        
    muted 
    playsInline />
      </div>
      <div>
         <video
    className="w-[305px] h-[120px] rounded md:w-[602px] md:h-[220px] object-cover"
    src={product4}
    autoPlay     
    loop        
    muted 
    playsInline  
  />
      </div>
      </div>
    
      <div>
      <video
    className="w-[150px] h-[272px] rounded md:w-[302px] md:h-[375px] object-cover"
    src={product5}
    autoPlay     
    loop        
    muted 
    playsInline  
  />
      </div>
      <div className='md:space-y-0.5 space-y-0.5'>
              <video
    className="w-[150px] h-[138px] rounded md:w-[360px] md:h-[187px] object-cover"
    src={product7}
    autoPlay     
    loop        
    muted 
    playsInline  
  />
                <video
    className="w-[150px] h-[133px] rounded md:w-[360px] md:h-[187px] object-cover"
    src={product6}
    autoPlay     
    loop        
    muted 
    playsInline  
  />
      </div>
    </div>
   
  )
}

export default Homeproduct