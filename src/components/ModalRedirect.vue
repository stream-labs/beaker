<template>
  <modal
    :name="name"
    :classes="'s-modal-wrapper'"
    :max-width="width"
    :min-width="minWidth"
    height="auto"
    :adaptive="true"
    v-on="$listeners"
  >
    <div class="s-modal-container">
      <div class="s-redirect">
        <div class="s-spinner">
          <Spinner :variation="'bars'" />
        </div>
        <h1 class="s-modal-title">
          {{ title }}
        </h1>
        <p class="s-modal-text">
          {{ text }}
        </p>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { defineComponent } from 'vue';
import Button from './Button.vue';
import Spinner from './Spinner.vue';

@Component({
  components: {
    Button,
    Spinner,
  },
})
export default defineComponent({
  @Prop()
  name!: string;

  @Prop({ default: 600 })
  width!: number;

  @Prop({ default: 600 })
  minWidth!: number;

  @Prop()
  title!: string;

  @Prop()
  text!: string;
})
</script>

<style lang="less" scoped>
@import (reference) "./../styles/Imports";
@import "./../styles/components/Modals";

.s-redirect {
  text-align: center;
  .padding(3);
}

.s-modal-text {
  .padding-h-sides(8);
}

.s-spinner {
  .padding-bottom(1.8);
}
</style>
