import React from "react";
import { useNavigate } from "react-router-dom"
export function HeroDemo() {
   const navigate = useNavigate()
  return (
    <React.Fragment>
   <div className="min-h-[80vh] bg-gradient-to-r from-[#f14f3e] to-[#fab768] flex text-white justify-center items-center px-6 text-center">
  <div className="max-w-3xl flex flex-col items-center gap-6">
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-[0_10px_4px_rgba(0,0,0,0.35)]">
      Experience <span className="text-yellow-200 italic">SuperGit</span> in Action
    </h1>
    <p className="text-lg opacity-90">
      Discover how our modular healthcare system <span className="font-semibold">streamlines operations</span>, 
      <span className="font-semibold"> automates claims</span>, and empowers smarter decisions through 
      <span className="font-semibold"> HIS, ERP, CDSS, and NPHIES integration</span>.
    </p>
    <div className="flex flex-wrap gap-4 mt-4 justify-center">
      <button onClick={()=>navigate('/demovideo')} className="bg-white text-[#f14f3e] font-semibold px-6 py-2 rounded-full shadow hover:bg-yellow-100 transition">
        Try Live Demo
      </button>
      <button onClick={()=>navigate('/bookdemo')}  className="bg-[#00000022] border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#f14f3e] transition">
        Book a Demo
      </button>
    </div>
  </div>
</div>
    </React.Fragment>
  );
}
