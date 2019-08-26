<template>
  <div class="prime-section">
    <empty-section
      :variation="'prime'"
      :titleSlot="true"
      :subtitle="subtitle"
      :hasLink="true"
    >
      <div slot="title">
        <Badge :align-left="true" :variant="'prime-alt'"></Badge>Feature
      </div>
      <div slot="link">
        <Button
          @click="$emit('click')"
          :tag="'a'"
          :variation="'link'"
          :href="href"
          :title="'Try Prime Now'"
        ></Button>
      </div>
    </empty-section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Badge from "./Badge.vue";
import Button from "./Button.vue";
import EmptySection from "./EmptySection.vue";

@Component({
  components: {
    Badge,
    Button,
    EmptySection
  }
})
export default class PrimeSection extends Vue {
  @Prop({})
  subtitle!: string;

  @Prop({})
  href!: string;

  @Prop()
  onClick!: {
    type: Function;
  };
}
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.prime-section {
  background: rgba(255, 255, 255, 0.88);
  .padding(3);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;

  .s-empty-section {
    .padding(@0);
  }

  .s-badge--prime-alt {
    margin-right: 5px;
    vertical-align: baseline;
  }
}

.night,
.night-theme {
  .prime-section {
    background: rgba(23, 36, 45, 0.88);
  }
}
</style>
