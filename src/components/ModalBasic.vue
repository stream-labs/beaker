<template>
  <modal
    name="modal-basic"
    :classes="'modal-wrapper'"
    :maxWidth="modalWidth"
    :minWidth="modalMinWidth"
    :height="modalHeight"
    :minHeight="modalMinHeight"
    :adaptive="true"
  >
    <div class="modal-container">
      <div class="modal-body">
        <div class="normal-upper">
          <h1 class="modal-title">{{title}}</h1>
          <h2 class="modal-sub-title">{{subTitle}}</h2>
          <p class="modal-text">{{text}}</p>
        </div>
      </div>
      <div class="modal-footer">
        <div class="modal-footer-inner button-container">
          <Button
            :variation="'default'"
            :title="'Close'"
            :size="'fixed-width'"
            @click="$modal.hide('modal-basic')"
          ></Button>
          <Button :variation="'action'" :title="'Confirm'" :size="'fixed-width'"></Button>
        </div>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Button from './../components/Button.vue'

@Component({
  components: {
    Button,
  },
})
export default class ModalBasic extends Vue {
  @Prop({ default: 600 })
  width!: number

  modalWidth: number = this.width

  @Prop({ default: 600 })
  minWidth!: number

  modalMinWidth: number = this.minWidth

  @Prop({ default: 'auto' })
  height!: number

  modalHeight: number = this.height

  @Prop({ default: null })
  minHeight!: number

  modalMinHeight: number = this.minHeight

  @Prop({ default: null })
  title!: string

  @Prop({ default: null })
  subTitle!: string

  @Prop({ default: null })
  text!: string
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';
@import './../styles/components/Modals';

.modal-body {
  border-radius: 8px 8px 0 0;
}

.modal-footer {
  background: @light-2;
  .radius-bottom(2, 2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.modal-footer-inner {
  .padding-v-sides(2);
  .padding-h-sides(3);
}

.night,
.night-theme {
  .modal-body {
    background: @night-shadow;
  }

  .modal-footer {
    background: @dark-2;
  }
}
</style>
