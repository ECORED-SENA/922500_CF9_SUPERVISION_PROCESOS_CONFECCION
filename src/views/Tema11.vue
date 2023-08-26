<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 11
      h1 Estadística: tabulación y análisis de la información

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/159.png', alt='')      
      .col-lg-7.my-3
        p(data-aos="fade-down") En la industria textil uno de los principales vínculos con la información que se genera, tiene que ver con el control estadístico de producción y calidad; desde estos sistemas de gestión, se definen una serie de herramientas estadísticas, con el objetivo de mitigar la variabilidad en las características de calidad y logística de producción, clave para el producto, es decir aplicada en la fabricación, en el aseguramiento de la calidad, y en el mejoramiento de métodos.

        p(data-aos="fade-down") La estadística la podemos definir como #[fw-normal.bg16 “la ciencia que trata de la recopilación, organización, presentación, análisis e interpretación de datos numéricos con el fin de realizar una toma de decisión más efectiva.” Ruiz, D (2014).]
        p(data-aos="fade-down") Para realizar un mejor acercamiento del tema, realizaremos un recorrido por algunos términos básicos claves para su apropiación conceptual de la estadística:

    .row.justify-content-center.align-items-center.mb-5      
      .col-lg-12.d-none.d-lg-block
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/curso/temas/160.svg', alt='')

          .tarjeta.color-primario.p-3(x="17%" y="90%" numero="+")
            .h5 Población  
            p.mb-0 Conjunto de todos los individuos, elementos objetos o fenómenos que se requieren estudiar. 
          .tarjeta.color-primario.p-3(x="45%" y="90%" numero="+")
            .h5 Muestra  
            p.mb-0 Es uno de los subconjuntos de datos pertenecientes a la población. Su tamaño corresponde a la cantidad de elementos u objetos que componen la muestra. 
          .tarjeta.color-primario.p-3(x="67.5%" y="90%" numero="+")
            .h5 Individuos 
            p.mb-0 Cada elemento objeto que conforma la población.   
          .tarjeta.color-primario.p-3(x="95%" y="66%" numero="+")
            .h5 Variables 
            p Característica que fluctúan y varían generando diferentes valores, los cuales son observables y medibles. Los datos son el valor particular de la variable. Las variables pueden ser: 
            p #[b Cualitativas:] se expresan en palabras y no se pueden medir directamente, pero se llevan a valores numéricos utilizando escalas como herramienta. 

            p.mb-0 #[b Cuantitativas:] se expresan numéricamente y se pueden medir directamente   

      .col-lg-12.d-block.d-lg-none
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/curso/temas/161.svg', alt='Ciclo PHVA')

          .tarjeta.color-primario.p-3(x="50%" y="20%" numero="+")
            .h5 Población  
            p.mb-0 Conjunto de todos los individuos, elementos objetos o fenómenos que se requieren estudiar. 
          .tarjeta.color-primario.p-3(x="50%" y="45%" numero="+")
            .h5 Muestra  
            p.mb-0 Es uno de los subconjuntos de datos pertenecientes a la población. Su tamaño corresponde a la cantidad de elementos u objetos que componen la muestra. 
          .tarjeta.color-primario.p-3(x="50%" y="73%" numero="+")
            .h5 Individuos 
            p.mb-0 Cada elemento objeto que conforma la población.   
          .tarjeta.color-primario.p-3(x="50%" y="103%" numero="+")
            .h5 Variables 
            p Característica que fluctúan y varían generando diferentes valores, los cuales son observables y medibles. Los datos son el valor particular de la variable. Las variables pueden ser: 
            p #[b Cualitativas:] se expresan en palabras y no se pueden medir directamente, pero se llevan a valores numéricos utilizando escalas como herramienta. 

            p.mb-0 #[b Cuantitativas:] se expresan numéricamente y se pueden medir directamente 

    .row.justify-content-start.mb-4.pt-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v3.svg', alt='')
          .list__txt
            h4.mb-0 División de la estadística

    p(data-aos="fade-down").mb-5 Existen dos grandes ramas de la estadística: 
    img.img-a.img-t.mb-0(data-aos="zoom-in")(src='@/assets/curso/temas/162.png', alt='') 
    .row.justify-content-center.align-items-stretch.mb-5           
      .col-lg-6.bg27.p-4
        img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/163.svg', alt='')
        h4(data-aos="fade-down") Estadística Descriptiva
        p.mb-0(data-aos="fade-down") Basada en recolección, ordenación y presentación de datos a través de gráficos y tablas, su objetivo es resumir o describir la información sin factores adicionales más que los datos.            
         
      .col-lg-6.bg28.p-4
        img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/164.svg', alt='')
        h4(data-aos="fade-down") Estadística Inferencial
        p.mb-0(data-aos="fade-down") Basada en procedimientos y métodos que a través de la inducción determina propiedades de una parte de la población, lo que implica que su análisis requiere de generalizaciones que van más allá de los datos, se usa para extraer inferencias y modelar patrones de datos.            
         
    .row.justify-content-start.mb-4.pt-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v3.svg', alt='')
          .list__txt
            h4.mb-0 Herramientas de estadística

    p(data-aos="fade-down") En una base estadística que podemos definir brevemente como el proceso de recolección, análisis e interpretación de una cantidad de datos, reposan la mayoría de las decisiones que se toman en función de la calidad en muchas organizaciones.

    h5.t1(data-aos="fade-down").mb-5 Para profundizar ingrese al Anexo Herramientas de estadística y conozca más sobre este tema. 

    .row.justify-content-start.mb-4.pt-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v3.svg', alt='')
          .list__txt
            h4.mb-0 Gráficos estadísticos 

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/165.png', alt='') 
      .col-lg-8.my-3 
        p(data-aos="fade-down") Un gráfico estadístico es una imagen que permite mostrar datos numéricos para una interpretación más simple de la información, visualmente una imagen representa más que mil palabras y la toma de decisiones suele ser más ágil para su lector. Existen múltiples formas de mostrar la información y hacer que sea más dinámica, a continuación, algunas de ellas.

        p(data-aos="fade-down") Ramos, D (2018), plantea 7 herramientas estadísticas de calidad definidas por Kaoru Ishikawa, como un conjunto de metodologías difundidas e implementadas a nivel empresarial en los sistemas de gestión, para mejorar los procesos, servicios y productos; estas son:
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg9")
          .row.justify-content-center(titulo="Histograma")
            .col-11
              p Es una representación gráfica a través de barras, que representan la distribución de un conjunto de datos, ordenando las muestras y visibilizando de manera panorámica, la distribución de la población, o de la muestra, respecto a una característica, cuantitativa y continua.  
          .row.justify-content-center(titulo="Flujograma")
            .col-11
              p Conocido también como diagrama de flujo, representa gráficamente el camino, pasos y decisiones que el producto o servicio recorrerá en el proceso. 
          .row.justify-content-center(titulo="Diagrama Ishikawa")
            .col-11
              p También conocido como Espina de pescado, tiene como objetivo crear, clasificar y representar las posibles hipótesis sobre las causas de un problema y sus efectos.  
          .row.justify-content-center(titulo="Hojas de verificación")
            .col-11
              p Es una plantilla de inspección y control que consta de una lista de elementos preestablecidos que se marcan a partir de la observación. Esta lista proporciona información acerca de los elementos y permite evaluar si se han cumplido o en qué nivel se encuentran. Es similar a una lista de verificación o “chequeo”. 
    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg9")
          .row.justify-content-center(titulo="Diagrama de Pareto")
            .col-11
              p Es un recurso gráfico utilizado para clasificar y establecer la información de mayor a menor relevancia en las causas de un determinado problema o no conformidad.  
          .row.justify-content-center(titulo="Diagrama de dispersión")
            .col-11
              p Muestra lo que sucede con una variable cuando la otra cambia. Son representaciones de dos o más variables que se organizan en Diagrama de dispersión un gráfico, siempre teniendo una en función de la otra. 
          .row.justify-content-center(titulo="Control Estadístico de Proceso (CEP)")
            .col-11
              p Utilizado para mostrar las tendencias de los puntos de observación en un período de tiempo. Es un tipo de gráfico utilizado para el seguimiento del proceso, determinando el rango de tolerancia limitado por la línea superior (límite superior de control) y una línea inferior (límite inferior de control) y una línea media del proceso (límite central), que fueron estadísticamente determinadas.       
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/166.png', alt='')                

</template>

<script>
export default {
  name: 'Tema11',
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
