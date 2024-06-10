<template>
  <div class="container-geral-header">
    <div class="content-logo">
      <img class="logo" src="./assets/img/logo-hmn.png" alt="">
    </div>
    
    <button class="hamburger" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    
    <nav :class="{ open: isOpen }" id="menu-desktop">
      <router-link to="/" @click="closeMenu">Início</router-link>
      <a class="link-pages" href="/#servicos" @click="closeMenu">Serviços</a>
      <router-link to="/about" @click="closeMenu">Sobre</router-link>
      <router-link to="/contato" @click="closeMenu">Contato</router-link>
    </nav>
  </div>

  <router-view/>
</template>


<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    }
  }
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.container-geral-header {
  display: none;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 50px;
  width: 100%;
  height: 80px;
  background-color: #FFF;
}

.content-logo{
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 300px;

}
.logo{
  width: 130px;
  height: 130px;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  
  .bar {
    width: 100%;
    height: 4px;
    background-color: red;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    right: 0;
    background-color: #FFF;
    width: 100%;
    height: auto;
  }

  a {
    font-weight: bold;
    color: black;
    text-decoration: none;

    &.router-link-exact-active {
      color: red;
    }
  }

  a:hover {
    color: red;
    text-decoration: none;
  }
}

@media (max-width: 768px) {
  .container-geral-header {
    display: flex;
    justify-content: space-between !important;
    padding: 0 50px;
  }
  .hamburger {
    display: flex;

  }

  nav {
    display: none;

    &.open {
      display: flex;
      z-index: 1000;
      
    }
  }
}
</style>

