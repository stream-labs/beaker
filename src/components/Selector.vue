<template>
  <div class="s-selector">
    <multiselect
      :value="value"
      :options="options"
      :searchable="searchable"
      :multiple="multiple"
      :placeholder="placeholder"
      :disabled="disabled"
      :max-height="200"
      @input="val => emitInput(val)"
      :track-by="trackBy"
      :label="label"
      ><template v-if="label" slot="singleLabel" slot-scope="{ option }">{{
        option[label]
      }}</template>
    </multiselect>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Selector from "vue-multiselect";
Vue.component("multiselect", Selector);

export default {
  name: "Selector",
  extends: Selector,

  components: {
    Selector
  },

  created() {
    this.$on("input", this.setValue);
  },

  destroyed() {
    this.$off("input", this.setValue);
  },

  methods: {
    emitInput(val) {
      this.$emit("input", val);
    },

    setValue(val) {
      this.mutableValue = val;
    }
  }
};
</script>

<style lang="less">
@import "./../styles/Imports";

.s-selector {
  fieldset[disabled] .multiselect {
    pointer-events: none;
  }

  .multiselect,
  .multiselect__input,
  .multiselect__single {
    font-family: inherit;
    font-size: 14px;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  .multiselect {
    box-sizing: content-box;
    display: block;
    position: relative;
    width: 100%;
    min-height: 40px;
    text-align: left;
    color: #35495e;
  }

  .multiselect * {
    box-sizing: border-box;
  }

  .multiselect:focus {
    outline: none;
  }

  .multiselect--disabled {
    background: transparent;
    pointer-events: none;
    opacity: 0.6;
  }

  .multiselect--active {
    z-index: 50;
  }

  .multiselect--active:not(.multiselect--above) .multiselect__current,
  .multiselect--active:not(.multiselect--above) .multiselect__input,
  .multiselect--active:not(.multiselect--above) .multiselect__tags {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .multiselect--active .multiselect__select {
    transform: rotate(180deg);
  }

  .multiselect--above.multiselect--active .multiselect__current,
  .multiselect--above.multiselect--active .multiselect__input,
  .multiselect--above.multiselect--active .multiselect__tags {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .multiselect__input,
  .multiselect__single {
    position: relative;
    display: inline-block;
    min-height: 20px;
    line-height: 20px;
    border: none;
    border-radius: 5px;
    background: @dark-4;
    color: @selected;
    padding: 2px 0 0 5px;
    width: 100%;
    transition: border 0.1s ease;
    box-sizing: border-box;
    margin-bottom: 8px;
    vertical-align: top;
    height: 20px;
  }

  .multiselect__input:-ms-input-placeholder {
    color: @day-paragraph;
    opacity: 1;
  }

  .multiselect__input::placeholder {
    color: @day-paragraph;
    opacity: 0.7;
  }

  .multiselect__tag ~ .multiselect__input,
  .multiselect__tag ~ .multiselect__single {
    width: auto;
  }

  .multiselect__input:hover,
  .multiselect__single:hover {
    border-color: #cfcfcf;
  }

  .multiselect__input:focus,
  .multiselect__single:focus {
    border-color: #a8a8a8;
    outline: none;
  }

  .multiselect__single {
    padding-left: 5px;
    margin-bottom: 8px;
    background: @light-3;
    color: @selected;
    font-size: 14px;
  }

  .multiselect__tags-wrap {
    display: inline;
  }

  .multiselect__tags {
    height: 40px;
    display: block;
    padding: 8px 40px 0 8px;
    border-radius: 5px;
    border: 1px solid @light-3;
    background: @light-3;
    font-size: 14px;
    .radius();
  }

  .multiselect__tag {
    position: relative;
    display: inline-block;
    padding: 4px 26px 4px 10px;
    border-radius: 5px;
    margin-right: 10px;
    color: @selected;
    line-height: 1;
    background: @white;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    max-width: 100%;
    text-overflow: ellipsis;
  }

  .multiselect__tag-icon {
    cursor: pointer;
    margin-left: 7px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    font-weight: 700;
    font-style: normal;
    width: 22px;
    text-align: center;
    line-height: 22px;
    transition: all 0.2s ease;
    border-radius: 5px;
  }

  .multiselect__tag-icon:after {
    content: "\D7";
    color: @selected;
    font-size: 14px;
  }

  .multiselect__tag-icon:focus,
  .multiselect__tag-icon:hover {
    background: transparent;
  }

  .multiselect__tag-icon:focus:after,
  .multiselect__tag-icon:hover:after {
    color: @selected;
  }

  .multiselect__current {
    min-height: 40px;
    overflow: hidden;
    padding: 8px 30px 0 12px;
    white-space: nowrap;
    border-radius: 5px;
    border: 1px solid #e8e8e8;
  }

  .multiselect__current,
  .multiselect__select {
    line-height: 16px;
    box-sizing: border-box;
    display: block;
    margin: 0;
    text-decoration: none;
    cursor: pointer;
  }

  .multiselect__select {
    position: absolute;
    width: 40px;
    height: 38px;
    right: 1px;
    top: 1px;
    padding: 4px 8px;
    text-align: center;
    transition: transform 0.2s ease;
  }

  .multiselect__select:before {
    position: relative;
    right: 0;
    top: 25%;
    border: 0;
    -webkit-transform: none;
    transform: none;
    content: "\E996";
    font-family: "icomoon";
    color: #91979a;
    height: auto;
    width: auto;
  }

  .multiselect__placeholder {
    color: #adadad;
    display: inline-block;
    margin-bottom: 10px;
    padding-top: 2px;
    padding-left: 5px;
  }

  .multiselect--active .multiselect__placeholder {
    display: none;
  }

  .multiselect__content-wrapper {
    position: absolute;
    display: block;
    background: transparent;
    width: 100%;
    max-height: 240px;
    overflow: auto;
    border-top: none;
    z-index: 50;
    -webkit-overflow-scrolling: touch;
    border-radius: 0 0 4px 4px;
  }

  .multiselect__content {
    list-style: none;
    display: inline-block;
    padding: 0;
    margin: 0;
    min-width: 100%;
    vertical-align: top;
  }

  .multiselect--above .multiselect__content-wrapper {
    bottom: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: none;
    border-top: 1px solid #e8e8e8;
  }

  .multiselect__content::webkit-scrollbar {
    display: none;
  }

  .multiselect__element {
    display: block;
  }

  .multiselect__option {
    display: block;
    padding: 12px;
    min-height: 40px;
    line-height: 16px;
    text-decoration: none;
    text-transform: none;
    position: relative;
    cursor: pointer;
    white-space: nowrap;
    color: @dark-5;
    background: @light-3;
    font-size: 14px;
  }

  .multiselect__option:after {
    display: none;
    top: 0;
    right: 0;
    position: absolute;
    line-height: 40px;
    padding-right: 12px;
    padding-left: 20px;
    font-size: 13px;
  }

  .multiselect__option--highlight {
    outline: none;
    background: @selected;
    color: @night-title;
  }

  .multiselect__option--highlight:after {
    content: attr(data-select);
    color: @white;
  }

  .multiselect__option--selected {
    color: @dark-5;
    background: @dark-2 !important;
  }

  .multiselect__option--selected:after {
    content: attr(data-selected);
  }

  .multiselect__option--selected.multiselect__option--highlight {
    color: @night-title;
  }

  .multiselect__option--selected.multiselect__option--highlight:after {
    content: attr(data-deselect);
    color: @white;
  }

  .multiselect--disabled .multiselect__current,
  .multiselect--disabled .multiselect__select {
    color: @light-4;
  }

  .multiselect__option--disabled {
    background: #ededed !important;
    color: @light-4;
    cursor: text;
    pointer-events: none;
  }

  .multiselect__option--group {
    background: #ededed;
    color: @light-4;
  }

  .multiselect__option--group.multiselect__option--highlight {
    color: @white;
  }

  .multiselect__option--disabled.multiselect__option--highlight {
    background: #dedede;
  }

  .multiselect__option--group-selected.multiselect__option--highlight {
    color: @white;
  }

  .multiselect__option--group-selected.multiselect__option--highlight:after {
    content: attr(data-deselect);
    color: @white;
  }

  .multiselect-enter-active,
  .multiselect-leave-active {
    transition: all 0.15s ease;
  }

  .multiselect-enter,
  .multiselect-leave-active {
    opacity: 0;
  }

  .multiselect__strong {
    margin-bottom: 8px;
    line-height: 20px;
    display: inline-block;
    vertical-align: top;
  }

  [dir="rtl"] .multiselect {
    text-align: right;
  }

  [dir="rtl"] .multiselect__select {
    right: auto;
    left: 1px;
  }

  [dir="rtl"] .multiselect__tags {
    padding: 8px 8px 0 40px;
  }

  [dir="rtl"] .multiselect__content {
    text-align: right;
  }

  [dir="rtl"] .multiselect__option:after {
    right: auto;
    left: 0;
  }

  [dir="rtl"] .multiselect__clear {
    right: auto;
    left: 12px;
  }

  [dir="rtl"] .multiselect__spinner {
    right: auto;
    left: 1px;
  }

  @keyframes spinning {
    0% {
      transform: rotate(0);
    }
    to {
      transform: rotate(2turn);
    }
  }
}

.night,
.night-theme {
  .s-selector {
    .multiselect__tags {
      background: @night-dropdown-bg;
      border: @night-dropdown-border;
    }

    .multiselect__select {
      &:before {
        border-color: @white transparent transparent;
      }
    }

    .multiselect__input:-ms-input-placeholder {
      color: @light-4;
    }

    .multiselect__input::placeholder {
      color: @light-4;
    }

    .multiselect__single {
      background: @night-dropdown-bg;
      color: @white;
    }

    .multiselect__tag {
      color: @white;
      background: @dark-3;
    }

    .multiselect__tag-icon {
      &:after {
        color: @white;
      }

      &:hover {
        background: transparent;
      }
    }

    .multiselect__option {
      background: @night-dropdown-bg;
      color: @light-4;
    }

    .multiselect__option--selected {
      background: @night-hover !important;
    }

    .multiselect__option--highlight {
      background: @night-hover;
      color: @night-title;
    }
  }
}
</style>
