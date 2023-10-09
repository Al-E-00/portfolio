"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const [isExperienceSectionActive, setisExperienceSectionActive] =
    useState(false);

  const { ref } = useSectionInView("Experience", 0.5);
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
    <section ref={ref} id="experience" className="mt-28 scroll-mt-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba (0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
              visible={isExperienceSectionActive}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="!mt-0 font-normal">{experience.location}</p>
              <p className="!mt-0 !font-normal text-gray-700">
                {experience.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
