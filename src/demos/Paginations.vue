<template>
  <div>
    <div class="section">
      <h2>Pagination</h2>

      <pagination
        :items-per-page="4"
        :total-item-count="20"
      ></pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Pagination from "./../components/Pagination.vue";
import Accordion from "./../components/Accordion.vue";

@Component({
  components: {
    Pagination,
    Accordion
  }
})
export default class Paginations extends Vue {
}
</script>
