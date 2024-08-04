"use client";
import { AlignLeft, ArrowUpRight, CameraOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

interface TeamMember {
    name: string;
    descriptionShort: string;
    description: string;
    image: string;
}

const Team = () => {

    const Team: TeamMember[] = [
        {
            name: "Juan Esteban Tirado Benjumea",
            descriptionShort: "Descripcion corta",
            description: "Psicólogo especialista en intervenciones psicosociales, especialista en Adicciones y Magíster en Educación. <br/><br/> Con 6 años de experiencia en el ámbito público, pasando por hospitales, secretarías de salud, clínicas de rehabilitación, secretaría de la mujer y la familia y el referente de prevención de adicciones del Distrito de Medellín para el año 2022 y 2023. <br/><br/> Apasionado por el trabajo social, por las comunidades, y por hacer frente a la problemática de las adicciones",
            image: "https://media.licdn.com/dms/image/D4E03AQF-KR5WxdhAbg/profile-displayphoto-shrink_800_800/0/1700488556443?e=1727913600&v=beta&t=LhtUKUQNtQnUKal7AEeOMlq8lcZOebuPGNj_rXBIjek"
        },
        {
            name: "Tomas Buriticá Vasquez",
            descriptionShort: "Descripcion corta",
            description: "Ingeniero Geólogo de la Universidad Nacional de Colombia, con amplia experiencia en Geotecnia y gestión del riesgo. <br/><br/> Ha trabajado en el Desierto de Atacama en Chile, en Córdova, y actualmente se desempeña en la Secretaría de Planeación del Municipio de Caldas. Apasionado por las artes y por el trabajo social con las comunidades más vulnerables.",
            image: "https://media.licdn.com/dms/image/D4E03AQE2658rRkR5LQ/profile-displayphoto-shrink_800_800/0/1690346181304?e=1727913600&v=beta&t=KN5kjnrm9WG5wD2glknFz9xQHs9UO28Yft0HHWq6X8I"
        },
        {
            name: "María José Botero Ariza",
            descriptionShort: "Descripcion corta",
            description: "Soy una persona responsable, puntual, con buen manejo de relaciones interpersonales y facilidad para trabajar en equipo. Me desempeño muy bien al momento de atender a las personas ya que en trabajos anteriores he tenido la oportunidad de hacerlo y me describen como alguien muy amable. <br/> <br/> Soy alguien que siempre quiere hacer aportes en pros de mejorar, buscando un beneficio mutuo. <br/> <br/>   Actualmente estudió Administración de empresas agropecuarias.",
            image: "https://media-bog2-2.cdn.whatsapp.net/v/t61.24694-24/421156265_367694459158734_2241676125334418376_n.jpg?ccb=11-4&oh=01_Q5AaIOy24U76WwaZ_myFY3VMN76UJyBOZy8w5uztBN61-QdV&oe=66B3EB5C&_nc_sid=e6ed6c&_nc_cat=105"
        },
        {
            name: "Leidy Suarez Miranda",
            descriptionShort: "Frontend Developer & Psychology",
            description: "Desarrolladora de software y psicóloga con experiencia en desarrollo frontend. Actualmente me desempeño como desarrolladora en Mulesoft. Apasionada por utilizar la tecnología para generar un impacto social positivo.",
            image: "https://media.licdn.com/dms/image/D4E03AQGXLdw0v5Vo2A/profile-displayphoto-shrink_800_800/0/1694787857893?e=1727913600&v=beta&t=KJJzvi-ATFhMdwqrpAPq1jxOYHMf9tHr1exmmS8Gba4"
        },
        {
            name: "Sebastián Giraldo",
            descriptionShort: "FullStack Developer & UI/UX",
            description: "Desarrollador de software y diseñador UI/UX. Me especializo en crear soluciones de software eficientes e interfaces de usuario intuitivas. <br/><br/> Combino habilidades técnicas y de diseño para desarrollar experiencias digitales que sean funcionales y atractivas para los usuarios.",
            image: "https://media-bog2-2.cdn.whatsapp.net/v/t61.24694-24/421156265_367694459158734_2241676125334418376_n.jpg?ccb=11-4&oh=01_Q5AaIOy24U76WwaZ_myFY3VMN76UJyBOZy8w5uztBN61-QdV&oe=66B3EB5C&_nc_sid=e6ed6c&_nc_cat=105"
        }
    ]


    const [activeIndex, setActiveIndex] = useState<number>(0);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
                    setActiveIndex(index);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section className='relative px-5 flex items-center justify-center h-full py-20'>
            {/* <div className="w-full absolute top-0 bg-gradient-to-b from-white/10 via-yellow/5 to-yellow/10 h-[99%] rounded-b-full max-w-5xl"></div> */}
            
            <div className='h-full flex flex-col gap-20 text-dark w-full max-w-4xl z-10'>
                <div className='flex flex-col gap-2 text-center'>
                    <p className='font-extralight text-lg'>Equipo</p>
                    <h3 className='font-semibold text-3xl'>Conoce a todo nuestro equipo de trabajo</h3>
                </div>

                <div className='flex justify-between gap-20 h-full'>
                    <div className='sticky top-28 self-start flex flex-col gap-8 w-2/5 duration-200'>
                        <ul className='flex flex-col gap-7'>
                            {Team.map((item, index) => (
                                <li key={index} className={`transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-50'}`}>
                                    <h2 className='font-semibold'>
                                        <span className='font-bold text-2xl pe-2'>{index +1}</span>{item.name}</h2>
                                    <p className='font-extralight'>{item.descriptionShort}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='w-3/4 flex flex-col gap-20'>
                        {Team.map((item, index) => (
                            <div
                                key={index}
                                className='w-full flex flex-col gap-3'
                                ref={(el) => {
                                    itemRefs.current[index] = el;
                                }}
                            >
                                {item.image ? (
                                    <Image className='w-40 h-40 rounded-xl' src={item.image} alt={item.name} width={800} height={800} />
                                ) : (
                                    <div className='border border-white/10 rounded-xl w-40 h-40 flex items-center justify-center'>
                                        <CameraOff size={30} />
                                    </div>
                                )}
                                <h3 className='font-semibold text-xl'>{item.name}</h3>
                                <div className='flex gap-3 items-start'>
                                    <ul className='list-disc'>
                                        <li className='' dangerouslySetInnerHTML={{ __html: item.description }}></li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Link href="/" className='border w-fit py-2 px-6 rounded-full hover:bg-dark hover:text-white duration-200'>Ver más</Link>
            </div>
        </section>
    )
}

export default Team