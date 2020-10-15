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
import {
  computed, defineComponent, PropType, ref,
} from 'vue';
import { omit } from 'lodash-es';
import TextInput from './TextInput.vue';
import Button from './Button.vue';

export default defineComponent({
  components: {
    TextInput,
    Button,
  },

  props: {
    name: {
      type: String,
    },

    label: {
      type: String,
    },

    placeholder: {
      type: String,
    },

    buttonText: {
      type: String,
      default: 'Add Tag',
    },

    buttonVariation: {
      type: String,
      default: 'default',
    },

    value: {
      type: Array as PropType<string[]>,
      default: () => [],
    },

    inputValidation: {
      type: String,
    },

    prefix: {
      type: String,
    },

    tagVariation: {
      type: String,
      default: 'default',
    },

    maxItems: {
      type: Number,
      default: 25,
    },
  },

  setup(props, { attrs }) {
    const textInputValue = ref('');

    function onAdd() {
      if (
        this.$validator.errors.items.length !== 0
        || props.value.length >= props.maxItems
      ) {
        return;
      }

      textInputValue.value = textInputValue.value.trim();

      const found = props.value.find((v) => {
        if (props.prefix && !textInputValue.value.startsWith(props.prefix)) {
          return (
            v.toLowerCase()
            === props.prefix + textInputValue.value.trim().toLowerCase()
          );
        }
        return v.toLowerCase() === textInputValue.value.trim().toLowerCase();
      });

      if (!found && textInputValue.value.length !== 0) {
        if (props.prefix && !textInputValue.value.startsWith(props.prefix)) {
          textInputValue.value = props.prefix + textInputValue.value;
        }

        props.value.push(textInputValue.value);
      }

      textInputValue.value = '';
    }

    function onRemove(index: number) {
      props.value.splice(index, 1);
    }

    const tagClasses = computed(() => `s-tagging-input__tag s-tagging-input__tag--${props.tagVariation}`);

    const filteredListeners = computed(() => omit(attrs, ['input']));

    return {
      textInputValue,
      onAdd,
      onRemove,
      tagClasses,
      filteredListeners,
    };
  },
});
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
