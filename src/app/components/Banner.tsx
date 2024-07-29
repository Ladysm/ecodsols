import React from "react";
import Image from "next/image";

export default function Banner() {
  const Images = [
    {
      url: "https://images.pexels.com/photos/24712934/pexels-photo-24712934/free-photo-of-blanco-y-negro-traje-mujer-sentado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      width: 'w-60',
      height: 'h-72'
    },
    {
      url: "https://images.pexels.com/photos/27255532/pexels-photo-27255532/free-photo-of-escaleras-mujer-retrato-vista-superior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 'w-60',
      height: 'h-60'
    },
    {
      url: "https://images.pexels.com/photos/27255532/pexels-photo-27255532/free-photo-of-escaleras-mujer-retrato-vista-superior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 'w-60',
      height: 'h-72'
    },
    {
      url: "https://images.pexels.com/photos/24712934/pexels-photo-24712934/free-photo-of-blanco-y-negro-traje-mujer-sentado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      width: 'w-60',
      height: 'h-60'
    },
    {
      url: "https://images.pexels.com/photos/27255532/pexels-photo-27255532/free-photo-of-escaleras-mujer-retrato-vista-superior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 'w-60',
      height: 'h-72'
    },
    {
      url: "https://images.pexels.com/photos/27255532/pexels-photo-27255532/free-photo-of-escaleras-mujer-retrato-vista-superior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 'w-60',
      height: 'h-60'
    }
  ];

  return (
    <section className="flex justify-center py-20 items-center h-screen w-full text-dark">
      <div className="scrolling-wrapper flex justify-end gap-20 items-center w-full h-screen bg-gradient-to-b from-white via-customYellow/30 to-customYellow/50 overflow-hidden rounded-b-full max-w-7xl flex-col">
        <div className="flex justify-center items-center flex-col text-center gap-4">
          <h2 className="text-4xl font-semibold leading-[50px]">
            Impulsando el Desarrollo <br /> Humano y Sostenible{" "}
          </h2>
          <p className="px-16">
            Innovación social para un mundo mejor: creando soluciones
            sostenibles que empoderan comunidades y transforman vidas.
          </p>
        </div>
        <div className="flex items-center w-full overflow-hidden">
          <div className="scroll-animation flex items-end">

            {Images.concat(Images).map((image, index) => (
              <div key={index} className={`flex bg-white rounded-xl ${image.width} ${image.height} overflow-hidden m-2`}>
                <Image src={image.url} alt={`image-${index}`} width={1000} height={1000} className="w-full h-full object-cover object-top" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
