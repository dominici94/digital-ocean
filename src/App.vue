<template>
  <div id="app">
    <Header />
    <Jumbo />
    <Main />
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/macro/Header.vue";
import Jumbo from "./components/sections/Jumbo.vue";
import Main from "./components/macro/Main.vue";
import Footer from "./components/macro/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Jumbo,
    Main,
    Footer,
  },
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.css";
@import "./assets/style/global.scss";
</style>
