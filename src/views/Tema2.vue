<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Documentación y su estructura

    .crd.crd--gradient_02.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-5.mb-lg-0
          .row.justify-content-center  
            .col-auto.d-none.d-lg-flex
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/square_03.svg", alt="alt").img85.m-auto
            .col
              p.mb-0 La preselección del talento humano mediado por las herramientas tecnológicas implica, necesariamente, el manejo adecuado de datos, pues estos deben digitalizarse y convertirse en información y conocimiento estructurado para la organización, es por esta razón que la documentación es tan importante en las empresas del presente siglo.
        .col-lg-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/t2_01.svg", alt="alt").img400.m-auto

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Documentación  
  
    p.mb-4 La documentación de procesos está conformada por cada uno de los documentos necesarios para cumplir con las actividades, por esta razón se hace de manera interna y permanente, sin detener el proceso y otorga relevancia al cómo se documenta. En el siguiente video se profundiza sobre el tema.

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2gkrp4ZyDqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)         

    .avatarCrd.crd--amarillo
      p.mb-0 Para ampliar la información, se invita a ver el video cómo documentar procesos y procedimientos en una empresa Sistema de Calidad ISO 9001, que se encuentra en el material complementario.
      .avatarCrd--icon

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Tipo de documentos y estructura de la información documentada (GTC ISO 10013) 

    p.mb-5 Según la GTC ISO 10013 los documentos pueden dividirse de diferentes maneras:

    .bg--gradient_blue_02.mb-5
      .row.justify-content-center        
        .col-lg-6.px-5
          figure.my-5
            img(src="@/assets/curso/tema2/t2_02.svg", alt="alt").img200
          p.text-white.mb-5 Son aquellos que se generan al interior de la organización, estos documentos pueden responder a lo que se quiere lograr en los procesos (políticas, directrices internas, manuales, planes maestros), o responder la pregunta: ¿quiénes, cuándo y dónde se ejecutan las actividades (procedimientos, instructivos, formatos y registros) los cuales también pueden constituirse como herramientas de trabajo? Algunos otros son de apoyo a la gestión documental (revisión y aprobación).
          .img.float-end.mb-4
            figure
              img(src="@/assets/curso/square_04.svg", alt="alt").img85

        .vr--dotLine.d-none.d-lg-flex
        .hr--dotLine.d-flex.d-lg-none

        .col-lg-6.px-5
          figure.my-5
            img(src="@/assets/curso/tema2/t2_03.svg", alt="alt").img200
          p.text-white Son los que se originan fuera de la organización, como leyes y decretos, que son de obligatorio cumplimiento y los que generan información para el proceso como normas, fichas técnicas, etc.
          p.text-white.mb-5 Dentro de este grupo también se pueden incluir los registros elaborados por las partes interesadas como cotizaciones, facturas, registros, planos del cliente, especificaciones, requisitos legales o reglamentarios, normas, códigos y manuales de mantenimiento.
          .img.float-end.mb-4
            figure
              img(src="@/assets/curso/square_04.svg", alt="alt").img85

    .row.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p Estos formatos pueden ser físicos o electrónicos y, una vez utilizados, se convierten en registros y evidencias. 
        p La organización es libre de adaptar la estructura documental que necesita teniendo en cuenta su realidad y exigencias.
        p Al seguir estudiando la Norma ISO 9001:2005, esta especifica en el numeral 7.5.3.2: la información documentada de origen externo que la organización determine como necesaria para la planificación y operación del sistema de gestión de calidad, se identifique, según el caso y decida cómo deberá ser controlada.
        .row.justify-content-center
          .col-auto.d-none.d-lg-flex
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/square_02.svg", alt="alt").img85
          .col
            .crd.crd--amarillo(data-aos="fade-up")
              p.mb-0 Para ampliar la información, se sugiere leer el documento directrices para la documentación del sistema de gestión de la calidad (numeral 4.5, estructura y formato, instrucciones de trabajo, formularios, plan de calidad, especificaciones), que se encuentra en el material complementario.
      .col-lg-4.order-1.order-lg-2.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/t2_04.png", alt="alt").img400.m-auto

    p Siguiendo con el orden de las ideas, se hace necesario hablar de forma detallada de la estructura que debe evidenciar la documentación interna en la empresa, la cual se presenta a continuación: 

    .bg--img_02
      .row.justify-content-center.mb-5
        .col-lg-5.mb-4.mb-lg-0
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/t2_05.png", alt="alt").m-auto
        .col-lg-7
          LineaTiempoD.color-primario
            p(numero="1" titulo="Encabezado").mb-0 Nombre del documento y tipo de proceso.<br><br>Área a la que pertenece el documento.<br><br>Codificación (fecha elaboración, fecha de modificación, versión, número de páginas).

            p(numero="2" titulo="Información general").mb-0 Datos del proceso: nombre del proceso, tipo de proceso, responsable del proceso, objetivo del proceso, Alcance (ámbito de aplicación del procedimiento), actividades.<br><br>Descripción del proceso.

            p(numero="3" titulo="Flujograma de los procesos").mb-0 Descripción del proceso a través del diagrama de flujo.<br><br>Recursos. 

            p(numero="4" titulo="Procedimientos").mb-0 Procedimientos necesarios, breve descripción de las actividades críticas y control del proceso:<br><br>Seguimiento y medición (parámetros de control).<br><br>Indicadores (directriz de la política, objetivo de calidad, nombre del indicador, fórmula, meta, frecuencia). 

            p(numero="5" titulo="Riesgos asociados al proceso").mb-0 Análisis del ciclo PHVA, su eficiencia en la realización del producto o servicio, y su impacto   en las competencias organizacionales e individuales, imagen de la organización, seguridad, innovación. 

            p(numero="6" titulo="Nomogramas").mb-0 Especificar todas las normas que se han tenido en cuenta en la implementación del proceso.

            p(numero="7" titulo="Ejecutor de cada actividad y aprobaciones").mb-0 Ejecutor de cada actividad y aprobaciones (quién elaboró, revisó, aprobó).

            p(numero="8" titulo="Seguimiento al documento").mb-0 Seguimiento al documento (versión, fecha de aprobación, Ítem modificado, motivo, aprobado por). 

      .crd.crd--amarillo
        p.mb-0 La Ley General de Archivo, define gestión documental como el “conjunto de actividades administrativas y técnicas tendientes a la planificación, manejo y organización de la documentación producida y recibida por las entidades, desde su origen hasta su destino final con el objeto de facilitar su utilización y conservación”.
      
      separador

      #t_2_3.titulo-segundo.color-acento-contenido
        h2 2.3 Herramientas para organizar la información 

      .row.justify-content-center.mb-5
        .col-lg-7
          p La necesidad de organizar la información se ha convertido en un elemento clave para las organizaciones, para esto lo primero es llevar a cabo la digitalización de los documentos, el siguiente paso es centralizar la información, de tal forma que se tenga acceso fácil de la organización, convirtiendo el flujo de trabajo en procesos más eficientes; el tercer aspecto es la seguridad de la información, con la digitalización de estos el riesgo de pérdida disminuye, la organización está segura de contar con una base de datos en un solo sistema.

          .avatarCrd.crd--amarillo
            p.mb-0 Se invita a ver el video documentar procesos de tu empresa, el cual se encuentra en el material complementario y a través del cual se podrán conocer algunas de las herramientas utilizadas en la documentación de procesos.
            .avatarCrd--icon         

        .col-lg-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/t2_06.svg", alt="alt").m-auto

      .row.justify-content-center.mb-5
        .col-lg-5.order-2.order-lg-1
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/t2_07.png", alt="alt").img500.m-auto
        .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
          h3.cstmH3--blue <i>Software</i> de apoyo a la gestión documental
          p Los sistemas de gestión documental permiten que todos los documentos sean compartidos y que, con los controles debidos, haya acceso a la información en el momento que se requiera a nivel interno y externo, además que en la medida en que se realicen modificaciones por las personas autorizadas se guarden las respectivas versiones del mismo (trazabilidad).
          p Es más, el Ministerio de Trabajo emitió una circular externa, en la que establece que pueden celebrarse contratos de trabajo mediante la firma electrónica o digital. También cabe destacar que lo publicado en dicha circular se aplica del mismo modo a los trabajadores del sector privado.
          p Es así como la utilización de un sistema adecuado de gestión de los documentos es de alta importancia, especialmente porque se requiere de menos gestión manual, generando un sistema de información que permita que los empleados accedan a los documentos que requieren de manera directa y ágil, a través de la intranet (nómina, certificados, contratos, evaluación de desempeño, etc.), impactando de igual forma en los costos.
          .avatarCrd.crd--amarillo
            p.mb-0 Para profundizar en el aprendizaje sobre legislación y normalización, se sugiere leer el documento #[strong gestión documental en recursos humanos para pymes], que se encuentra en el material complementario.
            .avatarCrd--icon

      .row.justify-content-center.mb-5        
        .col-lg-7.mb-4.mb-lg-0
          h3.cstmH3--blue El flujograma o diagrama de flujo
          p Esta herramienta es fundamental para precisar un proceso. Es una representación gráfica de las actividades de un proceso o algoritmo informático que permiten identificar el paso a paso de la misma en una sola vista; se puede utilizar para documentar, comunicar, estudiar y hacer más fácil y clara la información que se pretende compartir. 
          .row.justify-content-center.mb-4
            .col-auto.d-none.d-lg-flex
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/square_02.svg", alt="alt").img85
            .col
              .cajon.cjn--purpura(data-aos="fade-up")
                p.mb-0 Está conformado por una serie de figuras geométricas, con las que se puede hacer la lectura de lo que se pretende describir, estas figuras se conectan a través de líneas que marcan cuál es la dirección del flujo de la información que se presenta. 
          p El flujograma es una herramienta que permite plasmar el procedimiento que ya se ha levantado con la caracterización del proceso. Además, se construye luego de la descripción detallada de los procedimientos para que sea de mayor comprensión al momento de utilizar el procedimiento; se pueden presentar de manera horizontal, vertical o panorámica.

        .col-lg-5
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/tema2/t2_08.svg", alt="alt").img400.m-auto

    p.text-center.mb-4 La siguiente tabla presenta la simbología de un diagrama de flujo:

    .titulo-sexto.clr--orange
      h5 Tabla 2. 
      span Simbología del diagrama de flujo 

    .tabla-a.cst--table_01 
      table
        thead
          tr
            th S&iacute;mbolo
            th Nombre
            th Funci&oacute;n
        tbody
          tr.cst--cell_gray
            td 
              img(src="@/assets/curso/tema2/t2_09.svg", alt="alt").img165.m-auto
            td.text-center Inicio / final.
            td Como su nombre lo indica, describe el inicio y final del&nbsp;&nbsp;&nbsp;proceso.
          tr
            td 
              img(src="@/assets/curso/tema2/t2_10.svg", alt="alt").img165.m-auto           
            td.text-center Proceso.
            td Cualquier tipo de operaci&oacute;n.
          tr.cst--cell_gray
            td 
              img(src="@/assets/curso/tema2/t2_11.svg", alt="alt").img165.m-auto            
            td.text-center Entrada o salida.
            td Lectura de informaci&oacute;n de entrada o de salida.
          tr
            td
              img(src="@/assets/curso/tema2/t2_12.svg", alt="alt").img165.m-auto
            td.text-center Decisi&oacute;n.
            td An&aacute;lisis de una actividad, define continuidad o no.
          tr.cst--cell_gray
            td 
              img(src="@/assets/curso/tema2/t2_13.svg", alt="alt").img165.m-auto          
            td.text-center Documento.
            td Representa la documentaci&oacute;n o registros que se utilizan dentro del&nbsp;&nbsp;&nbsp;proceso, informe impreso.
          tr
            td 
              img(src="@/assets/curso/tema2/t2_14.svg", alt="alt").img165.m-auto
            td.text-center L&iacute;nea de flujo.
            td Orden de la ejecuci&oacute;n de las actividades.
          tr.cst--cell_gray
            td 
              img(src="@/assets/curso/tema2/t2_15.svg", alt="alt").img100.m-auto            
            td.text-center Datos almacenados.
            td Datos almacenados para consulta.
          tr
            td 
              img(src="@/assets/curso/tema2/t2_16.svg", alt="alt").img100.m-auto            
            td.text-center Referencia / conector fuera de la p&aacute;gina.               
            td Continuidad del diagrama en otra p&aacute;gina.

    separador

    #t_2_4.titulo-segundo.color-acento-contenido
      h2 2.4 Estructura documental del proceso de preselección

    .row.justify-content-cente.mb-4
      .col-auto.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/square_05.svg", alt="alt").img85
      .col
        p Generalmente lo que se busca con la documentación de un proceso es especificar las herramientas y los instrumentos que posee la organización para controlarlo. De ahí que el punto de partida es el mapa de procesos o la cadena de valor, en la que se grafican los procesos de una organización interrelacionando los cuatro procesos: los estratégicos, los claves u operativos, los de soporte o apoyo y los de gestión.

    p.mb-5 Por lo tanto, las claves para documentar correctamente un proceso son las siguientes:

    .row.justify-content-center.mb-5
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema2/t2_17.png", alt="alt").m-auto
      .col-lg-7
        LineaTiempoD.color-primario
          p(numero="1" titulo="La finalidad").mb-0 Es el propósito último que debe cumplir un proceso, por ejemplo:<br><br>“El propósito del proceso de reclutamiento de personal es abastecer el mayor número de candidatos para contar con las mejores opciones para escoger, entre varios, al idóneo para el puesto”.

          p(numero="2" titulo="El objetivo").mb-0 Es la meta que debe cumplir ese proceso en términos de eficiencia, ejemplo:<br><br>“… el candidato que cumple con el perfil requerido en cuanto a competencias funcionales y comportamentales”. 

          p(numero="3" titulo="El alcance").mb-0 Debe ser claro, dónde inicia y dónde termina el proceso, ejemplo:<br><br>“Inicia con la detección y análisis de necesidades de personal y termina con el candidato preseleccionado”.

          p(numero="4" titulo="Los clientes").mb-0 Personas o candidatos que se postulan a un cargo.

          p(numero="5" titulo="Las salidas o productos").mb-0 Preselección de los candidatos que cumplen el perfil establecido por la organización, acorde con las necesidades del servicio-base datos.

          p(numero="6" titulo="Los indicadores clave").mb-0 Número de candidatos postulados o número de candidatos que cumplen el perfil del cargo requerido.  

          p(numero="7" titulo="Las actividades transformadoras").mb-0 Inicio: detección de la necesidad.<br><br>Desarrollo.<br><br>Reclutamiento.<br><br>Fiscalización.<br><br>Revisión y análisis de las hojas de 	vida de los candidatos 	postulados.

          p(numero="8" titulo="Las entradas o insumos").mb-0 Hojas de vida - soportes. 

          p(numero="9" titulo="Los proveedores").mb-0 Candidatos. 

          p(numero="10" titulo="El responsable").mb-0 Líder área de gestión del talento humano. 

          p(numero="11" titulo="El responsable").mb-0 Revisión de la entrada: hojas de vida que cumplen el perfil.<br><br>Revisión en la transformación: valoración de la hoja de vida (formación, capacitación, experiencia).<br><br>Revisión de salida: base de datos candidatos que cumplen el perfil – preselección. 

          p(numero="12" titulo="Los documentos").mb-0 Formatos de requisición de personal, formato de convocatoria (I-card), formato de recepción hojas de vida, formato de valoración hojas de vida, bases de datos de preseleccionados.

    .row.justify-content-cente.mb-5
      .col-auto.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/square_02.svg", alt="alt").img65
      .col
        .cajon.cjn--purpura(data-aos="fade-up")
          p.mb-0 Una vez toda la información está analizada y detallada, se puede crear la ficha técnica del proceso, también conocida como “la caracterización del proceso”, por lo que la documentación de estos, al igual que las demás herramientas de gestión, son indispensables para lograr los objetivos estratégicos de la organización. 

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
