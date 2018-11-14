<template>
  <div>
    <h2>Tabs</h2>
    <h3>Standard</h3>
    <Accordion
      :openedTitle="'Hide Code'"
      :closedTitle="'Show Code'">
      <div slot="content">
        <pre>
<code></code></pre>
      </div>
    </Accordion>

    <banner-marketing
      :day-bg="'https://picsum.photos/1920/300/?random'"
      :night-bg="'https://picsum.photos/1920/300/?random'"
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
        :href="'https://streamlabs.com/slobs/download?s=33'"
        :title="'Download'"
        :icon="'overview'">
      </Button>
    </banner-marketing>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Accordion from "./../components/Accordion.vue";
import BannerMarketing from "./../components/BannerMarketing.vue";
import Button from "./../components/Button.vue";

@Component({
  components: {
    Accordion,
    BannerMarketing,
    Button
  }
})
export default class TabsDemo extends Vue {}
</script>