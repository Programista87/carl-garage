<template>
  <div>
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

</style>
