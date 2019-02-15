<template>
  <div class="item-grid">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class FormGroup extends Vue {

}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.item-grid {
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 16px;
}

</style>
