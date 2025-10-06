import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="w-full bg-slate-900 text-white px-10 pt-8">
      <h2 className="text-3xl text-center">
        Cricket is not just a game, it’s a way of life.” – Sachin Tendulkar
      </h2>
      <div className="quickLinks my-4 flex  justify-around items-start">
        <div className="navLinks ">
          <h3 className="text-2xl font-bold mb-2">Quick Links</h3>
          <div className="grid grid-cols-3 gap-2 text-md text-slate-400">
            <Link to={"/"} className="hover:text-blue-700 hover:underline">
              Home
            </Link>
            <Link to={"/About"} className="hover:text-blue-700 hover:underline">
              About
            </Link>
            <Link
              to={"/Players"}
              className="hover:text-blue-700 hover:underline"
            >
              Players
            </Link>
            <Link to={"/Teams"} className="hover:text-blue-700 hover:underline">
              Teams
            </Link>
            <Link to={"/Stats"} className="hover:text-blue-700 hover:underline">
              Stats
            </Link>
          </div>
        </div>
        <div className="Social ">
          <h3 className="text-center text-2xl font-bold mb-2">Social Media</h3>
          <div className="flex justify-between items-center gap-2 text-lg">
            <Link to="#">
              <FontAwesomeIcon icon={faFacebook} /> FaceBook
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faYoutube} /> Youtube
            </Link>
          </div>
        </div>
        <div className="contact">
          <h3 className="text-center text-2xl font-bold mb-2">Contact</h3>
          <div>
            <p className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} /> indianCricket@gmail.com
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faPhone} /> 1234567890
            </p>
            <form className="mb-2">
              <input
                placeholder="Enter Your email..."
                type="email"
                className="bg-slate-500 px-4 py-1 rounded-tl-lg rounded-bl-lg"
              />
              <button className="py-1 bg-green-600 px-2 rounded-tr-lg rounded-br-lg">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <p className="text-md text-center text-slate-600">
        &copy; 2025 Legends of 22 Yards | All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
