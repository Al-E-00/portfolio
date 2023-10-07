"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
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
            src="/portrait.PNG"
            alt="Alessio portrait"
            width={192}
            height={192}
            quality={95}
            priority={true}
            className="h-24 w-24 rounded-full border-[0.15rem] border-white bg-white bg-opacity-50 object-cover object-top shadow-xl backdrop-blur-[0.5rem]"
          />
        </motion.div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm Alessio Mazzella. As a{" "}
        <span className="font-bold">Full Stack Web Developer</span>, I focus on
        crafting <span className="font-bold">user-centric</span> digital
        solutions. Dive into my portfolio and see how we can elevate{" "}
        <span className="font-bold">your</span> next project.
      </motion.p>
    </section>
  );
}
