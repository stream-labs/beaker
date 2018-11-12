<template>
  <div>
    <accordion :opened-title="'Hide Content'" :closed-title="'Show Content'">
      <div slot="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.
      </div>
    </accordion>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../Accordion.vue";

@Component({
  components: {
    Accordion
  }
})
export default class Accordions extends Vue {}
</script>
