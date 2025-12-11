import React from "react";

const SectionHeading = ({
  title,
  subTitle,
  containerClass,
  titleClass,
  subTitleClass,
}) => {
  return (
    <div className={`max-w-3xl mx-auto px-2 text-center ${containerClass}`}>
      <h4 className={`text-4xl font-extrabold text-secondary ${titleClass}`}>
        {title}
      </h4>
      <p className={`text-base text-base-200 mt-6 ${subTitleClass}`}>
        {subTitle}
      </p>
    </div>
  );
};

export default SectionHeading;
