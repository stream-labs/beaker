<template>
  <div class="call-to-action">
    <div class="call-to-action__thumb">
      <img :src="thumbnail">
    </div>
    <div class="call-to-action__description">
      <div class="title">{{ title }}</div>
      <div class="subtitle">{{ description }}</div>
    </div>
    <div class="button-container button-container--right">
      <Button
        :variation="buttonVariation"
        :size="'large'"
        :title="buttonTitle"
        :description="buttonDescription">
      </Button>
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
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.call-to-action {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: @day-section;
  .padding(3);
  .radius(2);
}

.call-to-action__thumb {
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

.call-to-action__description {
  display: inline-flex;
  flex-direction: column;
  flex-grow: 3;
}

.title,
.subtitle {
  color: @day-title;
  line-height: 130%;
}

.title {
  font-size: 22px;
  font-weight: 700;
  .margin-bottom(2);
}

.subtitle {
  font-size: 18px;
  font-weight: medium;
}

.night,
.night-theme {
  .call-to-action {
    background-color: @night-section-alt;
  }
  .title,
  .subtitle {
    color: @night-title;
  }
}
</style>
