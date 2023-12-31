import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="font-medim mb-8 text-center text-3xl capitalize">
      {children}
    </h2>
  );
}
