<template>
  <div id="app">
    <header-menu />
    <router-view />
  </div>
</template>
<script>
import headerMenu from "./layout/headerMenu.vue";
export default {
  components: { headerMenu },
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
