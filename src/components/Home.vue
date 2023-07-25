<template>
  <div class="arena">
    <div class="home-background" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Home page'
    }
  }
}
</script>

<style>

.arena {
  background: #000000;
}

.home-background {
  height: 80vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/asset/img/CarlHomeBackground.jpg");
}


</style>