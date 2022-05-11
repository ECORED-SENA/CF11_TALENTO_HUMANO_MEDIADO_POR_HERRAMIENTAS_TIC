<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5  

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Legislación y normalización 

    .crd.crd--gradient_02.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-5.mb-lg-0
          .row.justify-content-center  
            .col-auto.d-none.d-lg-flex
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/square_06.svg", alt="alt").img85.m-auto
            .col
              p.mb-0 Colombia es un país que se precia de cumplir que los estándares de calidad cumplan con todos los procesos y la hagan más competitiva a nivel internacional, por lo que, a través de Icontec, ha venido normalizando y legislando sobre los procesos de documentación en los departamentos de talento humano en las empresas, esto en especial, cuando en el siglo XXI se hace indispensable tener herramientas tecnológicas que le permitan a las organizaciones dar un salto a sociedad del conocimiento y a la economía globalizada.
        .col-lg-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema3/t3_01.svg", alt="alt").img400.m-auto 

    .row.justify-content-center.mb-4
      .col-lg-4.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema3/t3_02.svg", alt="alt").img400.m-auto
      .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2
        h3.cstmH3--blue Familia ISO 9000
        p Al hablar de Familia ISO 9000 se hace referencia a la serie de normas sobre gestión de la calidad en las organizaciones, promovida por Organización Internacional de Normalización (ISO, en inglés <i>International Organization for Standardization</i>). Su propósito es presentar unos parámetros generales que puedan ajustarse en la mayoría de países en los que se implemente, de tal forma que logre satisfacer los requisitos básicos para que los procesos clave se realicen de forma eficiente y eficaz por parte de la empresa independiente de su tamaño, siendo flexible a la hora de implementarse de acuerdo con las necesidades del cliente. 
        p Esta norma persigue como objetivo que se utilicen los parámetros generales comunes en la mayoría de los países en los que se implemente.
        .cajon.cjn--purpura(data-aos="fade-up")
          p.mb-0 Una de las normas que se pueden mencionar inicialmente es la ISO 9001, la cual es muy genérica, de forma que puede ajustarse a casi cualquier organización con o sin ánimo de lucro. Se diseñó de forma que fuera posible satisfacer los requisitos básicos de una operación que se realice de forma correcta por una empresa de cualquier tipo y tamaño. 

    p.mb-5 A continuación, se destacan cuatro ejes principales que tienen que ver con las exigencias de calidad para el cliente, la mejora continua, satisfacción del cliente y la reglamentación en el cumplimiento de la norma, y en el siguiente recurso se detallan cada una de ellas.

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema3/t3_03.png", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            .row(titulo="ISO 9000, (2005) Sistemas de Gestión de la Calidad. Definiciones y fundamentos")
              .col-12
                p.mb-0 Establece un punto de partida para comprender las normas y define los términos fundamentales utilizados en la familia de normas ISO 9000, que se necesitan para evitar malentendidos en su utilización, especificando el vocabulario clave a utilizar dentro del proceso. 

            .row(titulo="ISO 9001(2015). Sistemas de Gestión de la Calidad. Requisitos")
              .col-12
                p.mb-0 Es la norma que establece los criterios que permiten lograr eficazmente los requisitos del cliente y los reglamentarios, para conseguir la satisfacción del cliente. Incluye los principios de motivación y participación activa de la dirección como el ciclo de mejora continua. Es el único estándar que puede certificarse. Esta norma exige la elaboración de la documentación que debe conservar el sistema de gestión de calidad, sus políticas y procedimientos.

            .row(titulo="ISO 9004. Sistemas de Gestión de la Calidad. Directrices para la mejora del desempeño")
              .col-12
                p.mb-0 Sistemas de Gestión de la Calidad. Directrices para la mejora del desempeño: esta norma proporciona ayuda para la gestión del éxito sostenido del sistema de gestión de la calidad para beneficiar a todas las partes interesadas a través de las mejoras y el mantenimiento de la satisfacción del cliente. La Norma ISO 9004 abarca tanto la eficiencia como la eficacia del sistema de gestión de la calidad.  Se puede tomar como una ampliación de la norma anterior y no es certificable.

            .row(titulo="ISO 19011. Directrices para la auditoría ambiental y de la calidad")
              .col-12
                p.mb-0 Proporciona directrices para verificar la capacidad del sistema para conseguir objetivos de la calidad definidos. Esta norma se puede utilizar internamente para auditar a los proveedores de la organización.
            
      .row.justify-content-center.mb-4
        .col-auto.d-none.d-lg-flex      
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/square_07.svg", alt="alt").img85
        .col
          .cajon.cjn--purpura(data-aos="fade-up")      
            p.mb-0 Es importante aclarar que las normas ISO no son obligatorias, dejando a las organizaciones la libertad de adoptarlas o no, sin embargo, sí aportan un alto valor a la organización dentro del mercado generando una ventaja competitiva al ser generadora de confianza por parte del cliente en sus productos y servicios.

      p.mb-5 Para el desarrollo de este componente se hará énfasis en la norma ISO 9001, primando el principio de que los procesos de calidad deben ser documentados y controlados, así, esta norma brinda directrices para la documentación de las actividades de cada área y proceso, en la figura que se presenta a continuación se muestra el grupo de normas que conforman la familia de las ISO 9000.

    .bg--purpuraHalf
      h3.H3--purpura_01.mb-0 Familia ISO 
    .bg--purpura.mb-5
      .row.justify-content-center
        .col-auto.mb-4
          .crd.crd--cyan.crd--brad
            h4 ISO 9000 Fundamentos y vocabulario 
            a.anexo.mb-4(:href="obtenerLink('/downloads/NTC_ISO_9000-2015.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. ISO 9000
        .col-auto.mb-4
          .crd.crd--cyan.crd--brad
            h4 ISO 9001 Requisitos  
            a.anexo.mb-4(:href="obtenerLink('/downloads/NORMA_ISO_9001_2015.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. ISO 9001
        .col-auto.mb-4
          .crd.crd--cyan.crd--brad
            h4 ISO 9002 Guía de implementación  
            a.anexo.mb-4(:href="obtenerLink('/downloads/2200-Texto del articulo-4504-1-10-20110830.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. ISO 9002
        .col-auto.mb-4
          .crd.crd--cyan.crd--brad
            h4 ISO 9004 Mejora continua  
            a.anexo.mb-4(:href="obtenerLink('/downloads/Exito_sostenido.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. ISO 9004
        .col-auto.mb-4
          .crd.crd--cyan.crd--brad
            h4 ISO 19011 Auditoría  
            a.anexo.mb-4(:href="obtenerLink('/downloads/norma-iso-19011-2018.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Anexo. ISO 19011

    .row.justify-content-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/t3_04.svg", alt="alt").img380.m-auto
      .col-lg-8
        h3.cstmH3--blue GTC 10013
        p La Norma GTC-ISO/TR 10013 en el parágrafo 1. Objeto y campo de aplicación, especifica que esta guía proporciona las directrices para el desarrollo y mantenimiento de la documentación necesaria para asegurar un sistema de gestión de la calidad eficaz adaptado a las necesidades específicas de la organización.
        p El uso de las directrices detalladas en la norma ayudará a establecer un sistema documentado de acuerdo con lo requerido por la norma del sistema de gestión de la calidad aplicado en la organización.
        p En su introducción se refiere a la documentación como un elemento relacionado directamente con las actividades de la organización, y la relevancia de que los requisitos y contenidos de la documentación se rijan por esta norma. 
        .cajon.cjn--purpura
          p.mb-0 Esta norma contribuirá a la gestión de la documentación de la empresa.

    .row.justify-content-center.mb-4    
      .col-lg-8
        h3.cstmH3--blue GTC 185
        p Esta guía presenta las recomendaciones para elaborar los diferentes tipos de documentos generados en las organizaciones con el propósito de proyectar una adecuada imagen corporativa.
        p Además, tiene en cuenta los aspectos generales de las comunicaciones y presenta un orden para las partes de cada tipo de documento, con base en el estilo y presentación que demandan los protocolos organizacionales, que se establece en los manuales de procedimiento de cada organización para la producción de documentos.
        p Esta guía es de vital para el control de la imagen de la empresa, por lo que en el caso de organizaciones grandes es muy importante llevar este tipo de documentos; a continuación, se presenta un ejemplo de una entidad del Estado.

        .tarjeta.cta--gradient.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/componentes/download.svg").img75
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 GTC 185, ejemplo
                  p.text-small.text-white Esta guía es de vital para el control de la imagen de la empresa, por lo que en el caso de organizaciones grandes es muy importante llevar este tipo de documentos; a continuación, se presenta un ejemplo de una entidad del Estado.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/GTC_185_EJEMPLO.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/t3_05.png", alt="alt").img380.m-auto

    .row.justify-content-center   
      .col-lg-4.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema3/t3_06.png", alt="alt").img380.m-auto     
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
        h3.cstmH3--blue Ley 594 de 2000, Ley General de Archivo
        p Esta ley tiene por objeto establecer las reglas y principios generales que regulan la función archivística del Estado, también tiene en cuenta la definición de otros conceptos clave relacionados directamente con el oficio, el método, el cómo y el por qué es importante entre otros elementos para el país y la cultura colombiana. 
        p Se invita a revisar el documento que contiene esa ley, y comprender la trascendencia del proceso de documentación al interior de una empresa y su impacto en el país.
        .row
          .col-auto
            a.anexo.mb-4.mb-lg-0(href="https://normativa.archivogeneral.gov.co/ley-594-de-2000/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p Anexo. Ley 594 de 2000 - Ley General de Archivo

                 




            





   

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
