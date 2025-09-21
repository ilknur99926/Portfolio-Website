"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

const logos = [
  <FaHtml5 className="text-orange-500" />,
  <FaCss3Alt className="text-blue-500" />,
  <FaJs className="text-yellow-400" />,
  <SiTypescript className="text-blue-400" />,
  <FaReact className="text-cyan-400" />,
  <SiNextdotjs className="text-white" />,
  <SiTailwindcss className="text-sky-400" />,
  <SiRedux className="text-purple-500" />,
  <FaGitAlt className="text-red-500" />,
  <FaGithub className="text-gray-300" />,
  <FaNodeJs className="text-green-500" />,
  <SiExpress className="text-gray-400" />,
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-black to-gray-900 text-white"
    >
      {/* Profil şəkli */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/me.png"
          alt="İlknur"
          width={160}
          height={160}
          className="rounded-full border-4 border-violet-500 mb-6 shadow-lg"
        />
      </motion.div>

      {/* Başlıq */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-4xl font-bold"
      >
        Hi, I’m İlknur
      </motion.h1>

      {/* Peşə yazısı */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-2 text-lg text-gray-300"
      >
        Frontend Developer
      </motion.p>

      {/* 🔥 Infinite Slider */}
      <div className="overflow-hidden w-full mt-12">
        <motion.div
          className="flex gap-16 text-7xl whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {/* logos.concat(logos) → ikinci dəfə təkrar → boşluq olmur */}
          {logos.concat(logos).map((icon, idx) => (
            <div key={idx} className="flex-shrink-0">
              {icon}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Düymələr */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="mt-12 flex gap-6"
      >
        <Link
          href="#projects"
          className="px-6 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg transition"
        >
          View Projects
        </Link>
        <Link
          href="#contact"
          className="px-6 py-2 border border-violet-600 rounded-lg hover:bg-violet-600/20 transition"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
}
