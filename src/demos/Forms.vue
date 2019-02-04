<template>
  <div>
    <form-group-h
      :title="title"
      :helpText="helpText"
      :tooltip="tooltip">
      <input
        slot="input"
        type="text"
        placeholder="Text Input Placeholder" />
      </form-group-h>

    <form-group-v
      :title="title"
      :helpText="helpText"
      :tooltip="tooltip">
      <input
        slot="input"
        type="text"
        placeholder="Text Input Placeholder" />
    </form-group-v>

    <payment-form></payment-form>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PaymentForm from "./../components/PaymentForm.vue";
import FormGroupH from "./../components/FormGroupH.vue";
import FormGroupV from "./../components/FormGroupV.vue";

@Component({
  components: {
    PaymentForm,
    FormGroupH,
    FormGroupV
  }
})
export default class Forms extends Vue {
  title = "Text Input";
  tooltip = "Input tooltip message.";
  helpText = "This is help text";
}
</script>
