<template>
  <div>
    <div class="section">
      <h1>Prime Components</h1>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;Badge :variant=&quot;'prime'&quot;&gt;&lt;/Badge&gt;
&lt;Badge :variant=&quot;'prime-alt'&quot;&gt;&lt;/Badge&gt;

&lt;PrimeSection :subtitle=&quot;'77% trust custom email addresses over regular.'&quot; @click=&quot;testClick&quot;&gt;&lt;/PrimeSection&gt;</code></pre>
        </div>
      </accordion>

      <Badge :variant="'prime'"></Badge>
      <Badge :variant="'prime-alt'"></Badge>

      <PrimeSection
        :subtitle="'77% trust custom email addresses over regular.'"
        @click="testClick"
      ></PrimeSection>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import Badge from "./../components/Badge.vue";
import PrimeSection from "./../components/PrimeSection.vue";

@Component({
  components: {
    Accordion,
    Badge,
    PrimeSection
  }
})
export default class PrimeComponents extends Vue {
  testClick() {
    console.log("test click");
  }
}
</script>
