<template>
  <modal
    :name="name"
    :classes="'s-modal-wrapper'"
    :max-width="width"
    :min-width="minWidth"
    height="auto"
    :adaptive="true"
    v-bind="$attrs"
  >
    <div class="s-modal-container">
      <div class="s-confirmation">
        <h2 class="s-modal-sub-title">
          {{ subTitle }}
        </h2>
        <p class="s-modal-text">
          {{ text }}
        </p>
        <div class="s-button-container">
          <Button
            :variation="'default'"
            :title="'Cancel'"
            :size="'fixed-width'"
            @click="$modal.hide(name)"
          />
          <Button
            :variation="buttonVariation"
            :title="confirmButtonText"
            :size="'fixed-width'"
            @click="onConfirmHandler"
          />
        </div>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './Button.vue';

export default defineComponent({
  components: {
    Button,
  },

  props: {
    name: {
      type: String,
      default: 'modal-confirmation',
    },

    width: {
      type: Number,
      default: 600,
    },

    minWidth: {
      type: Number,
      default: 600,
    },

    subTitle: { type: String },

    text: { type: String },

    confirmButtonText: {
      type: String,
      default: 'Confirm',
    },

    buttonVariation: {
      type: String,
      default: 'warning',
    },
  },

  setup(props, { emit }) {
    function onConfirmHandler() {
      emit('confirm');

      /* ******** Need custom Vue 3 Modal ******** */
      // this.$modal.hide(props.name);
    }

    return {
      onConfirmHandler,
    };
  },

});
</script>

<style lang="less" scoped>
@import (reference) "./../styles/Imports";
@import "./../styles/components/Modals";

.s-modal-container {
  .padding(3);
}

.s-confirmation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.s-button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .s-button {
    &:first-child {
      margin-left: 0;
    }
  }
}

.s-modal-sub-title {
  .margin-bottom(0);
}

.s-modal-text {
  text-align: center;
  .margin-top(2);
  .margin-bottom(2);
}

.s-modal-default-button {
  float: right;
}
</style>
