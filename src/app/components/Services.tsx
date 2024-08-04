"use client"

import React, { useState, useEffect } from "react";
import { servicesList, typeList } from "../config/list";
import { Card } from "./Card";
import Link from "next/link";

type Service = {
  id: number;
  number: string | number;
  name: string;
  type: string;
  description: string;
};

export const Services = () => {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [animating, setAnimating] = useState(false);

  const selectedType = typeList[selectedTypeIndex].name;

  useEffect(() => {
    setAnimating(true);
    setTimeout(() => {
      if (selectedType === "Todos") {
        setFilteredServices(servicesList);
      } else {
        setFilteredServices(servicesList.filter(service => service.type === selectedType));
      }
      setAnimating(false);
    }, 500); // Duración de la animación de salida
  }, [selectedTypeIndex]);

  return (
    <section className="flex flex-col relative items-center w-full bg-yellowDark min-h-[30rem] px-24 gap-10 pt-20 pb-10 duration-200">
      
      <div className='flex flex-col gap-2 text-start w-full max-w-4xl text-dark'>
        <p className='font-normal text-lg'>Equipo</p>
        <h3 className='font-semibold text-3xl'>Conoce a todo nuestro equipo de trabajo</h3>
      </div>

      <ul className="flex justify-start gap-3 max-w-4xl w-full pt-t z-10">
        {typeList.map((type, index) => (
          <li
            key={type.id}
            className={`cursor-pointer py-2 px-5 rounded-full border-dark border duration-300 ease-in-out
              ${index === selectedTypeIndex ? 'bg-dark text-yellowDark' : 'bg-transparent text-dark'}`}
            onClick={() => setSelectedTypeIndex(index)}
          >
            {type.name}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-2 gap-4 max-w-4xl w-full z-10 duration-200">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            className={`transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}
          >
            <Card
              number={index + 1}
              name={service.name}
              type={service.type}
              description={service.description}
              id={service.id}
            />
          </div>
        ))}
      </div>
      <Link href="/" className='border w-fit py-2 px-6 rounded-full hover:bg-dark hover:text-white duration-200'>Ver más</Link>
    </section>
  );
};
