<template>
  <div class="s-media-picker" ref="mediaPicker">
    <div class="s-media-picker__input-wrapper">
      <div class="s-media-picker__thumb">
        <transition name="fade" mode="out-in">
          <i
            v-if="!media.selected"
            key="thumb-upload"
            class="icon-upload-image"
          ></i>
          <i
            v-if="media.selected && variation === 'audio'"
            key="thumb-audio"
            class="icon-music"
          >
            <audio
              key="thumb-audio"
              :src="media.url"
              @error="setBrokenMedia"
            ></audio>
          </i>
          <img
            v-if="media.selected && variation === 'image'"
            key="thumb-image"
            :src="media.url"
            @error="setBrokenMedia"
          />
        </transition>
        <transition
          name="custom-classes-transition"
          leave-active-class="fade-slow-leave-active"
          mode="out-in"
        >
          <div
            v-if="media.selected && mediaBroken"
            class="s-media-picker__broken-image"
          ></div>
        </transition>
      </div>

      <div class="s-media-picker__filename">
        <transition mode="out-in" name="fade">
          <div v-if="value" key="media-selected" class="s-media-picker__text">
            {{ media.fileName }}
          </div>
          <div
            v-if="!value"
            key="media-not-selected"
            class="s-media-picker__text-placeholder"
          >
            {{ mediaInputPlaceholder }}
          </div>
        </transition>

        <div v-if="!mediaPickerSmall" class="s-media-picker__controls">
          <a
            v-if="mediaLink"
            class="s-media-picker__link-icon"
            @click.stop="$emit('link-media')"
            ><i class="icon-link"></i>
          </a>

          <transition mode="out-in" name="fade">
            <a
              v-if="variation === 'image' && media.selected && !mediaBroken"
              key="media-selected-play"
              class="s-media-picker__zoom-icon"
              @click.stop="$emit('zoom-media')"
              ><i class="icon-zoom"></i>
            </a>

            <a
              v-if="variation === 'audio' && media.selected && !mediaBroken"
              key="media-selected-zoom"
              class="s-media-picker__play-icon"
              @click.stop="$emit('play-media')"
              ><i class="icon-media-share-2"></i>
            </a>
          </transition>

          <transition mode="out-in" name="fade">
            <a
              v-if="media.selected"
              class="s-media-picker__small-remove"
              @click.stop="removeMedia"
              ><i class="icon-close"></i>
            </a>
          </transition>
        </div>

        <div
          v-if="mediaPickerSmall"
          @mouseenter="showMediaControls = true"
          @mouseleave="showMediaControls = false"
          class="s-media-picker__controls s-media-picker__controls--small"
        >
          <i v-if="!showMediaControls" class="icon-more"></i>

          <div v-if="showMediaControls" class="s-media-picker__controls-group">
            <a
              v-if="mediaLink"
              class="s-media-picker__link-icon"
              @click.stop="$emit('link-media')"
              ><i class="icon-link"></i>
            </a>

            <transition mode="out-in" name="fade">
              <a
                v-if="variation === 'image' && media.selected && !mediaBroken"
                key="media-selected-play"
                class="s-media-picker__zoom-icon"
                @click.stop="$emit('zoom-media')"
                ><i class="icon-zoom"></i>
              </a>

              <a
                v-if="variation === 'audio' && media.selected && !mediaBroken"
                key="media-selected-zoom"
                class="s-media-picker__play-icon"
                @click.stop="$emit('play-media')"
                ><i class="icon-media-share-2"></i>
              </a>
            </transition>

            <transition mode="out-in" name="fade">
              <a
                v-if="media.selected"
                class="s-media-picker__small-remove"
                @click.stop="removeMedia"
                ><i class="icon-close"></i>
              </a>
            </transition>

            <a
              v-if="mediaPickerSmall"
              class="s-media-picker__small-remove"
              @click.stop="selectMedia"
              ><i class="icon-add"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!mediaPickerSmall" class="s-button-container">
      <Button
        variation="default"
        :title="buttonTitle"
        @click="$emit('select-media')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Prop, Vue, Emit } from "vue-property-decorator";
