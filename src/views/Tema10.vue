<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 10
      h1 Costos y métodos

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7.my-3
        p(data-aos="fade-down") Elaborar prendas de vestir o realizar actividades del sistema moda, requiere de una serie de recursos que son sometidos a diversas actividades, cada uno con un costo asociado de acuerdo con las cantidades utilizadas. La manera o metodología con que realizamos las actividades y con que utilizamos estos recursos, definen un mayor o menor costo, se podría decir entonces, que un método de trabajo bien diseñado lograría que el costo de un producto o un servicio sea competitivo.      
        p(data-aos="fade-down") De igual forma, el método o manera como se seleccionan los proveedores de materias primas e insumos, el método como los utilizamos, la metodología con la que registramos esos consumos y las cantidades óptimas que utilizamos, demuestra una relación estrecha entre método y costo.
    
        .bg16.p-4(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 La manipulación de elementos necesarios para obtener prendas de vestir o servicios que tengan que ver con la industria de la moda, genera un costo de #[b.t1 Mano de Obra Directa] que está ligado al valor y al consumo de minutos; el método o la manera como se manipulan los elementos, se intervienen y transforman, la manera como se registran estos movimientos hace que se puedan reducir los tiempos de fabricación y de esa manera ser racional en los costos. 
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/135.png', alt='')            

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/136.png', alt='')       
      .col-lg-9.my-3
        p(data-aos="fade-down") Los recursos necesarios para desarrollar proyectos de la industria de la moda, y que no son materiales, ni tampoco son mano de obra directa, o sea los que se refieren al área de trabajo, a los servicios públicos, a los gastos de papelería y víveres, a las personas que no transforman materias primas, pero que son necesarias: se conocen como Mano de Obra Indirecta. La utilización concienzuda de estos recursos, haciendo uso de buenos métodos de trabajo, permite que los costos derivados de esta operación sean los apropiados, y ayuden a producir resultados competitivos.

    .row.justify-content-start.mb-4.pt-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v3.svg', alt='')
          .list__txt
            h4.mb-0 Precio de venta        

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/138.png', alt='')       
      .col-lg-8.my-3
        p(data-aos="fade-down") El precio de venta de las prendas de vestir o los servicios relacionados con el sector moda, tienen que ver con el costo y este depende de los métodos de trabajo eficientes o no, que hayamos utilizado. El porcentaje de utilidad se puede dar en los siguientes escenarios:
        ul.lista-ul.fa-ul(data-aos="fade-left")
          li 
            i.fas.fa-tshirt.c1
            p.mb-0 De acuerdo con el costo: si los recursos fueron comprados a un precio alto o bajo.

          li 
            i.fas.fa-tshirt.c1
            p.mb-0 De acuerdo con el mercado al que estamos enfocados y queremos atender: si es el mercado masivo, este se caracteriza por ser muy competitivo y con poca utilidad, o si son mercados exclusivos estos no tienen mucha competencia y la utilidad puede ser más amplia.         
        p(data-aos="fade-down") La fórmula para hallar el precio de venta es:

        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/139.svg', alt='Precio de venta = Costo / (1 - % utilidad)') 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10              
        .bg25.p-4

          h5(data-aos="fade-down") Ejemplo:

          p(data-aos="fade-down") El costo de todos los recursos y actividades para producir un #[i jean] es $25.000 y la utilidad deseada es del 30%, ¿cuál es el precio de venta? Reemplazamos los valores en la fórmula:
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/142.svg', alt='Precio de venta = 25.000 / (1 – 0,30)')       
          p(data-aos="fade-down").my-4.text-center Resolvemos el denominador
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/141.svg', alt='25000 / (0,70)')       
          p(data-aos="fade-down").my-4.text-center Realizamos la división 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/140.svg', alt='Precio de venta = 35714')       
          p(data-aos="fade-down").text-center.mt-4 Así hallamos que el precio de venta es del #[i jean] es de $ 35,714


    .row.justify-content-start.mb-4.pt-4    
      .col-auto.bg2.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v3.svg', alt='')
          .list__txt
            h4.mb-0 Punto de equilibrio    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/143.svg', alt='')       
      .col-lg-9.my-3
        p(data-aos="fade-down") Se refiere al proceso cuando la facturación o producción de una empresa, área, o departamento, no produce pérdidas, ni tampoco ganancias. Se refiere también al número mínimo de unidades que se deben producir o vender para que la utilidad sea cero, o cuando los gastos o costos totales son iguales a los ingresos totales.
        .bg6.p-4(data-aos="flip-down")
          .row.justify-content-center.align-items-center           
            .col.mb-0.order-1.my-2(data-aos="fade-down") Para hallar el punto de equilibrio (PE) se elabora una lista de los gastos de un determinado período, se suman y se dividen entre el porcentaje de utilidad que se ha asignado.
            .col-lg-auto.order-lg-2.my-2
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/144.svg', alt='Punto de equilibrio = gastos mensuales / % de utilidad')    

    .row.justify-content-center.align-items-center       
      .col-lg-10              
        .bg26.p-4

          h5(data-aos="fade-down") Ejemplo:

          p(data-aos="fade-down") En una compañía los gastos mensuales suman $24´000.000, y se trabaja con el 30% de utilidad. El precio de venta de cada unidad es de $ 12.800. Para que haya punto de equilibrio ¿cuánto se debe facturar cada mes, cada día, y cuántas unidades se deben vender diariamente? Tenga en cuenta que el establecimiento abre 25 días al mes y los festivos no trabaja.

          p(data-aos="fade-down") Primero se calcula el punto de equilibrio:
          img.img-a.img-t.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/155.svg', alt='Punto de equilibrio = 24000000 / 0,30 = 80000000')    
          p(data-aos="fade-down") Mensualmente debe vender $80.000.000 

          p(data-aos="fade-down") Luego, las ventas mensuales se dividen entre 25 días que se abre y el resultado son las ventas que se deben hacer diarias en promedio para que haya punto de equilibrio:
          img.img-a.img-t.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/156.svg', alt='80000000 / 25 = 3200000')    
          p(data-aos="fade-down") Estas ventas diarias se dividen entre el precio unitario que es $12.800, y el resultado es el número de unidades que se deben vender.                  
          img.img-a.img-t.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/157.svg', alt='3200000 / 12800 (valor de la unidad) = 250 unidades')    

          p(data-aos="fade-down") Para hacer la prueba o verificación, sobre el valor de las ventas mensuales, se calcula el 30% de la utilidad y dará el valor de los gastos, o sea ni gana, ni pierde.
          img.img-a.img-t.my-4(data-aos="zoom-in")(src='@/assets/curso/temas/158.svg', alt='80000000 por 30% = 24000000')    
          p(data-aos="fade-down") El 30% es igual a $24´000.000 o sea que el valor cubre los gastos, y la diferencia $56´000.000, es para pagar proveedores de los costos de producción. 

          p(data-aos="fade-down") #[b Resumen:] se suman los gastos necesarios para operar, y se dividen entre el porcentaje de utilidad o sea la relación que hay entre costo de producción y precio de venta.              
</template>

<script>
export default {
  name: 'Tema10',
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
