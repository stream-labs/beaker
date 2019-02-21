<template>
  <div
    class="sp-simulator"
    :class="[ calloutClass, calloutClosedClass ]">

    <div class="sp-simulator__heading">
      <img class="sp-simulator__icon" :src="icon">
      <h1 class="sp-simulator__username">{{ username }}</h1>
    </div>

    <div class="sp-simulator__section">
      <TextInput></TextInput>
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

.night,
.night-theme {
}
</style>
