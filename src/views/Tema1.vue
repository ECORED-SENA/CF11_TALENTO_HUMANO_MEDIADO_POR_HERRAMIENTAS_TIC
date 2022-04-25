<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Proceso y procedimiento   

    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        p.mb-0 Un proceso es un conjunto de actividades que están relacionadas de manera directa entre sí, esta interacción inicia con una entrada, pasando por un procesamiento de la misma para convertirse, de esta manera, en un resultado. Se hace importante diferenciar un proceso de un procedimiento, este último se refiere a las actividades que se originan durante el proceso, incluye el cómo se realizan y quién o quiénes son los responsables de ejecutarlo, esto significa especificar de manera clara el paso a paso que debe seguirse para concretar una actividad.
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/t1_01.svg", alt="alt").img300.m-auto
      .col-lg-4
        p.mb-lg-0 El proceso genera una serie de acciones, que llevan un orden específico para lograr un objetivo o un fin, de manera general se refiere a un proceso cuando este tiene una fase inicial y una fase final, ocurriendo entre las fases un proceso de cambio o transformación. Este se relaciona con los sistemas de calidad, ya que, de forma administrativa u operativa, se lleva a cabo una serie de acciones que impactan de manera directa al producto o servicio que la organización ofrece a su cliente para la satisfacción de sus necesidades.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/t1_02.png", alt="alt").m-auto
      .col-lg-6
        .crd.crd--amarillo.negM--left
          p.mb-0 Para lograr la satisfacción del cliente, la organización debe ser eficiente en la realización de sus actividades y optimizar sus recursos con una buena gestión. Todo lo anterior lleva a que la empresa se enfoque en sus procesos, en otras palabras, si esta quiere obtener buenos resultados y ofrecer un excelente producto o servicio al cliente necesita trabajar con un enfoque basado en procesos.

    p.mb-4 Un elemento clave para seguir esta dirección es conocer de manera clara cuáles son los procesos que tiene la empresa, estos se dividen básicamente en:

    .bg--gris.mb-5
      .row.justify-content-center  
        .col-lg-8
          .titulo-sexto.clr--orange
            h5 Figura 1. 
            span Procesos de la empresa
          figure
            img(src="@/assets/curso/tema1/t1_03.svg", alt="alt").m-auto

    p.mb-5 A continuación, se presenta una tabla en la cual se podrán encontrar elementos muy importantes que permitirán diferenciar los procesos de los procedimientos, por lo que se sugiere revisarlas con detalle para contextualizar cada uno correctamente.     

    .row.justify-content-center.mb-5
      .col-lg-10    
        .titulo-sexto.clr--orange
          h5 Tabla 1. 
          span Diferencias entre procesos y procedimientos
        .tabla-a.cst--table_01 
          table
            thead
              tr
                th Procesos            
                th Procedimientos            
            tbody
              tr
                td Transforman las   entradas en resultados de acuerdo con la utilizaci&oacute;n de recursos.
                td Describe el   paso a paso en la ejecuci&oacute;n de una tarea.            
              tr.cst--cell_gray
                td Se suceden en   el tiempo, por eso son din&aacute;micos.            
                td Existen, son   est&aacute;ticos y se estandarizan.
              tr
                td Impulsados por   la consecuci&oacute;n de un resultado.            
                td Impulsados por   la finalizaci&oacute;n de la tarea.
              tr.cst--cell_gray
                td Operan y   gestionan.
                td Se implementan.
              tr
                td Se centran en   la satisfacci&oacute;n de los clientes y otras partes interesadas.            
                td Cumplimiento de   normas.
              tr.cst--cell_gray
                td Contienen   actividades que pueden realizar personas de diferentes &aacute;reas con unos   objetivos en com&uacute;n.           
                td Recogen   actividades que pueden realizar personas de diferentes &aacute;reas con objetivos   diferentes.            
              tr
                td Conjunto de   varias actividades.             
                td Un procedimiento es   la forma espec&iacute;fica o una parte de un proceso.

    p.mb-5 Para dar claridad sobre los conceptos procesos y procedimientos también es importante revisar la norma ISO 9000, lo que le permitirá, mirar desde un documento que estandariza internacionalmente algunos temas, cómo se describen estos a nivel internacional, por lo que le invito a revisar la siguiente figura.

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="zoom-in")
        .titulo-sexto.clr--orange
          h5 Figura 2. 
          span  Proceso y procedimiento según la ISO 9000
        figure
          img(src="@/assets/curso/tema1/t1_04.svg", alt="alt").m-auto

    .row.justify-content-center.mb-5
      .col-auto
        figure
          img(src="@/assets/curso/square.svg", alt="alt").img85.m-auto
      .col
        p La ISO 9001 de 2015 en el punto 0.3 de la introducción, promueve la adopción de un enfoque por procesos al desarrollar, implementar y mejorar la eficacia de un Sistema de Gestión de Calidad para aumentar la satisfacción del cliente mediante el cumplimiento de los requisitos expuestos. Asimismo, menciona que la gestión de los procesos y el sistema en su conjunto pueden alcanzarse utilizando el ciclo PHVA. Para conocer las definiciones de cada una de estas letras, se invita a revisar el siguiente recurso de aprendizaje.

    
    .bg--gradient_blue_01
      .row.justify-content-center.mb-5
        .col-md-7.col-lg-5.col-xl-3.mb-4.mb-xl-0
          .crd.crd--brad.crd--gradient_01          
            figure.my-4
              img(src="@/assets/curso/tema1/t1_05.svg", alt="alt").img100.m-auto
            h4.text-center.txt--mint Planificar
            p.text-center.text-white Establecer los objetivos del sistema, procesos, y los recursos necesarios para generar y proporcionar resultados de acuerdo con los requisitos del cliente y las políticas de la organización, e identificar y abordar los riesgos y las oportunidades.
        .col-md-7.col-lg-5.col-xl-3.mb-4.mb-xl-0
          .crd.crd--brad.crd--gradient_01          
            figure.my-4
              img(src="@/assets/curso/tema1/t1_06.svg", alt="alt").img100.m-auto
            h4.text-center.txt--mint Hacer
            p.text-center.text-white Implementar lo planificado.
        .col-md-7.col-lg-5.col-xl-3.mb-4.mb-xl-0
          .crd.crd--brad.crd--gradient_01          
            figure.my-4
              img(src="@/assets/curso/tema1/t1_07.svg", alt="alt").img100.m-auto
            h4.text-center.txt--mint Verificar
            p.text-center.text-white Realizar el seguimiento, la medición de los procesos, los productos y servicios resultantes a las políticas,  de los objetivos, los requisitos y las actividades planificadas e informar sobre los resultados.
        .col-md-7.col-lg-5.col-xl-3
          .crd.crd--brad.crd--gradient_01          
            figure.my-4
              img(src="@/assets/curso/tema1/t1_08.svg", alt="alt").img100.m-auto
            h4.text-center.txt--mint Actuar
            p.text-center.text-white Tomar acciones para mejorar el desempeño, cuando sea necesario.  

      .hr--blank

      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1 Clasificación de procesos      

      p Una vez se han identificado los procesos y las actividades, se procede a clasificarlos y jerarquizarlos, para ello se cuenta con los tipos de proceso que se presentan a continuación:   

      TabsC.color-acento-contenido
        .py-3.py-md-4(titulo="Procesos estratégicos")
          .row.justify-content-center
            .col-lg-7.mb-4.mb-lg-0
              h4.txt--purpura Procesos estratégicos
              p Son aquellos que determinan la gestión organizacional, son fijados por la alta dirección, ayudan en la toma de decisiones. 
              p También se le denomina planificación, y están relacionados con la ruta que sigue la organización. 
              p Los responsables de este proceso puntualizan temas como formulación y aplicación de la política de calidad, establecimiento de objetivos e indicadores, etc.           
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/t1_08.png', alt='').img400.m-auto

        .py-3.py-md-4(titulo="Procesos operativos")
          .row.justify-content-center                     
            .col-lg-5.order-2.order-lg-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/t1_09.png', alt='').img400.m-auto
            .col-lg-7.mb-4.mb-lg-0.order-1.order-lg-2
              h4.txt--purpura Procesos operativos
              p Son los que conforman el producto o servicio, es decir tienen que ver con la naturaleza del negocio e impactan de manera directa la satisfacción del cliente, siendo los procesos de realización del producto. 
              p También llamados procesos clave o misionales. Ejemplo de estos procesos puede ser el diseño y elaboración de productos y servicios, gestión de ventas, etc. 

        .py-3.py-md-4(titulo="Procesos de apoyo")
          .row.justify-content-center
            .col-lg-7.mb-4.mb-lg-0
              h4.txt--purpura Procesos de apoyo
              p Son aquellos que ofrecen soporte a la razón de ser del negocio como: la gestión de la información, el mantenimiento de infraestructura, la gestión de personal, la gestión financiera y que, además, proporcionan la gestión de los recursos.           
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/t1_10.png', alt='').img400.m-auto 

        .py-3.py-md-4(titulo="Procesos de gestión")
          .row.justify-content-center                  
            .col-lg-5.order-2.order-lg-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/t1_11.png', alt='').img400.m-auto
            .col-lg-7.mb-4.mb-lg-0.order-1.order-lg-2
              h4.txt--purpura Procesos de gestión
              p Son los que forman parte de la administración del sistema de gestión de la calidad, tales como: gestión y evaluación de proveedores, seguimiento del proceso operativo, no conformidades y acciones correctivas, proporcionan el análisis de los datos para la mejora continua a través del ciclo PHVA.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Clasificación de procesos

    .row.justify-content-center.mb-4
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/t1_12.png", alt="alt").img500.m-auto
      .col-lg-7
        p Si la organización decide estructurar el enfoque basado en procesos, debe identificar todos los que la conforman y luego detallar todas las actividades que componen cada uno de ellos, para eso es necesario identificar un mapa de procesos, donde se especifique de manera clara cuáles son los procesos de la organización; este mapa marca la ruta para cualquier tipo de gestión que se lleve a cabo en el sistema.

        p Antes de desarrollar cada uno de los procesos que componen un mapa de proceso, se debe indicar su concepto: 

        .crd.crd--amarillo
          p.mb-0 El mapa de proceso es una representación gráfica de todos los procesos que hacen parte de la empresa, los cuales se relacionan coherentemente teniendo en cuenta los ciclos que maneja cada organización dependiendo de su razón de ser, esta relación parte de la necesidad del cliente y termina en la satisfacción del mismo ya sea al entregar un producto o un servicio. Este es, entonces, el resumen de toda la actividad en la empresa.

    .row.justify-content-center.mb-4      
      .col-lg-6
        p El mapa de procesos es uno de los elementos fundamentales para dar cumplimiento a los siguientes aspectos de la ISO 9001: en el numeral 4.4.1 de la norma que especifica que la organización debe acordar los procesos necesarios para el Sistema de Gestión de la Calidad y su aplicación a través de la organización, y debe:

        ol.lista-ol
          li 
            span.txt--purpura.text-bold a) 
            | Establecer las entradas requeridas y las salidas esperadas de tales procesos.
          li 
            span.txt--purpura.text-bold b)
            | Determinar tanto la secuencia como la interacción de estos procesos.

        .avatarCrd.crd--amarillo
          p.mb-0 Para ampliar la información, se invita a leer la #[span.bg--blue Norma ISO 9002/2007], la cual se encuentra en el material complementario.
          .avatarCrd--icon
          
      .col-lg-6
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/t1_13.png", alt="alt").m-auto

    p.mb-5 La siguiente figura ejemplifica un mapa de procesos de una empresa, en él se indican los ingresos, que son las necesidades del cliente, los cuatro tipos de procesos al interior de la empresa y las salidas, que corresponden a los productos o servicios que cumplen con los requerimientos que satisfacen al cliente final.

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.clr--orange
          h5 Figura 3. 
          span Mapa de procesos
        figure(data-aos="zoom-in")          
          img(src="@/assets/curso/tema1/t1_14.svg", alt="alt").img650.m-auto

    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Caracterización de los procesos

    .row.justify-content-center.mb-5
      .col-lg-7
        p Para construir esta caracterización es necesario conocer los procesos de la organización y haber hecho el levantamiento del mapa de proceso.
        .row.justify-content-center.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/square_02.svg", alt="alt").img85
          .col
            .cajon.cjn--purpura
              p.mb-0 La caracterización es un documento y una herramienta de planificación, porque permite identificar, entre otros aspectos, la misión del proceso, responsables, riesgos, recursos, etc. A través de ella se detalla la información que se utiliza dentro del proceso, por lo que se hace un análisis profundo de cada uno de ellos. 
        p.mb-0 Tal como se mencionó, al estudiar un proceso y el mapa de proceso, estos inician con una necesidad del cliente y finaliza con un producto o un servicio que satisfaga esa necesidad del cliente. Estos elementos son los que se identifican en una caracterización.
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/t1_15.png", alt="alt")

    p.text-center Al caracterizar un proceso se deben identificar:

    .bg--img_01
      .row.justify-content-center
        .col-lg-10
          SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/t1_16.svg' alt='').img100.m-auto     
              p.text-center.mb-0 Qué se persigue en un determinado proceso.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/t1_17.svg' alt='').img100.m-auto     
              p.text-center.mb-0 Cómo inicia y termina.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/t1_18.svg' alt='').img100.m-auto     
              p.text-center.mb-0 Quiénes son los responsables.

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/t1_19.svg' alt='').img100.m-auto     
              p.text-center.mb-0 Cuáles serán los controles y registros que deben implementarse. 

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/t1_20.svg' alt='').img100.m-auto     
              p.text-center.mb-0 Construir indicadores. 

            .tarjeta.tarjeta--slyder.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/t1_21.svg' alt='').img100.m-auto     
              p.text-center.mb-0 Especificar los riesgos a los que está expuesta la organización si no cumple con lo planificado.

      .row.justify-content-center.mb-5
        .col-auto
          figure
            img(src="@/assets/curso/square_03.svg", alt="alt").img85.m-auto
        .col
          p De lo anterior, es vital rescatar los controles y registros que a través de la caracterización se han identificado, por comprometer la documentación que se debe generar dentro del proceso y asegurar con estos, que este no solo se lleve a cabo correctamente, sino que exista una trazabilidad del mismo. 
          p.mb-0 La caracterización de proceso sirve para identificar y definir el proceso de forma detallada, a través de las actividades; es decir, los procedimientos que componen el proceso. La tabla 2 es un ejemplo de la información que se debe incluir en una caracterización.

      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.clr--orange
            h5 Tabla 2.
            span Ficha caracterización de proceso
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/t1_22.svg", alt="alt")

    
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
