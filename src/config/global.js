export default {
  global: {
    componenteFormativo: 'Teoría de restricciones y mejoramiento de métodos',
    descripcionCurso:
      'Este componente se enfoca en la identificación de puntos críticos del proceso productivo en la industria de la moda, utilizando la metodología de la teoría de restricciones y herramientas tecnológicas para llevar a cabo un estudio de trabajo asertivo. Se destaca la necesidad de mejorar la ejecución y el registro de todas las actividades en la producción de prendas de vestir, aprovechando los avances tecnológicos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Metrología',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Teoría de restricciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Documentación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas tecnológicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: '<i>Hardware</i> para visualizar y controlar',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: '<i>Software</i> para diagramar flujos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              '<i>Software</i> para diseño, simulación y optimización de plantas',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Introducción al mejoramiento de métodos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Propuesta de mejoramiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Estudio de métodos',
            hash: 't_6_1',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Herramientas de análisis para la propuesta de mejoramiento',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Formulación de proyectos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Costos y presupuestos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Costos y métodos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Estadística: tabulación y análisis de la información',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/922500-CF09-DU.zip',
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
  complementario: [
    {
      tema: 'Herramientas tecnológicas',
      referencia:
        'Engineering USA (2021). <i>Recolección de datos de manufactura</i>. Engineering Industries eXcellence Global.',
      tipo: 'Página web',
      link: 'https://www.engusa.com/es/solution/data-collection',
    },
    {
      tema: 'Herramientas tecnológicas',
      referencia:
        'ONiAd (2021). <i>10 herramientas tecnológicas para aumentar la productividad</i>.',
      tipo: 'Página web',
      link:
        'https://oniad.com/tv/be-productive-my-friend/herramientas-tecnologicas-productividad/',
    },
    {
      tema: 'Herramientas tecnológicas',
      referencia:
        'Balluff de México S.A. (2015). <i>Sensores inteligentes IO-Link para fabricas inteligentes</i>. Blog de automatización.',
      tipo: 'Blog',
      link:
        'https://automatizacion.blog/sensores-inteligentes-io-link-para-fabricas-inteligentes/',
    },
    {
      tema: 'Herramientas tecnológicas',
      referencia:
        'Fundación Pro Tejer. (2018). <i>Innovación en la industria textil</i>. [Video] YouTube',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=zJg8k5-QJOw',
    },
    {
      tema: 'Herramientas tecnológicas',
      referencia:
        'Portaltic. (2017). <i>Estos robots son capaces de coser 800.000 camisetas al día</i>. [Video] YouTube',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=rWLYlyBtLFk',
    },
    {
      tema: 'Herramientas tecnológicas',
      referencia:
        'STALAM. (2020). <i>STALAM - World leader in Radio Frequency dryers</i>. [Video] YouTube',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/bsXodH5Q2Jw',
    },
    {
      tema: 'Herramientas tecnológicas',
      referencia:
        'TagIngenierosRFID (2014.) <i>Implantación con éxito con tecnología RFID en el sector textil</i>. [Video] YouTube',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/7TiV_Cq-lTY',
    },
    {
      tema: 'Herramientas tecnológicas',
      referencia:
        'Tecon Soluciones Informáticas. (2018). <i>Gestión de inventario con tecnología RFID</i>. [Video] YouTube',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=AawCgw-HwCE',
    },
    {
      tema: 'Hardware para visualizar y controlar',
      referencia:
        'GRUPO GARATU. (2019). Sistema M.E.S. (Manufacturing Execution System) Caso de éxito en laminación.  [Video] YouTube ',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/UjbIm_aD4dQ',
    },
    {
      tema: 'Hardware para visualizar y controlar',
      referencia:
        'QFB Farma. (2019). <i>Indicadores de Producción</i>. [Video] YouTube',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=B-aye88Fkvc',
    },
    {
      tema: 'Hardware para visualizar y controlar',
      referencia:
        'Lojan, E. (2019). <i>SISTEMA ANDON (ANDON SYSTEM)</i>.  [Video] YouTube.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=HXqQv3gHaA4',
    },
    {
      tema: 'Software para diseño, simulación y optimización de plantas.',
      referencia:
        'Deimos kress (2018) <i>Mejores 5 programas para hacer planos 3d</i> [Video] YouTube',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/fBTV6LPQzKQ',
    },
    {
      tema: 'Software para diseño, simulación y optimización de plantas.',
      referencia:
        'Investigaciones industriales ASC. (2017). <i>5 mejores programas de simulación industrial</i>. [Video] YouTube',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=_FjqFARf0FA',
    },
    {
      tema: 'Software para diseño, simulación y optimización de plantas.',
      referencia:
        'Martínez, J. (2020). <i>Diseño y simulación de planta de confecciones en flexsim</i>.  [Video] YouTube',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=TQvl1giVHZY',
    },
    {
      tema: 'Estudio de métodos',
      referencia:
        'ProdHabits. (2019). <i>Que es la ley de Pareto 80-20</i> [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/n3xpKz0SYlQ',
    },
    {
      tema: 'Estudio de métodos',
      referencia:
        'Carter, K. (2016). <i>Cursograma Analítico</i>  [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/vkcZPQJB2F0',
    },
    {
      tema: 'Estudio de métodos',
      referencia:
        'Fundación General de la Universidad de La Laguna. (2017).<i> Módulo 15. Análisis de procesos #GestióndelaInnovación</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/6U3tUgpu-YA',
    },
  ],
  glosario: [
    {
      termino: 'Bidimensional',
      significado:
        'que posee dos dimensiones en módulo geométrico de proyección plana, cuenta con ancho y largo, pero no con profundidad.',
    },
    {
      termino: 'Cursograma',
      significado:
        'representación gráfica de un procedimiento, conociendo paso a paso su consecución.',
    },
    {
      termino: 'Eficacia',
      significado:
        'capacidad para realizar una función o actividad en el tiempo acordado con los recursos definidos.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'capacidad para realizar una función o actividad adecuadamente optimizando recursos.',
    },
    {
      termino: 'El <i>benchmarking</i>',
      significado:
        'es el proceso de crear, recopilar, comparar y analizar indicadores claves que permitan medir el rendimiento de los procesos y las funciones más importantes dentro de una empresa. Dichos indicadores se conocen como “<i>benchmarks</i>” y sirven como un estándar de éxito empresarial.',
    },
    {
      termino: 'Escalado',
      significado:
        'método aplicado para la ampliación o reducción de tallas en moldería de prendas de vestir, a partir de técnicas numéricas basándose en cuadros de tallas.',
    },
    {
      termino: 'Ley de Pareto',
      significado:
        'explica el fenómeno estadístico en que una pequeña proporción de un elemento puede estar generando impacto en la totalidad de este.',
    },
    {
      termino: 'Mano de obra directa',
      significado:
        'talento humano que se dedica a transformar materias primas e insumos.',
    },
    {
      termino: 'Patronaje',
      significado:
        'sistema metódico enfocado en la creación de moldes para prendas de vestir sobre papel o en <i>software</i> en 2d.',
    },
    {
      termino: 'Patronista',
      significado:
        'persona cuyo oficio es el de elaborar patronaje y moldería de prendas de vestir.',
    },
    {
      termino: 'Planos',
      significado:
        'desarrollados en patronaje que plasman la construcción de moldería de prendas de vestir.',
    },
    {
      termino: 'Tallas',
      significado:
        'término empleado para la asignación de un número o letra que reúne medidas antropométricas de la figura humana.',
    },
    {
      termino: 'Tecnología blanda',
      significado:
        'conocimientos y competencias que tienen que ver con el ser humano y todo su entorno, todo lo que tiene que ver con conocimiento e interrelación.',
    },
    {
      termino: 'Tecnología dura',
      significado:
        'conocimiento llevado a productos tangibles, y que está en cambio constante.',
    },
    {
      termino: 'Tridimensional',
      significado:
        'que posee tres dimensiones, cuenta con anchura, altura y profundidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alarcón, J. (2012). <i>Patronaje industrial femenino</i>. Método Alarcón.',
    },
    {
      referencia:
        'Álvarez, E. (2015). <i>Como mejorar un método de trabajo</i>. Organiza Pymes.',
      link: 'https://organizapymes.com/como-mejorar-un-metodo-de-trabajo/.',
    },
    {
      referencia:
        'Ararat A. (2010). <i>Estudio de métodos y tiempos en el proceso productivo de la línea de camisas interior de MAKILA CTA., para mejorar la productividad de la empresa</i>. [Trabajo de grado – Pregrado Santiago de Cali] Universidad Autónoma de Occidente. (Pág. 42)',
      link: 'ttps://red.uao.edu.co/handle/10614/1175',
    },
    {
      referencia:
        'Armstrong, J.  (2009). <i>Patternmaking for fashion design</i>. 5ta edición. Pearson.',
    },
    {
      referencia:
        'Blázquez, I.  (2009). <i>Patronaje industrial y escalado</i>. Isa – Escuela de diseño y moda.',
    },
    {
      referencia: 'CGI S.A. (s.f.). <i>GESTIÓN VISUAL: Sistemas Andon</i>.',
      link: 'https://www.cgisa.es/sistemas-andon/',
    },
    {
      referencia: 'CHUNMAN, D. (2011). <i>Patronaje</i>. Blume.',
    },
    {
      referencia:
        'Cole, J.  (2010). <i>Professional sewing techniques for designers</i>. 4ta Edición. Fairchild publications.',
    },
    {
      referencia:
        'CurioSfera-Historia. (2021). Origen del Patronaje y Patrones – Evolución.',
      link:
        'https://curiosfera-historia.com/historia-del-patronaje-y-patrones-de-papel/',
    },
    {
      referencia:
        'DATAMYTE. (2019). <i>Software y Hardware para Control de Calidad, Auditorías y Procesos</i>. DRILCO Sitio web:',
      link:
        'https://www.drilco.net/calidad/software-y-hardware-para-control-de-calidad/',
    },
    {
      referencia:
        'Domingo, E. (2012). <i>El gran libro de la costura</i>. 3ra edición. El Drac S. L.',
    },
    {
      referencia:
        'Domingo, J.  (2012). <i>Manual completo de costura</i>. 5ta edición. El Drac S. L.',
    },
    {
      referencia:
        'Franco, A. (s.f) <i>Unidades básicas</i>. Curso interactivo de física en internet.',
      link:
        'http://www.sc.ehu.es/sbweb/fisica_/unidades/unidades/unidades_1.html',
    },
    {
      referencia: 'Fuentes, A. (s.f.). Cursograma Analítico. [Gráfico].',
      link: 'https://es.scribd.com/document/356290737/CURSOGRAMA-ANALITICO',
    },
    {
      referencia:
        'García C, R. (2005). <i>Estudio del trabajo: Ingeniería de métodos y medición del trabajo</i>. Segunda edición. México: McGraw Hill. (Págs. 116, 119, 121)',
    },
    {
      referencia:
        'Gilewska, T.  (2012). <i>Patronaje: Las bases</i>. El Drac S. L.',
    },
    {
      referencia:
        'Goldratt, E. y Cox, J. (2008). <i>La meta: un proceso de mejora continua</i>. Granica. ',
    },
    {
      referencia:
        'Gómez, G.  (2012). <i>El lenguaje de los patrones en la moda</i>. Nobuko',
    },
    {
      referencia:
        'González, M. et al. (2014). <i>Ingeniería de Proyectos</i>. Editorial DEXTRA. Universidad Politécnica de Madrid.',
    },
    {
      referencia:
        'Gutiérrez Rengifo, L., Moncayo Velazco, A., Tanaka, K., Kimura, F. y Moreno Brand, D. (2011).<i> Manual de patronaje básico e interpretación de diseños</i>. SENA, Agencia de Cooperación Internacional de Japón "jica"',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4725/Manual_patronaje_basico_interpretacion_disenos.PDF;jsessionid=AC68AC0379BA94C6453554265BD5D717?sequence=1',
    },
    {
      referencia:
        'Hermenegildo, Z. y Poratto, M.  (2008). <i>Corte y Confección</i>. 3ra Edición. Atlántida S. A.',
    },
    {
      referencia:
        'Hollahan, L.  (2010). <i>Patrones de costura</i>. El Drac S. L.',
    },
    {
      referencia: 'Internacional Systems. (s.f.). <i>ISI Plus</i>.',
      link: 'http://isiww.biz/wp-content/uploads/revslider/inicio1/Imagen2.png',
    },
    {
      referencia:
        'Méndez, R. et al. (2020). <i>Formulación y evaluación de proyectos: enfoque para emprendedores</i>. Ecoe Ediciones Bogotá, D.C.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10255',
    },
    {
      referencia:
        'Mil dedales. (2015) <i>Patronaje básicos: sus inicio / Basic patterns: the beginning</i>. Retrieved 25 May 2021, from',
      link:
        'http://mildedales.com/?p=453#:~:text=Si%20ahora%20buscamos%20su%20origen,persas%20(siglo%20V%20a.C.).&text=Ser%C3%A1%20durante%20la%20Edad%20Media,incuestionable%20la%20utilizaci%C3%B3n%20de%20patrones',
    },
    {
      referencia:
        'Misrahi, A.  (2009) <i>El gran libro de la costura</i>. El Drac S. L.',
    },
    {
      referencia:
        'Newman, A. y SHARIFF, Z. (2012) Moda A-Z: Diccionario Ilustrado. Barcelona: Blume. Pattermaking a reference for fashion design. Pearson.',
    },
    {
      referencia:
        'OIT (1996). <i>Introducción al estudio del trabajo</i>. Ginebra: Oficina Internacional del Trabajo. Cuarta edición.',
    },
    {
      referencia:
        'Proaño Villavicencio, D.X. (2017). <i>Metodología para elaborar un plan de mejora continua. 3C</i>.',
    },
    {
      referencia:
        'Ramos, D (2018). <i>Las siete herramientas estadísticas de calidad</i>. [Artículo de Qualiex- Blog de Calidad.',
      link: 'https://blogdelacalidad.com/las-siete-herramientas-de-la-calidad/',
    },
    {
      referencia: 'Ruiz, D. (2014) <i>Manual de estadística</i>.',
      link: 'https://www.eumed.net/cursecon/libreria/drm/24.pdf',
    },
    {
      referencia:
        'Salazar, P, C; Del Castillo, G. S. (2018). <i>Fundamentos básicos de estadística</i>. Primera Edición',
      link:
        'http://www.dspace.uce.edu.ec/bitstream/25000/13720/3/Fundamentos%20B%C3%A1sicos%20de%20Estad%C3%ADstica-Libro.pdf',
    },
    {
      referencia: 'Telemetrik (s.f.). <i>Todo por el agua y energía</i>.',
      link: 'www.telemetrik.co',
    },
    {
      referencia:
        'Ultrillas Gómez, C. (2018). <i>Sistemas de medida y regulación</i>. RA-MA Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/106577?page=1',
    },
    {
      referencia: 'Universo Formulas (s.f.) <i>Medidas de posición central</i>',
      link:
        'https://www.universoformulas.com/estadistica/descriptiva/medidas-posicion-central/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jenny Patricia Torres Sarmiento',
          cargo: 'Experta temática ',
          centro: 'Regional Antioquía - Diseño, confección y moda',
        },
        {
          nombre: 'Ericka Alexandra Blanco Sánchez',
          cargo: 'Experta temática ',
          centro: 'Regional Antioquía - Diseño, confección y moda',
        },
        {
          nombre: 'María Camila Álvarez',
          cargo: 'Contratista Diseño Curricular',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda',
        },
        {
          nombre: 'Liliana María Ceballos Gutiérrez',
          cargo:
            'Contratista Asesora Metodóloga diseño y desarrollo curricular',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda Complejo Sur Itagüí',
        },
        {
          nombre: 'Pedro Luis Sossa Ramírez',
          cargo: 'Contratista Diseño y desarrollo curricular',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda Complejo Sur Itagüí',
        },
        {
          nombre: 'Víctor Manuel Isaza Córdoba',
          cargo: 'Contratista Diseño y desarrollo curricular',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda Complejo Sur Itagüí',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial. ',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica.',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica.',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Revisión y corrección de estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica.',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco',
          cargo: 'Diseñadora web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Mary Jeans Palacio',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
