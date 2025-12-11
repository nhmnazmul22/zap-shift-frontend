import React from "react";

const HowItWorkCard = ({ work }) => {
  return (
    <div className="card rounded-3xl bg-white">
      <div className="p-8 flex flex-col gap-3">
        <span className="text-secondary">
          {<work.icon size={44} color="currentColor" />}
        </span>
        <h4 className="text-xl font-bold text-secondary mt-3">{work.title}</h4>
        <p className="text-base font-medium text-base-200">
          {work.description}
        </p>
      </div>
    </div>
  );
};

export default HowItWorkCard;
