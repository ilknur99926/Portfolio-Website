"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black text-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-violet-400 text-center">Contact</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-violet-400" />
              <a href="mailto:elbrusqizi@gmail.com" className="hover:underline">
                elbrusqizi@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-violet-400" />
              <a href="tel:+994508577554" className="hover:underline">
                +994 50 857 75 54
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-violet-400" />
              <a
                href="https://www.linkedin.com/in/ilknur-quluzade-949975255/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/ilknur-quluzade
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-violet-400" />
              <a
                href="https://github.com/ilknur99926"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/ilknur99926
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-violet-400" />
              <span>Baku, Azerbaijan</span>
            </div>
          </div>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-gray-900 text-white outline-none focus:ring-2 focus:ring-violet-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-gray-900 text-white outline-none focus:ring-2 focus:ring-violet-500"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 rounded bg-gray-900 text-white outline-none focus:ring-2 focus:ring-violet-500"
            ></textarea>
            <button
              type="submit"
              className="bg-violet-600 hover:bg-violet-700 py-3 rounded text-white font-semibold transition shadow-lg hover:shadow-violet-500/50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
