import React from "react";
import { ShareButton } from "../Shared/ShareButton";

export function ContactSection() {
  return (
    <React.Fragment>
      <footer className="bg-black text-gray-300 px-10 pt-16 pb-4 rounded-t-4xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-10">
          <div>
            <h3 className="text-xl font-semibold mb-8 text-white">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#hero" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-white">
                  Modules
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-8 text-white">Resources</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="#faq" className="hover:text-white    ">FAQs</a></li>
              <li><a href="#terms" className="hover:text-white  ">Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#support" className="hover:text-white">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-8 text-white">
              Contact Us:
            </h3>
            <p className="mb-5 text-sm flex space-x-2"> <i className="pi pi-envelope"></i><span> Email: supergit@gmail.com</span></p>
            <p className="mb-5 text-sm flex space-x-2"><i className="pi pi-phone"></i> <span>Phone: +92-348-0095267 </span> </p>
            <p className="mb-4 text-sm flex space-x-2"> <i className="pi pi-map-marker"></i><span> Address: Gujranwala, Pakistan </span></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-8 text-white">Feedback</h3>
            <form>
              <textarea
                className="w-full p-2 rounded  text-white border border-white mb-2"
                rows="3"
                placeholder="Your feedback..."
              ></textarea>
              <ShareButton
                label="Submit"
                variant="transparent"
                className="!px-8 !py-2 hover:!bg-gradient-to-r from-[#f14f3e] to-[#fab768] hover:!text-white hover:!border-transparent"
              />
            </form>
          </div>
        </div>
        <div className="border-t border-white pt-4 text-center text-sm text-white mt-6">
          &copy; {new Date().getFullYear()} Supergit v3.0.1 — All rights
          reserved.
        </div>
      </footer>
    </React.Fragment>
  );
}
