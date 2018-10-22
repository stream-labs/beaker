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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import FormGroupH from "./../FormGroupH.vue";
import FormGroupV from "./../FormGroupV.vue";

@Component({
  components: {
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
