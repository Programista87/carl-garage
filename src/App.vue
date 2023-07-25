<template>
  <div class="c-g">
    <Navi />
    <router-view />
  </div>
</template>

<script>
import Navi from "/src/components/navi.vue";

export default {
  components: {
    Navi,
  },
};
</script>

<style>

.c-g {
  height: 100%;
  background: #000000;
}


</style>
