<template>
  <div class="home">
    <img
      class="logo"
      alt="Vue logo"
      src="../assets/imgs/beaker-round.svg"
    >
    <HelloWorld
      msg="Welcome to Beaker. A Design System for Streamlabs related products."
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import HelloWorld from '../components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  components: {
    HelloWorld,
  },
})
</script>

<style lang="less" scoped>
.logo {
  width: 100px;
}
</style>
