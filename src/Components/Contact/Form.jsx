import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { ShareInput } from "../../Shared/ShareInput";
import { CustomDropDown } from "../../Shared/CustomDropDown";
import emailjs from "@emailjs/browser";
import axios from "axios";

export function Forms() {
  const Services = [
    { label: "HIS", value: "his" },
    { label: "ERP", value: "erp" },
    { label: "NPHIES", value: "nphies" },
    { label: "CDSS", value: "cdss" },
  ];

  const initialValues = {
    type: "app",
    name: "",
    l_name: "",
    services: "",
    phone: "",
    date: "",
    email: "",
    time: "",
    message: "",
    company: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("First name is required"),
    email: Yup.string().email().required("Email is required"),
    l_name: Yup.string().required("Last name is required"),
    services: Yup.string().required("Please select a service"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Only digits are allowed")
      .min(9, "Phone number must be at least 9 digits")
      .max(15, "Phone number must be at most 15 digits"),
    date: Yup.string().required("Please select a date"),
    time: Yup.string().required("Please select time"),
    message: Yup.string().required("Please enter a message"),
    company: Yup.string().required("Company name is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        values
      );
      if (response.status === 200) {
        alert("Demo Booked Successfully via SMTP!");
        resetForm();
      } else {
        alert("SMTP booking failed. Try again.");
      }
    } catch (error) {
      console.error("SMTP Error:", error);
      alert("Something went wrong with the SMTP server.");
    }

    // try {
    //   const result = await emailjs.send(
    //     "service_qjsofyl", // 🔁 replace with your actual Service ID
    //     "template_rxdkfp5", // 🔁 replace with your actual Template ID
    //     templateParams,
    //     "woVPuPNNjJKH39O83" // 🔁 replace with your actual Public Key
    //   );

    //   console.log("Email successfully sent!", result.text);
    //   alert("Appointment submitted successfully!");
    //   resetForm();
    // } catch (error) {
    //   console.error("EmailJS Error:", error);
    //   alert("Failed to send email. Please try again later.");
    // }
  };

  return (
    <React.Fragment>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent">
          Free Consultation
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <ShareInput
                label="First Name"
                name="name"
                type="text"
                placeholder="Enter First Name"
              />
              <ShareInput
                label="Last Name"
                name="l_name"
                placeholder="Enter Last Name"
              />
              <Field
                name="services"
                label="Select Our Services"
                component={CustomDropDown}
                options={Services}
                placeholder="Select Our Services"
                optionLabel="label"
              />
              <ShareInput
                label="Phone"
                name="phone"
                placeholder="Enter Phone"
              />
              <ShareInput label="Date" name="date" type="date" />
              <ShareInput label="Time" name="time" type="time" />
              <ShareInput
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
              />
              <ShareInput
                label="Company Name"
                placeholder="Your Company Name"
                name="company"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1 text-gray-700">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                rows={5}
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 rounded-md focus:border-[#fab768] outline-none"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#f14f3e] to-[#fab768] text-white py-3 rounded-md font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Appointment
            </button>
          </Form>
        </Formik>
      </div>
    </React.Fragment>
  );
}
