<template>
  <div id="app">
    <div class="container-fluid">
      <app-navbar></app-navbar>
      <router-view/>

      <!--<p>{{ $t("message.hello") }}</p>-->
    </div>
  </div>
</template>

<script>
  import AppNavbar from './components/AppNavbar.vue'
  export default {
    name: 'app',
    components: {
      'app-navbar': AppNavbar
    }
  }
</script>

<style>
  #app {
    font-family: 'Bangers', cursive;
    font-size: 26px;
    color: lightgray;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background: url('assets/muzyk_official.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover !important;
    background-color: #464646;
    height: 100%;
    width: 100%;
  }
  html {
    width: 100%;
    height: 100%;
  }

  .hoverable {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  .hoverable:hover {
    opacity: 0.55;
    text-decoration: none;
    color: inherit;
  }

  .white-background {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1em;
    padding-top: 2em;
    padding-bottom: 2em;
    margin-top: 1em
  }
</style>
