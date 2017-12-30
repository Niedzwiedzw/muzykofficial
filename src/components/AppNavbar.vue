<template>
  <div id="app-navbar">
    <div class="container">
      <div class="row">
        <div class="offset-lg-1 col-lg-2 col-xs-6">
          <img
            @click="$router.push('/')"
            class="logo hoverable float-left"
            src="../assets/muzyk_logo.png"
            alt="MUZYK">
        </div>
        <div
          @click="mobileToggled = !mobileToggled"
          :class="mobileClasses"
          class="menu">
          <icon name="bars" scale="2"></icon>
        </div>
        <div
          v-for="item in menuItems"
          @click="$router.push(item.link)"
          :class="menuClasses">{{ item.text }}</div>
        <!--<div :class="menuClasses">contact</div>-->
        <!--<div :class="menuClasses">location</div>-->
        <!--<div :class="menuClasses">instruments</div>-->
        <app-togglable-menu :menuItems="menuItems" v-if="mobileToggled"></app-togglable-menu>
      </div>
    </div>
  </div>
</template>

<script>
  import AppTogglableMenu from './AppTogglableMenu.vue'
  export default {
    name: 'AppNavbar',
    components: {
      'app-togglable-menu': AppTogglableMenu
    },
    data () {
      return {
        menuClasses: [
          'd-none',
          'd-lg-block',
          'col-2',
          'hoverable'
        ],
        mobileClasses: [
          'd-lg-none',
          'col-2',
          'hoverable'
        ],
        mobileToggled: false,
        menuItems: [
          {
            'text': 'bio',
            'link': '/bio'
          },
          {
            'text': 'contact',
            'link': '/contact'
          },
          {
            'text': 'instruments',
            'link': '/instruments'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  #app-navbar {
    top: 0;
    height: 3em;
    line-height: 3em;

    background: rgba(0, 0, 0, 0.4);
  }
  .menu > li {
    display: inline-block;
  }

  .logo {
    height: 3em;
  }
  .menu {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 1.2em;
    margin-top: 0.25em;
  }
</style>
