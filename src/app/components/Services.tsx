import React from "react";
import { SERVICES } from "../config/list";
import { Card } from "./Card";
export const Services = () => {
  return (
    <section className="flex flex-col  items-center h-full w-full bg-yellowDark px-24 gap-10 ">
      <div className=" t-0 bg-custom-gradient-vertical items-center justify-center flex flex-col h-4/5 py-56 px-8 w-full max-w-7xl rounded-b-full rounded-3xl gap-3">
        <h2 className="text-5xl text-center font-semibold leading-tight">
          
          Conoce nuestros
          <br /> <p className="text-4xl leading-8">servicios psicológicos</p>
        </h2>
      </div>
     <div className="flex flex-col justify-center items-center gap-4">
      {SERVICES.map((service, index) => (
        <Card
          key={index}
          number={service.number}
          titule={service.name}
          description={service.description}
        />
      ))}
      </div>
    </section>
  );
};
