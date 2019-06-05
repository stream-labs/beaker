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
      ></text-input>

      <Button
        :variation="buttonVariation"
        :title="buttonText"
        @click="onAdd"
        :disabled="value.length >= maxItems"
      ></Button>
    </div>

    <div class="s-tagging-input__tags">
      <div v-for="(tag, index) in value" :key="index" :class="tagClasses">
        <i class="s-tagging-input__tag-icon icon-close" @click="onRemove(index)"></i>
        <div class="s-tagging-input__tag-text">{{ tag }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TextInput from "./TextInput.vue";
import Button from "./Button.vue";
import { omit } from "lodash";

@Component({
  components: {
    TextInput,
    Button
  }
})
export default class TaggingInput extends Vue {
  @Prop()
  name!: string;

  @Prop({ default: "TextInput" })
  label!: string;

  @Prop({ default: "TextInput" })
  placeholder!: string;

  @Prop({ default: "Add Tag" })
  buttonText!: string;

  @Prop({ default: "default" })
  buttonVariation!: string;

  @Prop({ default: () => [] })
  value!: string[];

  @Prop()
  inputValidation!: string;

  @Prop()
  prefix!: string;

  @Prop({ default: "default" })
  tagVariation!: string;

  @Prop({ default: 25 })
  maxItems!: number;

  textInputValue: string = "";

  get tagClasses() {
    return `s-tagging-input__tag s-tagging-input__tag--${this.tagVariation}`;
  }

  get filteredListeners() {
    return omit(this.$listeners, ["input"]);
  }

  onAdd() {
    if (
      this.$validator.errors.items.length !== 0 ||
      this.value.length >= this.maxItems
    ) {
      return;
    }

    this.textInputValue = this.textInputValue.trim();

    const found = this.value.find(v => {
      if (this.prefix && !this.textInputValue.startsWith(this.prefix)) {
        return (
          v.toLowerCase() ===
          this.prefix + this.textInputValue.trim().toLowerCase()
        );
      } else {
        return v.toLowerCase() === this.textInputValue.trim().toLowerCase();
      }
    });

    if (!found && this.textInputValue.length !== 0) {
      if (this.prefix && !this.textInputValue.startsWith(this.prefix)) {
        this.textInputValue = this.prefix + this.textInputValue;
      }

      this.value.push(this.textInputValue);
    }

    this.textInputValue = "";
  }

  onRemove(index) {
    this.value.splice(index, 1);
  }
}
</script>

<style lang="less">
@import "./../styles/Imports";
.s-tagging-input {
  .s-tagging-input__container {
    display: flex;

    .s-form-field {
      flex: 1;
      .margin-right(2);
    }
  }

  .s-tagging-input__tags {
    .margin-top();
    & > * {
      display: inline-block;
      vertical-align: middle;
      .margin-top(1);
      .margin-bottom(1);
    }

    .s-tagging-input__tag {
      margin-right: 10px;
      padding: 6px 12px;
      border-radius: 20px;
      color: white;

      & > * {
        display: inline-block;
        vertical-align: middle;
      }
    }

    .s-tagging-input__tag-icon {
      font-size: 14px;
      .margin-right();
      cursor: pointer;
    }

    .s-tagging-input__tag-text {
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
