<template>
  <div>
    <form-group-h :title="title" :helpText="helpText" :tooltip="tooltip">
      <!-- <text-input slot="input" :type="textInputType" :placeholder="textInputPlaceholder"></text-input> -->
    </form-group-h>

    <form-group-v :title="title" :helpText="helpText" :tooltip="tooltip">
      <!-- <text-input slot="input" :type="textInputType" :placeholder="textInputPlaceholder"></text-input> -->
    </form-group-v>

    <payment-form></payment-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PaymentForm from "./../components/PaymentForm.vue";
// import FormGroupH from "./../components/FormGroupH.vue";
// import FormGroupV from "./../components/FormGroupV.vue";
// import TextInput from "./../components/TextInput.vue";

@Component({
  components: {
    PaymentForm
    // FormGroupH,
    // FormGroupV,
    // TextInput
  }
})
export default class Forms extends Vue {
  title = "Text Input";
  tooltip = "Input tooltip message.";
  helpText = "This is help text";
  textInputPlaceholder = "Text input placeholder";
  textInputType = "text";
}
</script>
