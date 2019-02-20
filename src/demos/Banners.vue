<template>
  <div>
    <h1>Banners</h1>
    <Tabs
      :tabs="tabs"
      :value="selectedTab"
      @input="onSelectTabHandler">
      <div slot="marketing">
        <h2>Marketing Banner</h2>
        <Accordion
          :openedTitle="'Hide Code'"
          :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;banner-marketing
  :day-bg=&quot;'https://picsum.photos/1920/300/?image=926'&quot;
  :night-bg=&quot;'https://picsum.photos/1920/300/?image=914'&quot;
  :label=&quot;'Introducing Streamlabs OBS'&quot;
  :icon=&quot;'themes'&quot;
  :title=&quot;'Largest library of free themes in the world.'&quot;
  :desc=&quot;'To access over 700+ themes for free, download Streamlabs OBS.'&quot;
  :link-desc=&quot;'Win 7+  245.8 MB'&quot;&gt;
  &lt;Button
    slot=&quot;link&quot;
    :type=&quot;'a'&quot;
    :variation=&quot;'action'&quot;
    :size=&quot;'standard'&quot;
    :href=&quot;'#'&quot;
    :title=&quot;'Download'&quot;
    :icon=&quot;'overview'&quot;&gt;
  &lt;/Button&gt;
&lt;/banner-marketing&gt;</code></pre>
          </div>
        </Accordion>

        <banner-marketing
          :day-bg="'https://picsum.photos/1920/300/?image=926'"
          :night-bg="'https://picsum.photos/1920/300/?image=914'"
          :label="'Introducing Streamlabs OBS'"
          :icon="'themes'"
          :title="'Largest library of free themes in the world.'"
          :desc="'To access over 700+ themes for free, download Streamlabs OBS.'"
          :link-desc="'Win 7+  245.8 MB'">
          <Button
            slot="link"
            :type="'a'"
            :variation="'action'"
            :size="'standard'"
            :href="'#'"
            :title="'Download'"
            :icon="'overview'">
          </Button>
        </banner-marketing>

        <table class="docs-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Required</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dayBg</td>
              <td>string</td>
              <td>true</td>
              <td>null</td>
              <td>Background image that will display in day mode.</td>
            </tr>
            <tr>
              <td>nightBg</td>
              <td>string</td>
              <td>true</td>
              <td>null</td>
              <td>Background image that will display in night mode.</td>
            </tr>
            <tr>
              <td>label</td>
              <td>string</td>
              <td>true</td>
              <td>null</td>
              <td>Label text in the upper left of the banner.</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>string</td>
              <td>true</td>
              <td>null</td>
              <td>Icon next to title. Use icon name from icon list.</td>
            </tr>
            <tr>
              <td>title</td>
              <td>string</td>
              <td>true</td>
              <td>null</td>
              <td>Main banner title.</td>
            </tr>
            <tr>
              <td>desc</td>
              <td>string</td>
              <td>true</td>
              <td>null</td>
              <td>Description text below banner title.</td>
            </tr>
            <tr>
              <td>linkDesc</td>
              <td>string</td>
              <td>false</td>
              <td>null</td>
              <td>Description text below link.</td>
            </tr>
            <tr>
              <td>bannerClosed</td>
              <td>boolean</td>
              <td>false</td>
              <td>false</td>
              <td>Default state once the banner is.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div slot="sale">
        <h2>Sale Banner</h2>
        <Accordion
          :openedTitle="'Hide Code'"
          :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;banner-sale
  :title=&quot;'Flash Sale! 25% off everything!'&quot;
  :desc=&quot;'All items are automatically discounted.'&quot;
  :days=&quot;'00'&quot;
  :hours=&quot;'12'&quot;
  :minutes=&quot;'34'&quot;
  :seconds=&quot;'56'&quot;
  :time-desc=&quot;'Until flash sale ends. Hurry!'&quot;&gt;
&lt;/banner-sale&gt;</code></pre>
          </div>
        </Accordion>

        <banner-sale
          :title="'Flash Sale! 25% off everything!'"
          :desc="'All items are automatically discounted.'"
          :days="'00'"
          :hours="'00'"
          :minutes="'00'"
          :seconds="secs"
          :time-desc="'Until flash sale ends. Hurry!'">
        </banner-sale>

        <table class="docs-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Required</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>title</td>
              <td>string</td>
              <td>true</td>
              <td>null</td>
              <td>Banner main title.</td>
            </tr>
            <tr>
              <td>desc</td>
              <td>string</td>
              <td>true</td>
              <td>null</td>
              <td>Banner description text below main title.</td>
            </tr>
            <tr>
              <td>days</td>
              <td>string</td>
              <td>true</td>
              <td>"00"</td>
              <td>Days remaining value for countdown timer</td>
            </tr>
            <tr>
              <td>hours</td>
              <td>string</td>
              <td>true</td>
              <td>"00"</td>
              <td>Hours remaining value for countdown timer</td>
            </tr>
            <tr>
              <td>minutes</td>
              <td>string</td>
              <td>true</td>
              <td>"00"</td>
              <td>Minutes remaining value for countdown timer</td>
            </tr>
            <tr>
              <td>seconds</td>
              <td>string</td>
              <td>true</td>
              <td>"00"</td>
              <td>Seconds remaining value for countdown timer</td>
            </tr>
            <tr>
              <td>timeDesc</td>
              <td>string</td>
              <td>false</td>
              <td>null</td>
              <td>Description text below countdown timer.</td>
            </tr>
            <tr>
              <td>borderColor</td>
              <td>string</td>
              <td>false</td>
              <td>"rgba(248, 86, 64, 0.33)"</td>
              <td>Banner border color.</td>
            </tr>
            <tr>
              <td>backgroundColor</td>
              <td>boolean</td>
              <td>false</td>
              <td>"rgba(248, 86, 64, 0.08)"</td>
              <td>Banner background color.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import BannerMarketing from "./../components/BannerMarketing.vue";
import BannerSale from "./../components/BannerSale.vue";
import Button from "./../components/Button.vue";
import Tabs from "./../components/Tabs.vue";

@Component({
  components: {
    Accordion,
    BannerMarketing,
    BannerSale,
    Button,
    Tabs
  }
})
export default class Banners extends Vue {
  tabs = [
    {
      name: "Marketing",
      value: "marketing"
    },
    {
      name: "Sale",
      value: "sale"
    }
  ];

  selectedTab = "marketing";
  remainingSecs = 10;

  mounted() {
    setInterval(() => {
      this.remainingSecs--;
      if (this.remainingSecs < 0) {
        this.remainingSecs = 10;
      }
    }, 1000);
  }

  onSelectTabHandler(tab: string) {
    this.selectedTab = tab;
  }

  get secs() {
    return this.remainingSecs < 10
      ? `0${this.remainingSecs}`
      : `${this.remainingSecs}`;
  }
}
</script>
