<template>
  <div class="infoMenu">
    <h3>Espaço de contas do Viva Social</h3>
    <div class="resume">
      <div class="enter">
        <h6>Entradas</h6>
        <h3>R$ {{ this.enter.toFixed(2).toString().replace(".", ",") }}</h3>
      </div>
      <div class="out">
        <h6>Despesas</h6>
        <h3>R$ {{ this.out.toFixed(2).toString().replace(".", ",") }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      enter: 0,
      out: 0,
    };
  },
  created() {
    this.$eventHub.$on("Teste", (rer) => {
      this.enter = 0;
      this.out = 0;
      for (let i = 0; i < rer.length; i++) {
        if (rer[i].type == 1) {
          this.enter += rer[i].value;
        } else {
          this.out += rer[i].value;
        }
      }
    });
  },
  mounted() {
    this.enter = 0;
    this.out = 0;
  },
};
</script>

<style></style>
