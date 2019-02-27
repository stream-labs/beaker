<template>
  <modal
    :width="modalWidth"
    :minWidth="modalMinWidth"
    :minHeight="modalMinHeight"
    height="auto"
    :adaptive="true"
    name="modal-basic"
    :classes="'modal-wrapper'"
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

.modal-title,
.modal-sub-title {
  color: @day-title;
  .margin-bottom(3);
}

.modal-title {
  .margin-bottom(3);
}

.modal-sub-title {
  .margin-bottom(2);
  .weight(@medium);
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

.modal-container-small {
  width: 400px;
  .button-container {
    display: block;
    .padding-top(1);
  }
}

.modal-body {
  background: @white;
  .padding(3);
  border-radius: 8px 8px 0 0;
}

.modal-default-button {
  float: right;
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

  .modal-body {
    background: @night-shadow;
  }

  .modal-title,
  .modal-sub-title {
    color: @night-title;
  }

  .modal-footer {
    background: @dark-2;
  }
}
</style>
