<template>
  <div id="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/macro/Header.vue';
import Main from './components/macro/Main.vue';
import Footer from './components/macro/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style lang="scss">

@import './assets/style/global.scss';
@import'~bootstrap/dist/css/bootstrap.css';

</style>
