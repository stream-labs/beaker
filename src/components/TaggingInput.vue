<template>
  <div class="s-tagging-input">
    <div class="s-tagging-input__container">
      <text-input
        v-model="input"
        v-validate="inputValidation"
        slot="input"
        :name="name"
        :label="label"
        :placeholder="placeholder"
        type="text"
        :error="errors.first(name)"
        @input="$emit('update:text', $event)"
        @keydown.enter.prevent="onAdd"
      />
      <Button
        :title="buttonText"
        type="button"
        :variation="buttonVariation"
        :disabled="value.length >= maxItems"
        @click="onAdd"
      />
    </div>

    <div class="s-tagging-input__tags">
      <div
        v-for="(tag, index) in value"
        :key="index"
        class="s-tagging-input-tag"
        :class="[`s-tagging-input-tag--${tagVariation}`]"
      >
        <div class="s-tagging-input-tag__text">{{ tag }}</div>
        <i
          class="s-tagging-input-tag__icon icon-close"
          @click="onRemove(index)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import TextInput from "./TextInput.vue";
import TextArea from "./TextArea.vue";
import Button from "./Button.vue";

@Component({
  components: {
    TextInput,
    TextArea,
    Button,
  },
})
export default class TaggingInput extends Vue {
  @Prop()
  name!: string;

  @Prop()
  label!: string;

  @Prop()
  placeholder!: string;

  @Prop({ default: "Add Tag" })
  buttonText!: string;

  @Prop({ default: "default" })
  buttonVariation!: string;

  @Prop({ default: () => [] })
  value!: string[];

  @Prop({ default: "" })
  text!: string;

  @Prop()
  inputValidation!: string;

  @Prop()
  prefix!: string;

  @Prop({ default: "default" })
  tagVariation!: string;

  @Prop({ default: 25 })
  maxItems!: number;

  input: string = "";
  tags: string[] = [];

  @Watch("value", { immediate: true })
  watchValue(newValue) {
    this.tags = newValue;
  }

  @Watch("text", { immediate: true })
  watchText(newValue) {
    this.input = newValue;
  }

  onAdd() {
    if (this.$validator.errors.items.length !== 0) {
      this.$emit("error", this.$validator.errors.items, false);
      return;
    }

    if (this.tags.length >= this.maxItems) {
      this.$emit("error", ["Max items reached"], true);
      return;
    }

    let inputValue = this.input.trim();

    const found = this.tags.find((v) => {
      if (this.prefix && !inputValue.startsWith(this.prefix)) {
        return (
          v.toLowerCase() === this.prefix + inputValue.trim().toLowerCase()
        );
      } else {
        return v.toLowerCase() === inputValue.trim().toLowerCase();
      }
    });

    if (!found && inputValue.length !== 0) {
      if (this.prefix && !inputValue.startsWith(this.prefix)) {
        inputValue = this.prefix + inputValue;
      }
      this.tags.push(inputValue);
      this.input = "";
      this.emitTagEvents("add");
    }
  }

  onRemove(index: number) {
    this.tags.splice(index, 1);
    this.emitTagEvents("remove");
  }

  emitTagEvents(...events) {
    ["input", "change", "update:value", ...events].forEach((event) =>
      this.$emit(event, this.tags)
    );
  }
}
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

  .s-tagging-input {
    &__tags {
      display: flex;
      flex-wrap: wrap;
      .margin-top();
      max-height: 300px;
      overflow-y: auto;
    }

    &-tag {
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

      &--default {
        color: @day-title;
        border-color: @day-button;
        background: @day-button;
      }

      &--action {
        background-color: @teal;
      }

      &--warning {
        background-color: @warning;
      }

      &__icon {
        margin-left: 4px;
        font-size: 10px;
        color: @light-5;
        cursor: pointer;
      }

      &__text {
        font-weight: 500;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
      }
    }
  }
}
.night,
.night-theme {
  .s-tagging-input {
    &-tag {
      &--default {
        color: @night-title;
        border-color: @night-button;
        background: @night-button;
      }

      &--action {
        background-color: @teal;
      }

      &--warning {
        background-color: @warning;
      }
    }
  }
}
</style>
