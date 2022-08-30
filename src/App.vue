<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <Header />
  <div class="container">
    <div class="sidemenu">
      <SideMenu/>
    </div>
    <div class="contentContainer">
      <router-view />
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import SideMenu from "./components/SideMenu.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,SideMenu
  },
  props: [],
  setup() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 60%;
  margin: auto;
  background-color: blueviolet;
}

.container {
 display: flex;
 flex-direction: row;

}


.contentContainer{
  background: blue;
  
  flex: 1 0 auto; 
  
}
.sidemenu {
  flex: 1 0 auto; 
 position: fixed;
 background-color: red;
 position: absolute;

}

</style>
