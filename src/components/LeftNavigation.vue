<template>
  <div class="left-navigation">
    <a class="left-navigation__link" href="#accordions">Accordions</a>
    <a class="left-navigation__link" href="#buttons">Buttons</a>
    <a class="left-navigation__link" href="#colors">Colors</a>
    <a class="left-navigation__link" href="#dropdowns">Dropdowns</a>
    <a class="left-navigation__link" href="#forms">Forms</a>
    <a class="left-navigation__link" href="#inputs">Inputs</a>
    <a class="left-navigation__link" href="#merch">Merch</a>
    <a class="left-navigation__link" href="#tables">Tables</a>
    <a class="left-navigation__link" href="#tabs">Tabs</a>
    <a class="left-navigation__link" href="#tables">Toggles</a>
    <a class="left-navigation__link" href="#typography">Typography</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class LeftNavigation extends Vue {}
</script>

<style lang="less" scoped>
.left-navigation {
  display: flex;
  flex-direction: column;
}

.left-navigation__link {
  text-decoration: none;
}
</style>
