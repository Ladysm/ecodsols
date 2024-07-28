import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="flex justify-center py-20 items-center h-screen w-full text-dark ">
      <div className=" flex justify-end gap-20 items-center w-full h-screen bg-gradient-to-b from-white via-customYellow/30 to-customYellow/50 overflow-hidden rounded-b-full max-w-7xl flex-col ">
        <div className="flex justify-center items-center flex-col text-center gap-4 ">
          <h2 className="text-4xl font-semibold leading-[50px">
            Impulsando el Desarrollo <br /> Humano y Sostenible{" "}
          </h2>
          <p className="px-16 ">
            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
            Integer a dolor eu sapien sodales vulputate ac in purus.
          </p>
        </div>
        <div className=" flex justify-center gap-5 px items-end">
          <div className="flex bg-white rounded-xl w-60 h-60 overflow-hidden hover:-translate-y-5 duration-200">
            <Image
              className="w-full h-full object-cover object-top"
              src="https://images.pexels.com/photos/24712934/pexels-photo-24712934/free-photo-of-blanco-y-negro-traje-mujer-sentado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="imagen"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex bg-white rounded-xl w-60 h-72 overflow-hidden hover:-translate-y-1 duration-200">
            <Image
              className="w-full h-full object-cover object-top"
              src="https://images.pexels.com/photos/27275090/pexels-photo-27275090/free-photo-of-moda-hombre-amor-gente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="imagen"
              width={1000}
              height={1000}
            />
          </div>{" "}
          <div className="flex bg-white rounded-xl w-60 h-60 overflow-hidden hover:-translate-y-5 duration-200">
            <Image
              className="w-full h-full object-cover object-top"
              src="https://images.pexels.com/photos/27255532/pexels-photo-27255532/free-photo-of-escaleras-mujer-retrato-vista-superior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="imagen"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
