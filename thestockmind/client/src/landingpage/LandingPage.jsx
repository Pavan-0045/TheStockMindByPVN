import React from "react";
import { FiArrowRight } from "react-icons/fi";


const features = [
  {
    title: "Order Management",
    description:
      "Efficiently manage all your sales and purchasing activities with our platform. Handle invoices and bills seamlessly while tracking payments with ease.",
    iconSrc: "/src/assets/LandingPage/order.png",
  },
  {
    title: "Warehouse Management",
    description:
      "Centrally manage your stock across multiple warehouses and generate detailed reports specific to each warehouse.",
    iconSrc: "/src/assets/LandingPage/Warehouse.png",
  },
  {
    title: "Inventory Tracking",
    description:
      "Meticulously monitor a wide range of inventory items and effortlessly track item movements, transfer products between locations",
    iconSrc: "/src/assets/LandingPage/Inventory.png",
  },
  {
    title: "Reports & Analytics",
    description:
      "Access a variety of reports and gain insights into inventory aging, vendor payments, sales details",
    iconSrc: "/src/assets/LandingPage/Reports.png",
  },
];

const images = [
  "/src/assets/LandingPage/bg.png",
  "/src/assets/LandingPage/bg2.png",
  "/src/assets/LandingPage/bg3.png",
  "/src/assets/LandingPage/bg2.png",
   "/src/assets/LandingPage/bg3.png",
];

const LandingPage = () => {
  return (

    
    <div className="w-full min-h-screen bg-white font-sans overflow-x-hidden relative">
  {/* Navbar */}
  <nav className="w-full flex justify-start items-center px-6 py-4 fixed top-0 left-0 z-50 bg-white shadow-md">
    <img
      src="/src/assets/LandingPage/Logo.png"
      alt="Logo"
      className="w-48 sm:w-60 h-8 object-contain"
      
    />
    
  </nav>


  {/* Sing in */}

<button
  className="fixed top-4 right-4 sm:top-2 sm:right-25 px-4 sm:px-6 py-2 sm:py-3 bg-[#6941C6] text-white rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-3 hover:bg-[#5a34b0] transition z-50"
>
  Sign in
    <FiArrowRight className="h-4 w-4" />
</button>


{/* Background Section with Heading */}
<div className="relative w-full h-70 sm:h-85 mt-30 overflow-hidden">
  {/* Background images */}
  <div className="absolute inset-0 flex w-full h-full">
    {images.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`background-${idx + 1}`}
        className="w-full sm:w-1/2 md:w-1/5 h-full object-cover pointer-events-none select-none"
        style={{ userSelect: "none" }}
       //draggable={false}
      />
    ))}
  </div>


  
  <div
className="absolute inset-0 top-1/2 -translate-y-1/2 flex justify-center"
    // className="absolute inset-0 flex justify-center"
    //  style={{ top: "50%", transform: "translateY(-50%)" }}
  >
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
      <h2
        className="text-center font-outfit font-medium text-transparent bg-linear-to-r from-[#712020] to-[#384897] bg-clip-text select-none tracking-tight wrap-break-word
          text-2xl sm:text-sm md:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl
          leading-snug sm:leading-relaxed md:leading-9 lg:leading-11 xl:leading-13 2xl:leading-15
          max-w-full sm:max-w-175 md:max-w-225 lg:max-w-275 xl:max-w-301.25 mx-auto"
      >
        Technology doesn’t have to feel like a different language
      </h2>
    </div>
  </div>

 
  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-full px-2 mb-8">
    <p className="text-center text-black font-outfit font-medium text-base sm:text-lg md:text-xl lg:text-[22px] leading-tight tracking-tight w-full max-w-[928px] mx-auto select-none wrap-break-word">
      Simplified inventory management to drive business growth and strategically scale operations
    </p>
  </div>
</div>



      {/* Features and Dashboard Section */}
      <div className="w-full flex flex-col md:flex-row justify-start items-start gap-10 mb-10 px-6">
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 w-full max-w-none">
          {features.map(({ title, description, iconSrc }) => (
            <div key={title} className="flex gap-4">
              <img
                src={iconSrc}
                alt={`${title} icon`}
                className="w-8 h-8 object-contain text-purple-600"
              />
              <div>
                <h3 className="text-purple-600 font-semibold mb-1 text-2xl">{title}</h3>
                <p className="text-black text-xl font-normal leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        

{/* Dashboard Image */}

<div className="w-full max-w-7xl mx-auto px-4">
  <div className="aspect-video">
    <img
      src="/src/assets/LandingPage/dashboard.png"
      alt="Dashboard"
      className="w-full h-full rounded-lg object-cover"
    />
  </div>
</div>
  </div> 
      

      {/* Footer Spacer */}
      <div className="h-20 mb-1" />

      {/* Footer */}
      <footer className="text-purple-600 text-xl md:text-base px-6 py-4 select-none absolute bottom-0 left-0">
        © TheStockMind 2024
      </footer>
    </div>
  );
};

export default LandingPage;





