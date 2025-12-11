import React from "react";
import SectionHeading from "../../../components/common/SectionHeading";
import { ourServices } from "../../../constants";
import ServiceCard from "../../../components/Home/ServiceCard";

const OurServices = () => {
  return (
    <section className="pt-20 pb-10 bg-secondary rounded-2xl">
      <div className="max-w-7xl px-3 mx-auto py-10">
        <SectionHeading
          title="Our Services"
          subTitle="Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business
          shipments — we deliver on time, every time."
          titleClass="text-white"
          subTitleClass="text-base-100!"
        ></SectionHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {ourServices.map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
