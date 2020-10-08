<template>
  <div class="s-demo-section">
    <Accordion
      opened-title="Hide Code"
      closed-title="Show Code"
    >
      <slot name="content">
        <pre><code v-html="escapedHtml" /></pre>
      </slot>
    </Accordion>

    <div class="s-demo-section__content">
      <slot name="components" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { escape } from 'lodash-es';

import Accordion from './Accordion.vue';

export default defineComponent({
  components: {
    Accordion,
  },

  props: {
    title: { type: String },
    code: { type: String, required: true },
  },

  computed: {
    escapedHtml() {
      const codeRegEx = new RegExp(
        `title="${
          this.title
        }" :code="demoCode">\\s*<template #components>([\\S\\s]*?)<\\/template>`,
        'gm',
      );

      const codeMatch = codeRegEx.exec(this.code) as string[];
      const lines = codeMatch[1].split('\n');
      const matches = /^\s+/.exec(lines[1]);
      const indentation = matches != null ? matches[0] : null;
      let indentedLines: string[] = [];

      if (indentation) {
        indentedLines = lines.map((line) => line.replace(indentation, ''));
      }

      return escape(indentedLines.join('\n').trim());
    },
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
