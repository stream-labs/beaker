<template>
  <div class="s-form-area" :class="{ 's-form-area--with-label': label }">
    <div class="s-form-area__container">
      <p v-if="maxLength" class="s-form-area__characters">
        {{ currentLength }}/{{ maxLength }}
      </p>
      <div>wtf</div>
      <div v-if="result.length >= 1">
        <div>
          <div v-for="(variableResult) in result" :key="variableResult.variable">
            Once
            {{ variableResult.variable }}
          </div>
          </div>

















      </div>
      <textarea
        :class="{
          's-form-area__input': true,
          's-form-area__input--error': !!error,
          's-form-area__input--count': !!maxLength
        }"
        ref="textArea"
        :name="name"
        :cols="cols"
        :rows="rows"
        :placeholder="placeholder"
        :maxlength="maxLength"
        :value="value"
        @input="onValueChange"
        v-on="filteredListeners"
      />
      <label
        :class="{
          's-form-area__label--top': value !== '',
          's-form-area__label--error': !!error
        }"
        class="s-form-area__label"
        v-if="label"
        >{{ label }}</label
      >
    </div>

    <transition name="fadeX-from-left">
      <p v-show="error" class="s-form-area__error-text">{{ error }}</p>
    </transition>

    <p v-show="helpText" class="s-form-area__help-text">{{ helpText }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Fuse from "fuse.js";
import { omit } from "lodash";

@Component({})
export default class TextArea extends Vue {
  $refs!: {
    textArea: HTMLTextAreaElement;
  };

  result: any = [];
  private resultLimit: Number = 7;
  private fuse: any = null;
  private keyEvents: any = [];
  private currentResult: number = 0;


  @Prop()
  name!: string;

  @Prop()
  label!: string;

  @Prop()
  placeholder!: string;

  @Prop()
  value!: string;

  @Prop()
  error!: string;

  @Prop()
  helpText!: string;

  @Prop({ default: 100 })
  cols!: number;

  @Prop({ default: 3 })
  rows!: number;

  @Prop()
  maxLength!: number;

  @Prop()
  autoResize!: boolean;

  @Prop()
  maxHeight!: number;

  @Prop({ default: false})
  variableSearch!: boolean;

  @Prop()
  variableDataJson!: any;
  variableData = this.variableDataJson;

  @Prop({ default: "" })
  search!: string;

  @Prop({ default: "fuseResultsUpdated" })
  eventName!: string;

  @Prop({ default: "fuseInputChanged" })
  inputChangeEventName!: string;

  mounted() {
    this.updateSize();
    this.initFuse();
  }

  updated() {
    console.log(this.value);
    console.log(this.search)
    console.log(this.result);
  }

  focus() {
    this.$refs.textArea.focus();
  }

  get options() {
    let options = {
      caseSensitive: false,
      includeScore: true,
      includeMatches: false,
      tokenize: false,
      matchAllTokens: false,
      findAllMatches: false,
      shouldSort: true,
      threshold: 0.2,
      location: 0,
      distance: 0.9,
      maxPatternLength: 16,
      minMatchCharLength: 1,
      keys: ["variable"]
    };
    return options;
  }

  get filteredListeners() {
    return omit(this.$listeners, ["input"]);
  }

  get currentLength() {
    return this.value.length;
  }

    get noResults() {
    if (this.result.length === 0 && this.value != "") {
      return true;
    } else {
      return false;
    }
  }

  @Watch("variableData")
  watchVariableData() {
    this.fuse.variableData = this.variableData;
    this.fuseSearch();
  }

  @Watch("search")
  watchSearch() {
    this.value = this.search;
    console.log('search change')
  }

  @Watch("value")
  watchValue() {
    this.$parent.$emit(this.inputChangeEventName, this.value);
    this.$emit(this.inputChangeEventName, this.value);
    this.fuseSearch();
    console.log('value change')
  }

  @Watch("result")
  watchResult(val: [], oldVal: []) {
    if (this.noResults || this.value == "" || val.length != oldVal.length) {
      this.currentResult = 0;
    }
    this.$emit(this.eventName, this.result);
    this.$parent.$emit(this.eventName, this.result);
  }

   initFuse() {
    this.fuse = new Fuse(this.variableData, this.options);
    if (this.search) {
      this.value = this.search;
    }
  }

  blurSearch() {
    this.value = "";
    this.$refs.textArea.blur();
    this.currentResult = 0;
  }

  fuseSearch() {
    if (this.value.trim() === "") {
      this.result = [];
    } else {
      this.result = this.fuse.search(this.value.trim());
    }
  }

  onValueChange(event: { target: HTMLTextAreaElement }) {
    this.$emit("input", event.target.value);
    this.updateSize();
  }

  updateSize() {
    if (this.autoResize) {
      this.$refs.textArea.style.cssText = "height:auto;";
      const newHeight =
        this.$refs.textArea.scrollHeight > this.maxHeight && this.maxHeight
          ? this.maxHeight + 2
          : this.$refs.textArea.scrollHeight + 2;
      this.$refs.textArea.style.cssText = "height:" + newHeight + "px";
    }
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";

.s-form-area {
  .s-form-area__container {
    position: relative;
  }

  .s-form-area__input {
    .area-padding();
    resize: vertical;
  }

  .s-form-area__input::-webkit-scrollbar-corner {
    background-color: rgba(0, 0, 0, 0.04);
    background-image: none;
  }

  .s-form-area__input::-webkit-scrollbar {
    width: 1em;
    background-color: rgba(0, 0, 0, 0.04);
  }

  .s-form-area__input::-webkit-scrollbar {
    width: 16px;
    height: 9px;
  }

  .s-form-area__input::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-border-radius: 10px;
    height: 10px;
    background-color: @dark-5;
    border: 4px solid rgba(0, 0, 0, 0.04);
    background-clip: padding-box;
    -webkit-box-shadow: inset -1px -1px 0px @dark-5, inset 1px 1px 0px @dark-5;
    box-shadow: inset -1px -1px 0px @dark-5, inset 1px 1px 0px @dark-5;
  }
}

.s-form-area__characters {
  .absolute(auto, 20px, 15px, auto);
  margin: 0;
}
.s-form-area__input--error {
  border-color: @red;
}

.s-form-area__input--count {
  .padding-bottom(4) !important;
}

.s-form-area__label {
  position: absolute;
  color: @dark-5;
  left: 8px;
  top: 12px;
  .radius();
}

.s-form-area__label--error,
.s-form-area__error-text {
  color: @red;
}

.s-form-area__error-text,
.s-form-area__help-text {
  .small-type();
  .margin-bottom(0);
  .margin-top();
}

.s-form-area--with-label {
  position: relative;

  label {
    order: -1;
    transition: all 0.275s ease-in-out;
    transform: translateY(0px);
    pointer-events: none;
    background-color: @white;
    padding: 0 4px;
    line-height: 130%;
  }

  .s-form-area__input:focus::-webkit-input-placeholder {
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: @light-5;
  }
  .s-form-area__input:focus:-moz-placeholder {
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: @light-5;
  } /* FF 4-18 */
  .s-form-area__input:focus::-moz-placeholder {
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: @light-5;
  } /* FF 19+ */
  .s-form-area__input:focus:-ms-input-placeholder {
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: @light-5;
  } /* IE 10+ */

  .s-form-area__input:focus + label,
  .s-form-area__label--top {
    transform: translateY(-20px);
    font-size: 12px;
  }

  .s-form-area__input:focus + label {
    color: @day-title;
  }

  .s-form-area__input:focus + .s-form-area__label--error {
    color: green;
  }

  .s-form-area--top {
    color: @day-paragraph;
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: transparent;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: transparent;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: transparent;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    color: transparent;
  }
}

.night,
.night-theme {
  .s-form-area--with-label {
    position: relative;

    .s-form-area__input:focus + label {
      color: @night-title;
    }
  }

  .s-form-area__input--error {
    border-color: @red;

    &:focus,
    &:active {
      border-color: @red;
    }

    &:focus + .s-form-area__label {
      color: @red;
    }
  }

  .s-form-area__label {
    background-color: @night-bg;
    color: @night-paragraph;
  }

  .s-form-area__label--error,
  .s-form-area__error-text {
    color: @red;
  }

  .s-arrow--disabled {
    color: @dark-4;
  }
}
</style>
