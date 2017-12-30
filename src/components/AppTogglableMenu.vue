<template>
  <div class="container-fluid">
    <div v-if="menuItems" class="offset-6 col-6 mobile-menu">
      <div v-for="item in menuItems" class="row">
        <div
          class="col-12 hoverable"
          @click="$router.push(item.link)">
          {{ item.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppTogglableMenu',
    props: ['menuItems'],
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .mobile-menu {
    background: rgba(0, 0, 0, 0.4);
  }

</style>
