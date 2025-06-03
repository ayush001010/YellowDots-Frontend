import React, { useEffect, useState } from 'react';
import { FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import qrcode from '../assets/images/qrcode.png'; // Adjust path if needed
import Loader from '../components/Loader';

const Contact = () => {

  // Simulate loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s fake delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-black text-white w-full h-[90vh] p-4 md:p-8 overflow-hidden flex flex-col justify-between">

      {/* Top Row */}
      <div className="group cursor-pointer">
          <img
            src={qrcode}
            alt="QR Code"
            className="
              mt-10 
              w-48 h-48
              md:w-[40vh] md:h-[40vh]
              object-contain
              transition-transform duration-300
              group-hover:scale-105
              group-hover:rotate-3
              shadow-lg
              "
          />
        </div>

      {/* Bottom Row - Contact Info */}
      <div className="flex justify-end items-end text-right space-y-6 text-lg md:text-2xl font-light flex-col">
        {/* Phone */}
        <div className="flex items-center justify-end gap-4 group hover:scale-105 transition-all duration-300">
          <FaPhoneAlt className="text-yellow-400 group-hover:text-yellow-300" />
          <span className="group-hover:text-yellow-300 cursor-pointer">+91 6377480099</span>
        </div>

        {/* Email */}
        <div className="flex items-center justify-end gap-4 group hover:scale-105 transition-all duration-300">
          <FaEnvelope className="text-yellow-400 group-hover:text-yellow-300" />
          <span className="group-hover:text-yellow-300 cursor-pointer">Rollcameraedit@gmail.com</span>
        </div>

        {/* Instagram */}
        <div className="flex items-center justify-end gap-4 group hover:scale-105 transition-all duration-300">
          <FaInstagram className="text-yellow-400 group-hover:text-yellow-300" />
          <span className="group-hover:text-yellow-300 cursor-pointer">@Rollcameraedit</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
