import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

const testo = document.getElementById('question');

testo.addEventListener('click', function () {
  if (document.querySelector('.text-qa').classList.contains('visible')) {
    document.querySelector('.text-qa').classList.remove('visible');
    document.querySelector('.text-qa').classList.add('invisible');
  } else {
    document.querySelector('.text-qa').classList.remove('invisible');
    document.querySelector('.text-qa').classList.add('visible');
  }
});