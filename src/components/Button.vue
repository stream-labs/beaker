<template>
  <component
    :is="type"
    :to="to"
    :href="href"
    :type="submit"
    class="button"
    :class="buttonClasses"
    :disabled="state === 'disabled'">
    <span><slot/></span>
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class Button extends Vue {
  @Prop()
  href!: {
    type: string;
    default: null;
  };

  // standard, medium, large, square
  @Prop()
  size!: {
    type: string;
    size: null;
  };

  // hover, focus, loading, disabled
  @Prop()
  state!: {
    type: string;
    default: null;
  };

  // set buttons type to "submit"
  @Prop()
  submit!: {
    type: string;
    default: null;
  };

  @Prop()
  to!: {
    type: string;
    default: null;
  };

  // button, a, router-link
  @Prop({ default: "button" })
  type!: string;

  @Prop()
  variation!: {
    type: string;
    default: "default";
  };

  get buttonClasses() {
    let classes = [];

    if (this.variation) {
      classes.push(`button--${this.variation}`);
    }

    if (this.size) {
      classes.push(`button--${this.size}`);
    }

    if (this.state) {
      classes.push(`button--${this.state}`);
    }

    return classes.join(" ");
  }
}
</script>
