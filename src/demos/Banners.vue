<template>
  <div>
    <h1>Banners</h1>
    <Tabs :tabs="tabs" :value="selectedTab" @input="onSelectTabHandler">
      <div slot="marketing">
        <h2>Marketing Banner</h2>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
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
          :bg-image="'https://cdn.streamlabs.com/static/imgs/pretzel_dashboard_banner_bg.png'"
          :bg-image-night="'http://cdn.backgroundhost.com/backgrounds/subtlepatterns/cartographer.png'"
          :icon-name="'themes'"
          :label="'Introducing Streamlabs OBS'"
          :title="'Largest library of free themes in the world.'"
          :desc="'To access over 700+ themes for free, download Streamlabs OBS.'"
          :link-desc="'Win 7+  245.8 MB'"
        >
          <Button
            slot="link"
            :type="'a'"
            :variation="'action'"
            :size="'standard'"
            :href="'#'"
            :title="'Download'"
            :icon="'overview'"
          ></Button>
        </banner-marketing>

        <banner-marketing
          :bg-image="'https://cdn.streamlabs.com/static/imgs/pretzel_dashboard_banner_bg.png'"
          :icon-image="require('../assets/imgs/pretzel-icon.png')"
          :label="'New Streamlabs OBS App'"
          :title="'Introducing Pretzel Rocks Music Player'"
          :desc="'Stream-safe music for broadcasters with an ever-growing catalog of music. Currently 5k+ tracks.'"
          :link-desc="'$4.99/mo'"
        >
          <Button
            slot="link"
            :type="'a'"
            :variation="'action'"
            :size="'standard'"
            :href="'#'"
            :title="'Try It Now'"
          ></Button>
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
              <td>bgImage</td>
              <td>string</td>
              <td>true</td>
              <td>null</td>
              <td>Background image that will display in day mode.</td>
            </tr>
            <tr>
              <td>bgImageNight</td>
              <td>string</td>
              <td>false</td>
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
              <td>iconImage</td>
              <td>string</td>
              <td>false</td>
              <td>null</td>
              <td>Icon image next to title. Use a url path. If using iconName - do not use iconImg. We will improve functionality in near future.</td>
            </tr>
            <tr>
              <td>iconName</td>
              <td>string</td>
              <td>false</td>
              <td>null</td>
              <td>Icon next to title. Use icon name from icon list. If using iconImg - do not use iconName. We will improve functionality in near future.</td>
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
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
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
          :time-desc="'Until flash sale ends. Hurry!'"
        ></banner-sale>

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

      <div slot="notice">
        <h2>Notice Banner</h2>
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;notice
  :bgColor=&quot;'default'&quot;
  :title=&quot;'Join affiliates and earn $1 for each Streamlabs OBS referral'&quot;
  :desc=&quot;'Share your unique referral link with friends and get paid directly into your PayPal each month.'&quot;
  :icon=&quot;'information'&quot;&gt;
  &lt;Button
    slot=&quot;button&quot;
    :type=&quot;'button'&quot;
    :size=&quot;'fixed-width'&quot;
    :variation=&quot;'action'&quot;
    :title=&quot;'Join'&quot;&gt;
  &lt;/Button&gt;
&lt;/notice&gt;</code></pre>
          </div>
        </Accordion>

        <notice
          :title="'Join affiliates and earn $1 for each Streamlabs OBS referral'"
          :desc="'Share your unique referral link with friends and get paid directly into your PayPal each month.'"
          :icon="'information'"
        >
          <Button
            slot="button"
            :type="'button'"
            :size="'fixed-width'"
            :variation="'action'"
            :title="'Join'"
          ></Button>
        </notice>

        <notice
          :bgColor="'warning'"
          :title="'Your donation link has expired'"
          :titleColor="'warning'"
          :desc="'Copy your new donation link and replace all instances containing twitchalerts.com.'"
          :icon="'error'"
        >
          <Button
            slot="button"
            :type="'button'"
            :size="'fixed-width'"
            :variation="'default'"
            :title="'Copy Link'"
          ></Button>
        </notice>

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
              <td>bgColor</td>
              <td>string</td>
              <td>true</td>
              <td>default</td>
              <td>Background color that will display. Options are "default" and "warning". if default It's already set as default props.</td>
            </tr>
            <tr>
              <td>title</td>
              <td>string</td>
              <td>true</td>
              <td>null</td>
              <td>Banner title</td>
            </tr>
            <tr>
              <td>titleColor</td>
              <td>string</td>
              <td>true</td>
              <td>null</td>
              <td>Banner title color</td>
            </tr>
            <tr>
              <td>desc</td>
              <td>string</td>
              <td>true</td>
              <td>null</td>
              <td>Description text below banner title</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>string</td>
              <td>true</td>
              <td>null</td>
              <td>Icon next to title. Use icon name from icon list.</td>
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
import Notice from "./../components/Notice.vue";

@Component({
  components: {
    Accordion,
    BannerMarketing,
    BannerSale,
    Button,
    Tabs,
    Notice
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
    },
    {
      name: "Notice",
      value: "notice"
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
