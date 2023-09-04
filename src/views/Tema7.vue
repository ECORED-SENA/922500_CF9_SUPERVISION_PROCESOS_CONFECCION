<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 7
      h1 Herramientas de análisis para la propuesta de mejoramiento
    .row.justify-content-center.align-items-center.mb-5        
      .col-auto 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/111.svg', alt='') 
      .col 
        p(data-aos="fade-down").mb-0 Dentro de los pasos mencionados anteriormente para determinar las mejoras del método, a partir de un estudio previo, se identifican diversas técnicas que permiten realizar todo el proceso de investigación. Estas serán los apoyos necesarios para llevar a cabo cada fase con el fin de generar una propuesta de mejoramiento aterrizada según el contexto de la empresa.

    h4(data-aos="fade-down").t1.mb-3 Técnica 5W1H

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        p(data-aos="fade-down") Para plantear una acertada propuesta de mejora, se debe partir del problema que se necesita solucionar. Por lo tanto, es necesario realizar una observación previa del contexto para conocer directamente la realidad y evitar especulaciones. En este sentido, surge la necesidad de utilizar la técnica 5W1H, la cual fue mencionada de manera general en las preguntas preliminares de la tercera fase del estudio de métodos.

        p(data-aos="fade-down") Esta técnica adopta su nombre por las siguientes preguntas en inglés, que para efectos de practicidad se traducen al idioma español, cada una responde a una necesidad de información:
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/112.png', alt='')  

    .row.justify-content-center      
      .col-lg-10
        .row.justify-content-center.mb-4           
          .col-lg-4.my-3(data-aos="fade-left")    
            .tarjeta.tarjeta-avatar.h-100
              img.img-w1.img-l(src='@/assets/curso/temas/113.svg' alt='AvatarTop')
              .tarjeta.bg16.ts.h-100
                .p-4.pt-5
                  h4.t1 #[i.t1 What?] / ¿Qué? 
                  p.mb-0 De qué se trata el problema o en qué se encontró el problema.   
          .col-lg-4.my-3(data-aos="fade-down")    
            .tarjeta.tarjeta-avatar.h-100
              img.img-w1.img-l(src='@/assets/curso/temas/114.svg' alt='AvatarTop')
              .tarjeta.bg16.ts.h-100
                .p-4.pt-5
                  h4.t1  #[i.t1 Where?] / ¿Dónde? 
                  p.mb-0 Dónde ocurrió el problema o cuál es su origen.   
          .col-lg-4.my-3(data-aos="fade-right")    
            .tarjeta.tarjeta-avatar.h-100
              img.img-w1.img-l(src='@/assets/curso/temas/115.svg' alt='AvatarTop')
              .tarjeta.bg16.ts.h-100
                .p-4.pt-5
                  h4.t1  #[i.t1 When?] / ¿Cuándo?  
                  p.mb-0 Cuándo ocurrió el problema o cuándo se encontró.    
                  
          .col-lg-4.my-3(data-aos="fade-left")    
            .tarjeta.tarjeta-avatar.h-100
              img.img-w1.img-l(src='@/assets/curso/temas/116.svg' alt='AvatarTop')
              .tarjeta.bg16.ts.h-100
                .p-4.pt-5
                  h4.t1  #[i.t1 Which?] / ¿Cuál? 
                  p.mb-0 Cuál es el patrón identificado.  
          .col-lg-4.my-3(data-aos="fade-down")    
            .tarjeta.tarjeta-avatar.h-100
              img.img-w1.img-l(src='@/assets/curso/temas/117.svg' alt='AvatarTop')
              .tarjeta.bg16.ts.h-100
                .p-4.pt-5
                  h4.t1  #[i.t1 Who?] / ¿Quién? 
                  p.mb-0 A quién afecta directamente el problema.    
          .col-lg-4.my-3(data-aos="fade-right")    
            .tarjeta.tarjeta-avatar.h-100
              img.img-w1.img-l(src='@/assets/curso/temas/118.svg' alt='AvatarTop')
              .tarjeta.bg16.ts.h-100
                .p-4.pt-5
                  h4.t1  #[i.t1 How?] / ¿Cómo?
                  p.mb-0 Cómo aparece el problema.  
                  
    p(data-aos="fade-down").mb-5 A partir de las respuestas generadas con la técnica se procede a generar cinco porqués de cada respuesta, lo que permite llegar hasta la raíz del problema y entender la naturaleza del fenómeno evidenciado, lo cual permite realizar un análisis mucho más detallado con el fin de medir y monitorear los resultados. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/119.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.ts
                  p.ts.mb-0 En los siguientes gráficos se identifican distintos tipos de formularios donde se incluyen las preguntas antes mencionadas.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Tipos_formularios.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download  

    h4(data-aos="fade-down").t1.mb-3 Diagrama de Operaciones del Proceso (DOP)
    p(data-aos="fade-down").mb-5 En la segunda fase del estudio de métodos se hizo énfasis en los tipos de gráficos utilizados para registrar la información, estos elementos hacen parte del Diagrama de Operaciones del Proceso (DOP), el cual muestra de forma cronológica todas las actividades requeridas en el proceso de producción. Esto se evidencia desde que ingresa la materia prima hasta su distribución como producto final.

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-8(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
            h5 Figura 13.
            span Ejemplo Diagrama de Operaciones del Proceso (DOP).
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/120.svg', alt='La figura muestra un ejemplo de un Diagrama de Operaciones del Proceso. En él se distinguen tres fases: preparación, ensamble y terminación. Cada fase cuenta con su respectiva operación. En los procesos 1, 2 y 3 se llevan a cabo operaciones específicas. En el proceso 4 se realiza una inspección, y en el proceso 5 se ejecuta otra operación.') 

    h4(data-aos="fade-down").t1.mb-3 Diagrama de Análisis del Proceso (DAP)
    p(data-aos="fade-down").mb-5 Un Diagrama de Análisis del Proceso (DAP) da a conocer toda la trayectoria que realiza un producto, lo cual permite evidenciar los problemas que pueden estar surgiendo en este aspecto. Este se divide en tres categorías:    

    .row.justify-content-center      
      .col-lg-10
        .row.justify-content-center.mb-4           
          .col-lg-4.my-3(data-aos="fade-left")    
            .tarjeta.tarjeta-avatar.h-100
              img.img-w1.img-l(src='@/assets/curso/temas/121.svg' alt='AvatarTop')
              .tarjeta.bg16.ts.h-100
                .p-4.pt-5
                  h4.t1 DAP Operario
                  p.mb-0 Permite conocer lo que hace una persona.  
          .col-lg-4.my-3(data-aos="fade-down")    
            .tarjeta.tarjeta-avatar.h-100
              img.img-w1.img-l(src='@/assets/curso/temas/122.svg' alt='AvatarTop')
              .tarjeta.bg16.ts.h-100
                .p-4.pt-5
                  h4.t1 DAP Material
                  p.mb-0 Describe la manipulación de un material.  
          .col-lg-4.my-3(data-aos="fade-right")    
            .tarjeta.tarjeta-avatar.h-100
              img.img-w1.img-l(src='@/assets/curso/temas/123.svg' alt='AvatarTop')
              .tarjeta.bg16.ts.h-100
                .p-4.pt-5
                  h4.t1 DAP Máquina
                  p.mb-0 Evidencia el uso de la máquina.   

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
            h5 Figura 14.
            span Ejemplo Diagrama de Análisis del Proceso (DAP).
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/124.svg', alt='La figura muestra un ejemplo de un Diagrama de Análisis del Proceso. Este diagrama presenta el proceso a seguir, cómo inicia, cómo termina, y especifica el tipo, ya sea para hombre o mujer. También se indica el método, la unidad del operario que lo elaboró y quién lo aprobó. Se resume mediante diferentes opciones como operación, inspección, transporte, demora, almacén y combinada, las cuales se representan a través de distintos símbolos.') 

    h4(data-aos="fade-down").t1.mb-3 Diagrama Causa – Efecto
    p(data-aos="fade-down").mb-5 Es un elemento gráfico que da cuenta de las causas que afectan un problema determinado de manera cualitativa. Por su estructura también es denominado diagrama de espina de pescado. Mediante su representación se facilita el análisis de los problemas y sus soluciones, de acuerdo con las variables que intervienen en el proceso analizado. 

    .row.justify-content-center.align-items-center      
      .col-lg-6(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
            h5 Figura 15.
            span Ejemplo Diagrama Causa-efecto
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/125.svg', alt='La figura muestra un ejemplo de un Diagrama Causa-efecto, también conocido como espina de pescado. En el cuerpo del diagrama se identifican las causas, tales como los costos, colaboradores, maquinaria, variables e insumos. El efecto representado es el producto no conforme debido a defectos de calidad.')                                            
</template>

<script>
export default {
  name: 'Tema7',
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
