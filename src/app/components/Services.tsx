"use client"

import React, { useState } from "react";
import { servicesList, typeList } from "../config/list";
import { Card } from "./Card";
export const Services = () => {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);

  const selectedType = typeList[selectedTypeIndex].name;

  const filteredServices = servicesList.filter(service => service.type === selectedType);

  return (
    <section className="flex flex-col  items-center h-full w-full bg-yellowDark px-24 gap-10 pb-10 ">
      <div className=" t-0 bg-custom-gradient-vertical items-center justify-center flex flex-col h-4/5 py-56 px-8 w-full max-w-7xl rounded-b-full rounded-3xl gap-3">
        <h2 className="text-5xl text-center font-semibold leading-tight">

          Conoce nuestros
          <br /> <p className="text-4xl leading-8">servicios psicológicos</p>
        </h2>
      </div>

      <ul className="flex justify-between gap-5 max-w-4xl w-full">
        {typeList.map((type, index) => (
          <li
            key={type.id}
            className={index === selectedTypeIndex ? 'border-b' : ''}
            onClick={() => setSelectedTypeIndex(index)}
          >
            {type.name}
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center items-center gap-4 max-w-4xl w-full">
        {filteredServices.map((service, index) => (
          <Card
            key={service.id}
            number={service.number}
            name={service.name}
            type={service.type}
            description={service.description}
            id={service.id} />
        ))}
      </div>
    </section>
  );
};
