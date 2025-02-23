import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <section
      className={`w-full max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-6 md:py-12 ${className}`}
    >
      {children}
    </section>
  );
}
