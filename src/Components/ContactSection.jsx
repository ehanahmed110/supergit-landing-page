import React from "react";
import { ShareButton } from "../Shared/ShareButton";
import { Form, Formik } from "formik";
import { ShareInput } from "../Shared/ShareInput";
import * as Yup from "yup";
import axios from "axios";

export function ContactSection() {
  return (
    <React.Fragment>
      <footer className="bg-black text-gray-300 px-6 md:pl-20  pt-16 pb-4 rounded-t-4xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-2 gap-8 mb-10">
          <div className="order-1 lg:order-3">
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

          <div className="order-3 lg:order-2">
            <h3 className="text-xl font-semibold mb-8 text-white">Resources</h3>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a href="#faq" className="hover:text-white    ">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white  ">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="order-4 lg:order-2">
            <h3 className="text-xl font-semibold mb-8 text-white">
              Contact Us:
            </h3>
            <p className="mb-5 text-sm flex space-x-1">
              {" "}
              <i className="pi pi-envelope"></i>
              <span>info@supergit.com</span>
            </p>
            <p className="mb-5 text-sm flex space-x-1">
              <i className="pi pi-phone"></i> <span>+92-348-0095267 </span>{" "}
            </p>
            <p className="mb-4 text-sm flex space-x-1">
              {" "}
              <i className="pi pi-map-marker"></i>
              <span>Hira Street, Jeddah,Saudi Arabia. </span>
            </p>
          </div>
          <div className="order-2 lg:order-1">
            <h3 className="text-xl font-semibold mb-6  text-white">
              Social Links
            </h3>
            <div className="mb-4">
              <p className="flex gap-x-6 md:gap-x-8 ">
              <i className="pi pi-facebook cursor-pointer"></i>{" "}
                <i className="pi pi-instagram cursor-pointer"></i>{" "}
                <i className="pi pi-twitter cursor-pointer"></i>{" "}
                 <a href="https://www.linkedin.com/company/supergit-sa/posts/?feedView=all" target="_blank"> <i className="pi pi-linkedin cursor-pointer"></i></a>
              </p>
            </div>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email format")
                  .required("Email is required"),
              })}
              onSubmit={async (values, { resetForm }) => {
                try {
                  await axios.post("http://localhost:5000/send-email", {
                    email: values.email, // only email field
                  });
                  alert("Subscribed successfully!");
                  resetForm();
                } catch (err) {
                  alert("Subscription failed.");
                }
              }}
            >
              <Form className="flex gap-4  flex-col">
                <div className=" md:w-[80%]">
                  <ShareInput
                    placeholder="Your Email here......"
                    name="email"
                    className="!bg-transparent focus:!border-white hover:!border-white !text-white placeholder:!text-white"
                  />
                </div>
                <div>
                  <ShareButton
                    type="submit"
                    label="Subsribe"
                    variant="transparent"
                    className="!px-8 !py-2 !text-white !bg-gradient-to-r from-[#f14f3e] to-[#fab768] hover:!text-white hover:!border-transparent border-[#fab768]"
                  />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
        <div className="border-t border-white pt-4 text-center text-sm text-white mt-6">
          {new Date().getFullYear()} &copy; SuperGit — All rights reserved.
        </div>
      </footer>
    </React.Fragment>
  );
}
