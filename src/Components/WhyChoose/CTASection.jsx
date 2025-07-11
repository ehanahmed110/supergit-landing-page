import React from 'react'

export function CTASection() {
    

    return (
        <React.Fragment>
             <div className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl font-semibold mb-2">
          Ready to Transform Your SuperGit Modules?
        </h3>
        <p className="mb-4">
          Join 20+ healthcare providers using SuperGit today.
        </p>
        <button className="bg-white text-[#f14f3e] font-bold py-2 px-6 rounded-full hover:opacity-90 transition cursor-pointer  ">
          Request a Demo
        </button>
      </div>
        </React.Fragment>
    )
}
