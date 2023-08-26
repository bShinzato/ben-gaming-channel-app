import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-gray-200 text-black p-2">
      <div className="flex justify-between items-center">
        {/* Tailwind ELEMENTS Section */}
        <div className="w-1/4">
          <h6 className="mb-4 font-semibold uppercase">BenX</h6>
        </div>

        {/* Useful Links section */}
        <div className="w-1/4">
          <h6 className="mb-4 font-semibold uppercase">Useful Links</h6>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://www.instagram.com/benxican/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/your_username/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.tiktok.com/@benxicanx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://www.youtube.com/@benxicanx9914"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400"
            >
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.twitch.tv/benxicanx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400"
            >
              <i class="fa-brands fa-twitch"></i>
            </a>
            <a
              href="https://discordapp.com/users/901596467972702228"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400"
            >
              <i class="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
