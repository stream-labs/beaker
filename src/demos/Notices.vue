<template>
  <div>
    <div class="section">
      <h1>Notices</h1>
      <p>This is used to point out new locations or features</p>
    </div>
    <div class="section">
      <h2>Tooltip Notice</h2>
      <accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
        <div slot="content">
          <pre><code>&lt;TooltipNotice
  v-if=&quot;showTooltipNotice&quot;
  @handle-tooltip=&quot;closeTooltip&quot;
  :title=&quot;'Defaults'&quot;
  :desc=&quot;'All your favorite widgets, just with a new view.'&quot;
&gt;&lt;/TooltipNotice&gt;

&lt;TooltipNotice
  v-if=&quot;showTooltipNotice&quot;
  @handle-tooltip=&quot;closeTooltip&quot;
  :arrowPosition=&quot;'top'&quot;
  :hasButton=&quot;false&quot;
  :title=&quot;'Top arrow'&quot;
  :desc=&quot;'All your favorite widgets, just with a new view.'&quot;
&gt;&lt;/TooltipNotice&gt;

&lt;TooltipNotice
  v-if=&quot;showTooltipNotice&quot;
  @handle-tooltip=&quot;closeTooltip&quot;
  :buttonTitle=&quot;'Get started'&quot;
  :title=&quot;'Custom button title'&quot;
  :desc=&quot;'All your favorite widgets, just with a new view.'&quot;
&gt;&lt;/TooltipNotice&gt;

&lt;TooltipNotice
  v-if=&quot;showTooltipNotice&quot;
  @handle-tooltip=&quot;closeTooltip&quot;
  :width=&quot;300&quot;
  :title=&quot;'Custom width'&quot;
  :desc=&quot;'All your favorite widgets, just with a new view.'&quot;
&gt;&lt;/TooltipNotice&gt;</code></pre>
        </div>
      </accordion>

      <div class="row">
        <TooltipNotice
          v-if="showTooltipNotice"
          @handle-tooltip="closeTooltip"
          :title="'Defaults'"
          :desc="'All your favorite widgets, just with a new view.'"
        ></TooltipNotice>

        <TooltipNotice
          v-if="showTooltipNotice"
          @handle-tooltip="closeTooltip"
          :arrowPosition="'top'"
          :hasButton="false"
          :title="'Top arrow'"
          :desc="'All your favorite widgets, just with a new view.'"
        ></TooltipNotice>

        <TooltipNotice
          v-if="showTooltipNotice"
          @handle-tooltip="closeTooltip"
          :buttonTitle="'Get started'"
          :title="'Custom button title'"
          :desc="'All your favorite widgets, just with a new view.'"
        ></TooltipNotice>

        <TooltipNotice
          v-if="showTooltipNotice"
          @handle-tooltip="closeTooltip"
          :width="300"
          :title="'Custom width'"
          :desc="'All your favorite widgets, just with a new view.'"
        ></TooltipNotice>
      </div>

      <table class="docs-table">
        <thead>
          <tr>
            <th>Props</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>arrowPosition</td>
            <td>string</td>
            <td>'left'</td>
            <td>
              Side to put the arrow on. Options are
              <code>left</code> and
              <code>top</code>
            </td>
          </tr>

          <tr>
            <td>buttonTitle</td>
            <td>string</td>
            <td>'Got It'</td>
            <td>Button text</td>
          </tr>

          <tr>
            <td>hasButton</td>
            <td>boolean</td>
            <td>true</td>
            <td>Having a button is optional</td>
          </tr>

          <tr>
            <td>width</td>
            <td>number</td>
            <td>200</td>
            <td>Change the width of the tooltip</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import TooltipNotice from "./../components/TooltipNotice.vue";

@Component({
  components: {
    Accordion,
    TooltipNotice
  }
})
export default class Notices extends Vue {
  showTooltipNotice = true;

  closeTooltip() {
    this.showTooltipNotice = false;
  }
}
</script>

<style lang="less" scoped>
.row {
  position: relative;

  .s-tooltip-notice {
    &:nth-child(1) {
      top: 200px;
      left: 0px;
    }

    &:nth-child(2) {
      top: 200px;
      left: 250px;
    }

    &:nth-child(3) {
      top: 200px;
      left: 500px;
    }

    &:nth-child(4) {
      top: 200px;
      left: 750px;
    }
  }
}
</style>
