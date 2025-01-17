import React, { useState } from "react";

const FormToWhatsApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phoneNumber, message } = formData;
    const receiverPhone = "919967116720"; // Replace with receiver's WhatsApp number
    const defaultJoinMessage = `${name} wants to join Dahisar Yuva shakti foundation`;

    const whatsappMessage = `${defaultJoinMessage}\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message}`;

    // Redirect to WhatsApp Web with pre-filled message
    window.open(
      `https://wa.me/${receiverPhone}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen lg:mt-[30px] ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 rounded-md p-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-md p-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="w-full border border-gray-300 rounded-md p-2"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border border-gray-300 rounded-md p-2"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
        >
          Send to WhatsApp
        </button>
      </form>
    </div>
  );
};

export default FormToWhatsApp;
