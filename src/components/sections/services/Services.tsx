import React from "react";
import { SERVICES } from "../../../constants/services";
import { ServiceCard } from "../../shared";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {SERVICES.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
