<template>
  <div class="s-tagging-input">
    <div class="s-tagging-input__container">
      <text-input
        :label="label"
        :placeholder="placeholder"
        :name="name"
        v-model="textInputValue"
        v-validate="inputValidation"
        type="text"
        slot="input"
        :error="errors.first(name)"
        v-on="filteredListeners"
        @keydown.enter.prevent="onAdd"
      />

      <Button
        :variation="buttonVariation"
        :title="buttonText"
        @click="onAdd"
        :disabled="value.length >= maxItems"
        type="button"
      />
    </div>

    <div class="s-tagging-input__tags">
      <div
        v-for="(tag, index) in value"
        :key="index"
        :class="tagClasses"
      >
        <div class="s-tagging-input__tag-text">
          {{ tag }}
        </div>
        <i
          class="s-tagging-input__tag-icon icon-close"
          @click="onRemove(index)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { defineComponent } from 'vue';
import { omit } from 'lodash';
import TextInput from './TextInput.vue';
import TextArea from './TextArea.vue';
import Button from './Button.vue';

@Component({
  components: {
    TextInput,
    TextArea,
    Button,
  },
})
export default defineComponent({
  @Prop()
  name!: string;

  @Prop()
  label!: string;

  @Prop()
  placeholder!: string;

  @Prop({ default: 'Add Tag' })
  buttonText!: string;

  @Prop({ default: 'default' })
  buttonVariation!: string;

  @Prop({ default: () => [] })
  value!: string[];

  @Prop()
  inputValidation!: string;

  @Prop()
  prefix!: string;

  @Prop({ default: 'default' })
  tagVariation!: string;

  @Prop({ default: 25 })
  maxItems!: number;

  textInputValue = '';

  get tagClasses() {
    return `s-tagging-input__tag s-tagging-input__tag--${this.tagVariation}`;
  }

  get filteredListeners() {
    return omit(this.$listeners, ['input']);
  }

  onAdd() {
    if (
      this.$validator.errors.items.length !== 0
      || this.value.length >= this.maxItems
    ) {
      return;
    }

    this.textInputValue = this.textInputValue.trim();

    const found = this.value.find((v) => {
      if (this.prefix && !this.textInputValue.startsWith(this.prefix)) {
        return (
          v.toLowerCase()
          === this.prefix + this.textInputValue.trim().toLowerCase()
        );
      }
      return v.toLowerCase() === this.textInputValue.trim().toLowerCase();
    });

    if (!found && this.textInputValue.length !== 0) {
      if (this.prefix && !this.textInputValue.startsWith(this.prefix)) {
        this.textInputValue = this.prefix + this.textInputValue;
      }

      this.value.push(this.textInputValue);
    }

    this.textInputValue = '';
  }

  onRemove(index) {
    this.value.splice(index, 1);
  }
})
</script>

<style lang="less">
@import (reference) "./../styles/Imports";
.s-tagging-input {
  .s-tagging-input__container {
    display: flex;

    .s-form-field {
      flex: 1;
      .margin-right(2);
    }
  }

  .s-tagging-input__tags {
    display: flex;
    flex-wrap: wrap;
    .margin-top();

    .s-tagging-input__tag {
      display: flex;
      align-items: center;
      height: 24px;
      .margin-right();
      .margin-top();
      padding: 0 4px;
      border-radius: 2px;
      font-size: 14px;
      line-height: 1.14;
      color: white;

      &:last-of-type {
        .margin-right(0);
      }
    }

    .s-tagging-input__tag-icon {
      margin-left: 4px;
      font-size: 10px;
      color: @light-5;
      cursor: pointer;
    }

    .s-tagging-input__tag-text {
      font-weight: 500;
      -webkit-user-select: none; /* Safari */
      -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* IE10+/Edge */
      user-select: none; /* Standard */
    }

    .s-tagging-input__tag--default {
      color: @day-title;
      border-color: @day-button;
      background: @day-button;
    }

    .s-tagging-input__tag--action {
      background-color: @teal;
    }

    .s-tagging-input__tag--warning {
      background-color: @warning;
    }

    max-height: 300px;
    overflow-y: auto;
  }
}

.night,
.night-theme {
  .s-tagging-input {
    .s-tagging-input__tag--default {
      color: @night-title;
      border-color: @night-button;
      background: @night-button;
    }

    .s-tagging-input__tag--action {
      background-color: @teal;
    }

    .s-tagging-input__tag--warning {
      background-color: @warning;
    }
  }
}
</style>
