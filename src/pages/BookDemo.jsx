import React from "react";
import * as Yup from "yup";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ShareInput } from "../Shared/ShareInput";
import { CustomDropDown } from "../Shared/CustomDropDown";
export function BookDemo() {
  const Services = [
    { label: "HIS", value: "his" },
    { label: "ERP", value: "erp" },
    { label: "NPHIES", value: "nphies" },
    { label: "CDSS", value: "cdss" },
  ];
  const initialValues = {
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
      .matches(/^[0-9]+$/, "Only digits allowed")
      .min(9, "Min 9 digits")
      .max(15, "Max 15 digits"),
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
    };

  return (
    <React.Fragment>
      <section className="min-h-screen bg-gray-50 py-12 px-4 sm:px-8 lg:px-20 flex items-center justify-center">
        <div className="max-w-4xl w-full bg-white p-6 sm:p-10 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Book a{" "}
            <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
              Free Demo
            </span>
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Let us show you how Supergit can transform your workflow.
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ShareInput
                  label="First Name"
                  name="name"
                  placeholder="Enter First Name"
                />
                <ShareInput
                  label="Last Name"
                  name="l_name"
                  placeholder="Enter Last Name"
                />
                <Field
                  name="services"
                  label="Select Service"
                  component={CustomDropDown}
                  options={Services}
                  placeholder="Select Service"
                  optionLabel="label"
                />
                <ShareInput
                  label="Phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                />
                <ShareInput label="Date" name="date" type="date" />
                <ShareInput label="Time" name="time" type="time" />
                <ShareInput
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
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
                  rows={4}
                  placeholder="Type your message..."
                  className="w-full border border-gray-300 p-3 rounded-md"
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
                Book Demo
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </React.Fragment>
  );
}
