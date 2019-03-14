<template>
  <div>
    <div class="section">
      <h1>Site Search</h1>
      <p>A work in progress</p>
      <div class="row">
        <site-search/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">


import { Component, Vue } from "vue-property-decorator";
import SiteSearch from "./../components/SiteSearch.vue";
import Accordion from "./../components/Accordion.vue";
@Component({
  components: {
    SiteSearch,
    Accordion
  }
})
export default class SiteSearchDemo extends Vue {
  msg = "Hi!";
}
</script>
