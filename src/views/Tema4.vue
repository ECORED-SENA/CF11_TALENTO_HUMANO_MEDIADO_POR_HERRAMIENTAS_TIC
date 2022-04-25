<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5   

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Elaboración y protección de la documentación     

    .crd.crd--gradient_02.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7
          .row.justify-content-center  
            .col-auto
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/square_06.svg", alt="alt").img85.m-auto
            .col
              p.mb-0 Hoy en día, por lo general, la información es digitalizada y organizada mediante archivos, con el fin de ser guardada en grandes centros de datos, sin embargo, estos han venido sufriendo de ciberataques, lo que necesariamente ha llevado a pensar en cómo se pueden diseñar herramientas que permitan elaborar y proteger la información de forma tal que la empresa pueda tener el control en todo momento de su información digital. 
        .col-lg-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema4/t4_01.svg", alt="alt").img400.m-auto

    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1 Control de la información documentada (GTC ISO 10013)

    .row.justify-content-center.mb-5
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/t4_02.png", alt="alt").img500.m-auto
      .col-lg-7
        p Uno de los inconvenientes que más se presentan en las auditorías realizadas a las organizaciones y que genera no conformidades, es el control de la documentación, pues en muchos casos no se mantiene actualizada; una de las prioridades en la administración del sistema documental es que este pueda ser soporte eficiente del proceso.

        .cajon.cjn--purpura.mb-4(data-aos="fade")
          p.mb-0 La norma ISO 9001 pide un procedimiento para el control de la documentación en lo que tiene que ver con aprobaciones, revisiones y actualizaciones, cuando se requiera responder por qué a las siguientes inquietudes:   

        ul.lista-ul
          li 
            i.fas.fa-angle-right.txt--purpura.ms-4
            | Los documentos se encuentran disponibles para las personas que los necesiten.
          li             
            i.fas.fa-angle-right.txt--purpura.ms-4
            | Los documentos son claros y fácilmente identificables.
          li 
            i.fas.fa-angle-right.txt--purpura.ms-4
            | Los documentos están organizados y seguros.

        .row.justify-content-center
          .col-auto
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/square_07.svg", alt="alt").img85
          .col
            p.mb-0 En otras palabras, los registros son documentos que la empresa debe proporcionar y custodiar como evidencia del cumplimiento en los requisitos establecidos previamente dentro del sistema, esta práctica hace parte de la buena administración de la documentación que proporciona optimización de tiempo por la fácil disponibilidad, así como la trazabilidad del producto o del servicio.

    p.mb-5 Siempre es necesario generar controles de acceso a los documentos para prevenir el uso no autorizado de los mismos. Es así como el ciclo PHVA permite que la organización haga el control permanente del proceso y su documentación. En la siguiente figura se puede ver el ciclo de mejora continua, por lo que se invita a revisarla y tenerla en cuenta al momento de realizar su trabajo.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.clr--orange
          h5 Figura 5. 
          span Mejora continua 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/t4_03.svg", alt="alt").m-auto

    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Ciclo vital y Tablas de Retención Documental (TRD)

    .bg--img_04
      .row.justify-content-center.mb-5
        .col-lg-6
          p Estas tablas son un listado de series, con sus correspondientes subseries y tipos documentales, producto del desarrollo de las funciones de cada oficina o unidad administrativa a las cuales se asigna el tiempo de permanencia en cada etapa del ciclo vital de los documentos y se explica el procedimiento a seguir para la selección y la reproducción de la documentación (reprografía). 
          p Por otro lado, la retención es el plazo, en términos de tiempo, son los documentos deben permanecer en el archivo de gestión o en el archivo central una vez finalizado su trámite. Partiendo de lo anterior, la administración se verá beneficiada con la elaboración de las tablas de retención, porque estas:
        .col-lg-6
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema4/t4_04.png", alt="alt").m-auto

      .row.justify-content-center
        .col-lg-10
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema4/t4_05.svg' alt='').img100.m-auto     
              p.text-center.mb-0 Facilitan el manejo de la información.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema4/t4_06.svg' alt='').img100.m-auto       
              p.text-center.mb-0 Contribuyen a la racionalización de la producción documental.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema4/t4_07.svg' alt='').img100.m-auto       
              p.text-center.mb-0 Permiten a la administración proporcionar un servicio eficaz y eficiente.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema4/t4_08.svg' alt='').img100.m-auto    
              p.text-center.mb-0 Facilitan el control y acceso a los documentos a través de los tiempos de retención en ellas estipulados.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema4/t4_09.svg' alt='').img100.m-auto      
              p.text-center.mb-0 Garantizan la selección y conservación de los documentos que tienen carácter permanente.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema4/t4_10.svg' alt='').img100.m-auto      
              p.text-center.mb-0 Regulan las transferencias de los documentos en las diferentes fases de archivo.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema4/t4_11.svg' alt='').img100.m-auto   
              p.text-center.mb-0 Sirven de apoyo para la racionalización de los procesos administrativos.

      .row.justify-content-center
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema4/t4_12.png", alt="alt").img400.m-auto
        .col-lg-8
          p Desde el punto de vista del trabajo archivístico, las tablas de retención documental son fundamentales, porque:

          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema4/t4_13.svg' alt='').img100.m-auto     
              p.text-center.mb-0 Permiten el manejo integral de los documentos.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema4/t4_14.svg' alt='').img100.m-auto     
              p.text-center.mb-0 Facilitan la organización de los documentos a partir del concepto de archivo total.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema4/t4_15.svg' alt='').img100.m-auto     
              p.text-center.mb-0 Ayudan a controlar la producción y trámite documental.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema4/t4_16.svg' alt='').img100.m-auto     
              p.text-center.mb-0 Identifican y reflejan las funciones institucionales.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema4/t4_17.svg' alt='').img100.m-auto     
              p.text-center.mb-0 Integran los procesos archivísticos para el manejo racional de los documentos.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema4/t4_18.svg' alt='').img100.m-auto     
              p.text-center.mb-0 Permiten identificar los documentos que sirven de apoyo a la gestión administrativa y que por su carácter pueden eliminarse en el archivo de gestión.

      separador

    #t_4_3.titulo-segundo.color-acento-contenido
      h2 4.3 Archivo de la documentación

    .row.justify-content-center.mb-3
      .col-auto
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/square_05.svg", alt="alt").img85.m-auto
      .col  
        p.mb-0 Un archivo es un conjunto ordenado de documentos, es decir, guardados bajo ciertas categorías y tipologías, así como mantenimiento, conservando una lógica cronológica, conceptual, organizacional o alfabético-numérica. Se archivan tanto los recibidos, como los producidos en la organización para facilitar su ubicación, búsqueda y consulta. La archivística se rige bajo los parámetros de la Ley General de Archivo, 594 de 2000, la cual se estudió previamente.

    p.mb-5 Los archivos se pueden clasificar en:

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Archivo de gestión o de oficina")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/t4_19.png', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura Archivo de gestión o de oficina
            p En este archivo reposan los documentos generados en los procesos de gestión administrativa. El tiempo de permanencia de la documentación en este depende fundamentalmente del trámite y de las normas internas indicadas en las Tablas de Retención Documental - TRD para decidir su traslado al archivo central.

            p Las oficinas deberán transferir al archivo central aquellas series y subseries documentales que hayan cumplido el tiempo de retención señalado, toda transferencia debe ir acompañada de un inventario y debe hacerse de acuerdo con un cronograma previamente acordado entre quienes producen la documentación y la persona encargada del archivo.   

      .py-3.py-md-4(titulo="Archivo central o intermedio")
        .row.justify-content-center          
          .col-lg-7
            h4.txt--purpura Archivo central o intermedio
            p A este archivo son transferidos los documentos de los archivos de gestión cuya consulta no es tan frecuente, es decir, cuando están en su segundo ciclo de vida (semiactivos). El archivo central deberá facilitar la consulta tanto a las oficinas productoras como al público en general de acuerdo a las normas que lo regulen.
            p Recibidos los documentos en el archivo central, el jefe de este deberá constatar que las series y subseries documentales transferidas concuerdan con el inventario que las relaciona, para proceder a incorporarlas en las agrupaciones documentales correspondientes de acuerdo con el cuadro de clasificación establecido para cada oficina.
            p.mb-0 La documentación permanecerá en el archivo central durante el tiempo estipulado en las TRD. Antes de transferir al archivo histórico, se aplicará la disposición final y los procedimientos previstos en la TRD.
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/t4_20.png', alt='').img400.m-auto      

      .py-3.py-md-4(titulo="Archivo histórico o permanente")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/t4_21.png', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura Archivo histórico o permanente
            p Es aquel al cual se transfiere la documentación del archivo central o del archivo de gestión que, por decisión del correspondiente comité de archivos, debe conservarse permanentemente, dado el valor que adquiere para la investigación, la ciencia y la cultura.

            p.mb-0 Los procesos de organización de archivos son tres: clasificación, ordenación y descripción. A pesar de la aparente claridad, la primera dificultad que se encuentra al trabajar en archivos consiste en determinar qué se entiende archivísticamente por cada uno de ellos, pues las palabras mismas requieren atención por parte de los encargados de archivos para aclarar sus especificidades.

    separador

    #t_4_4.titulo-segundo.color-acento-contenido
      h2 4.4 Expediente laboral

    .row.justify-content-center.mb-5
      .col-lg-7
        p La dinámica y situación actual del mundo, ha llevado a la renovación ágil de las organizaciones, afectando de manera directa el área de talento humano, al tener que afrontar situaciones como el incremento en el recibo de hojas de vida y la modalidad de trabajo en casa, lo que ha significado más trabajadores dispersos en el mundo, etc. 
        p Lo anterior implica un gran reto en la gestión y en el manejo y control de la información relacionada con el área, responsabilidad que se debe manejar de manera segura y ágil, teniendo en cuenta las normas legales y todas las regulación que deben cumplirse.
        .crd.crd--amarillo.mb-4
          p.mb-0 Los profesionales de talento humano deben gestionar información personal de los empleados y los posibles aspirantes a participar dentro de un proceso de selección en la organización. Desde la publicación de la oferta de trabajo hasta contratación y despido del trabajador, teniendo muy en cuenta todas las leyes y normas que rigen el manejo de datos y confidencialidad de la misma (Ley 1581 de 2012).
        p.mb-0 En este sentido se requiere de la implementación de un sistema que permita de registros que puedan ser accesibles, que se identifique cuáles son los documentos que deben ser guardados y el periodo en que deben permanecer en este estado. Esto significa garantizar el salvaguardar la información teniendo los controles sobre quiénes, de qué manera y a qué documentos pueden acceder, resguardando la trazabilidad para tener información de las personas que utilizaron el documento y la fecha en que fue utilizado.

      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/t4_22.png", alt="alt").img500.m-auto

    .row.justify-content-center
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema4/t4_23.png", alt="alt").img500.m-auto
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/square.svg", alt="alt").img85
          .col
            p.mb-0 Por lo anterior, el talento humano es responsable del expediente laboral del trabajador; este contiene toda la información que se genera durante el proceso de selección y contratación del candidato seleccionado, así como toda la historia laboral del empleado en la organización.

        p Todos los documentos laborales deben ser organizados en una carpeta con un orden específico que permita su disponibilidad y auditoría, para ser inventariados, estos, son privados, y custodiados por el área de Talento Humano y con acceso a ellos solo por parte del trabajador.

        .avatarCrd.crd--amarillo
          p.mb-0 Para ampliar la información, se invita a descargar el documento Organización de historias laborales, donde se encontrarán todas las especificaciones que se deben tener en cuenta al momento de organizar todos los documentos de un trabajador.
          .avatarCrd--icon



          

      

      




      






    
   

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
