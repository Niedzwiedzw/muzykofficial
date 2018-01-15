// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
import VueI18n from 'vue-i18n'

Vue.use(BootstrapVue)
Vue.use(VueI18n)

Vue.component('icon', Icon)

Vue.config.productionTip = false

// Ready translated locale messages
const messages = {
  en: {
    bio: {
      para_1: 'Muzyk is a pub where the clients take responsibility for the entertainment part. We\'re lazy like that. We host many music shows, from small to big.',
      para_2: 'Following nstruments are for your disposal: acoustic and electric guitar, drumset, bass guitar, and a microphone. ',
      para_3: 'Feel agressively invited to visit the place where music is never over.'
    },
    menu_items: {
      bio: 'bio',
      contact: 'contact',
      language_toggle: 'po polsku'
    }
  },
  pl: {
    bio: {
      para_1: 'Muzyk jest klubem, gdzie grają sami klienci, ale są też koncerty i nieformalne występy różnych zespołów.',
      para_2: 'Do dyspozycji naszych klientów pozostawiamy wszystkie instrumenty muzyczne należące do klubu: gitara elektryczna, akustyczna, bas i perkusja.',
      para_3: 'Serdecznie zapraszamy do krainy wiecznej muzyki.'
    },
    menu_items: {
      bio: 'bio',
      contact: 'kontakt',
      language_toggle: 'english'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})
