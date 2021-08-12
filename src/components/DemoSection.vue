<template>
  <div class="s-demo-section">
    <Accordion openedTitle="Hide Code" closedTitle="Show Code">
      <div slot="content">
        <pre><code v-html="escapedHtml"></code></pre>
      </div>
    </Accordion>

    <div class="s-demo-section__content">
      <slot name="components"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Prop, Vue } from "vue-property-decorator";
import Accordion from "./Accordion.vue";
import { escape } from "lodash-es";
import { VNode } from "vue";

@Component({
  components: {
    Accordion
  }
})
export default class DemoSection extends Vue {
  @Prop()
  title!: string;

  @Prop({ required: true })
  code!: string;

  get escapedHtml() {
    const codeRegEx = new RegExp(
      `title="${
        this.title
      }" :code="demoCode">\\s*<template #components>([\\S\\s]*?)<\\/template>\\s*</DemoSection>`,
      "gm"
    );

    const codeMatch = codeRegEx.exec(this.code) as string[];
    const lines = codeMatch[1].split("\n");
    const matches = /^\s+/.exec(lines[1]);
    const indentation = matches != null ? matches[0] : null;
    let indentedLines: string[] = [];

    if (indentation) {
      indentedLines = lines.map(line => line.replace(indentation, ""));
    }

    return escape(indentedLines.join("\n").trim());
  }
}
</script>

<style lang="less" scoped>
.s-demo-section {
  &__content {
    position: relative;
  }
}
</style>
