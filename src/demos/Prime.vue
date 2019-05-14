<template>
  <div>
    <div class="section">
      <h1>Prime Components</h1>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;Badge :variant=&quot;'prime'&quot;&gt;&lt;/Badge&gt;
&lt;Badge :variant=&quot;'prime-alt'&quot;&gt;&lt;/Badge&gt;</code></pre>
        </div>
      </accordion>
      <div class="section">
        <Badge :variant="'prime'"></Badge>
        <Badge :variant="'prime-alt'"></Badge>
      </div>

      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre>
<code>&lt;div class=&quot;cs-section&quot;&gt;
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi magna, venenatis quis lobortis vel, mollis eu diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet egestas tellus quis pretium. Fusce sit amet sem sapien. Vestibulum congue euismod enim non venenatis. Sed sed varius neque.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi magna, venenatis quis lobortis vel, mollis eu diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquet egestas tellus quis pretium. Fusce sit amet sem sapien. Vestibulum congue euismod enim non venenatis. Sed sed varius neque.
  &lt;PrimeSection
    :subtitle=&quot;'77% trust custom email addresses over regular.'&quot;
    @click=&quot;testClick&quot;
  &gt;&lt;/PrimeSection&gt;
&lt;/div&gt;</code></pre>
        </div>
      </accordion>

      <div class="cs-section">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nisi
        magna, venenatis quis lobortis vel, mollis eu diam. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Pellentesque aliquet egestas
        tellus quis pretium. Fusce sit amet sem sapien. Vestibulum congue
        euismod enim non venenatis. Sed sed varius neque. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nullam nisi magna, venenatis quis
        lobortis vel, mollis eu diam. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Pellentesque aliquet egestas tellus quis pretium. Fusce
        sit amet sem sapien. Vestibulum congue euismod enim non venenatis. Sed
        sed varius neque.
        <PrimeSection
          :subtitle="'77% trust custom email addresses over regular.'"
          @click="testClick"
        ></PrimeSection>
      </div>
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

<style lang="less" scoped>
@import "./../styles/Imports";

.cs-section {
  position: relative;
  width: 260px;
}
</style>
