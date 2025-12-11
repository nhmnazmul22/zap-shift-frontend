import React from "react";
import { HowItWorksData } from "../../../constants";
import HowItWorkCard from "../../../components/Home/HowItWorkCard";

const HowItWork = () => {
  return (
    <section className="pt-20 pb-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-secondary">How it Work</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {HowItWorksData.map((work) => (
          <HowItWorkCard key={work.id} work={work}></HowItWorkCard>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
