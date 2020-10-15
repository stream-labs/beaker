<template>
  <div class="s-cs-layout-picker">
    <div
      @click="showChooseLayout"
      v-if="addLayout"
      class="s-cs-layout-picker__add-bar"
    >
      <i class="icon-add" />
    </div>
    <div
      v-if="chooseLayout"
      v-click-outside="showAddLayout"
      class="s-cs-layout-picker__layouts-bar"
    >
      <slot name="layouts" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ClickOutside from 'vue-click-outside';

export default defineComponent({
  directives: {
    ClickOutside,
  },

  setup() {
    const addLayout = ref(true);
    const chooseLayout = ref(false);

    function showChooseLayout() {
      chooseLayout.value = true;
      addLayout.value = false;
    }

    function showAddLayout() {
      chooseLayout.value = false;
      addLayout.value = true;
    }

    function closeChooseLayout() {
      chooseLayout.value = false;
      addLayout.value = true;
    }

    return {
      addLayout,
      chooseLayout,
      showChooseLayout,
      showAddLayout,
      closeChooseLayout,
    };
  },

});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-cs-layout-picker {
  overflow: hidden;
  display: grid;
  width: 100%;
  align-content: flex-start;

  * {
    min-width: 0;
  }
}

.s-cs-layout-picker__add-bar,
.s-cs-layout-picker__layouts-bar {
  background-color: rgba(255, 255, 255, 0.08);
  .padding();
  .radius();
}

.s-cs-layout-picker__add-bar {
  text-align: center;
  .transition();

  i {
    color: @icon;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.16);

    i {
      color: @night-paragraph;
    }
  }
}

.s-cs-layout-picker__layouts-bar {
  display: grid;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(88px, 1fr));
  align-content: flex-start;

  * {
    min-width: 0;
  }

  img {
    width: 100%;
  }
}
</style>
