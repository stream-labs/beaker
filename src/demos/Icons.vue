<template>
  <div class="icons">
    <div class="section">
      <h1>Icons</h1>

      <p>
        In order to gain access to the icons add the following link tag to your
        main HTML file:
        <code>
          &lt;link href=&quot;https://cdn.streamlabs.com/icons/style.css&quot;
          rel=&quot;stylesheet&quot; /&gt;
        </code>
      </p>

      <p>
        Click on an icon to copy the icon class name to the clipboard. Hover
        over an icon to display the full icon name and icon code.
      </p>
    </div>

    <div
      v-if="Object.keys(iconList).length"
      class="icon__grid"
      v-clipboard:copy="selectedIcon"
      v-clipboard:success="emitCopySuccess"
      v-clipboard:error="emitCopyError"
    >
      <div
        v-for="icon in Object.keys(iconList).sort()"
        :key="icon"
        class="icon"
        :title="`${icon} | ${iconList[icon]}`"
        @click="selectIconData(`${icon}`)"
      >
        <i class="icon__glyph" :class="icon">
          <i class="icon-copy"></i>
        </i>
        <span class="icon__label">{{ icon }}</span>
      </div>
    </div>

    <h1 class="icon__error" v-else>
      <i class="icon-error"/>
      There was an error loading the icons</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus } from "./../plugins/event-bus";
const ICON_STYLESHEET_URL = 'https://cdn.streamlabs.com/icons/style.css';

@Component({})
export default class Icons extends Vue {
  iconStylesheet = '';
  selectedIcon = '';

  get iconList() {
    if (this.iconStylesheet.length) {
      /**
       * Remove all access stylesheet code in order to extract icon name and entity code.
       * Example of string in iconStrList: 'icon-information: e94d'
       **/
      let iconStrList = this.iconStylesheet
        .replace(/@font-face\s\{\n([a-z0-9-\/?'.\s()#:;,]*\n)*}\n\n/g, '') // Remove @font-face rules
        .replace(/(\[class.*)\n([a-zA-Z0-9-\/?'.\s()#:;,=*!]*\n)*}\n\n/g, '') // Remove class attr rules
        .replace(/\./g, '')
        .replace(/before {\n\s+content:/g, '')
        .replace(/;\n}/g, '')
        .replace(/[\"\\]/g, '')
        .split('\n');

      iconStrList = iconStrList.slice(0, iconStrList.length - 1);

      if (iconStrList.length) {
        return iconStrList.reduce((acc, icon) => {
          const iconMatch = icon.match(/([a-z0-9-]*)/g);

          if (iconMatch) acc[iconMatch[0]] = iconMatch[3];
          return acc;
        }, {});
      }
    }

    return {};
  }

  async mounted() {
    // Get icon stylesheet code from cdn
    const cssResponse = await fetch(ICON_STYLESHEET_URL);
    this.iconStylesheet = await cssResponse.text() || '';
  }

  selectIconData(icon) {
    this.selectedIcon = icon;
  }

  emitCopySuccess(e) {
    EventBus.$emit("copy-success", `Copied "${e.text}" to clipboard`);
  }

  emitCopyError(e) {
    EventBus.$emit("copy-copy", e);
  }
}
</script>

<style lang="less" scoped>
@import (reference) "./../styles/Imports";

.icons {
  position: relative;
  max-width: 1200px;
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    grid-column-gap: 24px;
    grid-row-gap: 48px;
    color: @icon;
  }

  &__glyph {
    position: relative;
    .margin-bottom();
    font-size: 32px;
    color: @dark-2;

    .icon-copy {
      position: absolute;
      top: -18px;
      right: -18px;
      font-size: 14px;
      opacity: 0;
      transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__label {
    width: 100%;
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: @light-5;
    overflow: hidden;
  }

  &:hover {
    .icon__glyph {
      .icon-copy {
        opacity: 1;
      }
    }
  }

  &__liga {
    font-size: 10px;
  }

  &__error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30vh;

    & > i {
      font-size: 80px;
      margin-bottom: 24px;
    }
  }
}

.night,
.night-theme {
  .icon {
    &__glyph {
      color: @white;
    }

    &__label {
      color: @light-4;
    }

    &__liga {
      color: @dark-5;
    }
  }
}
</style>
