import React, { useState } from "react";
import SocialLinks from "./socialLinks";
const socialIcons = [
  { name: "Instagram", src: "/icons/instagram.png", link: "https://instagram.com" },
  { name: "WhatsApp", src: "/icons/whatsapp.png", link: "https://wa.me/your-number" },
  { name: "Google Ads", src: "/icons/googleads.png", link: "https://ads.google.com" },
  { name: "ManyChat", src: "/icons/manychat.png", link: "https://manychat.com" },
  { name: "Facebook", src: "/icons/facebook.png", link: "https://facebook.com" },
  { name: "YouTube", src: "/icons/youtube.png", link: "https://youtube.com" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Submitting...");

    try {
      const response = await fetch("https://api.aakashlabs.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          company: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <>
    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"/>
    <section><div className="text-4xl md:text-6xl font-bold text-[#112d58] justify-center text-center mt-20"> Social Links</div>

    <div className=" flex items-center justify-center s">
      
      <SocialLinks />
      
    </div>
    <hr class="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700"/>
    </section>
    <section id="contact">
      <div className="  px-6 md:px-80 py-12 flex flex-col md:flex-row gap-10 mt-10">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-extrabold text-[#031b4e] mb-6 mx-8">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-6 mt-10 mx-8 ">
            We at Aakash Labs can provide you with unparalleled insight and digital marketing analysis. For assistance with any inquiries, or if you require our services, reach out to us at:
          </p>

          <div className="mb-6 flex items-start gap-4 mx-8">
            <img src="../assets/icons/call.svg" alt="" />
            <div>
              <h4 className="font-semibold">Call Us</h4>
              <p>+977-1-4430196</p>
            </div>
          </div>

          <div className="mb-6 flex items-start gap-4 mx-8">
            <img src="../assets/icons/email.svg" alt="" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>info@aakashlabs.com</p>
            </div>
          </div>

          <div className="mb-6 flex items-start gap-4 mx-8">
                      <img src="../assets/icons/address.svg" alt="" />

            <div>
              <h4 className="font-semibold">Address</h4>
              <p>Laxmi Plaza, Putali Sadak, Kathmandu, Nepal</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-extrabold text-[#031b4e] ">
            Drop A Line
          </h2>

          <form className="space-y-4 mt-10" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 bg-blue-100 p-3 rounded outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 bg-blue-100 p-3 rounded outline-none"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 bg-blue-100 p-3 rounded outline-none"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="flex-1 bg-blue-100 p-3 rounded outline-none text-gray-500"
              >
                <option value="">Choose Service</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Web Development">Web Development</option>
                <option value="SEO">SEO</option>
                <option value="Branding">Branding</option>
              </select>
            </div>

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full bg-blue-100 p-3 rounded outline-none"
            />

            <textarea
              name="message"
              placeholder="Message Here"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-blue-100 p-3 rounded outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>

            {/* Status Message */}
            {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
    

    </>
  );
};

export default Contact;
