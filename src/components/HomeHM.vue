<template>
  <div class="container-geral-home">
    <div class="container-rope-rapel">
      <section class="module parallax parallax-2">
        <div class="container-header">
          <div class="content-header">
            <div class="content-logo">
              <img class="logo" src="../assets/img/logo-hmn.png" alt="" />
            </div>
            <nav class="container-pages">
              <router-link class="link-pages" to="/">Início</router-link>
              <a class="link-pages" href="#servicos">Servicos</a>
              <router-link class="link-pages" to="/about">Sobre</router-link>
              <router-link class="link-pages" to="/contato"
                >Contato</router-link
              >
            </nav>
          </div>
        </div>
        <div class="container-inicio-home">
          <div class="box-itens-inicio-ho">
            <div class="container-textos">
              <h1 class="tit-inicio-home">
                <strong
                  >Aluguel de Caçambas para Entulho em Cotia e Região</strong
                >
              </h1>
              <p class="sub-tit-inicio-home">
                <strong>Descarte rápido e seguro</strong>
              </p>
              <a
                class="btn-link"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                ><button class="btn-link">Solicite um Orçamento</button></a
              >
            </div>
            <div class="container-imagem">
              <img
                class="image-home-inicio"
                src="../assets/img/image-3-transformed.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="faixa-info">
      <p class="titulo-faixa">
        Solicite um orçamento <strong>sem compromisso</strong>:
      </p>
      <a class="number-info" href="#"><strong>(11) 99999-9999</strong></a>
      <p class="titulo-faixa"><strong>ou</strong></p>
      <a class="number-info" href="#"><strong>seuemail@aqui.com</strong></a>
    </div>

    <a href="#" id="servicos"></a>
    <ServicosHM />

    <div class="container-rope-rapel">
      <section class="module parallax parallax-2">
        <div class="container-geral-icons">
          <div class="container-icons-info">
            <ion-icon class="image-icons" name="trash-outline"></ion-icon>
            <h2 class="titulo-ent"><strong>+3000</strong></h2>
            <p class="sub-titulo">TONELADAS DE ENTULHO RETIRADO</p>
          </div>
          <div class="container-icons-info">
            <ion-icon class="image-icons" name="thumbs-up-outline"></ion-icon>
            <h2 class="titulo-ent"><strong>5000</strong></h2>
            <p class="sub-titulo">CLIENTES ATENDIDOS</p>
          </div>
          <div class="container-icons-info">
            <ion-icon class="image-icons" name="people-outline"></ion-icon>
            <h2 class="titulo-ent"><strong>50</strong></h2>
            <p class="sub-titulo">COLABORADORES PARA ATENDIMENTO RÁPIDO</p>
          </div>
          <div class="container-icons-info">
            <ion-icon class="image-icons" name="happy-outline"></ion-icon>
            <h2 class="titulo-ent"><strong>05</strong></h2>
            <p class="sub-titulo">ANOS DE EXPERIÊNCIA</p>
          </div>
        </div>
      </section>
    </div>

    <div class="container-image-HM">
      <div class="content-image-hm">
        <div class="image-hm">
          <img
            class="img-tamanho"
            src="../assets/img/image-1.jpeg"
            alt="image-hm"
          />
        </div>
        <div class="image-hm">
          <img
            class="img-tamanho"
            src="../assets/img/image-2.jpeg"
            alt="image-hm"
          />
        </div>
        <div class="image-hm">
          <img
            class="img-tamanho"
            src="../assets/img/image-3.jpeg"
            alt="image-hm"
          />
        </div>
        <div class="image-hm">
          <img
            class="img-tamanho"
            src="../assets/img/image-4.jpeg"
            alt="image-hm"
          />
        </div>
        <div class="image-hm">
          <img
            class="img-tamanho"
            src="../assets/img/logo-hm.png"
            alt="image-hm"
          />
        </div>
        <div class="image-hm">
          <img
            class="img-tamanho"
            src="../assets/img/image-5.jpeg"
            alt="image-hm"
          />
        </div>
        <div class="image-hm">
          <img
            class="img-tamanho"
            src="../assets/img/image-6.jpeg"
            alt="image-hm"
          />
        </div>
        <div class="image-hm">
          <img
            class="img-tamanho"
            src="../assets/img/image-cacamba.jpeg"
            alt="image-hm"
          />
        </div>
        <div class="image-hm">
          <img
            class="img-tamanho"
            src="../assets/img/image-cacamba.jpeg"
            alt="image-hm"
          />
        </div>
      </div>
    </div>

    <div class="container-geral-motivos">
      <div class="content-motivos">
        <div class="box-textos-motivos">
          <p class="primeiro-texto"><strong>Motivos para Escolher a</strong></p>
          <h3 class="segunto-texto"><strong>HMN</strong> Locação de Caçambas para Entulho</h3>
          <P class="texto-motivos"
            >Nossa empresa se destaca no mercado de locação de caçambas por
            diversos motivos, garantindo eficiência, economia e responsabilidade
            ambiental. Conheça algumas das razões para escolher nossos
            serviços:</P
          >
          
          <h5 class="titulo-texto">Experiência e Profissionalismo</h5>
          <P class="texto-motivos"
            >Com uma vasta experiência no setor, nossa equipe é composta por
            profissionais altamente qualificados, prontos para oferecer um
            atendimento rápido e eficiente. Nosso compromisso é com a qualidade
            e a satisfação do cliente.</P
          >
          <a
                class="btn-link"
                href="/about"
                rel="noopener noreferrer"
                ><button class="btn-link">Ver Mais</button></a
              >
          
        </div>
        <div class="box-image-motivos">
          <img src="../assets/img/logo-hmn.png" alt="">
        </div>
      </div>
    </div>

    <div class="container-faixa-garantia">
      <div class="content-garantia">
        <h1 class="titulo-garantia"><strong>Garantia no atendimento!</strong></h1>
        <a
          class="btn-link-1"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          ><button class="btn-link-1">Solicite um Orçamento</button></a
        >
      </div>
    </div>

    <div class="container-imagem-descricao">
      <div class="content-descricao">
        <div class="box-itens-descricao">
          <ion-icon
            class="image-icons"
            name="checkmark-done-outline"
          ></ion-icon>
          <h5 class="titulo-desc"><strong>Destinação Correta</strong></h5>
          <p class="sub-desc">
            Tenha o cuidado de contratar uma Empresa séria para remoção de
            entulhos.
          </p>
        </div>
        <div class="box-itens-descricao-1">
          <ion-icon
            class="image-icons"
            name="checkmark-done-outline"
          ></ion-icon>
          <h5 class="titulo-desc"><strong>EXIJA A LEGALIDADE</strong></h5>
          <p class="sub-desc">
            Empresa cadastrada junto à AMLURB sob o número de cadastro 0932
          </p>
        </div>
        <div class="box-itens-descricao">
          <ion-icon
            class="image-icons"
            name="checkmark-done-outline"
          ></ion-icon>
          <h5 class="titulo-desc"><strong>O QUE FALAM SOBRE NÓS</strong></h5>
          <p class="sub-desc">
            Mais abaixo você vera o que nossos clientes dizem sobre nós no
            Google.
          </p>
        </div>
      </div>
    </div>
    <div class="container-dicas-uteis">
      <h1><strong>Dicas</strong> úteis.</h1>
      <p>
        Veja algumas dicas que a <strong>HMN </strong> considera
        <strong>importante </strong> para que você ou sua empresa não coloque
        seu projeto em risco:
      </p>
      <div class="content-dicas">
        <div class="box-dicas-1">
          <ion-icon class="image-icons" name="reader-outline"></ion-icon>
          <p>
            Antes de contratar uma caçamba para remoção de entulho,
            certifique-se de estar contratando uma empresa legalizada.
          </p>
        </div>
        <div class="box-dicas">
          <ion-icon class="image-icons" name="trash-bin-outline"></ion-icon>
          <p>
            A caçamba é destinada exclusivamente para a coleta de entulho de
            construção civil.
          </p>
        </div>
        <div class="box-dicas">
          <ion-icon class="image-icons" name="ban-outline"></ion-icon>
          <p>
            A caçamba não pode ser depositada em cima de calçada ou em locais
            que seja proibido estacionar carro.
          </p>
        </div>
        <div class="box-dicas">
          <ion-icon class="image-icons" name="alert-circle-outline"></ion-icon>
          <p>A carga da caçamba não pode exceder a sua borda superior.</p>
        </div>
      </div>
      <a
        class="btn-link"
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        ><button class="btn-link">Solicite um Orçamento</button></a
      >
    </div>

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
    <a href="#" class="float" target="_blank">
      <i class="fa fa-whatsapp my-float"></i>
    </a>
    <FooterHM />
  </div>
</template>

<script>
import FooterHM from "./FooterHM.vue";
import ServicosHM from "./ServicosHM.vue";

export default {
  components: {
    FooterHM,
    ServicosHM,
  },
};
</script>


<style src="./css/Home.css" scoped ></style>