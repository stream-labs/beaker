<template>
  <modal
    name="modal-redirect"
    :classes="'modal-wrapper'"
    :maxWidth="modalWidth"
    :minWidth="modalMinWidth"
    :height="modalHeight"
    :minHeight="modalMinHeight"
    :adaptive="true"
  >
    <div class="modal-container">
      <div class="redirect">
        <div class="spinner">
          <Spinner :variation="'bars'"/>
        </div>
        <h1 class="modal-title">{{title}}</h1>
        <p class="modal-text">{{text}}</p>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";
import Spinner from "./../components/Spinner.vue";

@Component({
  components: {
    Button,
    Spinner
  }
})
export default class ModalRedirect extends Vue {
  @Prop({ default: 600 })
  width!: number;

  modalWidth: number = this.width;

  @Prop({ default: 600 })
  minWidth!: number;

  modalMinWidth: number = this.minWidth;

  @Prop({ default: "auto" })
  height!: number;

  modalHeight: number = this.height;

  @Prop({ default: null })
  minHeight!: number;

  modalMinHeight: number = this.minHeight;

  @Prop({ default: null })
  title!: string;

  @Prop({ default: null })
  text!: string;
}
</script>


<style lang="less" scoped>
@import "./../styles/Imports";
@import "./../styles/components/Modals";

.redirect {
  text-align: center;
  .padding(3);
  .modal-text {
    .padding-h-sides(8);
  }
}

.spinner {
  .padding-bottom(1.8);
}
</style>
