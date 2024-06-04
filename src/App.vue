<template>
  <div class="container-geral-header">
    <div class="content-logo">
      <h2 class="name-logo">HM BRITO</h2>
      <p class="name-logo">TERRAPLENAGEM</p>
    </div>
    
    <button class="hamburger" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    
    <nav :class="{ open: isOpen }" id="menu-desktop">
      <router-link to="/" @click="closeMenu">Home</router-link>
      <router-link to="/about" @click="closeMenu">About</router-link>
      <router-link to="/aluguel" @click="closeMenu">Aluguel de Caçamba</router-link>
      <router-link to="/servicos" @click="closeMenu">Serviços</router-link>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.container-geral-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 50px;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 165, 0.768);
}

.name-logo {
  color: #ffcc29;
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
    background-color: white;
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
    background-color: rgba(0, 0, 165, 0.768);
    width: 100%;
    height: auto;
  }

  a {
    font-weight: bold;
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #ffcc29;
    }
  }

  a:hover {
    color: #ffcc29;
  }
}

@media (max-width: 768px) {
  .container-geral-header {
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
    }
  }
}
</style>

