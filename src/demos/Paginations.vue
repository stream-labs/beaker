<template>
  <div>
    <div class="section">
      <h1>Pagination</h1>

      <pagination
        :night-bg="true"
        :items-per-page="4"
        :total-item-count="20"
        @page-selected="consolePage"
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
  consolePage(page: number) {
    let groupStart = page * 4 - 4;

    console.log(`${groupStart}, 4`);
  }
}
</script>
