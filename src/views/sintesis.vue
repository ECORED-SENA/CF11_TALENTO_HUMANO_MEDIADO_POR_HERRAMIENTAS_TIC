<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center.mb-5
      .col-auto
        figure
          img(src="@/assets/curso/square.svg", alt="alt").img85
      .col
        p.mb-0 La preselección del talento humano mediante herramientas tecnológicas ha cambiado muchos procesos al interior de las empresas, por lo que estas han debido incorporar herramientas que les permitan realizar procesos de selección más rápidos y transparentes, lo que también ha marcado un hito en la gestión de la información digital o la documentación en los departamentos de recursos humanos. 

    .row.justify-content-center
      .col-lg-10
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      

</template>

<script>
export default {
  name: 'Sintesis',
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
