import React from "react";
import { Forms } from "../Components/Contact/Form";

export function ContactUsPage() {
  return (
    <React.Fragment>
      <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
              Us
            </span>
          </h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
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
                  src="https://www.google.com/maps/embed?pb=..."
                  width="100%"
                  height="260"
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
