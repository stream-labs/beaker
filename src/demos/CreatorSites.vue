<template>
  <div>
    <div class="section">
      <h1>Creator Sites Components</h1>

      <pre><code>import { SSProSimulator, UrlBar } from 'streamlabs-beaker';

components: {
  SSProSimulator,
  UrlBar
}</code></pre>
      <div class="section">
        <SSProSimulator :username="username" :domain="domain"></SSProSimulator>
        <br />
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
              <td>domain</td>
              <td>string</td>
              <td>-</td>
              <td>Domain name for the Url Bar.</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>string</td>
              <td>
                "https://live.kickstarter.com/images/avatar/medium/avatars4.png"
              </td>
              <td>Set this to users platform icon.</td>
            </tr>
            <tr>
              <td>username</td>
              <td>string</td>
              <td>"Awkward_Raccoon"</td>
              <td>Set this to users platform username.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <div class="section">
        <UrlBar :domain="domain"></UrlBar>
        <br />
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
              <td>domain</td>
              <td>string</td>
              <td>-</td>
              <td>Domain name for the Url Bar.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />

      <div class="section">
        <Accordion :openedTitle="'Hide Code'" :closedTitle="'Show Code'">
          <div slot="content">
            <pre>
<code>&lt;CSLayoutPicker :layouts=&quot;webLayouts&quot;&gt;
  &lt;div
    slot=&quot;layouts&quot;
    v-for=&quot;layout in webLayouts&quot;
    :key=&quot;layout.id&quot;
    class=&quot;s-cs-layout-picker__layout&quot;
  &gt;
    &lt;img :src=&quot;layout.src&quot;&gt;
  &lt;/div&gt;
&lt;/CSLayoutPicker&gt;</code></pre>
          </div>
        </Accordion>

        <CSLayoutPicker>
          <div
            slot="layouts"
            v-for="layout in webLayouts"
            :key="layout.id"
            class="s-cs-layout-picker__layout"
          >
            <div>
              <img :src="layout.src" />
            </div>
          </div>
        </CSLayoutPicker>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Accordion from "./../components/Accordion.vue";
import SSProSimulator from "./../components/SSProSimulator.vue";
import UrlBar from "./../components/UrlBar.vue";
import CSLayoutPicker from "./../components/CSLayoutPicker.vue";

@Component({
  components: {
    Accordion,
    SSProSimulator,
    UrlBar,
    CSLayoutPicker
  }
})
export default class CreatorSitesDemo extends Vue {
  username = "morganleee";
  icon =
    "https://static-cdn.jtvnw.net/jtv_user_pictures/9dfce03d-25cc-4737-96d2-2ecf6924bebe-profile_image-70x70.jpg";

  domain = "morganleeeeeeeeeee.com";

  webLayouts = [
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    },
    {
      src:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Aspect-ratio-16x9.svg/1280px-Aspect-ratio-16x9.svg.png"
    }
  ];
}
</script>

<style lang="less" scoped>
.s-cs-layout-picker__layouts-bar {
  .s-cs-layout-picker__layout:last-child {
    &:before {
      display: none;
    }
  }
}

.s-cs-layout-picker__layout {
  position: relative;

  &:before {
    content: "";
    height: 32px;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.08);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: -16px;
  }
}

.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
