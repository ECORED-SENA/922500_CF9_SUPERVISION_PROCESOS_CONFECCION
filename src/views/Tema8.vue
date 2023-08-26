<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 8
      h1 Formulación de proyectos
    .row.justify-content-center.align-items-center.mb-5        
      .col-auto 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/126.svg', alt='') 
      .col 
        p(data-aos="fade-down").mb-0 Después de conocer el proceso para la propuesta de mejoramiento, identificando los elementos que compone un estudio de métodos, es imprescindible entender la importancia de la formulación de proyectos para hacer uso de la información obtenida a través de un proceso minucioso, lo cual permitirá generar nuevas dinámicas formuladas a partir de la experiencia obtenida y los datos estudiados. Lo invitamos a ver el siguiente video, para conocer qué es la formulación de proyectos. 
    .bg23.mb-5
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12(data-aos="fade-left")     
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/jwwLmoiAJag?si=Getx6z0yrgxkFJaL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Formulación de proyectos             

      h4(data-aos="fade-down").t1.mb-3 Ciclo PHVA
      p(data-aos="fade-down").mb-5 Dentro de la formulación del proyecto, el Ciclo PHVA (Planear, Hacer, Verificar, Actuar) establece cuatro actividades definidas para desarrollarlo a cabalidad, estas según Méndez (2020), son:

      .row.justify-content-center.align-items-center.pb-5           
        .col-lg-10(data-aos="fade-left")
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img.img-a.img-t(src='@/assets/curso/temas/128.svg', alt='Ciclo PHVA')

            .tarjeta.color-primario.p-3(x="32%" y="29.5%" numero="+")
              .h5 Planear
              p.mb-0 Es clave para el desarrollo de todo el proceso, se definen los recursos estimados, el talento humano requerido, los objetivos y los pasos para lograrlos, es importante que se definan la mayor cantidad de elementos que serán necesarios para consecución de la meta propuesta que atiendan a la idea central del proyecto.       
            .tarjeta.color-primario.p-3(x="68.5%" y="30%" numero="+")
              .h5 Hacer   
              p.mb-0 Para lograr la meta propuesta, es necesario probar todas las acciones y recursos estimados en un ambiente controlado, para actuar con seguridad siguiendo los lineamientos de la primera actividad y entender los resultados que se vayan obteniendo.   
            .tarjeta.color-primario.p-3(x="32%" y="70%" numero="+")
              .h5 Actuar 
              p.mb-0 Actividad que finaliza el ciclo, en esta será posible evidenciar si es necesario hacer cambios y como su nombre lo indica, actuar para que estos sean los más beneficiosos en la consecución de los objetivos definidos en el proyecto, es decir, establecer acciones preventivas o correctivas.       
            .tarjeta.color-primario.p-3(x="68%" y="70%" numero="+")
              .h5 Verificar
              p.mb-0 Verificar implica analizar la información recolectada y relacionarla con la efectividad de la meta propuesta y la idea inicial del proyecto. Esto ayuda a decidir si se continúa trabajando en la línea propuesta o si es necesario modificar el plan para desarrollar el proyecto de manera completa.

    h4(data-aos="fade-down").t1.mb-3 Actores que intervienen en un proyecto

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        p(data-aos="fade-down") Para cada una de las fases que se identifican en un proyecto, el talento humano según sus habilidades es aquel que determina y desarrolla las acciones a realizarse, por esta razón debe existir una comunicación clara para situar en el mismo contexto a todos los grupos de interés, estableciendo su rol e intervención dentro del proyecto.
        p(data-aos="fade-down") De esta manera, para realizar la identificación de las necesidades se incluye a los clientes, usuarios, los propios empresarios y consumidores. Para la formulación del proyecto, teniendo como base central la necesidad o el diagnóstico realizado anteriormente, intervienen los profesionales, técnicos, tecnólogos o consultores del área. Para la implementación, se hace necesaria la participación de todos aquellos que proveen los recursos, por último, para su funcionamiento, se necesita la asociación con todas las personas en quienes recaerá directamente las acciones establecidas dentro del proyecto planteado, es decir, el personal de la empresa, operarios, etc.
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/129.png', alt='')  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Actores que intervienen en un proyecto
        .tabla-a.color-acento-contenido          
          table.table1
            thead.bgh.text-center
              tr
                th Identificación
                th Formulación
                th Implementación
                th Funcionamiento
            tbody.bgtr
              tr
                td Clientes.
                td Profesionales.
                td Constructores.
                td Personal directivo, ejecutivo y operativo.
              tr
                td Usuarios.
                td Técnicos.
                td Proveedores de tecnología.
                td Clientes, usuarios, consumidores, beneficiarios.
              tr
                td Consumidores.
                td Tecnólogos.
                td Entidades de financiamiento.
                td Proveedores de materias primas e insumos.
              tr
                td Emprendedores.
                td Consultores.
                td Socios gestores.
                td Estado.
              tr
                td Beneficiarios.
                td Evaluadores. Técnicos.
                td Interventores.
                td Entidades de control.
              tr
                td Gestores.
                td Asesores.
                td Entidades reguladoras.
                td  
              tr
                td  
                td Gestores.
                td Entidades de apoyo.
                td 
        figcaption.mt-3 Nota. Tomado de Méndez, R. et al. (2020).


    h4(data-aos="fade-down").t1.mb-2 Presentación del proyecto

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        p(data-aos="fade-down") Como ya se ha visto anteriormente, un proyecto se compone de diversos factores, entre estos obtener el compromiso de todos los involucrados para llevar a cabo los procesos planeados, definir el talento humano adecuado para las actividades determinadas, así como los recursos tecnológicos, logísticos y económicos que dicho proyecto requiere. Después de establecer estos elementos imprescindibles, es como se debe definir una estructura determinada para presentar dicho proyecto a través de un documento organizado, con una redacción clara que explique de manera sencilla las acciones a realizar, quienes serán los responsables de dichas acciones, tiempo definido, recursos, materiales y demás factores que serán utilizados para lograr la meta propuesta.
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p(data-aos="fade-down").text-regular El proyecto escrito servirá como un instrumento de negociación determinado por su contenido, por ello se hace necesario agregar tablas e ilustraciones que soporten la información contenida, además de la referenciación de las fuentes tomadas. Igualmente, es importante contar con habilidades comunicativas y lingüísticas para dar a conocer de manera asertiva lo que se espera con la ejecución de dicho proyecto.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 -Según Méndez et al (2020).   
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/130.png', alt='')  
    p(data-aos="fade-down").mb-5 Dentro de la estructura básica que debe poseer un proyecto, se encuentran los siguientes elementos:
    .row.justify-content-center.align-items-end      
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/59.png', alt='')
      .col-lg-6
        .tarjeta.tarjeta-verde.p-4(data-aos="fade-right") 
          SlyderA(tipo="b")
            .row.justify-content-center.mt-3
              .col-11
                h4 Objetivos 
                p Se dividen en general y específicos, el objetivo general apunta a una visión amplia que abarca todos los aspectos comprendidos en el proyecto y los objetivos específicos, se enfocan en diversas acciones concretas que al unirse dan respuesta al objetivo macro. 
            .row.justify-content-center.mt-3
              .col-11
                h4 Justificación 
                p Nace a partir de la problemática evidenciada con la que se hace necesaria la ejecución del proyecto, aquí se explican todos los factores y elementos de los que surgió la necesidad para la implementación de nuevas acciones, además de los beneficios de éstas. 
            .row.justify-content-center.mt-3
              .col-11
                h4 Antecedentes 
                p Se refiere a todas las evidencias pasadas que dan sustento para realizar el presente proyecto y que sirven como referentes para el desarrollo de éste.  
            .row.justify-content-center.mt-3
              .col-11
                h4 Características generales 
                p En este apartado se dan a conocer todas las características sociales, económicas y culturales del lugar donde se va a desarrollar el proyecto y que intervienen directamente en él. 
            .row.justify-content-center.mt-3
              .col-11
                h4 Políticas y normas gubernamentales 
                p Se refiere a todas las normas y políticas gubernamentales que intervienen directamente en la consecución del proyecto, es decir, que lo respaldan.   
            .row.justify-content-center.mt-3
              .col-11
                h4 Factores condicionantes
                p Hace referencia a todos los componentes que intervienen directamente en el proyecto, es de destacar que estos factores son muy propios de cada contexto y determinan diversos elementos para entender el porqué y el para qué de dicho proyecto.                                                                
</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
