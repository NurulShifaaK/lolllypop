
// import React, { use, useState } from "react";

// // 🧴 Import Cleanser
// import cleanser1 from "../../assets/cleanser/clean4.jpg";
// import cleanserhover1 from "../../assets/cleanser/cleanhov1.jpeg";
// import cleanser2 from "../../assets/cleanser/clean1.jpg";
// import cleanserhover2 from "../../assets/cleanser/cleanhov2.jpeg";
// import cleanser3 from "../../assets/cleanser/clean2.jpg";
// import cleanserhover3 from "../../assets/cleanser/cleanhov3.jpeg";
// import cleanser4 from "../../assets/cleanser/clean3.jpg";
// import cleanserhover4 from "../../assets/cleanser/cleanhov4.jpeg";
// import cleanser5 from "../../assets/cleanser/cleanser6.jpg";
// import cleanserhover5 from "../../assets/cleanser/cleanhov5.jpeg";
// import cleanser6 from "../../assets/cleanser/clean6.jpg";
// import cleanserhover6 from "../../assets/cleanser/cleanhov6.jpg";

// // 💧 Import Serum
// import serum1 from "../../assets/serum/serum1.jpg";
// import serumhover1 from "../../assets/serum/serumhov1.jpg";
// import serum2 from "../../assets/serum/serum2.jpg";
// import serumhover2 from "../../assets/serum/serumhov2.jpg";
// import serum3 from "../../assets/serum/serum3.jpg";
// import serumhover3 from "../../assets/serum/serumhov3.jpeg";
// import serum4 from "../../assets/serum/serum4.jpg";
// import serumhover4 from "../../assets/serum/serumhov4.jpeg";
// import serum5 from "../../assets/serum/serum5.jpg";
// import serumhover5 from "../../assets/serum/serumhov5.jpg";
// import serum6 from "../../assets/serum/serum6.jpg";
// import serumhover6 from "../../assets/serum/serumhov6.jpeg";

// // 🧴 Import Moisturizer
// import moist1 from "../../assets/moist/moist1.jpg";
// import moisthov1 from "../../assets/moist/moisthov1.jpg";
// import moist2 from "../../assets/moist/moist2.jpg";
// import moisthov2 from "../../assets/moist/moisthov2.jpeg";
// import moist3 from "../../assets/moist/moist3.jpg";
// import moisthov3 from "../../assets/moist/moisthov3.jpg";
// import moist4 from "../../assets/moist/moist4.jpg";
// import moisthov4 from "../../assets/moist/moisthov4.jpg";
// import moist5 from "../../assets/moist/moist5.jpg";
// import moisthov5 from "../../assets/moist/moisthov5.jpeg";
// import moist6 from "../../assets/moist/moist6.jpg";
// import moisthov6 from "../../assets/moist/moisthov6.jpeg";

// // ☀ Import Sunscreen
// import sun1 from "../../assets/sunscreen/sun1.jpg";
// import sun2 from "../../assets/sunscreen/sun2.jpg";
// import sun3 from "../../assets/sunscreen/sun3.jpg";
// import sun4 from "../../assets/sunscreen/sun4.jpg";
// import sun5 from "../../assets/sunscreen/sun5.jpg";
// import sun6 from "../../assets/sunscreen/sun6.jpg";
// import sunhov1 from "../../assets/sunscreen/sunhov1.jpg";
// import sunhov2 from "../../assets/sunscreen/sunhov2.jpg";
// import sunhov3 from "../../assets/sunscreen/sunhov3.jpg";
// import sunhov4 from "../../assets/sunscreen/sunhov4.jpg";
// import sunhov5 from "../../assets/sunscreen/sunhov5.jpeg";
// import sunhov6 from "../../assets/sunscreen/sunhov6.jpeg";
// import { Link } from "react-router-dom";



