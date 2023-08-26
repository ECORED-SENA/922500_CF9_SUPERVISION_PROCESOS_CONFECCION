<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Documentación
    .row.justify-content-center.align-items-start.mb-4 
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/41.png', alt='')           
      .col-lg-7.my-3
        p(data-aos="fade-down") La documentación dentro de las líneas de producción y dentro de las plantas de procesos productivos de las compañías son importantes y comunes, aunque cada empresa tiene formatos construidos de manera autónoma para tener datos numéricos y así mismo tener un control y dominio sobre las unidades producidas, paros mecánicos, personas que no asistieron a laborar, producción con defectos de calidad, clasificación de prendas que no cumplen los parámetros, etc. Lo que focaliza lo importante de tener formatos y documentación de métodos de trabajo como realizar operaciones y estructuras de trabajo para tomar decisiones correctivas y mejora continua.

    .bg12
      .row.justify-content-start.mb-4.pt-4    
        .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
          .list.mb-1
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v3.svg', alt='')
            .list__txt
              h4.mb-0 Bitácoras   
      p(data-aos="fade-down") Los procesos de manufactura producen a diario variedad de datos, de los cuales se debe recolectar información en #[b.t1 formatos para almacenar y analizar información] de unidades producidas y las unidades faltantes por producir, lo cual es importante para tener evidencia numérica de los procedimientos ejecutados dentro de los procesos de producción.   
      p(data-aos="fade-down") Las bitácoras son documentos utilizados para el registro de información, deben estar actualizados y no dejar ningún dato sin registrar. A continuación, en la tabla 2 se observa un ejemplo de bitácora.
      .row.justify-content-center.align-items-center.my-5           
        .col-lg-8(data-aos="fade-right")         
          .titulo-sexto.color-acento-contenido
              h5 Tabla 2.
              span Formato recolección de información operativo diario (hoja de producción).  
          .tabla-a.color-acento-contenido
            table.table1
              tbody.text-bold
                tr.bgw
                  td.bgh Empresa:
                  td(colspan='4') 
                tr.bgw
                  td.bgh Departamento
                  td(colspan='4') 
                tr.bgw
                  td.bgh Nombre:
                  td(colspan='4') 

                tr.bgh
                  td Referencia
                  td Operación                        
                  td Unidades 
                  td Hora inicial
                  td Hora final
                tr.bgw
                  td
                  td
                  td
                  td
                  td
                tr.bgw
                  td
                  td
                  td
                  td
                  td
                tr.bgw
                  td
                  td
                  td
                  td
                  td
                tr.bgw
                  td
                  td
                  td
                  td
                  td
                tr.bgw
                  td
                  td
                  td
                  td
                  td
                tr.bgh
                  td Total
                  td
                  td
                  td
                  td   

      p(data-aos="fade-down").pb-4 El diligenciamiento del formato es de manera personal para los cargos operativos, especificando las actividades desarrolladas en el día, controlando referencias, operación ejecutada en la construcción del producto y el horario en que inició y terminó la actividad asignada. Los analistas de ingeniería, supervisores y jefes de las plantas de producción son quienes revisan los registros para realizar diversos informes de trabajo. 

    .row.justify-content-start.mb-4.pt-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v3.svg', alt='')
          .list__txt
            h4.mb-0 Formatos para visualizar y controlar
    p(data-aos="fade-down").mb-5 Los formatos visuales de control de producción son tableros de control de salida de producto de cada una de las líneas o módulos de producción, donde los supervisores, analistas y jefes de producción al realizar los recorridos por las instalaciones, detectan si las líneas o módulos de producción están cumpliendo con las unidades a producir en cada hora de trabajo, si no se cumple con las unidades de entrega, los analistas y supervisores entran analizar si hay cuellos de botella o porque no se reportan las unidades indicadas a el grupo de trabajo. A continuación, en la Tabla 3 se observa un ejemplo de formato de tablero reporte hora a hora de unidades producidas. 

    .row.justify-content-center.align-items-center      
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43.png', alt='')           

      .col-lg-6
        .titulo-sexto.color-acento-contenido
            h5 Tabla 3.
            span Formato recolección de información operativo diario (hoja de producción).
        .tabla-a.color-acento-contenido
          table.table1
            tbody
              tr.bgh.text-bold
                td Módulo o línea
                td
                td(colspan='2') Unidades meta * turno
              tr.bgh.text-bold
                td Turno    
                td
                td(colspan='2') Unidades meta * hora
              tr.bgh.text-bold
                td Horas laboradas
                td
                td(colspan='2' rowspan='2') Referencias
              tr.bgh.text-bold
                td # personas
                td
              tr.bgh.text-bold
                td Horas
                td Unidades
                td % Eficiencia 
                td Acumulado
              tr.text-center
                td 1
                td
                td
                td
              tr.text-center
                td 2
                td
                td
                td
              tr.text-center
                td 3
                td
                td
                td
              tr.text-center
                td 4
                td
                td
                td
              tr.text-center
                td 5
                td
                td
                td
              tr.text-center
                td 6
                td
                td
                td
              tr.text-center
                td 7
                td
                td
                td
              tr.text-center
                td 8
                td
                td
                td
              tr.bgh.text-bold
                td Total
                td
                td
                td                   
</template>

<script>
export default {
  name: 'Tema3',
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
