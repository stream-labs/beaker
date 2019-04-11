<template>
  <div class="home">
    <img class="logo" alt="Vue logo" src="../assets/imgs/beaker-round.svg">
    <HelloWorld msg="Welcome to Beaker. A Design System for Streamlabs related products."/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.logo {
  width: 100px;
}
</style>
