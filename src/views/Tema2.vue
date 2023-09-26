<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Teoría de restricciones
    .bg1.mb-4
      .row.justify-content-center.align-items-center.py-4          
        .col-lg-7.my-3
          p(data-aos="fade-down") El término restricción se define como una limitación, algo que impide superar ciertas metas. La Teoría de Restricciones, formulada por el profesor y físico israelí Eliyahu Goldratt, tiene como fundamento la teoría general de sistemas y se centra en el objetivo general de toda empresa: generar dinero a la mayor velocidad posible a través de las ventas (Goldratt y Cox, 2008). Este valor se mide mediante el indicador llamado #[i throughput]. Para lograr esto, se sostiene que los esfuerzos deben concentrarse en la operación #[b ‘cuello de botella’], es decir, en la operación que más tiempo consume y limita los resultados globales.
        .col-lg-5.my-3 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.png', alt='') 

    .row.justify-content-start.mb-4    
        .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
          .list.mb-1
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v3.svg', alt='')
            .list__txt
              h4.mb-0 Indicadores claves de la teoría de restricciones
    p.mb-5(data-aos="fade-down") Dentro de la teoría se deben contemplar algunos conceptos que facilitan su comprensión y las posibles alternativas de solución:
    .bg10
      .row.justify-content-center.align-items-center.mb-5.py-3           
        .col-lg-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='')

        .col-lg-9
          .row.justify-content-center
            .col-lg-4.my-3        
              .bgw.p-4.h-100
                h4(data-aos="fade-down") #[i Throughput] (rendimiento)
                p(data-aos="fade-down").mb-0 Es un indicador de la Teoría de Restricciones que determina la velocidad en que se genera dinero a través de las ventas. Se calcula restando del dinero en efectivo obtenido de las ventas el dinero que se paga y se debe pagar a los proveedores. Mide el dinero nuevo generado por la empresa, que después debe permitir pagar los gastos de operación, para establecer las utilidades generadas por la operación de la empresa en un período determinado.
            .col-lg-4.my-3        
              .bgw.p-4.h-100
                h4(data-aos="fade-down") Beneficio Neto  
                p(data-aos="fade-down").mb-0 Este indicador corresponde a la sumatoria del #[i Throughput] (rendimiento) y la resta de todos los gastos operativos correspondientes al periodo. Dentro del objetivo o propósito de la teoría de restricciones esta incrementar este beneficio neto.
            .col-lg-4.my-3        
              .bgw.p-4.h-100
                h4(data-aos="fade-down") Retorno de la Inversión - ROI                                 
                p(data-aos="fade-down").mb-0 Indicador que relaciona la utilidad con la inversión se calcula con el objetivo de validar que tan rápido se recupera la inversión a través del beneficio neto. Se calcula dividiendo el Beneficio Neto entre el total de la inversión.

    .row.justify-content-start.mb-4    
        .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
          .list.mb-1
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v3.svg', alt='')
            .list__txt
              h4.mb-0 Principios fundamentales
    p.mb-5(data-aos="fade-down")  Al analizar las diversas variables en que se basa la teoría de restricciones, se identifican las posibles soluciones para tratar el cuello de botella presente en el proceso.

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-6.my-3 
        p(data-aos="fade-down").mb-0 Este se detecta de manera visual por volúmenes de unidades concentradas o acumuladas en la línea o módulo de proceso, normalmente ocurre por daños mecánicos de las máquinas o por errores de calidad. Cuando en la máquina ocurre un daño mecánico, el operario no puede seguir fabricando unidades, esto provoca un obstáculo para que las siguientes operaciones continúen el proceso de fabricación, lo que ocasiona un atraso y un cuello de botella, es decir, donde no puede continuar el flujo de trabajo.                        
      .col-lg-6.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.png', alt='')

    TabsC.color-acento-botones.mb-5(data-aos="fade-left")
      .py-3.py-md-4(titulo="Balancear el flujo")
        .row.justify-content-center.pt-3
          .col-md-6.mb-4.mb-md-0
            p Lo realmente importante es que el flujo de producción sea equilibrado, hay que focalizarse más en el flujo que en las capacidades productivas individuales de los puestos de trabajo, como se observa en la figura que representa el cuello de botella, durante el balanceo de líneas o módulos, según el sistema de producción empleado. 
          .col-md-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')
      .py-3.py-md-4(titulo="Evitar “sobreStock”")
        .row.justify-content-center.pt-3
          .col-md-6.mb-4.mb-md-0
            p La producción de un puesto sin cuello de botella debe estar supeditada a la del cuello de botella de su línea. Una sobreproducción por cuellos de botella genera #[i stocks] (inventarios) innecesarios, paralizando el flujo de trabajo, generando problemáticas hasta por defectos de calidad sin identificar. 
          .col-md-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')
      .py-3.py-md-4(titulo="Tiempo perdido en el flujo")
        .row.justify-content-center.pt-3
          .col-md-6.mb-4.mb-md-0
            p Cada minuto perdido por un cuello de botella es un minuto perdido en toda la fábrica, un minuto ganado a un proceso que no suponga una limitación no sirve para nada, es un espejismo, no va a repercutir en un aumento de la producción ya que otro puesto limita la capacidad. Basado en los puntos anteriores se puede decir que el cuello de botella limita la facturación de la empresa y rige el inventario. 
          .col-md-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.png', alt='')
      .py-3.py-md-4(titulo="Lotes pequeños")
        .row.justify-content-center.pt-3
          .col-md-6.mb-4.mb-md-0
            p En la teoría de restricciones cobra especial importancia los conceptos lote de proceso y lote de transferencia. 
            ul.lista-ul.fa-ul(data-aos="fade-left")
              li 
                i.fas.fa-tshirt.c1
                p.mb-0 El lote de proceso es lo que produce un centro de trabajo entre dos preparaciones seguidas, suele ser de tamaño amplio, para evitar las paradas de alistamiento de máquinas que son grandes.

            ul.lista-ul.fa-ul(data-aos="fade-left")
              li 
                i.fas.fa-tshirt.c1
                p.mb-0 El lote de transferencia es la cantidad que se transporta de un puesto a otro de trabajo.
            p En los sistemas productivos clásicos, ambos lotes suelen tener el mismo tamaño, esto hace que se aumente el tiempo total de fabricación y el #[i stock] en curso. En los procesos de confección es muy común que se asignen lotes grandes, desconociendo que lo que genera es un tiempo de respuesta más demorado en los procesos siguientes, las nuevas metodologías sugieren que los lotes de producción sean máximos de 5 piezas por cada puesto de trabajo para que la transferencia sea más rápida. Hay que tender a tamaños de lote transferencia lo más pequeño posibles, de esta manera se reduce el #[i lead time] (tiempo de espera).
          .col-md-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/37.png', alt='')
      .py-3.py-md-4(titulo="Prioridad de mantenimiento en las restricciones")
        .row.justify-content-center.pt-3
          .col-md-6.mb-4.mb-md-0
            p En muchos procesos las restricciones de capacidad no se dan por la falta de personas para este puesto, sino está restringido por la cantidad de maquinaria o equipo disponible para este. El equipo de mantenimiento debe tener como prioridad absoluta los puestos que son restricciones, permitiendo tener un flujo constante. Es por esto por lo que el equipo de mantenimiento se prepara para tener máquinas disponibles adicionales o realizar mantenimiento periódico y no restringir aún más la operación cuello de botella. 
          .col-md-5
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/38.png', alt='')

    .row.justify-content-start.mb-4    
        .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
          .list.mb-1
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v3.svg', alt='')
            .list__txt
              h4.mb-0 Pasos para la mitigación de restricciones
    p.mb-5(data-aos="fade-down") Las restricciones o cuellos de botella del flujo del proceso se mitigan a través de los siguientes pasos, ver figura 3, los cuales reflejan un ciclo que vuelve a empezar una vez se haya resuelto el cuello de botella identificado.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4(data-aos="fade-left")     
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span  Pasos para mitigar restricciones
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/39.svg', alt='La figura representa los pasos para mitigar las restricciones. Primero, se realiza la identificación de las restricciones. Segundo, se procede a explotar la restricción. Tercero, se subordina todo a la decisión anterior. Cuarto, se busca aumentar la capacidad de la restricción. Y quinto, se comienza de nuevo el proceso.')  

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg11")
      .row.justify-content-center(titulo="Identificación de restricciones")
        .col-md-6.mb-4.mb-md-0
          p Dentro de una línea de producción en una empresa de confecciones, se puede validar la presencia de restricciones o cuellos de botella, cuando vemos acumulación de producto en desarrollo en algún punto del flujo del proceso, esto significa que esta estación de trabajo está respondiendo con menor velocidad que el resto.

          p Si el proceso de producción tiene varias secciones claramente definidas, cada una de ellas puede tener un cuello de botella. Sin embargo, estos cuellos de botella no son fáciles de identificar a simple vista. Por lo tanto, se pueden prever mediante la estimación de la velocidad con la que cada parte del proceso responde al siguiente, tal como se muestra en la Figura 4. 
        .col-md-6
          .titulo-sexto.color-acento-contenido
            h5 Figura 4.
            span Cuello de Botella
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40.svg', alt='Gráfica que muestra cuatro operaciones de trabajo donde, en la tercera, se responde con menor velocidad y capacidad, generando un cuello de botella en la producción.') 
      .row.justify-content-center(titulo="Explotar la restricción")
        .col-12
          p Después de identificar la restricción, es necesario decidir qué hacer con las limitaciones, ya que hay varias posibilidades según la inversión disponible. Generalmente el tipo de propuestas serán evaluadas a través de costo y la más económica puede ser actuar para tener el puesto a la máxima producción; por ejemplo, realizar un estudio de trabajo con el objetivo de optimizar la capacidad actual, (técnica que se verá posteriormente) o aprovechar al máximo el recurso que representa el cuello de botella.

          p Por ejemplo, si la restricción de la planta de confección es la operación en una máquina automática pegadora de bolsillos, equipos que se caracterizan por ser restringidos por su costo de inversión, habrá que asegurarse de que dicha máquina funciona siempre a su pleno rendimiento, entonces hacerle un mantenimiento preventivo adecuado y gestionar los tiempos de producción pueden ser opciones de tratamiento.      
      .row.justify-content-center(titulo="Subordinar todo a la restricción")
        .col-12
          p Los recursos que no son una restricción tienen, por definición, más capacidad que el recurso que representa el cuello de botella. Pero es importante no producir a un ritmo mayor al de la restricción, ya que puede generar excesos de inventario y mayores costos en las tareas de control, por ejemplo, en una planta de confección en donde se ha identificado que la restricción es una máquina automática pegadora de bolsillos, se debe asegurar que las demás operaciones trabajen al mismo ritmo del cuello de botella, ya que operar de más, significará pérdidas de tiempo y dinero. 
      .row.justify-content-center(titulo="Aumentar la capacidad de la restricción")
        .col-12
          p Una vez que la capacidad del recurso que representa la restricción del sistema ha alcanzado la máxima capacidad, entonces es momento de elevarlo invirtiendo en más equipamiento o tecnología, por ejemplo en la restricción identificada sobre la máquina automática pegadora de bolsillos, se tendría que pensar en mejorar en una tecnología que permita aumentar la capacidad, si la actual hacía 150 unidades por hora, es momento de pensar si se puede invertir en una que haga el doble, mínimo 300 unidades y que se pueda recuperar la inversión rápidamente.      
      .row.justify-content-center(titulo="Empezar de nuevo")
        .col-12
          p.mb-4 Una vez que la restricción del sistema es elevada y su rendimiento mejora, puede que deje de ser el eslabón más débil. Entonces, el cuello de botella pasará a estar en otro recurso. Los cambios realizados en la restricción anterior para mejorarla pueden haber conllevado nuevas formas de gestión, nuevas políticas de empresa, nuevas tecnologías, etc. Pero centrarse después en una nueva restricción puede requerir una nueva forma de administrar el sistema y hay que evitar que la inercia haga que las políticas establecidas anteriormente sean una barrera y se conviertan en una restricción en sí mismas. Por tanto, hay que volver al paso 1 y repetir todo el proceso de forma completa, siguiendo así una #[b filosofía de mejora continua.]

          .tarjeta.color-secundario.p-3
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/v1.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.ts
                    h4.ts SENNOVA
                    p.ts.mb-0 Profundice en este tema consultando en el material complementario la conferencia Comparación entre líneas de producción de confecciones, módulo convencional y aula semiautomática, presentada en el IV Simposio nacional formación con calidad y pertinencia. SENNOVA.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Comparacion_lineas_produccionconfecciones.pdf')" target="_blank")
                      span Descargar
                      i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema2',
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
