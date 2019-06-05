<template>
  <div>
    <p>Join the Streamlabs OBS Discussion on <span>Discord</span></p>
    <Button
      title="Open Discord"
      :bgColor="'#FFFFFF'"
      :textColor="'#7289DA'"
    ></Button>
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
export default class BannerDiscord extends Vue {}
</script>
