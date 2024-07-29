"use client";
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Team = () => {

    const teamData = [
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
            description: "Desarrollador de software y diseñador UI/UX. Me especializo en crear soluciones de software eficientes e interfaces de usuario intuitivas. Combino habilidades técnicas y de diseño para desarrollar experiencias digitales que sean funcionales y atractivas para los usuarios.",
            image: "https://media-bog2-2.cdn.whatsapp.net/v/t61.24694-24/421156265_367694459158734_2241676125334418376_n.jpg?ccb=11-4&oh=01_Q5AaIOy24U76WwaZ_myFY3VMN76UJyBOZy8w5uztBN61-QdV&oe=66B3EB5C&_nc_sid=e6ed6c&_nc_cat=105"
        },
        {
            name: "Esteban Ortiz",
            descriptionShort: "Descripcion corta",
            description: "Gastrónomo comercial, con énfasis en control de calidad, realizo acompañamientos a restaurantes para la creación de nuevos platos y/o productos del sector con la ayuda de nuevas tecnologías, priorizando la inocuidad y estandarización de los servicios de alimentación, mi responsabilidad se fundamenta en convertir una idea gastronómica en algo sostenible.",
            image: ""
        },

        {
            name: "Juan Diego Ruiz Araque",
            descriptionShort: "Descripcion corta",
            description: "Licenciado en Educación Básica con énfasis en Humanidades y Lengua Castellana del Tecnológico de Antioquia, Magíster en Educación de la Universidad Uniminuto, Magister en Educación del Tecnológico de Monterrey; actualmente, cursa segundo año del Doctorado en Ciencias de la Educación en la Universidad de Cuauhtémoc. <br/><br/> Adicionalmente, posee nueve años de experiencia docente en el sector público, un año de directivo docente en el sector privado y docente universitario. <br/><br/> Maestro de corazón, fiel creyente del quehacer educativo y el desarrollo humano a través del fortalecimiento de los proyectos de vida desde la educación.",
            image: "https://media-bog2-2.cdn.whatsapp.net/v/t61.24694-24/421156265_367694459158734_2241676125334418376_n.jpg?ccb=11-4&oh=01_Q5AaIOy24U76WwaZ_myFY3VMN76UJyBOZy8w5uztBN61-QdV&oe=66B3EB5C&_nc_sid=e6ed6c&_nc_cat=105"
        },

        {
            name: "Melissa Torres Velez",
            descriptionShort: "Descripcion corta",
            description: "Profesional trabajadora social. Con 10 años de experiencia en el sector publico y en la coordinación de programas de desarrollo social y educativo específicamente en la ruralidad. <br/><br/> Me destaco por mi labor administrativa y de ejecución; así como la consolidación de relaciones públicas y redes de apoyo.",
            image: "https://media.licdn.com/dms/image/D5603AQGPGky-q9QoOQ/profile-displayphoto-shrink_800_800/0/1699414987719?e=1727913600&v=beta&t=aPIGoKdVZew_0enHT7c6qjqgXBik02bgHKu8E9iUbb8"
        },

        {
            name: "Marco Antonio Montoya Rave",
            descriptionShort: "Descripcion corta",
            description: "Comunicador audiovisual, con experiencia en la fotografía social y deportes. Apasionado por los deportes extremos, la literatura, los viajes y el reconocimiento del territorio a través del lente donde logra vislumbrar las problemáticas sociales.",
            image: "https://media-bog2-2.cdn.whatsapp.net/v/t61.24694-24/421156265_367694459158734_2241676125334418376_n.jpg?ccb=11-4&oh=01_Q5AaIOy24U76WwaZ_myFY3VMN76UJyBOZy8w5uztBN61-QdV&oe=66B3EB5C&_nc_sid=e6ed6c&_nc_cat=105"
        },

        {
            name: "Juan Sebastián Benjumea Garcés",
            descriptionShort: "Descripcion corta",
            description: "Psicólogo especializado en Gerencia y con una Maestría en Educación. Con más de quince años de experiencia en investigación y dirección de grupos académicos, me destaco en la gestión de riesgos psicosociales en entornos laborales y educativos, promoviendo el bienestar emocional. He trabajado en instituciones como la Universidad Nacional de Colombia y el Tecnológico de Antioquia, liderando proyectos de investigación y programas educativos innovadores. <br/><br/> Además, como editor y autor en revistas científicas, he contribuido al avance de la psicología aplicada. Mi perfil combina habilidades en analítica de datos, comunicación y liderazgo, lo que me permite impactar positivamente en la salud mental y el bienestar de las comunidades educativas y laborales; riesgo psicosociales en grupos de trabajo, entre otros trabajos.",
            image: "https://media-bog2-2.cdn.whatsapp.net/v/t61.24694-24/421156265_367694459158734_2241676125334418376_n.jpg?ccb=11-4&oh=01_Q5AaIOy24U76WwaZ_myFY3VMN76UJyBOZy8w5uztBN61-QdV&oe=66B3EB5C&_nc_sid=e6ed6c&_nc_cat=105"
        }
    ]

    const [selectedPersonIndex, setSelectedPersonIndex] = useState(0);
    const [animate, setAnimate] = useState(false);
    const scrollThreshold = 150; // Umbral de 500px para el cambio de índice
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [accumulatedScroll, setAccumulatedScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const delta = scrollTop - lastScrollTop;

            setAccumulatedScroll((prev) => prev + delta);

            if (Math.abs(accumulatedScroll) >= scrollThreshold) {
                setAnimate(true);
                setTimeout(() => {
                    setSelectedPersonIndex((prevIndex) => {
                        const newIndex = accumulatedScroll > 0
                            ? (prevIndex + 1) % teamData.length
                            : (prevIndex - 1 + teamData.length) % teamData.length;
                        return newIndex;
                    });
                    setAnimate(false);
                }, 300); // La duración debe coincidir con la duración de la animación

                setAccumulatedScroll(0); // Reiniciar el acumulador de desplazamiento
            }

            setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Para móviles o desplazamiento negativo
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop, accumulatedScroll]);

    const handlePersonClick = (index: any) => {
        if (index !== selectedPersonIndex) {
          setAnimate(true);
          setTimeout(() => {
            setSelectedPersonIndex(index);
            setAnimate(false);
          }, 300); // La duración debe coincidir con la duración de la animación
        }
      };

    const selectedPerson = teamData[selectedPersonIndex];

    return (
        <section className='bg-dark relative h-full py-16 px-5 flex items-center justify-center overflow-hidden'>
            <div className="absolute -top-5 w-full bg-gradient-to-b from-dark via-white/5 to-white/10 overflow-hidden h-full rounded-b-full max-w-5xl flex-col"></div>

            <div className='h-full flex flex-col gap-20 text-white w-full max-w-4xl z-10'>
                <div className='flex flex-col gap-2 text-center'>
                    <p className='font-extralight text-lg'>Psicologia</p>
                    <h3 className='font-semibold text-3xl'>Conoce los programas pedagogicos</h3>
                </div>

                <div className='flex justify-between flex-col gap-5'>
                    <h3 className='font-semibold text-2xl'>Equipo de Desarrollo</h3>
                    <div className='flex justify-between gap-5'>
                        <div className='flex flex-col gap-8 w-full border-r border-white/10'>
                            {teamData.map((person, index) => (
                                <div
                                    key={index}
                                    onClick={() => handlePersonClick(index)}
                                    className={`w-full px-4 duration-100 flex gap-5 items-end ${selectedPersonIndex === index ? 'border-l-2 border-white' : 'border-l-2 border-white/0'}`}
                                >
                                    <div className='w-full'>
                                        <h4 className='font-bold text-lg'>{person.name}</h4>
                                        <p className='font-light text-base'>{person.descriptionShort}</p>
                                    </div>

                                    <div className={`duration-300 ${selectedPersonIndex === index && 'rotate-45'}`}>
                                        <ArrowUpRight />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='w-full flex items-center justify-center'>
                            <div className="relative w-full h-full">
                                <div className={`absolute h-full inset-0 transition-opacity duration-300 ${animate ? 'opacity-0' : 'opacity-100'}`}>
                                    <div className={`flex flex-col justify-center gap-5 items-center transition-transform duration-300 ${animate ? 'translate-y-5' : 'translate-y-0'}`}>
                                        <div className='w-full rounded-2xl overflow-hidden'>
                                            <Image src={selectedPerson.image} className='w-full h-full object-cover' alt='Person Team' width={1000} height={1000} />
                                        </div>
                                        <div className='w-full flex flex-col gap-2'>
                                            <h4 className='font-bold text-xl'>{selectedPerson.name}</h4>
                                            <p className='font-light text-sm' dangerouslySetInnerHTML={{ __html: selectedPerson.description }}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team