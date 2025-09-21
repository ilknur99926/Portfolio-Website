"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Sol tərəf: şəkil */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/me.png"
            alt="İlknur"
            width={300}
            height={300}
            className="rounded-lg shadow-lg border-4 border-violet-500"
          />
        </motion.div>

        {/* Sağ tərəf: mətn */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-violet-400">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            I’m İlknur, a passionate Frontend Developer specialized in building
            modern, responsive, and user-friendly web applications with React,
            Next.js, and Tailwind CSS. My goal is to combine clean code with
            beautiful design to create meaningful user experiences.
          </p>

          {/* Statistik qutular */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:shadow-violet-500/40 transition">
              <h3 className="text-3xl font-bold text-violet-400">3+</h3>
              <p className="text-sm">Completed Projects</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:shadow-violet-500/40 transition">
              <h3 className="text-3xl font-bold text-violet-400">1+</h3>
              <p className="text-sm">Years of Experience</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:shadow-violet-500/40 transition">
              <h3 className="text-3xl font-bold text-violet-400">100%</h3>
              <p className="text-sm">Passion for Coding</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center hover:shadow-violet-500/40 transition">
              <h3 className="text-3xl font-bold text-violet-400">Step IT</h3>
              <p className="text-sm">Academy Graduate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
