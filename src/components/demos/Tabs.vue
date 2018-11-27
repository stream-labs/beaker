<template>
  <div>
    <Tabs
      :tabs="tabs"
      :value="selectedTab"
      @input="onSelectTabHandler">
      <div slot="general">
        General slot content
      </div>
      <div slot="advanced">
        Advanced slot content
      </div>
      <div slot="extra">
        Extra slot content
      </div>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Tabs from "./../Tabs.vue";

@Component({
  components: {
    Tabs
  }
})
export default class TabsDemo extends Vue {
  tabs = [
    {
      name: "General",
      value: "general"
    },
    {
      name: "Advanced",
      value: "advanced"
    },
    {
      name: "Extra",
      value: "extra"
    }
  ];

  selectedTab = "general";

  onSelectTabHandler(tab: string) {
    this.selectedTab = tab;
  }
}
</script>
