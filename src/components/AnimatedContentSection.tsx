import React from "react";
import MotionText from "./MotionText";
import Link from "next/link";

interface ContentSectionProps {
  title: string;
  description?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  button?: string;
  textColor?: string;
  headingSize?: string;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  buttonLink?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  alignment = "center",
  className = "",
  button,
  headingSize,
  textColor,
  headingLevel = "h2",
  buttonLink,
}) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const HeadingTag = headingLevel;

  return (
    <section className={className}>
      <div className={alignmentClasses[alignment]}>
        <MotionText delay={0}>
          <HeadingTag
            className={`${textColor || "text-white"} font-semibold ${
              headingSize || "text-3xl"
            } mb-2`}
          >
            {title}
          </HeadingTag>
        </MotionText>
        {description && (
          <MotionText delay={0.3}>
            <p className={`${textColor || "text-white"} font-light`}>
              {description}
            </p>
          </MotionText>
        )}
        {button && (
          <MotionText delay={0.6}>
            <Link
              className="btn btn-sm btn-primary rounded-lg font-bold mt-4"
              href={buttonLink ? buttonLink : ""}
            >
              {button}
            </Link>
          </MotionText>
        )}
      </div>
    </section>
  );
};

export default ContentSection;
