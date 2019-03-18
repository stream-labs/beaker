<template>
  <div class="s-call-to-action">
    <div class="s-call-to-action__thumb">
      <img :src="thumbnail">
    </div>
    <div class="s-call-to-action__description">
      <div class="s-title">{{ title }}</div>
      <div class="s-subtitle">{{ description }}</div>
    </div>
    <div class="s-button-container s-button-container--right">
      <Button
        :variation="buttonVariation"
        :size="'large'"
        :title="buttonTitle"
        :description="buttonDescription"
        :href="buttonHref"
        :to="buttonTo"
        :tag="buttonTag"
      ></Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";

@Component({
  components: {
    Button
  }
})
export default class CallToAction extends Vue {
  @Prop({ default: require("./../assets/imgs/kevin-standard.svg") })
  thumbnail!: String;

  @Prop({ default: "Get started by downloading Streamlabs OBS" })
  title!: String;

  @Prop({
    default:
      "Over 800k creators use Streamlabs OBS daily, delivering entertainment."
  })
  description!: String;

  @Prop({ default: "slobs-download" })
  buttonVariation!: String;

  @Prop({ default: "Download Streamlabs OBS" })
  buttonTitle!: String;

  @Prop({ default: "Windows 7+ 245.8MB" })
  buttonDescription!: String;

  @Prop()
  buttonHref!: String;

  @Prop()
  buttonTo!: String;

  @Prop({ default: "a" })
  buttonTag!: String;
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.s-call-to-action {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: @day-section;
  .padding(3);
  .radius(2);
}

.s-call-to-action__thumb {
  display: inline-flex;
  flex-grow: 0;
  flex-shrink: 0;
  height: 80px;
  width: 80px;
  background-color: @teal;
  .radius(3);
  .margin-right(3);
  .padding(1);

  img {
    width: 100%;
    height: 100%;
  }
}

.s-call-to-action__description {
  display: inline-flex;
  flex-direction: column;
  flex-grow: 3;
}

.s-title,
.s-subtitle {
  color: @day-title;
  line-height: 130%;
}

.s-title {
  font-size: 22px;
  font-weight: 700;
  .margin-bottom(2);
}

.s-subtitle {
  font-size: 18px;
  font-weight: medium;
}

.night,
.night-theme {
  .s-call-to-action {
    background-color: @night-section-alt;
  }
  .s-title,
  .s-subtitle {
    color: @night-title;
  }
}
</style>
