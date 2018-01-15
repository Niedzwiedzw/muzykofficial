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
          @click="$router.push('/bio')"
          :class="menuClasses">{{ $t('menu_items.bio') }}</div>

        <div
          @click="$router.push('/contact')"
          :class="menuClasses">{{ $t('menu_items.contact') }}</div>

        <div
          @click="$i18n.locale = $i18n.locale === 'en' ? 'pl' : 'en'"
          :class="menuClasses">{{ $t('menu_items.language_toggle') }}</div>

        <app-togglable-menu v-if="mobileToggled"></app-togglable-menu>
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
          }
//          {
//            'text': 'instruments',
//            'link': '/instruments'
//          }
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

    background: rgba(0, 0, 0, 0.5);
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
