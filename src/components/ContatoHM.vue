<template>
  <div>
    <section class="module parallax parallax-2">
      <div class="container-header">
        <div class="content-header">
          <div class="content-logo">
            <img class="logo" src="../assets/img/logo-hmn.png" alt="" />
          </div>
          <nav class="container-pages">
            <router-link class="link-pages" to="/">Início</router-link>
            <a class="link-pages" href="/#servicos">Serviços</a>
            <router-link class="link-pages" to="/about">Sobre</router-link>
            <router-link class="link-pages" to="/contato">Contato</router-link>
          </nav>
        </div>
      </div>
      <div class="container-geral-contato">
        <div class="content-contato">
          <div class="box-texto-contato">
            <h5 class="titulo-1"><strong>CONVERSE CONOSCO</strong></h5>
            <h2 class="titulo-2">
              <strong>Tem alguma dúvida ou objeção em mente?</strong>
            </h2>
            <p class="titulo-3">
              Nós temos uma equipe de suporte que fica 24 horas disposto a tirar
              todas as suas dúvidas, objeções e medos em relação aos
              tratamentos.
            </p>
            <div class="faixa-contato"></div>
            <a
              class="titulo-4"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              ><strong>(11) 99999-9999</strong></a
            >
            <a
              class="titulo-4"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              ><strong>seuemail@aqui.com</strong></a
            >
            <a
              class="btn-link"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              ><button class="btn-link">Solicite um Orçamento</button></a
            >
          </div>
          <div class="box-image-google">
            <iframe
              class="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d116980.99943220378!2d-46.75580311205668!3d-23.61665870985605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1svila%20lobos!5e0!3m2!1spt-BR!2sbr!4v1717960989495!5m2!1spt-BR!2sbr"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div class="container-local">
          <div class="box-local">
            <h5 class="titulo-1"><strong>Estamos aqui:</strong></h5>
            <p class="titulo-3">
              R FERNÃO ALVARES DO ORIENTE, 220 - PRAIA PAULISTINHA, São Paulo -
              SP, 04812-310
            </p>
          </div>
        </div>
      </div>

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
      />
      <a href="#" class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
      </a>
    </section>

    <FooterHM />
  </div>
</template>
<script>
import FooterHM from "./FooterHM.vue";

export default {
  components: {
    FooterHM,
  },
};
</script>
<style src="./css/Contato.css" scoped></style>