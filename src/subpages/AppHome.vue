<template>
  <div class="map">
    <keep-alive>
      <iframe
        width="75%"
        height="500"
        frameborder="0" style="border:0"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBSL2snRg9T8RrAFEKNKgb3ICF6ypfsplM&q=place_id:ChIJbS9XJx41A0cRaSfQ1Q-SwlA" allowfullscreen>
      </iframe>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'AppHome',
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .map {
    margin-top: 1em;
  }
</style>
