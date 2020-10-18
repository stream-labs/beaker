<template>
  <div class="s-tabs-wrapper">
    <div class="s-tabs-nav-wrapper">
      <div
        class="s-tabs-nav"
        :class="className"
      >
        <div
          v-if="hasPrev"
          class="s-tabs-nav__control s-has-prev"
          @click="scrollLeft"
        >
          <i class="icon-back" />
        </div>

        <div
          ref="scrollableTabs"
          class="s-tabs"
          :class="{
            's-has-next': hasNext,
            's-has-prev': hasPrev
          }"
          @scroll="calculateScrolls"
        >
          <div
            v-for="tab in tabs"
            :key="tab.value"
            class="s-tab"
            :class="{ 'is-active': tab.value === selectedTab }"
            :style="selectTabSize"
            @click="showTab(tab.value)"
          >
            <router-link
              v-if="updateRoute"
              :to="`#/${tab.value}`"
              class="s-tab-link"
            >
              <i
                v-if="tab.icon"
                :class="`icon-${tab.icon}`"
              />
              {{ tab.name }}
            </router-link>
            <div
              v-else
              class="s-tab-link"
            >
              <i
                v-if="tab.icon"
                :class="`icon-${tab.icon}`"
              />
              {{ tab.name }}
            </div>
          </div>
        </div>

        <div
          v-if="hasNext"
          class="s-tabs-nav__control s-has-next"
          @click="scrollRight"
        >
          <i class="icon-back" />
        </div>
      </div>
    </div>

    <div
      v-if="!hideContent"
      class="s-tab-content"
    >
      <div
        v-for="(tab, index) in tabs"
        v-show="tab.value === selectedTab"
        :key="index"
      >
        <slot :name="tab.value" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, nextTick, onMounted, onUnmounted, PropType, ref, watch,
} from 'vue';

interface ITab {
  name: string;
  value: string;
  icon: string;
}

export default defineComponent({
  props: {
    tabs: {
      type: Array as PropType<ITab[]>,
      required: true,
    },

    size: {
      type: String,
    },

    selected: {
      type: String,
    },

    className: {
      type: String,
    },

    hideContent: {
      type: Boolean,
    },

    updateRoute: {
      type: Boolean,
      default: true,
    },
  },

  setup(props, { emit }) {
    let isMounted = false;
    // let canScroll = false;
    const scrollableTabs = ref<HTMLDivElement | null>(null);
    const hasNext = ref(false);
    const hasPrev = ref(false);
    const scrollIncrement = 100;
    const selectedTab = ref('');
    const tabSize = computed(() => (props.size === 'large' ? '16px' : '14px'));

    const selectTabSize = ref({
      fontSize: tabSize.value,
    });

    function scrollLeft() {
      if (scrollableTabs.value) {
        scrollableTabs.value.scrollLeft -= scrollIncrement;
      }
    }

    function scrollRight() {
      if (scrollableTabs.value) {
        scrollableTabs.value.scrollLeft += scrollIncrement;
      }
    }

    function calculateScrolls() {
      if (isMounted && scrollableTabs.value) {
        // canScroll = scrollableTabs.value.scrollWidth > scrollableTabs.value.clientWidth;
        hasPrev.value = scrollableTabs.value.scrollLeft > 0;
        const availableRightScroll = scrollableTabs.value.scrollWidth
          - (scrollableTabs.value.scrollLeft + scrollableTabs.value.clientWidth);
        hasNext.value = availableRightScroll > 0;
      }
    }

    function showTab(tab: string) {
      selectedTab.value = tab;
      emit('tab-selected', tab);
    }

    watch(props.tabs, () => {
      nextTick(() => calculateScrolls());
    }, { deep: true });

    window.addEventListener('resize', calculateScrolls);

    onUnmounted(() => {
      window.removeEventListener('resize', calculateScrolls);
    });

    onMounted(() => {
      isMounted = true;
      // this.tabsContainer = this.$refs.scrollableTabs;
      calculateScrolls();
      if (props.selected) {
        selectedTab.value = props.selected;
      } else if (props.tabs) {
        selectedTab.value = props.tabs[0].value;
      }
    });

    return {
      hasNext,
      hasPrev,
      selectedTab,
      selectTabSize,
      scrollLeft,
      scrollRight,
      calculateScrolls,
      showTab,
    };
  },
});
</script>

<style lang="less" scoped>
@import (reference) "./../styles/Imports";

a {
  text-decoration: none;
}

.s-tabs-wrapper {
  height: 100%;
}

.s-tabs-nav-wrapper {
  position: relative;
  height: 34px;
}

.s-tabs-nav {
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  background: transparent;
  box-sizing: border-box;
  position: relative;
  max-width: none;
  background: transparent;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.s-tabs-nav__control {
  height: calc(~"2 * " @spacing);
  display: flex;
  align-items: flex-end;
  .margin-bottom(2);
  position: relative;

  &.s-has-next,
  &.s-has-prev {
    &:before {
      content: "";
      width: 40px;
      height: 16px;
      position: absolute;
    }
  }

  &.s-has-next {
    .icon-back {
      transform: rotate(180deg);
    }

    &:before {
      right: 16px;
      background: -moz-linear-gradient(
        left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        left,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }
  }

  &.s-has-prev {
    &:before {
      left: 16px;
      background: -moz-linear-gradient(
        left,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        left,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }
  }
}

.s-tabs {
  display: inline-block;
  overflow-x: hidden;
  white-space: nowrap;
  overflow-y: hidden;
  width: 100%;

  &.s-has-prev {
    .margin-left(2);
  }

  &.s-has-next {
    .margin-right(2);
  }

  &:before {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: @day-border;
  }
}

.s-tab {
  color: @day-paragraph;
  border-bottom: 2px solid transparent;
  .margin-right(2.5);
  cursor: pointer;
  display: inline-block;
  position: relative;
  .transition();
  .weight(@medium);

  &.is-active {
    border-color: @dark-2;
    .s-tab-link {
      color: @day-title;
    }
  }

  i {
    .margin-right();
  }
}

.s-tab-link {
  .padding-bottom(1.375);
  display: flex;
  text-decoration: none;
}

.s-tab-content {
  position: relative;
  overflow-y: auto;
  .padding-v-sides(3);
}

.night,
.night-theme {
  .s-tabs {
    &:before {
      background-color: @night-border;
    }
  }

  .s-tab {
    color: @night-paragraph;
    &.is-active {
      border-color: @light-1;
      .s-tab-link {
        color: @night-title;
      }
    }
  }

  .s-tabs-nav__control {
    &.s-has-next {
      &:before {
        background: -moz-linear-gradient(
          left,
          rgba(23, 36, 45, 0) 0%,
          rgba(23, 36, 45, 1) 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
          left,
          rgba(23, 36, 45, 0) 0%,
          rgba(23, 36, 45, 1) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
          to right,
          rgba(23, 36, 45, 0) 0%,
          rgba(23, 36, 45, 1) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      }
    }

    &.s-has-prev {
      &:before {
        background: -moz-linear-gradient(
          left,
          rgba(23, 36, 45, 1) 0%,
          rgba(23, 36, 45, 0) 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
          left,
          rgba(23, 36, 45, 1) 0%,
          rgba(23, 36, 45, 0) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
          to right,
          rgba(23, 36, 45, 1) 0%,
          rgba(23, 36, 45, 0) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      }
    }
  }
}
</style>
