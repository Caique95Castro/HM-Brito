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
            <a class="link-pages" href="/#servicos">Servicos</a>
            <router-link class="link-pages" to="/about">Sobre</router-link>
            <router-link class="link-pages" to="/contato">Contato</router-link>
          </nav>
        </div>
      </div>
      <div class="content-about-home">
        <div class="conteudo-tit-sub">
          <div class="container-conteudo">
            <h1 class="enfase-titulo"><strong>ALUGUEL DE CAÇAMBAS</strong></h1>
            <h4 class="enfase-titulo">
              Aquele entulho ou lixo que era um estorvo em sua obra não é
              problema com a <strong>HMN Terraplenagem</strong>. Peça já uma de
              nossas caçambas.
            </h4>
          </div>
        </div>
        <div class="container-about-home">
          <div class="content-image-about-home">
            <img class="image-about" src="../assets/img/CACAMBA1.png" alt="" />
          </div>
          <div class="content-text-about-home">
            <p>
              Com foco apenas nas regiões de
              <strong>Cotia, Granja Viana e Vargem Grande Paulista</strong> a
              Pirâmide Coleta atua há mais 20 anos oferecendo rapidez e
              eficiência no aluguel de caçambas, coleta e remoção de entulho,
              poda, gesso, isopor, plástico, papelão entre outros, em áreas
              residenciais, comerciais e industriais.s
            </p>
            <a class="btn-mais" href="/about">Saiba mais ></a>
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