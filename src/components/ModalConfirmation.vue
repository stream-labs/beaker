<template>
  <modal
    :width="modalWidth"
    :minWidth="modalMinWidth"
    :minHeight="modalMinHeight"
    height="auto"
   :adaptive="true"
    name="modal-confirmation"
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
export default class ModalBasic extends Vue {
  @Prop({ default: 600 })
  width!: number

  modalWidth: number = this.width

  @Prop({ default: 600 })
  minWidth!: number

  modalMinWidth: number = this.minWidth

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

.confirmation {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.modal-title {
  color: @day-title;
  .margin-bottom(3);
}

.modal-default-button {
  float: right;
}

.confirmation {
  text-align: center;
  .padding(3);
}

.night,
.night-theme {
  .v--modal-overlay {
    background-color: @night-modal-mask;
  }

  .modal-container {
    background: @dark-3;
    box-shadow: 0px 4px 8px @night-shadow;
  }

  .modal-sub-title {
    color: @night-title;
  }
}
</style>
