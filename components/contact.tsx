"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-[min(100%, 50rem)] mb-20 text-center sm:mb-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-6 text-gray-700">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:alessiomazzella.dev@gmail.com">
          alessiomazzella.dev@gmail.com
        </a>
      </p>
      <form className="mt-10 flex flex-col">
        <input
          className="borderBlack h-14 rounded-lg px-4"
          type="email"
          placeholder="Your email"
        />
        <textarea
          className="borderBlack my-3 h-52 rounded-lg p-4"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="group flex
            h-[3rem] w-[8rem] items-center justify-center gap-2
            rounded-full bg-gray-900 text-white outline-none
            transition-all
            hover:scale-110 hover:bg-gray-950
            focus:scale-110
            active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs
              opacity-70 transition-all
              group-hover:-translate-y-1
              group-hover:translate-x-1"
          />
        </button>
      </form>
    </motion.section>
  );
}
