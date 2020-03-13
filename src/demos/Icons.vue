<template>
  <div class="icons">
    <div class="section">
      <h1>Icons</h1>

      <p>
        In order to gain access to the icons add the following link tag to your
        main HTML file:
        <code
          >&lt;link href=&quot;https://cdn.streamlabs.com/icons/style.css&quot;
          rel=&quot;stylesheet&quot; /&gt;</code
        >
        <br />Clicking on an icon copies the icon class name to the clipboard.
        Hovering over an icon will display the full icon name and icon code.
      </p>
    </div>

    <div
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
        @click="selectIconData(`.${icon}`)"
      >
        <i class="icon__glyph" :class="icon">
          <i class="icon-copy"></i>
        </i>
        <span class="icon__label">{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus } from "./../plugins/event-bus";

@Component({})
export default class Icons extends Vue {
  selectedIcon = "";
  iconList = {
    "icon-periscope": "e9ba",
    "icon-windows": "e9b9",
    "icon-back-alt": "e9a0",
    "icon-desktop": "e9a1",
    "icon-education": "e9a2",
    "icon-bold": "e9a3",
    "icon-four-columns-25-25-25-25": "e9a4",
    "icon-italic": "e9a5",
    "icon-menu": "e9a6",
    "icon-facebook": "e9a7",
    "icon-mixer": "e9a8",
    "icon-one-column": "e9a9",
    "icon-phone": "e9aa",
    "icon-picarto": "e9ab",
    "icon-strike": "e9ac",
    "icon-tablet": "e9ad",
    "icon-three-columns-25-25-50": "e9ae",
    "icon-three-columns-25-50-25": "e9af",
    "icon-three-columns-33-33-33": "e9b0",
    "icon-three-columns-50-25-25": "e9b1",
    "icon-two-columns-25-75": "e9b2",
    "icon-two-columns-33-66": "e9b3",
    "icon-two-columns-50-50": "e9b4",
    "icon-two-columns-66-33": "e9b5",
    "icon-two-columns-75-25": "e9b6",
    "icon-underline": "e9b7",
    "icon-youtube": "e9b8",
    "icon-translation": "e995",
    "icon-all-over": "e994",
    "icon-list-view": "e98f",
    "icon-smart-view-2": "e990",
    "icon-smart-view-3": "e991",
    "icon-smart-view-4": "e992",
    "icon-smart-view": "e993",
    "icon-developer": "e900",
    "icon-download": "e901",
    "icon-media-share-3": "e902",
    "icon-expand-1": "e903",
    "icon-media-share-2": "e904",
    "icon-prize": "e905",
    "icon-bag": "e906",
    "icon-pillow": "e907",
    "icon-editor": "e908",
    "icon-fit": "e909",
    "icon-phone-case": "e90a",
    "icon-cut-sew": "e90b",
    "icon-mug": "e90c",
    "icon-upperwear": "e90d",
    "icon-canvas": "e90e",
    "icon-framed-poster": "e90f",
    "icon-poster": "e910",
    "icon-cloud-backup-2": "e911",
    "icon-cloud-backup": "e912",
    "icon-cloud": "e913",
    "icon-check-mark": "e914",
    "icon-upload-image": "e915",
    "icon-studio-mode-4": "e916",
    "icon-studio-mode-2": "e917",
    "icon-studio-mode-3": "e918",
    "icon-studio-mode": "e919",
    "icon-dashboard": "e91a",
    "icon-discord": "e91b",
    "icon-badge": "e91c",
    "icon-camera-off": "e91d",
    "icon-camera": "e91e",
    "icon-pause": "e91f",
    "icon-skip": "e920",
    "icon-add-folder": "e921",
    "icon-store": "e922",
    "icon-image": "e923",
    "icon-group": "e924",
    "icon-treat": "e925",
    "icon-leaderboard-2": "e926",
    "icon-leaderboard-3": "e927",
    "icon-leaderboard": "e928",
    "icon-crop": "e929",
    "icon-move": "e92a",
    "icon-down": "e92b",
    "icon-back": "e92c",
    "icon-more": "e92d",
    "icon-donation-settings": "e92e",
    "icon-share": "e92f",
    "icon-link": "e930",
    "icon-trash": "e931",
    "icon-face-masks": "e932",
    "icon-reset": "e933",
    "icon-repeat": "e934",
    "icon-multistream": "e935",
    "icon-stop-recording": "e936",
    "icon-record": "e937",
    "icon-playing": "e938",
    "icon-music": "e939",
    "icon-jar": "e93a",
    "icon-webcam": "e93b",
    "icon-integrations": "e93c",
    "icon-guild": "e93d",
    "icon-pop-out-1": "e93e",
    "icon-pop-out-2": "e93f",
    "icon-expand": "e940",
    "icon-reduce-screen-alt": "e941",
    "icon-reduce-screen": "e942",
    "icon-full-screen-alt": "e943",
    "icon-resize-vertical": "e944",
    "icon-resize-horizontal": "e945",
    "icon-align-center-vertical": "e946",
    "icon-align-center-horizontal": "e947",
    "icon-resize": "e948",
    "icon-full-screen": "e949",
    "icon-pop-out-3": "e94a",
    "icon-earnings": "e94b",
    "icon-error": "e94c",
    "icon-information": "e94d",
    "icon-question": "e94e",
    "icon-text": "e94f",
    "icon-zoom": "e950",
    "icon-search": "e951",
    "icon-loyalty-1": "e952",
    "icon-add-circle": "e953",
    "icon-remove-circle": "e954",
    "icon-studio": "e955",
    "icon-close": "e956",
    "icon-add": "e957",
    "icon-subtract": "e958",
    "icon-stats": "e959",
    "icon-filter": "e95a",
    "icon-announcement": "e95b",
    "icon-notifications": "e95c",
    "icon-graph": "e95d",
    "icon-integrations-2": "e95e",
    "icon-platforms": "e95f",
    "icon-logout": "e960",
    "icon-transition": "e961",
    "icon-copy": "e962",
    "icon-balance": "e963",
    "icon-team-2": "e964",
    "icon-team": "e965",
    "icon-user": "e966",
    "icon-hide": "e967",
    "icon-view": "e968",
    "icon-cpu": "e969",
    "icon-hide-video": "e96a",
    "icon-mic": "e96b",
    "icon-mute-mic": "e96c",
    "icon-stream": "e96d",
    "icon-output": "e96e",
    "icon-mute": "e96f",
    "icon-audio": "e970",
    "icon-media-share": "e971",
    "icon-hotkeys": "e972",
    "icon-advanced": "e973",
    "icon-widgets": "e974",
    "icon-overview": "e975",
    "icon-wish-list": "e976",
    "icon-themes": "e977",
    "icon-settings": "e978",
    "icon-card-set": "e979",
    "icon-alert-box": "e97a",
    "icon-check": "e97b",
    "icon-stream-labels": "e97c",
    "icon-donation-ticker": "e97d",
    "icon-chat-box": "e97e",
    "icon-live-dashboard": "e97f",
    "icon-event-list": "e980",
    "icon-loyalty": "e981",
    "icon-edit": "e982",
    "icon-extra-life": "e983",
    "icon-community": "e984",
    "icon-suggestions": "e985",
    "icon-lock-2": "e986",
    "icon-unlock": "e987",
    "icon-lock": "e988",
    "icon-settings-3-1": "e989",
    "icon-time": "e98a",
    "icon-settings-3": "e98b",
    "icon-settings-2": "e98c",
    "icon-delete": "e98d",
    "icon-date": "e98e",
    "icon-dropdown": "e996",
    "icon-save": "e997",
    "icon-cart-2": "e998",
    "icon-cart": "e999",
    "icon-date-range": "e99a",
    "icon-leaderboard-4": "e99b",
    "icon-leaderboard-5": "e99c",
    "icon-unitpay": "e99d",
    "icon-skrill": "e99e",
    "icon-moustache": "e99f",
    "icon-kevin-night": "e9bb",
    "icon-kevin-day": "e9bc",
    "icon-cloudbot": "e9bd",
    "icon-empty": "e9be",
    "icon-face-masks-2": "e9bf",
    "icon-face-masks-3": "e9c0",
    "icon-ideas": "e9c1",
    "icon-creator-site": "e9c2"
  };

  selectIconData(icon) {
    this.selectedIcon = icon;
  }

  emitCopySuccess(e) {
    EventBus.$emit("copy-success", e);
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
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-column-gap: 24px;
    grid-row-gap: 48px;
    max-width: 1200px;
    color: @icon;
  }

  &__glyph {
    position: relative;
    .margin-bottom(0.5);
    font-size: 32px;
    color: @dark-2;

    .icon-copy {
      position: absolute;
      top: -18px;
      right: -18px;
      font-size: 14px;
      opacity: 0;
      transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &__label {
    width: 100%;
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &:hover {
    .icon__glyph {
      .icon-copy {
        opacity: 0.5;
      }
    }
  }

  &__liga {
    font-size: 10px;
  }
}

.night,
.night-theme {
  .icon {
    &__glyph {
      color: @white;
    }

    &__label {
      color: @light-5;
    }

    &__liga {
      color: @dark-5;
    }
  }
}
</style>