// const allProducts = [
//   // Cleanser
//   { category: "Cleanser", src: cleanser1, hover: cleanserhover1, alt: "Cleanser 1", description: "CENTELLA , LIGHT CLEANSING OIL", rate: 50, skin: "Normal" },
//   { category: "Cleanser", src: cleanser2, hover: cleanserhover2, alt: "Cleanser 2", description: "LA ROCHE-POSAY, DAILY REPAIR CLEANSER", rate: 150, skin: "Oily" },
//   { category: "Cleanser", src: cleanser3, hover: cleanserhover3, alt: "Cleanser 3", description: "ANUA HEARTLEAF, PORE CLEANSING FOAM", rate: 30, skin: "Dry" },
//   { category: "Cleanser", src: cleanser4, hover: cleanserhover4, alt: "Cleanser 4", description: "BEAUTY OF JOSEON, GREEN PLUM CLEANSER", rate: 40, skin: "Normal" },
//   { category: "Cleanser", src: cleanser5, hover: cleanserhover5, alt: "Cleanser 5", description: "COSRX LOW PH GEL CLEANSER", rate: 50, skin: "Oily" },
//   { category: "Cleanser", src: cleanser6, hover: cleanserhover6, alt: "Cleanser 6", description: "ROUNDLAB DAILY GEL CLEANSER", rate: 80, skin: "Dry" },

//   // Serum
//   { category: "Serum", src: serum1, hover: serumhover1, alt: "Serum 1", description: "LA ROCHE POSSAY EFFACLAR SERUM", rate: 60, skin: "Oily" },
//   { category: "Serum", src: serum2, hover: serumhover2, alt: "Serum 2", description: "CENTELLA AMPOULE WATER SERUM", rate: 70, skin: "Normal" },
//   { category: "Serum", src: serum3, hover: serumhover3, alt: "Serum 3", description: "ANUA PEACH NIACINAMIDE SERUM", rate: 90, skin: "Dry" },
//   { category: "Serum", src: serum4, hover: serumhover4, alt: "Serum 4", description: "ORDINARY AHA BHA PEELING SOLUTION", rate: 10, skin: "Oily" },
//   { category: "Serum", src: serum5, hover: serumhover5, alt: "Serum 5", description: "LOREAL HYALURONIC ACID SERUM", rate: 40, skin: "Normal" },
//   { category: "Serum", src: serum6, hover: serumhover6, alt: "Serum 6", description: "SOMEBYMI RETIONA INTENSE SERUM", rate: 150, skin: "Dry" },

//   // Moisturizer
//   { category: "Moisturizer", src: moist1, hover: moisthov1, alt: "Moist 1", description: "RICE CREAM DAILY MOISTURIZER", rate: 190, skin: "Oily" },
//   { category: "Moisturizer", src: moist2, hover: moisthov2, alt: "Moist 2", description: "DOT AND KEY CREAMIDE MOISTURIZER", rate: 20, skin: "Normal" },
//   { category: "Moisturizer", src: moist3, hover: moisthov3, alt: "Moist 3", description: "ANUA INTENSE CALMING MOISTURIZER", rate: 90, skin: "Dry" },
//   { category: "Moisturizer", src: moist4, hover: moisthov4, alt: "Moist 4", description: "CERAVE FACIAL MORNING MOISTURIZER", rate: 50, skin: "Normal" },
//   { category: "Moisturizer", src: moist5, hover: moisthov5, alt: "Moist 5", description: "CERAVE CERAMIDE MOISTURIZER", rate: 80, skin: "Oily" },
//   { category: "Moisturizer", src: moist6, hover: moisthov6, alt: "Moist 6", description: "LA ROCHE POSSAY MOISTURIZER", rate: 30, skin: "Dry" },

//   // Sunscreen
//   { category: "Sunscreen", src: sun1, hover: sunhov1, alt: "Sun 1", description: "CENTELLA WATER FIT SUNSCREEN", rate: 150, skin: "Normal" },
//   { category: "Sunscreen", src: sun2, hover: sunhov2, alt: "Sun 2", description: "LA ROCHE POSAY UV SUNSCREEN", rate: 60, skin: "Oily" },
//   { category: "Sunscreen", src: sun3, hover: sunhov3, alt: "Sun 3", description: "DOT AND KEY VIT C SUNSCREEN", rate: 70, skin: "Dry" },
//   { category: "Sunscreen", src: sun4, hover: sunhov4, alt: "Sun 4", description: "BEAUTY OF JOSEON RICE SUNSCREEN", rate: 40, skin: "Normal" },
//   { category: "Sunscreen", src: sun5, hover: sunhov5, alt: "Sun 5", description: "DOT AND KEY WATERMELON SUNSCREEN", rate: 90, skin: "Oily" },
//   { category: "Sunscreen", src: sun6, hover: sunhov6, alt: "Sun 6", description: "MINIMALIST NIACINAMIDE SUNSCREEN", rate: 50, skin: "Dry" },
// ];





