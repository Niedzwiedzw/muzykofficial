<template>
  <div class="container white-background">
    <div class="row">
      <div class="col-12">
        <a class="contact-item hoverable" href="mailto:info@muzyk-torun.pl">
          <icon class="contact-icon" name="envelope-square" scale="3"></icon> info@muzyk-torun.pl
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <a class="contact-item hoverable" href="tel:+48665644207">
          <icon class="contact-icon" name="phone-square" scale="3"></icon>+48 665 644 207
        </a>
      </div>

    </div>
    <div class="row">
      <div class="col-12">
        <a class="contact-item hoverable" href="https://m.me/muzyk.torun" target="_blank">
          <icon class="contact-icon" name="facebook-square" scale="3"></icon> @muzyk.torun
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppContact',
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .contact-icon {
    vertical-align: middle;
    margin-right: 0.2em;
  }

  .contact-item {
    text-align: left;
  }
</style>
