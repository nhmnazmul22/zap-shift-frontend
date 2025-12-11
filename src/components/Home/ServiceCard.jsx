import React from "react";
import serviceIcon from "../../assets/service.png";

const ServiceCard = ({ service }) => {
  return (
    <div className="card rounded-3xl bg-white hover:bg-primary transition-all duration-300 cursor-pointer">
      <div className="p-8 flex flex-col gap-3 text-center">
        <figure className="w-18 h-18 p-3 bg-[linear-gradient(180deg,#EEEDFC_0%,rgba(238,237,252,0)_100%)] rounded-full mx-auto">
          <img src={serviceIcon} alt={service.title} />
        </figure>
        <h4 className="text-xl font-bold text-secondary mt-3">
          {service.title}
        </h4>
        <p className="text-base font-medium text-base-200">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
