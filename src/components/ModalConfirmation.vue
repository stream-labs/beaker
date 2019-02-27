<template>
  <modal
    name="modal-confirmation"
    :classes="'modal-wrapper'"
    :maxWidth="modalWidth"
    :minWidth="modalMinWidth"
    :height="modalHeight"
    :minHeight="modalMinHeight"
    :adaptive="true"
  >
    <div class="modal-container">
      <div class="confirmation">
        <h2 class="modal-sub-title">{{subTitle}}</h2>
        <p class="modal-text">{{text}}</p>
        <div class="button-container">
          <Button
            :variation="'default'"
            :title="'Cancel'"
            :size="'fixed-width'"
            @click="$modal.hide('modal-confirmation')"
          ></Button>
          <Button :variation="'warning'" :title="'Delete'" :size="'fixed-width'"></Button>
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
export default class ModalConfirmation extends Vue {
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
  subTitle!: string

  @Prop({ default: null })
  text!: string
}
</script>


<style lang="less" scoped>
@import './../styles/Imports';
@import './../styles/components/Modals';

.modal-container {
  .padding(3);
  .confirmation {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

.modal-default-button {
  float: right;
}
</style>
