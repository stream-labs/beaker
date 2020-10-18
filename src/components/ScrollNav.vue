<template>
  <div>
    <div class="s-apps-nav">
      <div
        v-if="hasPrev"
        class="s-apps-nav-control flex s-has-prev"
        @click="scrollLeft"
      >
        <i class="icon-down icon-left" />
        <span>...</span>
      </div>
      <div
        ref="scrollable_nav"
        class="s-apps-tab__container"
        :class="{
          's-has-next': hasNext,
          's-has-prev': hasPrev
        }"
        @scroll="calculateScrolls"
      >
        <span
          v-for="item in items"
          :key="item.value"
          class="s-app-tab"
          :class="{ 's-is-active': item.value === value }"
          @click="navigateItem(item.value)"
        >
          <span>{{ item.name }}</span>
        </span>
      </div>
      <div
        v-if="hasNext"
        class="s-apps-nav-control flex s-has-next"
        @click="scrollRight"
      >
        <span>...</span>
        <i class="icon-down icon-right" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, PropType, ref, onMounted, onUnmounted,
} from 'vue';

interface IScrollNavItem {
  name: string;
  value: string;
}

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<IScrollNavItem[]>,
      default: () => [],
    },

    value: {
      type: String,
      default: '',
    },
  },

  setup(props, { emit }) {
    const scrollableNav = ref<HTMLDivElement | null>(null);
    let isMounted = false;
    const hasNext = ref(false);
    const hasPrev = ref(false);
    const scrollIncrement = 100;

    function scrollLeft() {
      if (scrollableNav.value) {
        scrollableNav.value.scrollLeft -= scrollIncrement;
      }
    }

    function scrollRight() {
      if (scrollableNav.value) {
        scrollableNav.value.scrollLeft += scrollIncrement;
      }
    }

    function calculateScrolls() {
      if (scrollableNav.value && isMounted) {
        hasPrev.value = scrollableNav.value.scrollLeft > 0;
        const availableRightScroll = scrollableNav.value.scrollWidth
          - (scrollableNav.value.scrollLeft + scrollableNav.value.clientWidth);

        hasNext.value = availableRightScroll > 0;
      }
    }

    function navigateItem(item: string) {
      emit('input', item);
    }

    window.addEventListener('resize', calculateScrolls);

    onUnmounted(() => {
      window.removeEventListener('resize', calculateScrolls);
    });

    onMounted(() => {
      isMounted = true;
      calculateScrolls();
    });

    return {
      hasNext,
      hasPrev,
      scrollLeft,
      scrollRight,
      navigateItem,
      calculateScrolls,
    };
  },
});
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-apps-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  .padding-h-sides();
  position: relative;
  max-width: none;
  background-color: @day-section;
  border-bottom: 1px solid @day-border;
  flex: 0 0 35px;
  height: 35px;
  z-index: 1;
}

.s-apps-tab__container {
  display: inline-block;
  overflow-x: auto;
  white-space: nowrap;
  overflow-y: hidden;

  &.s-has-prev {
    .margin-left(2);
  }
  &.s-has-next {
    .margin-right(2);
  }
}

.s-apps-nav-control {
  cursor: pointer;

  &.s-has-prev {
    margin-left: 8px;
    i {
      margin-right: 5px;
    }
  }
  &.s-has-next {
    margin-right: 8px;
    i {
      margin-left: 5px;
    }
  }
}

.s-apps-tab__container::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

.s-app-tab {
  .padding();
  color: @day-paragraph;
  .weight(@medium);
  cursor: pointer;

  &.s-is-active {
    color: @day-title;
  }
}

.s-app-tab-icon {
  margin-left: 4px;
}

.night-theme {
  .s-apps-nav {
    background-color: @night-bg;
    border-color: @night-border;
  }
  .s-app-tab {
    color: @night-paragraph;

    &.s-is-active {
      color: @night-title;
    }
  }
}
</style>
