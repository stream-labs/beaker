<template>
  <div>
    <div class="section">
      <h1>Accordions</h1>

      <pre>
        <code>
Import { Accordion } from 'streamlabs-beaker';

components: {
  Accordion
}
        </code>
      </pre>
    </div>
    <!-- Default Settings -->
    <div class="section">
      <h3>Default Settings</h3>
      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'"
        class="docs-code"
      >
        <div slot="content">
          <pre>
            <code>
&lt;Accordion :opened-title=&quot;'Close Accordion'&quot; :closed-title=&quot;'Open Accordion'&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  &lt;/div&gt;
&lt;/Accordion&gt;
            </code>
          </pre>
        </div>
      </Accordion>
      <Accordion
        :opened-title="'Close Accordion'"
        :closed-title="'Open Accordion'"
      >
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </Accordion>
    </div>

    <!-- Set to be open -->
    <div class="section">
      <h3>Set to be open</h3>
      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'"
        class="docs-code"
      >
        <div slot="content">
          <pre>
            <code>
&lt;Accordion :opened-title=&quot;'Hide Content'&quot; :closed-title=&quot;'Show Content'&quot; :isOpen=&quot;true&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  &lt;/div&gt;
&lt;/Accordion&gt;
            </code>
          </pre>
        </div>
      </Accordion>
      <Accordion
        :opened-title="'Hide Content'"
        :closed-title="'Show Content'"
        :isOpened="true"
      >
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </Accordion>
    </div>

    <!-- Alternative - No Border -->
    <div class="section">
      <h3>Alternative - No Border</h3>
      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'"
        class="docs-code"
      >
        <div slot="content">
          <pre>
            <code>
&lt;Accordion :opened-title=&quot;'Hide Content'&quot; :closed-title=&quot;'Show Content'&quot; :no-border=&quot;true&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  &lt;/div&gt;
&lt;/Accordion&gt;
            </code>
          </pre>
        </div>
      </Accordion>
      <Accordion
        :opened-title="'Hide Content'"
        :closed-title="'Show Content'"
        :noBorder="true"
      >
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </Accordion>
    </div>

    <!-- Accordion within an Accordion -->
    <div class="section">
      <h3>Accordion within an Accordion</h3>
      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'"
        class="docs-code"
      >
        <div slot="content">
          <pre>
            <code>
&lt;Accordion :opened-title=&quot;'Hide Inner Accordion'&quot; :closed-title=&quot;'Show Inner Accordion'&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    &lt;Accordion :opened-title=&quot;'Hide Content'&quot; :closed-title=&quot;'Show Content'&quot;&gt;
      &lt;div slot=&quot;content&quot;&gt;
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      &lt;/div&gt;
    &lt;/Accordion&gt;
  &lt;/div&gt;
&lt;/Accordion&gt;
            </code>
          </pre>
        </div>
      </Accordion>
      <Accordion
        :opened-title="'Hide Inner Accordion'"
        :closed-title="'Show Inner Accordion'"
      >
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <Accordion
            :opened-title="'Hide Content'"
            :closed-title="'Show Content'"
          >
            <div slot="content">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum distinctio architecto unde, iste adipisci earum odit
              saepe incidunt possimus. Autem modi et enim veritatis qui impedit
              perferendis architecto iure sapiente. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nihil soluta assumenda optio
              consequuntur necessitatibus, eum qui placeat praesentium itaque
              ipsum dolorum. Rem nobis blanditiis id, eligendi rerum quisquam
              non ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Alias et nesciunt ratione! Nihil eum rem ex consectetur
              amet, tempore natus laborum ad quod provident autem voluptatibus
              distinctio earum magni facere?
            </div>
          </Accordion>
        </div>
      </Accordion>
    </div>

    <!-- Variant - Left Navigation -->
    <div class="section">
      <h3>Variant - Left Navigation</h3>
      <Accordion
        :openedTitle="'Hide Code'"
        :closedTitle="'Show Code'"
        class="docs-code"
      >
        <div slot="content">
          <pre>
            <code>
&lt;Accordion :title=&quot;'Left Navigation'&quot; :leftNav=&quot;true&quot;&gt;
  &lt;div slot=&quot;content&quot;&gt;
    &lt;div&gt;anything you want really&lt;/div&gt;
  &lt;/div&gt;
&lt;/Accordion&gt;
            </code>
          </pre>
        </div>
      </Accordion>
      <accordion :leftNav="true">
        <div slot="title">Left Navigation</div>
        <div slot="content">
          <div class="fake-nav">
            <div class="fake-nav-item">
              <div class="fake-nav-icon">
                <i class="icon-question"></i>
              </div>
              <div class="fake-nav-title">Nav Item</div>
            </div>
            <div class="fake-nav-item">
              <div class="fake-nav-icon">
                <i class="icon-question"></i>
              </div>
              <div class="fake-nav-title">Styling Handled By</div>
            </div>
            <div class="fake-nav-item">
              <div class="fake-nav-icon">
                <i class="icon-question"></i>
              </div>
              <div class="fake-nav-title">Slot and navigation.less</div>
            </div>
          </div>
        </div>
      </accordion>

      <table class="docs-table">
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>openedTitle</td>
            <td>string</td>
            <td>null</td>
            <td>Title to display when accordion is open</td>
          </tr>
          <tr>
            <td>closedTitle</td>
            <td>string</td>
            <td>null</td>
            <td>Title to display when accordion is closed</td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
            <td>null</td>
            <td>(Optional) Overrides both open and closed titles</td>
          </tr>
          <tr>
            <td>isOpened</td>
            <td>boolean</td>
            <td>false</td>
            <td>Have the accordion open by default</td>
          </tr>
          <tr>
            <td>noBorder</td>
            <td>boolean</td>
            <td>false</td>
            <td>Alternative style with no border or padding</td>
          </tr>
          <tr>
            <td>leftNav</td>
            <td>boolean</td>
            <td>false</td>
            <td>Alternative style for use in Left Navigation</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import ColorPicker from "./../components/ColorPicker.vue";
import Button from "./../components/Button.vue";

@Component({
  components: {
    Accordion,
    's-button': Button,
    ColorPicker
  }
})
export default class Accordions extends Vue {
  colors = {
    hex: "#194d33",
    hsl: { h: 150, s: 0.5, l: 0.2, a: 1 },
    hsv: { h: 150, s: 0.66, v: 0.3, a: 1 },
    rgba: { r: 25, g: 77, b: 51, a: 1 },
    a: 1
  };

  colors2 = {
    hex: "#ff0000",
    rgba: { r: 255, g: 0, b: 0, a: 1 }
  };
}
</script>

<style lang="less">
@import "./../styles/Imports";

.fake-nav {
  width: 300px;
  display: flex;
  flex-direction: column;
}

.fake-nav-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 32px;

  .fake-nav-icon {
    color: black;
    .margin-right(1);
  }

  .fake-nav-title {
    color: black;
    font-weight: @medium;
    font-size: 14px;
  }
}
</style>
