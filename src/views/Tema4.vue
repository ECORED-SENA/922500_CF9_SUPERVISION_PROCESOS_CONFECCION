<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Herramientas tecnológicas

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/47.png', alt='')            
      .col-lg-7.my-3
        p(data-aos="fade-down") Existen diversas plataformas que apoyan las actividades diarias de registro de producción, donde podemos desarrollar cálculos, análisis y seguimiento a la información de cómo la empresa ejecuta las tareas proyectadas desde la planeación, brindando informes detallados de cada área por revisar.

        p(data-aos="fade-down") Las herramientas tecnológicas nos brindan beneficios en la toma de decisiones, respuestas ágiles a los problemas o cuellos de botellas en las líneas de producto.
  
    .bg12.mb-5
      .row.justify-content-start.mb-4.pt-4    
        .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
          .list.mb-1
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v3.svg', alt='')
            .list__txt
              h4.mb-0 #[i Hardware] para recolectar y analizar información   
      p(data-aos="fade-down") Existen diversos sistemas de #[i Hardware], como dispositivos con sensores que permiten la recolección de información y estado de rotación de productos en la fabricación, ventas o distribución logística. 
      .row.justify-content-center.mt-5.pb-4           
        .col-lg-auto(data-aos="fade-right")         
          .titulo-sexto.color-acento-contenido
              h5 Figura 5.
              span Pizarra electrónica para el control de producción.  
          img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/46.png', alt='Imagen de una pizarra electrónica o tablero de eficiencias y reporte, hora a hora, de una determinada empresa o proyecto.') 
          figcaption Nota. Tomado de Internacional Systems
        .col-lg-4 
          p(data-aos="fade-down").pt-5 En la imagen anterior de la figura 5 se observa un tablero de eficiencias y reporte hora a hora, realizado por medio de una pantalla y un programa desarrollado en tiempos establecidos, informando al personal operativo las unidades proyectadas a salir, las unidades reales que la línea de trabajo produce, la eficiencia, el cual evalúa la meta vs las unidades reales.
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="RF - Radiofrecuencia")
        p Las ondas de #[b radiofrecuencia (RF)] generan una corriente alterna, que pasa a través de un conductor. Las ondas se caracterizan por sus frecuencias y longitudes.

        p Una de las aplicaciones está en los secadores del proceso de teñido o tintura de los hilos, donde esta máquina tiene una banda transportadora y en la mitad del proceso entran los hilos a una cámara de secado y esta funciona por ondas de radiofrecuencia, tal como los hornos microondas donde calentamos alimentos; esta máquina por medio de ondas de radiofrecuencia genera altas temperaturas, secando la humedad generada por el proceso de teñido, cuidando que la fibra de hilo no pierda sus propiedades.
         
      .tarjeta.color-acento-botones--borde.p-4(titulo="RFID - Identificación por<br> Radiofrecuencia")          
        p Es una tecnología de punta, utilizada para la completa identificación de objetos de cualquier tipo, que permite una rápida captura de datos de manera automática mediante radiofrecuencia.

        p La radiofrecuencia aporta notablemente en los procesos logísticos en la búsqueda de materiales, insumos o productos terminados en bodegas o espacios de bastante amplitud, lo que se relaciona en el sistema el ingreso de inventarios y donde se realiza la ubicación en el espacio. Para el personal operativo le es de facilidad, con un equipo de tecnología de radiofrecuencia, detectar dónde está ubicado el objeto o artículo solicitado, ahorrando tiempos excesivos por la búsqueda en la estantería donde se almacenan los productos.
        .bg13.p-4
          p Para profundizar observe los videos sobre la implementación de la tecnología RFID en el sector textil, que se encuentran en el material complementario. 

          ul.lista-ul.mb-0.fa-ul(data-aos="fade-left")
            li 
              i.fas.fa-tshirt.c2
              p.mb-0 Implantación con éxito con tecnología RFID en el sector textil.
            li.mb-0 
              i.fas.fa-tshirt.c2
              p.mb-0 Gestión de inventario con tecnología RFID.

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1 #[i Hardware] para visualizar y controlar     

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-6.my-3 
        p(data-aos="fade-down") El objetivo de cualquier sistema de dispositivo a instalar es visualizar y controlar los inventarios, controlar el rendimiento de trabajo del personal y controlar el rendimiento de la ejecución de lo proyectado. La calidad también juega un papel importante en los dispositivos instalados e implementados dentro de la empresa, estos generan mejora continua a las posibles fallas que presenten los procesos o la maquinaria que ejecuta dichas tareas.

        p(data-aos="fade-down") La maquinaria tiene muchos dispositivos instalados, por lo cual es importante desarrollar una adecuada programación de mantenimiento preventivo y correctivo, para cada una de las partes que necesiten cambios por daños representativos a la infraestructura, ver figura 6.                     
      .col-lg-6.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/53.png', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9(data-aos="fade-right")         
        .titulo-sexto.color-acento-contenido
            h5 Figura 6.
            span Esquema general #[i hardware]. 
    .row.justify-content-center.mb-5
      .col-lg-9.p-0
        .row.justify-content-center.align-items-center.bg14.ms-1.pb-0.px-4 
          .col-lg-7.p-0
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/50.svg', alt='La figura representa el esquema general del hardware, el cual incluye los siguientes elementos: en primer lugar, la visualización de datos; en segundo lugar, el monitoreo remoto; en tercer lugar, la emisión de alertas vía email y SMS; en cuarto lugar, un servidor en la nube; en quinto lugar, el seguimiento de activos; y finalmente, la activación de eventos.')         
          .col-lg-5(data-aos="fade-down")
            .p-5.pe-0
              p Visualice el video #[i Software] Planificador de la Producción y detalle los beneficios prácticos de la tecnología en un proceso de producción eficiente; este video se encuentra en el material complementario.       
        figcaption.mt-3 Nota. Tomado de Telemetrik www.telemetrik.co

    h4.t1(data-aos="fade-down") Tableros digitales

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6
        p(data-aos="fade-down") Los tableros digitales controlan principalmente la eficiencia de las plantas de producción; los datos principales para el cálculo de eficiencia son las unidades meta vs las unidades reales producidas en las plantas, sobre todo genera mayor impacto en el área de confección midiendo y controlando el flujo de inventario y seguimiento operativo y creación de módulos.
        .row.justify-content-center.align-items-end.mb-5.bg13          
          .col-auto.pb-0
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='')
          .col
            p.mb-0.p-4 Inspeccionando el video denominado Indicadores de producción, podrá profundizar en el tema; lo encontrará en el material complementario. 
      .col-lg-6
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/51.png')         


    h4.t1(data-aos="fade-down") Semáforos Método Andon
    p(data-aos="fade-down").mb-5 Los sistemas de semaforización son un sistema de alerta visual o audible de problemas en procesos productivos (ver figura 7), son utilizados para señalizar el estado visual del proceso, identificar cómo se está operando, observar la capacidad de la maquinaria y si el flujo de proceso presenta fallas o inconsistencias, para en efecto tomar decisiones de manera inmediata.    

      .row.justify-content-center.align-items-center.mb-5         
        .col-lg-5(data-aos="fade-right")         
          .titulo-sexto.color-acento-contenido
              h5 Figura 7.
              span Ejemplo Semáforo Andon  
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/54.svg', alt='La figura ilustra un ejemplo del semáforo de Andón, el cual es un sistema de alerta visual utilizado en los procesos productivos. Este semáforo cuenta con diferentes estados. En primer lugar, está el Estado Verde, que indica una situación normal. En segundo lugar, está el Estado Amarillo, que señala problemas mecánicos, cambios de limpieza o mantenimiento programado, materiales no conformes y problemas de calidad. Por último, en el Estado Rojo se representan las paradas no programadas debido a emergencias.')
          figcaption.mt-3 Nota. Tomado de CGI S.A.    

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .bg3.p-4(data-aos="flip-down")
          .row.justify-content-center.align-items-center        
            .col-lg-6.my-2
              img.img-a.img-t.ps-2(data-aos="zoom-in")(src='@/assets/curso/temas/55.png', alt='')
            .col-lg-6.my-2
              p(data-aos="fade-down").j.mb-0 En el video Sistema ANDON, en el material complementario encontrará terminología importante en cómo se puede realizar impactos de señalización en los sistemas de control de las plantas de producción y qué efecto tiene en el control de procesos.

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2 #[i Software] para diagramar flujos
    p(data-aos="fade-down") Los diagramas de flujo describen procesos o sistemas de información de manera gráfica, se utilizan para documentar, estudiar, planificar y mejorar los procesos de trabajo, se basa en la utilización de símbolos para representar las diferentes operaciones del proceso, las cuales se expresan en un orden lógico.
    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-6.my-3 
        p(data-aos="fade-down") Estos diagramas proporcionan claridad en cada idea a plasmar con respecto a un proceso o procedimiento, el cual se interpreta en un medio gráfico, se utilizan en diversos campos: fabricación, educación, ingeniería y ventas, por lo que su uso se ha popularizado en cualquier sector. Por ejemplo, en la planificación de nuevos proyectos, generalmente se implementan nuevos métodos de trabajo, resulta muy útil plasmarlos de manera gráfica mediante diagramas de flujo para explicar a los equipos de trabajo qué compone el desarrollo y ejecución del proyecto.

        p(data-aos="fade-down") Los diagramas de flujo son útiles en los procesos de auditoría, ya que ofrecen información clara del trabajo, diagraman procesos y procedimientos donde se pueden detectar posibles problemas o fallos. Dividen en pequeñas secuencias las instrucciones necesarias e importantes para las auditorías. Los diagramas de flujo también son útiles en la toma de decisiones, ya que pueden mostrar todas las opciones posibles para que el proceso sea rápido y basado en datos. Son uno de los medios más útiles para desarrollar algoritmos, permitiendo comprender problemáticas representativas y plasmando las posibles soluciones lógicas basadas en análisis de datos.                   
      .col-lg-6.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/56.png', alt='')

    .bg15
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.my-3 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/58.png', alt='')                
        .col-lg-8.my-3 
          p(data-aos="fade-down") Existen varios tipos de diagramas de flujo, entre ellos:                

          ul.lista-ul.fa-ul(data-aos="fade-left")
            li 
              i.fas.fa-tshirt.c1
              p.mb-0 #[b Diagramas de flujo de documentos:] los diagramas de documentos están focalizados a sistemas de empresas que desarrollan prestación de servicios.

            li 
              i.fas.fa-tshirt.c1
              p.mb-0 #[b Diagramas de flujo del sistema:] están enfocados en función de información dentro de controladores desarrollados por programas informáticos (#[i software]).

            li 
              i.fas.fa-tshirt.c1
              p.mb-0 #[b Diagramas de flujo de datos:] es la proporción que conocemos en la recolección de información también llamada minería de datos, donde se relacionan a la información de grandes empresas que tienen franquicias a nivel mundial.

            li 
              i.fas.fa-tshirt.c1
              p.mb-0 #[b Diagramas de flujo del programa:] estos tratan de efectuar planeaciones para proyectos.

            li 
              i.fas.fa-tshirt.c1
              p.mb-0 #[b Diagramas de flujo de trabajo:] utilizado para administrar y gestionar el talento humano e integración de procedimientos sociales.    

      p(data-aos="fade-down").mb-5 Existen diversos #[i software] para diagramar la representación de cualquier proceso, ilustrando el proceso desde su inicio, las tareas o actividades (proceso) y un final. Donde explica cada una de las partes del proceso que se está analizando, y permite identificar la forma cómo funciona la organización y cómo podemos mejorar cada una de las conexiones entre un proceso y otro, entre una operación y otra. Algunos de ellos son:

      .row.justify-content-center.align-items-end.mb-5           
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/59.png', alt='')
        .col-lg-6
          .tarjeta.tarjeta-verde.p-4(data-aos="fade-right") 
            SlyderA(tipo="b")
              .row.justify-content-center.mt-3
                .col-11
                  h4 Creately
                  p Es una herramienta para crear diagramas de flujo con ayuda de plantillas, ofrece automatización mostrando diagramas más sofisticados en el proceso y sea mucho más rápido. Tiene diferentes formas, tipos de diagramas, atajos de barra de herramientas, temas y estilos que ayudan a diseñar buena información.         
                  img.img-a.img-t(src='@/assets/curso/temas/60.png', alt='')     
              .row.justify-content-center.mt-3
                .col-11
                  h4 Edraw   
                  p El Creador de diagramas de flujo de Edraw es compatible con sistemas Windows, Mac y Linux. Algunas de las marcas más importantes del mundo confían en él, como Samsung, IBM e Intel. Viene con varios símbolos, formas y elementos que se pueden incorporar usando su interfaz de arrastrar y soltar. También es muy fácil de usar.         
                  img.img-a.img-t(src='@/assets/curso/temas/61.png', alt='')       
              .row.justify-content-center.mt-3
                .col-11
                  h4 Diagrama de flujo Zen Flowchart 
                  p Este creador de diagrama de flujo es de código abierto y se caracteriza por su facilidad de uso, conecta fácilmente los nodos mediante conectores inteligentes. Su interfaz es limpia y minimalista y facilita guardar el resultado en archivos tipo PNG.         
                  img.img-a.img-t(src='@/assets/curso/temas/62.png', alt='')       
              .row.justify-content-center.mt-3
                .col-11
                  h4 SmartDraw  
                  p Este programa puede ser utilizado en línea o descargarse en el PC del usuario con sistema Windows. Cuenta con plantillas que permiten centrarse en la diagramación del proceso y compartir los resultados en la nube.         
                  img.img-a.img-t(src='@/assets/curso/temas/63.png', alt='')       
              .row.justify-content-center.mt-3
                .col-11
                  h4 Lucidchart  
                  p Es un programa para desarrollar diagramas de flujo, donde se puede arrastrar y soltar, tiene una presentación muy amigable con respecto a las herramientas en formas y elementos que se pueden usar de una manera muy cómoda y rápida en la elaboración de diagramas de flujo.         
                  img.img-a.img-t(src='@/assets/curso/temas/64.png', alt='')

    Separador 
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.3 #[i Software] para diseño, simulación y optimización de plantas
    .row.justify-content-center.align-items-end.mb-4
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/66.png', alt='')                  
      .col-lg-8.my-3 
        p(data-aos="fade-down") Esta es una tecnología que ha evolucionado enormemente en los últimos años, el diseño es importante para simular o analizar plantas de producción, mirar la distribución puntos de redes y detalles de espacios donde se podrían realizar cálculos de capacidad instalada en metros cuadrados o construcción de maquinaria.                 

        .row.justify-content-center.align-items-end.mb-3.bg13          
          .col-auto.pb-0
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='')
          .col
            p.mb-0.p-4 Consulte el video denominado Mejores 5 programas para hacer planos 3D, en el material complementario; este explica varios de los #[i software] para simulación, que se encuentran en el mercado.      
        p(data-aos="fade-down") A continuación, se mencionan los #[i software] más utilizados y desarrollados por diferentes industrias tecnológicas.
        .row.justify-content-center 
          .col-lg-4
            ul.lista-ul.fa-ul(data-aos="fade-left")
              li 
                i.fas.fa-tshirt.c1
                p.mb-0 Scribus.
              li 
                i.fas.fa-tshirt.c1
                p.mb-0 Inkscape. 
              li 
                i.fas.fa-tshirt.c1
                p.mb-0 Irfanview.                
          .col-lg-4
            ul.lista-ul.fa-ul(data-aos="fade-left")
              li 
                i.fas.fa-tshirt.c1
                p.mb-0 Vector.
              li 
                i.fas.fa-tshirt.c1
                p.mb-0 Canva.
              li 
                i.fas.fa-tshirt.c1
                p.mb-0 Adobe Illustrator.                  
          .col-lg-4
            ul.lista-ul.fa-ul(data-aos="fade-left")
              li 
                i.fas.fa-tshirt.c1
                p.mb-0 Adobe Photoshop.
              li 
                i.fas.fa-tshirt.c1
                p.mb-0 Corel Draw. 
              li 
                i.fas.fa-tshirt.c1
                p.mb-0 Promodel. 

        p(data-aos="fade-down") Todos los #[i software] comparten las mismas cualidades en cuanto a simular y modelar con animación y optimización cualquier tipo de sistemas de manufactura, logística, servicios, #[i call centers], manejo de materiales, etc.              

        .row.justify-content-center.align-items-end.bg13          
          .col-auto.pb-0
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/67.png', alt='')
          .col
            .p-4
              p Explora los siguientes videos en el material complementario. En los que se observan los mejores programas de simulación industrial y de distribución de maquinaria. 
              ul.lista-ul.fa-ul.mb-0(data-aos="fade-left")
                li 
                  i.fas.fa-tshirt.c1
                  p.mb-0 5 Mejores programas de simulación industrial 
                li.mb-0 
                  i.fas.fa-tshirt.c1
                  p.mb-0 Diseño y simulación de planta de confecciones en Flexsim    
</template>

<script>
export default {
  name: 'Tema4',
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
