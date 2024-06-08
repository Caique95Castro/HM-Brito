<template>
    <div class="container-geral-servicos">
        <div class="container-services-geral">
            <div class="content-services">
              <h2>
                <strong
                  >Alugamos caçambas estacionárias para retirada de entulho</strong
                >
              </h2>
              <p>
                Nosso objetivo é entregar sempre um serviço de qualidade aos nossos
                clientes. Por isso nosso foco sempre será na entrega.
              </p>
              <div class="servicos">
                <div class="content-image-servicos">
                  <div class="img-servicos">
                    <img
                      class="servico-image"
                      src="../assets/img/image-3.jpeg"
                      alt=""
                    />
                  </div>
                  <h4><strong>Construtoras e Condominios</strong></h4>
                  <p>Pacotes especiais para construtoras e condomínios em <strong>Cotia</strong>.</p>
                </div>
                <div class="content-image-servicos">
                  <div class="img-servicos">
                    <img
                      class="servico-image"
                      src="../assets/img/image-3.jpeg"
                      alt=""
                    />
                  </div>
                  <h4><strong>Residências</strong></h4>
                  <p>Consulte nossos valores. Entrega rápida na sua casa.</p>
                </div>
                <div class="content-image-servicos">
                  <div class="img-servicos">
                    <img
                      class="servico-image"
                      src="../assets/img/image-3.jpeg"
                      alt=""
                    />
                  </div>
                  <h4><strong>Empresas e Comércio</strong></h4>
                  <p>Temos planos por locação de unidade ou por contrato. Fale com nossa equipe.</p>
                </div>
              </div>
      
              <h2>
                <strong
                  >Alugamos caçambas estacionárias para retirada de entulho</strong
                >
              </h2>
              <p>
                Nosso objetivo é entregar sempre um serviço de qualidade aos nossos
                clientes. Por isso nosso foco sempre será na entrega.
              </p>
              <div class="servicos">
                <div class="content-image-servicos">
                  <div class="img-servicos">
                    <img class="servico-image" src="../assets/img/3m.jpg" alt="" />
                  </div>
                  <h4><strong>3M³</strong></h4>
                </div>
                <div class="content-image-servicos">
                  <div class="img-servicos">
                    <img class="servico-image" src="../assets/img/4m.jpg" alt="" />
                  </div>
                  <h4><strong>4M³</strong></h4>
                </div>
                <div class="content-image-servicos">
                  <div class="img-servicos">
                    <img class="servico-image" src="../assets/img/5m.jpg" alt="" />
                  </div>
                  <h4><strong>5M³</strong></h4>
                </div>
              </div>
            </div>
          </div>
    </div>
</template>
<script>

export default {

    components: {
    }
}
</script>
<style scoped>

.container-geral-servicos{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.container-services-geral {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.content-services {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    width: 100%;
    margin-top: 5rem;
    gap: 10PX;
}

.servicos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;
    gap: 30px;
    padding: 30px 100px;
}

.content-image-servicos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 300px;
}

.img-servicos {
    width: 300px;
}

.servico-image {
    width: 100%;
}
</style>