import ResizeObserver from "resize-observer-polyfill";
import Button from "./../components/Button.vue";

@Component({
  components: {
    Button
  }
})
export default class MediaPicker extends Vue {
  $refs!: {
    mediaPicker: HTMLElement;
  };

  @Prop()
  variation!: string;

  @Prop({ default: false })
  mediaLink!: boolean;

  @Prop()
  value!: string;

  mediaPickerSmall = false;
  mediaBroken = false;
  showMediaControls = false;

  get mediaInputPlaceholder() {
    return this.variation === "audio"
      ? `example-audio.mp3`
      : `example-image.jpg`;
  }

  get buttonTitle() {
    return this.variation ? `Select ${this.variation}` : "Select Media";
  }

  get media() {
    return {
      selected: this.value ? true : false,
      fileName: this.value ? this.value.split("/").pop() : "",
      url: this.value
    };
  }

  @Watch("value")
  watchValue() {
    this.setBrokenMedia(null);
  }

  mounted() {
    const ro = new ResizeObserver((entries, observer) => {
      for (const entry of entries) {
        const { left, top, width, height } = entry.contentRect;
        this.mediaPickerSmall = width < 500 ? true : false;
      }
    });

    ro.observe(this.$refs.mediaPicker);
  }

  setBrokenMedia(event) {
    this.mediaBroken = event ? true : false;
  }

  selectMedia() {
    this.$emit("select-media");
  }

  removeMedia() {
    this.$emit("remove-media");
  }
}
</script>

<style lang="less">
@import (reference) "./../styles/Imports";

.s-media-picker {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__input-wrapper {
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 40px;
    .radius();
    overflow: hidden;
  }

  &__thumb {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    min-width: 40px;
    height: 40px;
    background-color: @dark-2;
    color: @white;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  &__broken-image {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: @dark-2;

    &::after {
      content: "\e94c";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: "Icomoon";
      color: @white;
    }
  }

  &__filename {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    min-width: 0;
    height: 100%;
    padding: 0 12px;
    background-color: @light-2;
  }

  &__text,
  &__text-placeholder {
    min-width: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: @dark-2;
    overflow: hidden;
    cursor: default;
  }

  &__text-placeholder,
  &__small-remove {
    color: @dark-5;
  }

  &__controls {
    display: flex;
    align-items: center;
    .margin-left(1.5);

    a {
      display: inline-flex;
      align-items: center;
      .margin-right(1.5);
      text-decoration: none;
      cursor: pointer;

      &:last-child {
        .margin-right(0);
      }
    }

    &--small {
      height: 40px;
    }

    &-group {
      display: flex;
      align-items: center;
      height: 40px;
    }

    .icon-more {
      transform: rotate(90deg);
      cursor: pointer;
    }
  }

  .s-button {
    text-transform: capitalize;
  }

  .fade-enter-active {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 1;
  }

  .fade-leave-active {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  .fade-enter {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  .fade-leave-to {
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  .fade-slow-leave-active {
    transition: all 0.375s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  .fade-fast-enter-active {
    transition: all 0.125s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 1;
  }

  .fade-fast-leave-active {
    transition: all 0.125s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  .fade-fast-enter {
    transition: all 0.125s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  .fade-fast-leave-to {
    transition: all 0.125s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }
}

.night,
.night-theme {
  .s-media-picker {
    &__filename {
      background-color: @night-solid-input;
      color: @night-paragraph;

      input[type="text"],
      input[type="text"]:focus {
        border-color: transparent;
      }
    }

    &__text {
      color: @white;
    }

    &__text-placeholder,
    &__small-remove {
      color: @light-4;
    }
  }
}
</style>
