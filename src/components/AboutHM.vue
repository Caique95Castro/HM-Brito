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
      <div class="content-about-home">
        <ion-icon class="image-icons" name="home-outline"></ion-icon>
        <p class="title-sobre">Sobre a</p>
        <h3 class="enfase-titulo"><strong>HMN</strong></h3>
        <h4 class="enfase-titulo">Terraplenagem</h4>
        <div class="container-about-home">
          <div class="content-image-about-home">
            <img
              class="image-about"
              src="../assets/img/image-3-transformed.png"
              alt=""
            />
          </div>
          <div class="content-text-about-home">
            <p class="title-sobre">
              Com foco apenas nas regiões de
              <strong>Cotia, Granja Viana e Vargem Grande Paulista</strong> a
              Pirâmide Coleta atua há mais 20 anos oferecendo rapidez e
              eficiência no aluguel de caçambas, coleta e remoção de entulho,
              poda, gesso, isopor, plástico, papelão entre outros, em áreas
              residenciais, comerciais e industriais.
            </p>
          </div>
        </div>
      </div>
      <div class="container-mais-motivos">
        <div class="content-motivos-mais">
          <div class="box-texto-motivos">
            <h1 class="titulo-motivo-sobre">
              <strong> Porque nos escolher?</strong>
            </h1>

            <p class="title-sobre">
              Na hora de gerenciar o entulho gerado por obras, reformas ou
              demolições, contar com uma empresa de confiança faz toda a
              diferença. Nossa empresa se destaca no mercado de locação de
              caçambas por diversos motivos, garantindo eficiência, economia e
              responsabilidade ambiental. Conheça as razões para escolher nossos
              serviços:
            </p>
          </div>
          <div class="box-motivos-gerais">
            <div class="box-motivo">
              <h4 class="titulo-motivo-sobre"><strong>Experiência e Profissionalismo</strong></h4>
              <p class="title-sobre">
                Com uma vasta experiência no setor, nossa equipe é composta por
                profissionais altamente qualificados, prontos para oferecer um
                atendimento rápido e eficiente. Nosso compromisso é com a
                qualidade e a satisfação do cliente.
              </p>
            </div>
            <div class="box-motivo">
              <h4 class="titulo-motivo-sobre"><strong>Diversidade de Caçambas</strong></h4>
              <p class="title-sobre">
                Oferecemos uma ampla gama de caçambas de diferentes tamanhos,
                adequadas para todo tipo de necessidade, desde pequenas reformas
                até grandes construções. Independentemente do volume de entulho,
                temos a caçamba certa para você.
              </p>
            </div>
            <div class="box-motivo">
              <h4 class="titulo-motivo-sobre"><strong>Pontualidade e Eficiência</strong></h4>
              <p class="title-sobre">
                Entendemos a importância de prazos em qualquer obra. Por isso,
                garantimos a entrega e a retirada das caçambas no horário
                combinado, evitando atrasos e interrupções no seu projeto.
              </p>
            </div>
            <div class="box-motivo">
              <h4 class="titulo-motivo-sobre"><strong>Preços Competitivos</strong></h4>
              <p class="title-sobre">
                Nossos preços são justos e competitivos, proporcionando o melhor
                custo-benefício para os nossos clientes. Trabalhamos com
                transparência, sem custos ocultos, para que você saiba
                exatamente o que está pagando.
              </p>
            </div>
            <div class="box-motivo">
              <h4 class="titulo-motivo-sobre"><strong>Responsabilidade Ambiental</strong></h4>
              <p class="title-sobre">
                A sustentabilidade é uma prioridade para nós. Seguimos
                rigorosamente todas as normas ambientais, assegurando que o
                descarte do entulho seja realizado de maneira adequada e
                responsável, contribuindo para a preservação do meio ambiente.
              </p>
            </div>
            <div class="box-motivo">
              <h4 class="titulo-motivo-sobre"><strong>Atendimento Personalizado</strong></h4>
              <p class="title-sobre">
                Cada cliente é único e merece um atendimento especial. Nossa
                equipe está sempre disponível para entender suas necessidades e
                oferecer soluções personalizadas, garantindo que você tenha a
                melhor experiência possível.
              </p>
            </div>
            <div class="box-motivo">
              <h4 class="titulo-motivo-sobre"><strong>Facilidade de Contratação</strong></h4>
              <p class="title-sobre">
                Nosso processo de locação é simples e descomplicado. Você pode
                solicitar uma caçamba de forma rápida e prática, sem burocracia,
                através do nosso site ou telefone.
              </p>
            </div>
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
<style src="./css/About.css" scoped ></style>