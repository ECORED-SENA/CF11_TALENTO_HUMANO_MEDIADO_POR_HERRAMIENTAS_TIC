<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white i
      h1 Introducción   

    .crd.crd--brad.crd--gris.mb-5
      
      .row.justify-content-center.align-items-center        
        .col-auto.mb-4.mb-lg-0
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/Introduccion/intro.png", alt="alt").img250.m-auto
        .col-lg 
          p Las nuevas Tecnologías de la Información y las Comunicaciones (TIC) han impactado las empresas del siglo XXI de una manera inesperada, en especial cuando debido a una crisis médica todo cambio de un momento a otro, y fue necesario que las empresas iniciaran procesos de innovación y transformación digital de una forma rápida, por lo que el departamento de talento humano, no fue la excepción. 
          p.mb-0 Por eso, hoy se hace necesario revisar cómo estas herramientas tecnológicas se deben incorporar en los procesos de preselección y selección de personal en las empresas. Así, el siguiente video presenta, de forma general, la temática que se va a estudiar en el presente componente formativo.
      .dots--btmRight

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/haXVqAB6f2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)       
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
