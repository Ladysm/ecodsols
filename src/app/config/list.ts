export interface Services {
  id: number;
  number: string;
  name: string;
  type: string;
  description: string;
}

export interface Types {
  id: number;
  name: string;
}


export const typeList: Types[] = [
  {
    id: 1,
    name: "psychological"
  },
  {
    id: 2,
    name: "logistic"
  },
  {
    id: 3,
    name: "engineer"
  },
  {
    id: 4,
    name: "development"
  }
]

export const servicesList: Services[] = [
  {
    id: 1,
    number: "01",
    name: "Programas de reintegración social, atención integral y apoyo, y procesos de intervención psicosocial a personas con problemas de adicción a sustancias psicoactivas, bebidas alcohólicas y enfermedades mentales en terapias extramurales",
    type: "psychological",
    description: "El $ Valor $ se dará de conformidad con las especificaciones del programa"
  },
  {
    id: 2,
    number: "02",
    name: "Talleres, formaciones, asesorías, y actividades de prevención, en drogadicción, alcoholismo por parte de Especialistas",
    type: "psychological",
    description: "$ 500.000 pesos en el Valle de Aburrá por cada 2 horas"
  },
  {
    id: 3,
    number: "03",
    name: "Realización de actividades de rehabilitación a víctimas de violencia o habitantes de calle, a través de Especialistas para su resocialización",
    type: "psychological",
    description: "$ 200.000 pesos en el Valle de Aburrá por cada hora"
  },
  {
    id: 4,
    number: "04",
    name: "Desarrollo de actividades lúdicas, recreativas y la integración en trabajos de grupo para personas que lo necesiten en su proceso de formación, rehabilitación e integración a la sociedad",
    type: "psychological",
    description: "$ 500.000 pesos en el Valle de Aburrá por cada 2 horas"
  },
  {
    id: 5,
    number: "05",
    name: "Atención Psicológica Especializada en Adicciones",
    type: "psychological",
    description: "$130.000 pesos en el Valle de Aburrá por sesión de 50 minutos"
  },
  {
    id: 6,
    number: "06",
    name: "Atención Psicológica",
    type: "psychological",
    description: "$50.000 pesos sesión virtual"
  },
  {
    id: 7,
    number: "07",
    name: "Paquete de 5 sesiones de atención psicológica Especializada en Adicciones",
    type: "psychological",
    description: "$550.000 pesos en el Valle de Aburrá y cada sesión será de 50 minutos"
  },
  {
    id: 8,
    number: "08",
    name: "Paquete de 5 sesiones de atención psicológica",
    type: "psychological",
    description: "$220.000 pesos y cada sesión será de forma virtual. En caso de requerirse atención presencial, cada una de las sesiones tendrá un costo de $100.000 pesos"
  },
  {
    id: 9,
    number: "12",
    name: "Desarrollo de eventos logísticos y suministro para fiestas, conciertos musicales, reuniones sociales, celebraciones culturales, agasajos para entidades públicas y privadas",
    type: "logistic",
    description: "El $ Valor $ se dará de conformidad con las especificaciones del programa"
  },
  {
    id: 10,
    number: "13",
    name: "Promoción e implementación de proyectos y campañas psicopedagógicas",
    type: "logistic",
    description: "El $ Valor $ se dará de conformidad con las especificaciones del programa"
  },
  {
    id: 11,
    number: "10",
    name: "Realización de proyectos en Investigación y asistencia en estudios técnicos, científicos, políticos, culturales y sociales, como también la formulación, diseño y ejecución de los diferentes planes, programas, proyectos y obras de diversos sectores",
    type: "engineer",
    description: "El $ Valor $ se dará de conformidad con las especificaciones del programa"
  },
  {
    id: 12,
    number: "11",
    name: "Proyectos de usos de suelos, y demás obras de ingeniería civil y arquitectura, consultoría, asesoría e interventoría, diseño y construcción de acueductos, alcantarillados, y demás obras",
    type: "engineer",
    description: "El $ Valor $ se dará de conformidad con las especificaciones del programa"
  },
  {
    id: 13,
    number: "01",
    name: "Diseño e Implementación de páginas Web con Dominio y correo incluido",
    type: "development",
    description: "Diseño y desarrollo de páginas web personalizadas, incluyendo la configuración del dominio y correos electrónicos profesionales. Precio: $1.000.000."
  },
  {
    id: 14,
    number: "02",
    name: "Desarrollo de aplicaciones móviles",
    type: "development",
    description: "Desarrollo de aplicaciones móviles a medida para diversas plataformas, optimizadas para rendimiento y experiencia del usuario."
  },
  {
    id: 15,
    number: "03",
    name: "Desarrollo de aplicaciones móviles y web",
    type: "development",
    description: "Desarrollo integral de aplicaciones tanto móviles como web, adaptadas a las necesidades del cliente, con enfoque en funcionalidad, usabilidad y diseño atractivo."
  }
];

