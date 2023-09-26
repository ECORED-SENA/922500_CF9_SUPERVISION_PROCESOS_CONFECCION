<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Metrología
      
    .bg1.mb-4
      .row.justify-content-center.align-items-center.py-4          
        .col-lg-7.my-3
          p(data-aos="fade-down") La ciencia comienza donde empieza la medición. Esta afirmación, que en principio puede parecer un tanto descabellada, refleja la relevancia que la metrología tiene en todos los ámbitos de la sociedad. Pero la ciencia de las medidas, considerada la más antigua del mundo, no es únicamente asunto de los científicos, sino que también es relevante para los encargados de la supervisión de los procesos de confección. Ya que todo el tiempo necesitamos medir longitudes, capacidades, tiempos, entre otras magnitudes que se deben analizar en el proceso productivo. La metrología no solo se ocupa de las mediciones, también del estudio de las unidades de medida y de los equipos utilizados para efectuarlas, así como de su verificación y calibración periódica.     
        .col-lg-5.my-3 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')  

    .row.justify-content-start.mb-3     
        .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
          .list.mb-1
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v3.svg', alt='')
            .list__txt
              h4.mb-0 Sistema Internacional de Medidas

    p(data-aos="fade-down") Las operaciones de medición requieren de un lenguaje común en relación con los nombres y símbolos de las unidades de medida, así como la observancia de reglas para su utilización, que posibiliten el intercambio de información. Visualice el siguiente video donde encontrara la explicación sobre el sistema de medidas:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/NBLi9NhORlg?si=pKDQ-doWjOqMgOZZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Sistema Internacional de Medidas    

    h4(data-aos="fade-down").t1 Sistema de medidas para la longitud
    p(data-aos="fade-down").mb-5 Se emplea para medir la distancia entre dos puntos; su unidad de medida fundamental es el metro y, según el sistema métrico decimal, se puede subdividir en submúltiplos para referirse a medidas más pequeñas o se puede multiplicar en múltiplos para referirse a medidas más grandes. Ver figura 1.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="fade-left")     
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Submúltiplos y múltiplos de longitud
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg', alt='Gráfica que muestra los submúltiplos y múltiplos de longitud.')  
            
    .row.justify-content-center.align-items-center.mb-5           
      .col-auto 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='') 
      .col 
        p(data-aos="fade-down").mb-0 En la cotidianidad, es posible que esta medida se presente en la unidad fundamental y se requiera convertirla a otra. Si se desea transformar un metro en una medida más pequeña, su valor se multiplicará por diez (10) según el submúltiplo al que se quiera convertir, variando su unidad de medida cambiará. Por el contrario, si se busca convertir un metro a una unidad de medida más grande, se dividirá por diez y se ajustará su unidad de medida según corresponda.

    h5(data-aos="fade-down") Ejemplo
    p(data-aos="fade-down") Si se quiere convertir doce (12) metros tanto a milímetros como a kilómetros, se realizan las siguientes operaciones: 
    .row.justify-content-center.mb-5           
      .col-lg-10.up(data-aos="fade-left")
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.svg', alt='Gráfica que muestra los submúltiplos y múltiplos de longitud.') 
      .col-lg-5.text-center.my-4.up
        .bg3.h-100.p-4(data-aos="fade-down")
          p Primero multiplicamos por 10 para hallar los decímetros.

          h5 𝟏𝟐𝒎∗𝟏𝟎=𝟏𝟐𝟎 𝒅𝒎 

          p A este valor hallado lo multiplicamos nuevamente por 10 para hallar los centímetros. 

          h5 𝟏𝟐𝟎 𝒅𝒎∗𝟏𝟎=𝟏.𝟐𝟎𝟎 𝒄𝒎 

          p Y este último valor hallado se multiplica de nuevo por 10 para hallar los milímetros. 

          h5.mb-0 𝟏𝟐𝟎𝟎 𝒄𝒎∗𝟏𝟎=𝟏𝟐.𝟎𝟎𝟎 𝒎𝒎                
      .col-lg-5.text-center.my-4.up
        .bg4.h-100.p-4(data-aos="fade-down")
          p Primero dividimos por 10 para hallar los decámetros. 

          h5 𝟏𝟐𝒎 ÷𝟏𝟎=𝟏,𝟐 𝒅𝒂𝒎 

          p Luego de hallar los decámetros dividimos por 10 nuevamente para obtener el valor de los hectómetros. 

          h5 𝟏.𝟐 𝒅𝒂𝒎 ÷𝟏𝟎= 𝟎,𝟏𝟐 𝒉𝒎 

          p Finalmente se divide por 10 para hallar los kilómetros 

          h5.mb-0 𝟎.𝟏𝟐 𝒉𝒎 ÷𝟏𝟎=𝟎,𝟎𝟏𝟐 𝒌𝒎
      .col-lg-10.up(data-aos="fade-left")
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.svg', alt='Gráfica que muestra los submúltiplos y múltiplos de longitud.')

    .bg5
      h4(data-aos="fade-down").t1.pt-4 Sistema de medida para masa
      p(data-aos="fade-down") La masa es la cantidad de materia que posee un cuerpo, su unidad en el sistema internacional de unidades es el kilogramo y su unidad de medida fundamental es el gramo. Ver figura 2. 

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10(data-aos="fade-left")     
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span Submúltiplos y múltiplos de masa
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg', alt='Gráfica que muestra los submúltiplos y múltiplos de masa.')

      h5(data-aos="fade-down") Ejemplo
      p(data-aos="fade-down") Si se quiere convertir 100 gramos en miligramos y a la vez en kilogramos, se realiza las siguientes operaciones:
      .row.justify-content-center.pb-4           
        .col-lg-10(data-aos="fade-left")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='Gráfica que muestra los submúltiplos y múltiplos de masa.') 
        .col-lg-5.text-center.my-4
          .bg3.h-100.p-4(data-aos="fade-down")
            p Primero multiplicamos por 10 para hallar los decigramos. 

            h5 𝟏𝟎𝟎 𝒈∗𝟏𝟎=𝟏.𝟎𝟎𝟎 𝒅𝒈 

            p este valor lo multiplicamos nuevamente por 10 para hallar los centigramos. 

            h5 𝟏.𝟎𝟎𝟎 𝒅𝒈∗𝟏𝟎=𝟏𝟎.𝟎𝟎𝟎 𝒄𝒈 

            p Este último valor se multiplica de nuevo por 10 para hallar los miligramos. 

            h5.mb-0 𝟏𝟎.𝟎𝟎𝟎 𝒄𝒈∗𝟏𝟎=𝟏𝟎𝟎.𝟎𝟎𝟎 𝒎𝒎              
        .col-lg-5.text-center.my-4
          .bg6.h-100.p-4(data-aos="fade-down")
            p Primero dividimos por 10 para hallar los decagramos. 

            h5 𝟏𝟎𝟎 𝒈 ÷𝟏𝟎=𝟏𝟎 𝒅𝒂𝒈 

            p Luego dividimos por 10 nuevamente para obtener el valor de los hectogramos. 

            h5 𝟏𝟎 𝒅𝒂𝒈 ÷𝟏𝟎= 𝟏 𝒉𝒈 

            p Finalmente se divide por 10 para hallar los kilogramos. 

            h5.mb-0 𝟏 𝒉𝒈 ÷𝟏𝟎=𝟎,𝟏 𝒌𝒈
        .col-lg-10(data-aos="fade-left")
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.svg', alt='Gráfica que muestra los submúltiplos y múltiplos de masa.')

    .row.justify-content-center.align-items-center.my-5           
      .col-lg-7
        h4(data-aos="fade-down").t1 Sistema de medida tiempo
        p(data-aos="fade-down") El tiempo es una magnitud física creada para medir el intervalo en el que suceden una serie ordenada de acontecimientos. El sistema de tiempo comúnmente utilizado es el calendario gregoriano y se emplea en el Sistema Internacional de Unidades.
        p(data-aos="fade-down") Los segundos son la unidad de tiempo en el Sistema Internacional de Unidades, el Sistema Cegesimal de Unidades y el Sistema Técnico de Unidades. Un minuto equivale a 60 segundos y una hora equivale a 3600 segundos. Estas unidades de medida como el minuto, la hora y el día no son unidades del Sistema Internacional de Unidades. Ver tabla 1.
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Equivalencias unidades tiempo

        .tabla-a.color-acento-contenido.mb-2
          table.table1.text-center
            thead.bgh
              tr
                th Magnitud              
                th Nombre              
                th Símbolo              
                th Equivalencia              

            tbody.bgtr
              tr
                td.p-4(rowspan="3") tiempo                           
                td.p-4 minuto                          
                td.p-4 min                         
                td.p-4 60 s   
              tr
                td.p-4 hora                           
                td.p-4 h                          
                td.p-4 3.600 s
              tr
                td.p-4 día                           
                td.p-4 d                          
                td.p-4 86.400 s 
        figcaption Nota. Tomado de Franco, A. (s.f)

      .col-lg-5.d-none.d-lg-block
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')

    .bg7.mb-4
      .row.justify-content-start.mb-3.pt-4     
        .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
          .list.mb-1
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v3.svg', alt='')
            .list__txt
              h4.mb-0 Instrumentos de medición

      .row.justify-content-center.align-items-center.pb-4       
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/13.png', alt='')

        .col-lg-8
          p(data-aos="fade-down") Un instrumento de medición es aquel que permite medir la longitud, volumen, extensión o capacidad por comparación de un elemento estandarizado, el cual es tomado como referencia para posteriormente ser reflejado en un valor numérico mediante algún instrumento graduado con dicha unidad. En la industria de la confección se maneja, dependiendo la parte del proceso en el que se esté controlando.
          .bg8.p-4(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Estos instrumentos están asociados con la estandarización de cualquier proceso industrial. Por ejemplo, definir un estándar en unidades o tiempos de proceso, o para establecer la proyección de un proceso productivo.

    .row.justify-content-start.mb-4.pt-4     
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v3.svg', alt='')
          .list__txt
            h4.mb-0 Tipos de instrumentos de medición 

    p(data-aos="fade-down") Según su uso se pueden clasificar los instrumentos de medición, dependiendo de lo que se quiera medir. Sin embargo, también se pueden clasificar dependiendo su principio de operación:      

    ul.lista-ul.my-5.fa-ul(data-aos="fade-left")
      li 
        i.fas.fa-tshirt.c1
        h5.mb-0 Longitud sus instrumentos de medición son:
        
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8        
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg9")
          .row.justify-content-center(titulo="Cinta métrica")
            .col-md-6.mb-4.mb-md-0
              p Conocida también como flexómetro o metro, es flexible y graduada en centímetros y pulgadas, facilita medir líneas y superficies curvas. 
            .col-md-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/14.png', alt='')
          .row.justify-content-center(titulo="Regla graduada")
            .col-md-6.mb-4.mb-md-0
              p Es una plancha delgada y rectangular que tiene una escala graduada longitudinal, su longitud no supera el metro e incluye graduación en milímetros, centímetros y decímetros. 
            .col-md-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.png', alt='')
          .row.justify-content-center(titulo="Calibre")
            .col-md-6.mb-4.mb-md-0
              p También llamado pie de rey o calibre vernier, mide principalmente diámetros exteriores, interiores y profundidades. 
            .col-md-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/16.png', alt='')
          .row.justify-content-center(titulo="Micrómetro")
            .col-md-6.mb-4.mb-md-0
              p Se denomina también Tornillo de Palmer o calibre Palmer, consta de un tornillo micrométrico que mide con gran precisión el tamaño de un objeto en milésimas de milímetro. 
            .col-md-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/17.png', alt='') 

      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.png', alt='')

    .row.justify-content-center.align-items-center.mb-5 
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.png', alt='')                 
      .col-lg-8        
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg9")
          .row.justify-content-center(titulo="Reloj comparador")
            .col-md-6.mb-4.mb-md-0
              p Conocido también como comparador de cuadrante, se usa para comparar cosas mediante la medición indirecta del desplazamiento de una punta de contacto esférica cuando el aparato está fijo en un soporte.
            .col-md-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')
          .row.justify-content-center(titulo="Interferómetro")
            .col-md-6.mb-4.mb-md-0
              p Este instrumento óptico mide con gran precisión las longitudes de onda de la misma luz. 
            .col-md-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20_1.jpg', alt='')
          .row.justify-content-center(titulo="Odómetro")
            .col-md-6.mb-4.mb-md-0
              p Se le conoce también como cuentakilómetros y es un instrumento utilizado para calcular la distancia total o parcial recorrida por un objeto.
            .col-md-5
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='')
          
    ul.lista-ul.my-5.fa-ul(data-aos="fade-left")
      li 
        i.fas.fa-tshirt.c1
        h5.mb-0 Masa sus instrumentos de medición son:

    .bg10
      .row.justify-content-center.align-items-center.mb-5.pt-3           
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='')

        .col-lg-8
          .bgw.p-4 
            SlyderA(tipo="b")
              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t1 Balanza
                  p Permite medir la masa de los objetos; puede ser de forma manual o electrónica, como se muestra en la imagen. Estos instrumentos suelen ser más precisos y pueden medir desde miligramos hasta kilogramos.          
                .col-md-5
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.png', alt='')
              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t1 Báscula 
                  p Este instrumento es utilizado para pesar la masa de los cuerpos, que se colocan en su plataforma horizontal, su capacidad de peso es muy grande y varía dependiendo del tipo de báscula.             
                .col-md-5
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')
              .row.justify-content-center
                .col-md-7.mb-4.mb-md-0
                  h4.t1 Dinamómetro
                  p Este instrumento es utilizado para medir fuerzas o para calcular el peso de los objetos y así determinar su masa.            
                .col-md-5
                  img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='')  

      ul.lista-ul.my-5.fa-ul(data-aos="fade-left")
        li 
          i.fas.fa-tshirt.c1
          h5.mb-0 Tiempo sus instrumentos de medición son:

      .row.justify-content-center.text-center
        .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.brad(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/27.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 Calendario 
              p.mb-0 Permite contar el transcurso del tiempo, ayuda a la organización cronológica de actividades.         
        .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.brad(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/28.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 Cronómetro 
              p.mb-0 Es un reloj que permite medir el tiempo transcurrido en lapsos desde su activación hasta su desactivación. 
        .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.brad(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/29.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 Reloj 
              p.mb-0 Es un instrumento para medir e indicar el tiempo en unidades de tiempo (horas, minutos, segundos). 
        .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt.brad(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/30.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3 Datación radiométrica 
              p.mb-0 Es el procedimiento que permite determinar la edad absoluta de las rocas, minerales y restos orgánicos.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
