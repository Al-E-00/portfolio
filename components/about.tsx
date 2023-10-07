"use client";

import React from "react";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";

import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        {" "}
        Diving into <span className="font-medium">web development</span> at
        Boolean was like unlocking a treasure chest for me. I'm hooked on the
        thrill of problem-solving, the eureka moments{" "}
        <span className="italic">when the pieces just click</span>. But it's not
        just about the code. For me, it's like{" "}
        <span className="font-medium">crafting</span> a story—one that makes{" "}
        <span className="italic">our digital world a bit more human</span>.
      </p>
      <p className="mb-3">
        When I'm not immersed in code, I'm often lost in the{" "}
        <span className="font-medium">cinematic universe</span>, awed by the art
        of <span className="font-medium">VFX</span>, or breaking a sweat at the{" "}
        <span className="font-medium">gym</span>. I'm a learner at heart—always
        curious, always exploring.
      </p>
      <p className="mb-3">
        From cinema to coding, there's a common thread: a{" "}
        <span className="font-medium">love for crafting experiences</span>, be
        it on the screen or in the browser. Let's collaborate, share stories,
        and <span className="italic">create something</span> that touches the
        heart.
      </p>
    </motion.section>
  );
}