// const Product = () => {
//   const [search, setSearch] = useState("");
//   const [category,setcategory]=useState("ALL")
//   const [skin, setSkin] = useState("");
//   const [priceRange, setPriceRange] = useState([0, 500]);

//   const searchproduct = allProducts.filter((item) => {
//     const matchesSearch = item.description.toLowerCase().includes(search.toLowerCase());
//     const matchesCategory = category === "ALL" || item.category === category;
//     const matchesSkin = !skin || item.skin === skin;
//     const matchesPrice = item.rate >= priceRange[0] && item.rate <= priceRange[1];
//    return matchesSearch && matchesCategory && matchesSkin && matchesPrice;
//   });
 
//   const categories=["ALL","Cleanser","Serum","Moisturizer","Sunscreen"]
//   return (
//     <>
//       {/* search */}
//       <div className="mt-5 text-center">
//         <input
//           className="px-4 py-1 border w-4/5 rounded-xl border-black/20 focus:outline-none"
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search your product..."
//         />
//       </div>

//       {/* filter */}
     
//           <div className="mt-4 flex justify-center gap-3 flex-wrap">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setcategory(cat)}
//             className={`px-4 py-1 rounded font-semibold text-black/70   ${
//               category === cat
//                 ? "bg-violet-400 text-white"
//                 : "bg-gray-200 hover:bg-gray-300"
//             }`}
//           > 
//             {cat}
            
//           </button>
          
//         ))}
//       </div>

//  <div className="flex justify-around shadow p-6 m-10 rounded-lg gap-10">
//   {/* Price Filter */}
//   <div className="flex flex-col items-start">
//     <p className="font-semibold mb-2 ">Price</p>
//     <input
      
//       type="range"
//       min="0"
//       max="1000"
//       value={priceRange[1]}
//       onChange={(e) => setPriceRange([0, Number(e.target.value)])}
//       className="w-40 accent-violet-500"
//     />
//     <span className="font-medium text-black/70">Up to ${priceRange[1]}</span>
//   </div>

//   {/* Skin Filter */}
//   <div className="flex flex-col items-start">
//     <p className="font-semibold mb-2">Skin</p>
//     {["Normal", "Oily", "Dry"].map((s) => (
//       <label key={s} className="flex items-center space-x-2 font-medium text-black/70">
//         <input
//           className="accent-violet-500"
//           type="radio"
//           name="skin"
//           checked={skin === s}
//           onChange={() => setSkin(s)}
//         />
//         <span>{s} Skin</span>
//       </label>
//     ))}
//     <button
//       onClick={() => setSkin("")}
//       className="mt-2 text-sm text-white/80 bg-violet-500 px-2 py-1 rounded hover:bg-violet-400"
//     >
//       Clear Skin Filter
//     </button>
//   </div>
// </div>


//       {/* product grid */}
//       <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 place-items-center">
//         {searchproduct.length > 0 ? (
//           searchproduct.map((img, idx) => (
//             <div
//               key={idx}
//               className="relative w-48 md:w-70 md:h-[350px] group bg-white rounded-xl shadow p-3 "
//             >
//               {/* Image */}
//               <div className="relative w-full h-60 ">
//                 <img
//                   src={img.src}
//                   alt={img.alt}
//                   className="absolute inset-0 w-full h-full rounded object-cover transition-opacity duration-300 group-hover:opacity-0"
//                 />
//                 <img
//                   src={img.hover}
//                   alt={img.alt}
//                   className="absolute inset-0 w-full h-full rounded object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//                 />
//               </div>

//               {/* description */}
//               <p className="mt-2 text-center text-sm font-medium text-gray-700">
//                 {img.description}
//               </p>

//               {/* rate & buy */}
//               <div className="mt-2 flex justify-between items-center text-sm text-gray-600">
//                 <p className="font-semibold text-xl">${img.rate}</p>
              
            
//                 <Link to={"/carts"} className="px-6 py-1 bg-violet-400 hover:bg-violet-500 text-white rounded">
//                   Buy
//                 </Link>

              
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-500">
//             No products found
//           </p>
//         )}
//       </div>
//     </>
//   );
// };




// export default Product;






