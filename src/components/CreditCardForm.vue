<template>
  <div class="credit-card-form">
    <text-input></text-input>
    <selector></selector>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Selector from "./Selector.vue";
import TextInput from "./TextInput.vue";

@Component({
  components: {
    Selector,
    TextInput
  }
})
export default class CreditCardForm extends Vue {
  @Prop() label!: String;

  @Prop() name!: String;

  @Prop() value!: Boolean;

  onLabelClick(): void {
    let input: any = this.$refs[`${this.label}`];
    input.checked = true;
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";
</style>
