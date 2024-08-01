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
    name: "research"
  },
  {
    id: 2,
    name: "engineering"
  },
  {
    id: 3,
    name: "reintegration"
  },
  {
    id: 4,
    name: "prevention"
  },
  {
    id: 5,
    name: "rehabilitation"
  }

]

export const servicesList: Services[] = [
  {
    id: 1,
    number: "01",
    name: "Realización de proyectos en Investigación y asistencia en estudios técnicos, científicos, políticos, culturales y sociales",
    type: "research",
    description:
      "Realización de proyectos en Investigación y asistencia en estudios técnicos, científicos, políticos, culturales y sociales, como también la formulación, diseño y ejecución de los diferentes planes, programas, proyectos y obras de diversos sectores. (El $ Valor $ se dará de conformidad con las especificaciones del programa)",
  },
  {
    id: 2,
    number: "02",
    name: "Proyectos de usos de suelos, y demás obras de ingeniería civil y arquitectura",
    type: "engineering",
    description:
      "Proyectos de usos de suelos, y demás obras de ingeniería civil y arquitectura, consultoría, asesoría e interventoría, diseño y construcción de acueductos, alcantarillados, y demás obras. (El $ Valor $ se dará de conformidad con las especificaciones del programa)",
  },
  {
    id: 3,
    number: "03",
    name: "Programas de Reintegración y Apoyo Integral",
    type: "reintegration",
    description:
      "Programas de reintegración social, atención integral y apoyo, y procesos de intervención psicosocial a personas con problemas de adicción a sustancias psicoactivas, bebidas alcohólicas y enfermedades mentales en terapias extramurales. El valor se dará de conformidad con las especificaciones del programa.",
  },
  {
    id: 4,
    number: "04",
    name: "Talleres y Asesorías en Prevención de Drogadicción y Alcoholismo",
    type: "prevention",
    description:
      "Actividades de prevención realizadas por especialistas. Costo: $500.000 pesos en el Valle de Aburrá por cada 2 horas.",
  },
  {
    id: 5,
    number: "05",
    name: "Actividades de Rehabilitación para Víctimas de Violencia y Habitantes de Calle",
    type: "rehabilitation",
    description:
      "Rehabilitación a través de especialistas para su resocialización. Costo: $200.000 pesos en el Valle de Aburrá por cada hora.",
  },
  {
    id: 6,
    number: "06",
    name: "Actividades Lúdicas y Recreativas para Rehabilitación e Integración Social",
    type: "recreation",
    description:
      "Desarrollo de actividades lúdicas, recreativas y la integración en trabajos de grupo para personas en su proceso de formación, rehabilitación e integración a la sociedad. Costo: $500.000 pesos en el Valle de Aburrá por cada 2 horas.",
  },
  {
    id: 7,
    number: "07",
    name: "Atención Psicológica Especializada en Adicciones",
    type: "addiction",
    description:
      "Atención psicológica para adicciones. Costo: $130.000 pesos en el Valle de Aburrá por sesión de 50 minutos.",
  },
  {
    id: 8,
    number: "08",
    name: "Atención Psicológica",
    type: "general_psychology",
    description:
      "Atención psicológica general. Costo: $50.000 pesos por sesión virtual.",
  },
  {
    id: 9,
    number: "09",
    name: "Paquete de 5 sesiones de atención psicológica Especializada en Adicciones",
    type: "addiction_package",
    description:
      "Paquete de 5 sesiones de atención psicológica para adicciones. Costo: $550.000 pesos en el Valle de Aburrá, cada sesión será de 50 minutos.",
  },
  {
    id: 10,
    number: "10",
    name: "Paquete de 5 sesiones de atención psicológica",
    type: "general_psychology_package",
    description:
      "Paquete de 5 sesiones de atención psicológica general. Costo: $220.000 pesos por sesiones virtuales. En caso de requerirse atención presencial, cada sesión tendrá un costo de $100.000 pesos.",
  },
  {
    id: 11,
    number: "11",
    name: "Diseño e Implementación de páginas Web con Dominio y correo incluido",
    type: "web_design",
    description:
      "Diseño e Implementación de páginas Web con Dominio y correo incluido. Costo: $1.000.000 pesos.",
  },
];

