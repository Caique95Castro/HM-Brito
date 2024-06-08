<template>
  <div class="container-footer-geral">
    <div class="content-footer">
      
      <div class="content-logo">
        <img class="logo" src="../assets/img/logo-hmn.png" alt="" />
      </div>
      <div class="institucional-footer">
        <div class="content-footer-1">
          <h4 class="logo-footer-1"><strong>Institucional.</strong></h4>
          
          <router-link class="link-menu" to="/">Home</router-link>
          <router-link class="link-menu" to="/about">About</router-link>
          <router-link class="link-menu" to="/aluguel"
            >Aluguel de Caçamba</router-link
          >
          <router-link class="link-menu" to="/servicos">Serviços</router-link>
          <router-link class="link-menu" to="/contato">Contato</router-link>
        </div>
      </div>
      <div class="institucional-footer">
        <div class="content-footer-1">
          <h4 class="logo-footer-1"><strong>Serviços.</strong></h4>
          <a class="link-menu" href="">Aluguel de Caçamba</a>
        </div>
        <div class="content-footer-1">
          <h4 class="logo-footer-1"><strong>Fale Conosco.</strong></h4>
          <a class="link-menu" href="#">1199999-9999</a>
          <a class="link-menu" href="3">seuemail@aqui.com</a>
        </div>
      </div>
      <div class="institucional-footer">
        
        <div class="content-footer-1">
          <h4 class="logo-footer-1">
            <strong>Principais Locais de Atendimentos</strong>
          </h4>
          <p class="locais-color">
            COTIA, BARUERI, ALPHAVILLE, OSASCO, CARAPICUIBA
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./css/Footer.css" scoped></style>