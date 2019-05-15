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

    <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
      <div slot="content">
        <pre>
<code>&lt;NavCallToAction
  :description=&quot;
    'Forward email from your custom domain name to your current mailbox.'
  &quot;
  :buttonTitle=&quot;'Join Prime'&quot;
  :buttonVariation=&quot;'prime'&quot;
  @click=&quot;testNavClick&quot;
&gt;
  &lt;div slot=&quot;title&quot;&gt;
    Unlock unlimited themes with
    &lt;Badge :variant=&quot;'prime-alt'&quot;&gt;&lt;/Badge&gt;
  &lt;/div&gt;
  &lt;div slot=&quot;extras&quot;&gt;
    &lt;div&gt;Prime also includes:&lt;/div&gt;
    &lt;div&gt;Custom Domain Name&lt;/div&gt;
    &lt;div&gt;30+ Professional Themes&lt;/div&gt;
    &lt;div&gt;Advanced SEO &amp; Analytics&lt;/div&gt;
  &lt;/div&gt;
&lt;/NavCallToAction&gt;</code></pre>
      </div>
    </accordion>

    <NavCallToAction
      :description="
        'Forward email from your custom domain name to your current mailbox.'
      "
      :buttonTitle="'Join Prime'"
      :buttonVariation="'prime'"
      @click="testNavClick"
    >
      <div slot="title">
        Unlock unlimited themes with
        <Badge :variant="'prime-alt'"></Badge>
      </div>
      <div slot="extras">
        <div>Prime also includes:</div>
        <div>Custom Domain Name</div>
        <div>30+ Professional Themes</div>
        <div>Advanced SEO & Analytics</div>
      </div>
    </NavCallToAction>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import Badge from "./../components/Badge.vue";
import PrimeSection from "./../components/PrimeSection.vue";
import NavCallToAction from "./../components/NavCallToAction.vue";

@Component({
  components: {
    Accordion,
    Badge,
    PrimeSection,
    NavCallToAction
  }
})
export default class PrimeComponents extends Vue {
  testClick() {
    console.log("test prime section click");
  }

  testNavClick() {
    console.log("test prime nav click");
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
