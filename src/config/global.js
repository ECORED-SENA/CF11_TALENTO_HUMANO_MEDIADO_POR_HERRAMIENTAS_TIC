export default {
  global: {
    componenteFormativo:
      'Buenas prácticas de la documentación del proceso preseleccionar candidatos',
    descripcionCurso:
      'La existencia de una base documental en el área de talento humano es de vital importancia, razón por la que la organización se ve obligada a gestionarla, ello supone identificar documentos, controlar su distribución o el acceso a los mismos, disponer de los medios tecnológicos o físicos necesarios para que los usuarios tengan acceso oportuno y confiable a ella.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Proceso y procedimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación de procesos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Mapa de procesos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Caracterización de los procesos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Documentación y su estructura',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Documentación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Tipo de documentos y estructura de la información documentada (GTC ISO 10013)',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas para organizar la información',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Estructura documental del proceso de preselección',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Legislación y normalización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Elaboración y protección de la documentación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Control de la información documentada (GTC ISO 10013)',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Ciclo vital y tabla de retención de documental (TRD)',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Archivo de la documentación',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Expediente laboral',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Archivo General de la Nación. (2015). Decreto 1080 de 2015.',
      link:
        'https://normativa.archivogeneral.gov.co/decreto-1080-de-2015/?pdf=33',
    },
    {
      referencia:
        'Icontec. (2002). Sistema de gestión de la calidad: fundamentos y vocabulario. Icontec.',
      link: '',
    },
    {
      referencia: 'Icontec. (2015). Norma ISO 9001-2015.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Normograma/NORMA%20ISO%209001%202015.pdf',
    },
    {
      referencia: 'Ive Consultores. (s. f.). Caracterización de procesos.',
      link: 'https://iveconsultores.com/caracterizacion-de-procesos/',
    },
    {
      referencia:
        'Montoya, I. (2010). Selección de personal. RH Talento Humano.',
      link: 'http://rhtalentohumano.blogspot.com/p/seleccion-de-personal.html',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje - SENA. (2005). Manual de procesos y procedimientos. SENA.',
      link: 'https://repositorio.sena.edu.co/handle/11404/3672',
    },
    {
      referencia:
        'Universidad de Valladolid. (s.f.). Guía metodológica para la elaboración de un flujograma.',
      link:
        'https://uvadoc.uva.es/bitstream/handle/10324/12095/GUIA%20METODOL%D3GICA%20PARA%20LA%20ELABORACI%D3N%20DE%20UN%20FLUJOGRAMA.pdf;jsessionid=80A9466CDE2DE6F5A774D3DA6867E%201DF?sequence=5',
    },
  ],
  glosario: [
    {
      termino: 'Cadena de valor',
      significado:
        'modelo de negocios que describe el rango completo de actividades necesarias para crear un producto o servicio. Para las empresas que producen bienes, esta cadena comprende los pasos que llevan un producto desde la etapa de concepción hasta la de distribución.',
    },
    {
      termino: 'Calidad',
      significado:
        'grado en el que un conjunto de características inherentes cumple con los requisitos especificados.',
    },
    {
      termino: 'Cliente',
      significado:
        'es aquel sujeto que compra o adquiere un producto y/o servicio.',
    },
    {
      termino: 'Documento',
      significado:
        'la norma ISO 9000 lo define como la información (datos significativos) y su medio de soporte. Menciona como llevar a cabo la actividad.',
    },
    {
      termino: 'Estandarización',
      significado:
        'establece un nivel de operación basado en una generalidad que lleve al cumplimiento de las especificaciones del producto o servicio, los requisitos del cliente y los legales. La Norma ISO 9001 ofrece el marco y la estructura para la organización de estos estándares.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'actividad recurrente para aumentar la capacidad para cumplir los requisitos.',
    },
    {
      termino: 'Partes interesadas ',
      significado:
        'actores a quienes les afecta la realización de un producto o prestación de un servicio eficiente y eficaz, siendo impactada cuando hay errores en el proceso.<br><br>Cuando hablamos de partes interesadas nos estamos refiriendo a clientes, usuarios, socios, personas de la organización, proveedores externos, sindicatos, gobiernos… Respecto a los clientes debemos cuidar la calidad de nuestros productos y/ o servicios, la fidelización y su satisfacción.',
    },
    {
      termino: 'Registro',
      significado:
        'la norma ISO 9000 lo define como un documento que presenta resultados obtenidos o proporciona evidencia de actividades realizadas. Informa como se ha lleva a cabo la actividad.',
    },
    {
      termino: 'Riesgo',
      significado:
        'circunstancias, sucesos o eventos adversos que impiden el normal desarrollo de las actividades de una empresa y que, en general, tienen repercusiones económicas para sus responsables.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'verificación de la evolución de un proceso en la realización de un producto o servicio. Permite hacer seguimiento de errores en el proceso.',
    },
  ],
  complementario: [
    {
      texto:
        'GTC GTC-ISO/TS 9002 de 2017. (2017). Directrices para la aplicación de la norma ISO 9001:2015.',
      tipo: 'PDF',
      descarga: '/downloads/ISO_9002_2017_DIRECTRICES_PARA_LA_APLICA.pdf',
    },
    {
      texto:
        'Medina, E. (2020). Cómo documentar procesos y procedimientos en una empresa Sistema de Calidad ISO 9001. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=u5ySCsD_tG4',
    },
    {
      texto:
        'GTC GTC-ISO 10013 de 2002. Documentación de procesos y procedimientos. (2002). <em<>Directrices para la documentación del sistema de gestión de la calidad.<em>',
      tipo: 'PDF',
      descarga: '/downloads/GTC_ISO_10013_DOCUMENTACION_DE_PROCESOS.pdf',
    },
    {
      texto: 'Osorio, W. (2017). Documentar procesos de tu empresa.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=h1jM4RiojN8',
    },
    {
      texto: 'ubén. (2021). Gestión documental en Recursos Humanos para Pymes.',
      tipo: 'Blog',
      link: 'https://factorialhr.es/blog/gestion-documental-recursos-humanos/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Alexis Viloria Guerrero',
        cargo: 'Experto temático',
        centro: 'Centro Gestión Administrativa - Distrito Capital',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mayerly Pérez Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Mayra Alejandra Alvarez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
