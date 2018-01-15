<template>
  <div class="container-fluid">
    <div class="offset-6 col-6 mobile-menu">

      <div class="row">
        <div
          class="col-12 hoverable"
          @click="$i18n.locale = $i18n.locale === 'en' ? 'pl' : 'en'">
          {{ $t('menu_items.language_toggle') }}
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 hoverable"
          @click="$router.push('/bio')">
          {{ $t('menu_items.bio') }}
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 hoverable"
          @click="$router.push('/contact')">
          {{ $t('menu_items.contact') }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppTogglableMenu',
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .mobile-menu {
    background: rgba(0, 0, 0, 0.4);
    z-index: 20;
  }

</style>
