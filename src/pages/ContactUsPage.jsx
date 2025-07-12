import React from "react";
import { Forms } from "../Components/Contact/Form";

export function ContactUsPage() {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-12 mb-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gray-800">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
              Us
            </span>
          </h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto mb-14">
            Have a question or need help? We’re here to assist you.Far far away,
            behind the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <Forms />
            </div>
            {/* -------------------Contact Info----------------- */}
            <div className="space-y-6 text-gray-700 order-1 md:order-2">
              <div>
                <h4 className="text-xl font-semibold">Address</h4>
                <p>Hira Street, Jeddah KSA,Saudi Arabia.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Phone</h4>
                <p>+966-540-408433</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Email</h4>
                <p>info@supergit.com</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Working Hours</h4>
                <p>We Are Open 24/7</p>
              </div>
              <div className="pt-4 rounded overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.2497620217523!2d39.15979410965655!3d21.615189080102336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3da445134939d%3A0x1313cfaad43fc8a7!2sHira%20St%2C%20Jeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1752209751702!5m2!1sen!2sus"
                  width="100%"
                  height="330"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
