/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = ({portfolioData}) => {
  console.log("Contact",portfolioData);

  return (
    <div className="relative w-full max-w-4xl p-6 mt-8 rounded-lg shadow-lg bg-blue-100/10 backdrop-blur-sm md:p-12 ">
      <div className="text-center">
        <h1 className="mb-4 text-2xl text-white">Connect:</h1>
        <div className="flex justify-center space-x-6 transition-transform duration-300 hover:scale-110">
        <a
            href={`tel:${portfolioData.contactPhone}`}
            className="pt-1 text-2xl text-blue-600 hover:text-blue-400"
          >
            <FaPhoneAlt />
          </a>
          <a
            href={`mailto:${portfolioData.contactEmail}`}
            className="text-3xl text-blue-600 hover:text-blue-400"
          >
            <FaEnvelope />
          </a>
          <a
            href={`https://wa.me/${portfolioData.contactWhatsApp}`}
            className="text-3xl text-blue-600 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href={`https://www.linkedin.com/in/${portfolioData.contactLinkedIn}`}
            className="text-3xl text-blue-600 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
