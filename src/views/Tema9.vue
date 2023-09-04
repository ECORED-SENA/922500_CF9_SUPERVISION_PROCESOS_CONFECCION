<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 9
      h1 Costos y presupuestos


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        p(data-aos="fade-down") Cuando se presenta una nueva metodología o manera de hacer las cosas, y para que sea funcional esa propuesta se refiere a hacerla mejor: más rápido, con mejor calidad, en mejor ambiente, etc., es definitivo que ese nuevo método propuesto influya sobre la parte económica, financiera, y de mejor uso de recursos, lo cual significa que los conceptos costos y presupuestos son relevantes en la propuesta.

        p(data-aos="fade-down") Los presupuestos se refieren a las #[b.t1 cantidades y/o los valores] estimados a producir, para satisfacer unas demandas en unos periodos determinados. Si son presupuestos de ventas se calculan mediante datos históricos o estudios de mercado. Y si son presupuestos de producción son los que respaldan y atienden esos pedidos o estimados de ventas.
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/131.png', alt='')  
    p(data-aos="fade-down").mb-5 El concepto costos adecuado al sistema moda; al sector diseño, confección y moda; se refiere a:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/132.png', alt='')      
      .col-lg-8.my-3
        ul.lista-ul.fa-ul(data-aos="fade-left")
          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Identificar #[b cuáles] son los recursos que se necesitan para elaborar una prenda de vestir (tangible), o un conjunto de prendas; o definir #[b qué] recursos se necesitan para ofrecer un servicio (intangible).

          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Conocer las unidades de medida en que se comercializan esos recursos:
        ul.lista-ul.fa-ul.ps-5(data-aos="fade-left")
          li 
            i.fas.fa-tshirt.t1
            p.mb-0 Telas = metros.
          li 
            i.fas.fa-tshirt.t1
            p.mb-0 Botones = unidades.
          li 
            i.fas.fa-tshirt.t1
            p.mb-0 Mano de obra = minutos.
          li 
            i.fas.fa-tshirt.t1
            p.mb-0 Resortes = centímetros.
          li 
            i.fas.fa-tshirt.t1
            p.mb-0 Aceites = botellas, etc. 

        ul.lista-ul.fa-ul(data-aos="fade-left")
          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Establecer las cantidades o consumos de esos recursos que se necesitan, de acuerdo con sus unidades de medida.

          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Conocer los valores unitarios de esas unidades de medida.

          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Llevar todo lo anterior a valores monetarios es lo que significa costear, es decir, convertir esas cantidades de recursos a cantidades de dinero.

    p(data-aos="fade-down").mb-5 A continuación, se observa un formato con un ejemplo en el cual se describe lo anteriormente mencionado. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Ficha de cálculo de materiales e insumos.    
        .tabla-a.color-acento-contenido
          table.table1
            thead
              tr
                td O.P. No. 98
                th.bg3.text-center(colspan='6') MATERIALES E INSUMOS 
            tbody
              tr
                td REF: #[fw-normal.t2 1030]
                td CANT : #[fw-normal.t2 400]
                td.text-center TALLA S
                td.text-center TALLA M
                td.text-center TALLA  L 
                td.text-center TALLA  XL 
                td.text-center TALLA XXL
              tr
                td(colspan='2') CANTIDAD POR TALLA   
                td.text-center #[fw-normal.t2 50 ]
                td.text-center #[fw-normal.t2 150]
                td.text-center #[fw-normal.t2 150 ]
                td.text-center #[fw-normal.t2 50 ]
                td.text-center #[fw-normal.t2 0]
              tr.bg3
                th Artículo
                th Proveedor
                th Unidad de medida
                th Consumo
                th  Vr. /unitario
                th  Vr. /total unitario 
                th Vr. /Total lote
              tr
                td Tela
                td TEXTA
                td Metros
                td.text-center 1,3
                td.text-end $ 10.000
                td.text-end $ 13.000
                td.text-end $ 5.200.000
              tr
                td Entretela
                td TEXTA
                td Metros
                td.text-center 0,2
                td.text-end $ 3.000
                td.text-end $ 600
                td.text-end $ 240.000
              tr
                td Botones 
                td Botytex
                td Unidades
                td.text-center 9
                td.text-end $ 100
                td.text-end $ 900
                td.text-end $ 360.000
              tr
                td Etiquetas
                td Marquilla
                td Unidades
                td.text-center 2
                td.text-end $ 200
                td.text-end $ 400
                td.text-end $ 160.000
              tr
                td Bolsas
                td Plástica
                td Unidades
                td.text-center 1
                td.text-end $ 150
                td.text-end $ 150
                td.text-end $ 60.000
              tr
                td.text-center(colspan='4') Todos los materiales e insumos que van incorporados en la prenda
                td.bg24.text-end  TOTALES
                td.bg24.text-end   $ 15.050  
                td.bg24.text-end $ 6.020.000,00

    p(data-aos="fade-down").mb-5 Los presupuestos por su parte permiten calcular qué recursos se necesitan para desarrollar un proyecto: los materiales e insumos, la Mano de Obra Directa (MOD) y los Costos Indirectos de Fabricación (CIF). Definir el costo de esos recursos, y así poder determinar unas entradas y salidas; y la diferencia de éstas, en determinada cantidad de tiempo.

    .row.justify-content-start.mb-4.pt-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v3.svg', alt='')
          .list__txt
            h4.mb-0 Cálculo de costos                    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        p(data-aos="fade-down") Es necesario para realizar este ejercicio hacer las siguientes actividades:
        ul.lista-ul.fa-ul(data-aos="fade-left")
          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Realizar un listado de operaciones necesarias para llevar a cabo el proyecto: diseño, corte, bordados, confección, acabados, entre otros.

          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Elaborar un listado de los recursos necesarios para llevar a cabo el plan: telas, botones, mano de obra, bodega, papelería.

          li 
            i.fas.fa-tshirt.c1
            p.mb-0 Conociendo qué recursos se van a necesitar y cuáles actividades se van a realizar, procedemos a clasificarlos en tres departamentos de acuerdo con el significado de cada recurso.         
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/131.png', alt='') 
    p(data-aos="fade-down").mb-5 A continuación, se presentan las definiciones para estos 3 departamentos o áreas:
    .bg10
      .row.justify-content-center.align-items-center.mb-5.py-3           
        .col-lg-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/134.png', alt='')

        .col-lg-9
          .row.justify-content-center
            .col-lg-4.my-3        
              .bgw.p-4.h-100
                h4.t1(data-aos="fade-down") Materiales e insumos 
                p(data-aos="fade-down").mb-0 Todos los elementos que están incorporados en la prenda. Ejemplo: telas, botones, cremalleras, marquillas, hilos, etc.     
            .col-lg-4.my-3        
              .bgw.p-4.h-100
                h4.t1(data-aos="fade-down") Mano de Obra Directa
                p(data-aos="fade-down").mb-0 Se refiere a todos las actividades y servicios que transforman y/o intervienen los materiales y los insumos, desde que inicia la actividad productiva. Ejemplo: corte, confección, estampación, empaque.  
            .col-lg-4.my-3        
              .bgw.p-4.h-100
                h4.t1(data-aos="fade-down") Costos Indirectos de Fabricación (CIF) 
                p(data-aos="fade-down").mb-0 Son las acciones y recursos que se necesitan para desarrollar el proyecto y que no están incluidas en las dos anteriores, es decir, se necesitan y no están en los materiales ni tampoco en la Mano de Obra Directa, ejemplo: bodega, servicios públicos, transporte, papelería.

    p(data-aos="fade-down") Conocer lo que se necesita para un proyecto, o para que pueda funcionar una planta de producción que pertenezca al sistema moda, se refiere a saber cuáles son las actividades, los recursos, y los consumos. La clasificación de los recursos en el lugar a donde pertenecen ayuda a comprender desde muchas dimensiones el funcionamiento de la planta de producción.

    p(data-aos="fade-down").mb-5 A continuación, se presenta un cuadro donde se mencionan los 3 elementos del costo, y la incidencia del método con el valor de ese elemento.

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
            h5 Tabla 8.
            span Ejemplo de elementos de costos y la incidencia en el método. 
        .tabla-a.color-acento-contenido
          table.table1
            thead
              tr.bgh
                td.text-bold Elemento del costo 
                td.text-bold.text-center Aspecto donde el método puede influir en el costo  
                td.text-bold Observaciones
            tbody
              tr.bgtr
                td(rowspan='3') Materiales e insumos
                td La manera y los criterios con que se seleccionan los proveedores.
                td
                  | Precios, asesoría, posición geográfica, versatilidad, portafolio de servicios amplio.
              tr.bgtr
                td Calcular y determinar los consumos para cada material e insumo.
                td
                  | Elaborar trazos con menos consumos, lograr los mismos objetivos en diseño utilizando menos materiales.
              tr.bgtr
                td Utilizar la mejor metodología de manejo de inventarios.
                td
                  | Cuando el método aprobado permite manejar menos inventarios, el costo se verá afectado.
              tr
                td(rowspan='2') Mano de Obra Directa
                td
                  | Cuando se reduce la cantidad de tiempo para realizar una actividad por medio del diseño e implementación de una manera más rápida de realizarla.
                td
                  | Se logra mediante un análisis del puesto de trabajo y de hacer recomendaciones sobre los movimientos y los tiempos que realiza el operario.
              tr
                td Al utilizar tecnología blanda y dura en los procesos de manufactura.
                td Se rebajan los tiempos de ejecución.
              tr.bgtr
                td Costos Indirectos de Fabricación.
                td
                  | El diseñar e implementar mejores maneras de hacer las cosas, permiten que se necesiten menos espacios de trabajo, menor gasto de energía, de transporte y de papelería, entre otros.
                td
                  | Transportes innecesarios o demasiado largos, almacenamientos inadecuados, máquinas obsoletas, no utilización del trabajo en casa.  

    p(data-aos="fade-down").mb-5 Ahora, desde el ángulo de mejorar los métodos, o las maneras de hacer las cosas, veremos cómo se pueden relacionar con los costos y los beneficios.

    .row.justify-content-start.mb-4.pt-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v3.svg', alt='')
          .list__txt
            h4.mb-0 Relación de los costos con los métodos de trabajo 
    p(data-aos="fade-down").mb-5 Los métodos de trabajo tienen una relación directa con los costos, y eso se manifiesta en cada una de las actividades que se realizan en el proceso de producción. A continuación, se describen dichas actividades.

    h4(data-aos="fade-down").t1.mb-3 Diseño      
    p(data-aos="fade-down").mb-5 En el proceso de diseño de moda se investigan tendencias en figuras, siluetas, colores, acabados, materiales y accesorios a través de desfiles, vitrinas, internet, centros comerciales, ferias, etc. Con esta información se elaboran prototipos que, al ser aprobados, servirán para la programación de procesos posteriores. Es importante revisar constantemente los métodos y recursos utilizados para encontrar posibilidades de mejoramiento y reducción de costos. La tecnología juega un papel fundamental en este proceso, permitiendo la realización de procesos más ágiles y eficientes.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-9(data-aos="fade-left")
        .tabla-a.color-acento-contenido      
          table.table1
            thead
              tr.text-center.bgh.text-bold
                th ACTIVIDAD
                th ANÁLISIS DEL MÉTODO Y EL COSTO 
            tbody
              tr
                td Dibujar siluetas
                td
                  | El sitio donde se dibuja, la ergonomía del puesto de trabajo, las fuentes de consulta que se utilizan, y a qué costo, son elementos que se deben considerar.
              tr
                td Elaborar moldes
                td
                  | La tecnología que se utilice es determinante para el costo, pues tiene que ver con el tiempo utilizado, y con los materiales necesarios.
              tr
                td Cálculos de consumos
                td
                  | Si se elabora de manera manual o con la ayuda de algún #[i.brdtext software], el costo depende de ello.
              tr
                td Programar la Producción e Integrar la información de los procesos
                td
                  | Al integrar la información necesaria para programar lotes, entre el área de diseño y las demás áreas, se agiliza los procesos y la información. De acuerdo con resultados obtenidos de diseño, se realiza la programación de producción.

    h4(data-aos="fade-down").t1.mb-3 Trazo y corte      
    p(data-aos="fade-down").mb-5 En el área de producción de moda, las actividades realizadas son susceptibles de mejora en diferentes aspectos, como la recepción y almacenamiento de materiales, transporte de materiales y personas, elaboración y utilización de formatos, utilización de tecnología en la labor de extendida y corte, alistamiento de las piezas cortadas para el siguiente proceso, y manejo de la información. El costo de ejecución y la cantidad de recursos utilizados en cada actividad dependen del método de trabajo utilizado en cada acción.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-9(data-aos="fade-right")
        .tabla-a.color-acento-contenido      
          table.table1
            thead
              tr.text-center.bgh.text-bold
                th ACTIVIDAD
                th DESCRIPCIÓN
                th COSTO VS MÉTODO
            tbody
              tr
                td(rowspan='2') Trazar
                td(rowspan='2') Dibujar moldes sobre un área equivalente a la de la tela que se va a emplear
                td
                  | Si realizó esta actividad manualmente y utilizó ciertos recursos y en determinada cantidad.
              tr
                td
                  | Si utilizó un #[i.brdtext software], se emplearán menos recursos, por consiguiente menos costos.
              tr
                td Extender
                td
                  | Desenvolver la tela sobre una mesa, de acuerdo con la medida del trazo, verificando que la tela no tenga imperfecciones.
                td
                  | Se puede ejecutar esta actividad de forma manual, o por medio de carros automáticos, de la última manera se requiere menos tiempo, y menos personas. O sea, el mismo resultado con menos costo.
              tr
                td Cortar
                td
                  | Pasar un útil de corte por las líneas que demarcan los moldes marcadas en el trazo, de esa manera, al cortar las telas, quedan listas las piezas para ser ensambladas.
                td
                  | De acuerdo con la tecnología utilizada, y al método de corte, el tiempo y la mano de obra necesaria será mayor o menor, tiene que ver con el costo.
              tr
                td Tiquetear y alistar
                td
                  | Pegar adhesivos a las piezas cortadas para ser identificadas en las plantas de confección.
                td
                  | El tipo de herramienta, las maneras y métodos de trabajo, habilidad y destreza, tiene que ver con la cantidad de recursos a utilizar, y por ende los costos.

    h4(data-aos="fade-down").t1.mb-3 Confección      
    p(data-aos="fade-down").mb-5 El costo de confección en la moda depende del tipo, calidad y cantidad de materiales, complejidad de la prenda, producción y lugar. La mano de obra es otro factor importante. Para calcular los costos, se deben considerar los materiales, producción y costos indirectos. Las empresas deben gestionar sus costos eficientemente para competir y ofrecer precios atractivos. Pueden reducir costos con la optimización de procesos, automatización de tareas y gestión eficiente de recursos.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-9(data-aos="fade-right")
        .tabla-a.color-acento-contenido      
          table.table1
            tbody
              tr
                td(colspan='3').text-center.bgh.text-bold CÁLCULO VALOR MINUTO
              tr
                td Valor mes
                td.text-end $ 1.467.028
                td Se divide entre 30 para encontrar el valor por día.
              tr
                td Valor día
                td.text-end $ 48.901
                td Se divide entre 8 para encontrar el valor por hora.
              tr
                td Valor hora
                td.text-end $ 6.113
                td Se divide entre 60 para encontrar el valor por minuto.   
              tr
                td Valor minuto, mano de obra directa con todas las prestaciones, teniendo como base el SMLV.
                td.text-end $ 102  
                td 
</template>

<script>
export default {
  name: 'Tema9',
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
