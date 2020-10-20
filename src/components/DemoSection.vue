<template>
  <div class="s-demo-section">
    <Accordion
      opened-title="Hide Code"
      closed-title="Show Code"
    >
      <template #content>
        <pre><code v-text="escapedHtml" /></pre>
      </template>
    </Accordion>

    <div class="s-demo-section__content">
      <slot name="components" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
// import { escape } from 'lodash-es';

import Accordion from './Accordion.vue';

export default defineComponent({
  components: {
    Accordion,
  },

  props: {
    title: { type: String, required: true },
    code: { type: String, required: true },
  },

  setup(props) {
    const escapedHtml = computed(() => {
      const codeRegEx = new RegExp(
        `title="${
          props.title
        }"\\s*:code="demoCode"\\s*>\\s*<template #components>([\\S\\s]*?)<\\/template>\\s*<\\/DemoSection>`,
        'gm',
      );

      const codeMatch = codeRegEx.exec(props.code);
      if (codeMatch) {
        const lines = codeMatch[1].split('\n');
        const matches = /^\s+/.exec(lines[1]);
        const indentation = matches != null ? matches[0] : null;
        let indentedLines: string[] = [];

        if (indentation) {
          indentedLines = lines.map((line) => line.replace(indentation, ''));
        }

        return indentedLines.join('\n').trim();
      }

      return '';
    });

    return {
      escapedHtml,
    };
  },
});
</script>

<style lang="less" scoped>
.s-demo-section {
  &__content {
    position: relative;
  }
}
</style>
