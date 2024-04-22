import dcWebsiteImg from "@/public/dc_website.jpeg";
import delivebooImg from "@/public/deliverboo.png";
import whatsappWebsiteImg from "@/public/whatsapp.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Jr Full Stack Web Developer Trainee",
    location: "Remote, IT",
    description:
      "Throughout the academy, I honed my skills in HTML, CSS, JavaScript, Bootstrap, Vue.js, Laravel, MySQL, and PHP, gaining a comprehensive understanding of the web development ecosystem.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Remote, IT",
    description:
      "I serve as a FrontEnd Web Developer, wielding the unique ability to custom-craft components within our digital ecosystem to perfectly align with our clients' visions.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Deliveboo",
    description:
      "It enables restaurateurs to register, publish menus, and accept orders. Clients can browse menus, place orders, and securely pay.",
    tags: ["PHP", "Laravel", "Blade", "Vue.js", "Bootstrap", "CSS"],
    imageUrl: delivebooImg,
  },
  {
    title: "WhatsApp Web Simulation",
    description:
      "I have developed a representation of WhatsApp Web, a web-based version of the popular messaging platform.",
    tags: ["JavaScript", "CSS"],
    imageUrl: whatsappWebsiteImg,
  },
  {
    title: "DC Simulation",
    description:
      "This project showcases the integration of Vue, SCSS, JavaScript, and HTML to create a dynamic and engaging web application.",
    tags: ["Vue.js", "SCSS", "JavaScript"],
    imageUrl: dcWebsiteImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JavaScript",
  "TypeScript",
  "Vue.js",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Laravel",
  "PHP",
  "MySQL",
  "Framer Motion",
] as const;
