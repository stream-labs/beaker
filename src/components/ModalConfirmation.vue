<template>
  <modal name="modal-confirmation" height="auto" :scrollable="true">
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
  @Prop()
  subTitle!: {
    type: string
    default: null
  }

  @Prop()
  text!: {
    type: string
    default: null
  }

  @Prop()
  width!: {
    type: number
    default: 30000
  }

  @Prop()
  minWidth!: {
    type: number
    default: 600
  }

  @Prop()
  height!: {
    type: number
    default: null
  }

  @Prop()
  minHeight!: {
    type: number
    default: null
  }

  opened(e: any) {
    // e.ref should not be undefined here
    console.log('opened', e)
    console.log('ref', e.ref)
  }

  closed(e: any) {
    console.log('closed', e)
  }

  test(e: any) {
    if (e && e.params) {
      this.text = e.params.text
      console.log(e.params.text)
    }
  }
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
  .modal-mask {
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

