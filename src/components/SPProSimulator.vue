<template>
  <div
    class="sp-simulator">

    <div class="sp-simulator__heading">
      <img class="sp-simulator__icon" :src="icon">
      <h1 class="sp-simulator__username">{{ username }}</h1>
    </div>

    <div class="sp-simulator__section">
      <div class="sp-simulator__video"></div>
    </div>

    <div class="sp-simulator__section">
      <TextInput :title="'Username'"></TextInput>
    </div>

    <div class="sp-simulator__section">

    </div>

    <div class="sp-simulator__section">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TextInput from "./TextInput.vue";

@Component({
  components: {
    TextInput
  }
})
export default class SPProSimulator extends Vue {
  @Prop() username!: string;

  @Prop() icon!: String;
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.sp-simulator {
  background-color: @night-bg;
  .radius(2);
  .padding(3);
  display: grid;
  grid-template: 1fr 1fr;
}

.sp-simulator__heading {
  display: flex;
}

.sp-simulator__icon {
  width: 56px;
  height: 56px;
  border-radius: 100%;
  .margin-right(2);
}

.sp-simulator__section {
  .padding(2);
  .radius(2);
  min-height: 300px;
  background-color: pink;
}

.night,
.night-theme {
}
</style>
