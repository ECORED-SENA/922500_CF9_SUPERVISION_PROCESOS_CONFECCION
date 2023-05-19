<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Introducción al mejoramiento de métodos

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-7.my-3
        p(data-aos="fade-down") Dentro del sector manufacturero de la moda se llevan a cabo una serie de procesos que son imprescindibles para la producción industrial, los cuales determinan el tiempo, el talento humano, la tecnología y demás recursos requeridos. Antes de iniciar una cadena de actividades para lograr el resultado esperado, se empieza con una planificación de los métodos definidos para llevar a cabo lo que espera la empresa. #[b.t1 De esta manera, se evidencia la importancia de conocer aquellos métodos, que serán la base para entender la eficiencia y eficacia del trabajo realizado y cómo éste repercute en la mejora de la producción final.]

        p(data-aos="fade-down") Al identificar la manera en que se está llevando a cabo los procesos industriales y después de la observación de diversas variables, se puede evidenciar la necesidad de generar mejoras para lograr de la forma más adecuada los objetivos planteados por la empresa. Esta entonces será la hoja de ruta para determinar aquello que está fallando de alguna manera y establecer el camino más adecuado para optimizar recursos y conseguir la mejora esperada.
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/44.png', alt='')           

    .row.justify-content-center.align-items-center
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/45.png', alt='')              
      .col-lg-8.my-3
        p(data-aos="fade-down") De aquí sale lo que se determina como plan de mejora, el cual, según Proaño et al (2017). 

        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p(data-aos="fade-down").text-regular Se define como un proceso para obtener calidad y excelencia de manera gradual, es decir, paso a paso, con el fin de lograr resultados eficientes y eficaces, donde se podría afirmar que el punto máximo de éste se define en el momento en que se genera una conexión entre los procesos y el talento humano, al trabajar juntos por un mismo objetivo, esperando una optimización de recursos que permitan llegar a la meta planteada.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 - Proaño et al (2017). 
   

</template>

<script>
export default {
  name: 'Tema5',
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
