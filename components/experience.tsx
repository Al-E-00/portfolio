"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";

export default function Experience() {
  const [isExperienceSectionActive, setisExperienceSectionActive] =
    useState(false);
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();
  const { activeSection } = useActiveSectionContext();

  //FIX: the library context/active-section-context should automatically detect
  //the viewport to make the status active, but since this don't happen this is a
  //temporary
  useEffect((): void => {
    if (activeSection === "Experience") {
      setisExperienceSectionActive(true);
    }
  }, [activeSection]);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba (0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background:
                  theme === "light"
                    ? "rgba(255, 255, 255, 0.50)"
                    : "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(.1rem)",
                fontSize: "1.5rem",
              }}
              visible={isExperienceSectionActive}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="!mt-0 font-normal">{experience.location}</p>
              <p className="!mt-0 !font-normal text-gray-700 dark:text-white/75">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
