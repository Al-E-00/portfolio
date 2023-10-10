"use client";

import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import portraitImage from "@/public/portrait.png";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
      id="home"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src={portraitImage}
            alt="Alessio portrait"
            quality={95}
            priority={true}
            className="h-[14rem] w-[14rem] rounded-full border-[0.15rem] border-white bg-white bg-opacity-30 object-cover object-top shadow-xl backdrop-blur-[0.5rem]"
          />
        </motion.div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm Alessio Mazzella. As a{" "}
        <span className="font-bold">Full Stack Web Developer</span>, I focus on
        crafting <span className="font-bold">user-centric</span> digital
        solutions. Dive into my portfolio and see how we can elevate{" "}
        <span className="font-bold">your</span> next project.
      </motion.h1>

      <motion.div
        className="flex flex-col justify-center gap-3 px-2 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          href="/alessio_mazzella_cv.pdf"
          download
          className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/alessio-mazzella/?profileId=ACoAADUol8MB1XTW0hPIvPcD9mwzm8J_bbfah6A"
          target="_blank"
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Al-E-00"
          target="_blank"
          className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.35rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
