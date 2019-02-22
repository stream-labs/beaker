<template>
  <div class="payment-form">
    <div class="payment-form__option">
      <form>

      </form>
    </div>
    <div class="payment-form__option">
      <form class="credit-card-form form">
        <div class="form-group">
          <selector v-model="selected" :options="options" placeholder="Add new credit card"></selector>
        </div>
        <div class="form-group credit-card-form__inputs">
          <text-input class="credit-card-form__cc-number" type="text" placeholder="Name on card"></text-input>
          <text-input class="credit-card-form__cc-exp" type="text" placeholder="Expiry MM/YYYY"></text-input>
          <text-input class="credit-card-form__cc-cvc" type="text" placeholder="CVC"></text-input>
          <text-input class="credit-card-form__cc-zip" type="text" placeholder="Zip/Postal"></text-input>
          <selector class="credit-card-form__cc-country" placeholder="Country"></selector>
        </div>
        <div class="form-group">
          <checkbox label="Save this payment method for next time" v-model="savePaymentMethod"></checkbox>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Checkbox from './Checkbox.vue'
import Radio from './Radio.vue'
import Selector from './Selector.vue'
import TextInput from './TextInput.vue'

@Component({
  components: {
    Checkbox,
    Radio,
    Selector,
    TextInput,
  },
})
export default class PaymentForm extends Vue {
  savePaymentMethod = true
}
</script>

<style lang="less" scoped>
@import './../styles/Imports';

.credit-card-form {
  background-color: @day-section;
  .radius();
  .padding(3);

  .v-select {
    background-color: @white;
    border-color: @white;
  }
}

.credit-card-form__inputs {
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(4, 1fr);

  grid-template-areas:
    'cc-name cc-name cc-name cc-name'
    'cc-number cc-number cc-exp cc-cvc'
    'cc-zip cc-zip cc-country cc-country';
}

.credit-card-form__cc-number {
  grid-area: cc-number;
}

.credit-card-form__cc-exp {
  grid-area: cc-exp;
}

.credit-card-form__cc-zip {
  grid-area: cc-zip;
}

.credit-card-form__cc-cvc {
  grid-area: cc-cvc;
}

.credit-card-form__cc-country {
  grid-area: cc-country;
}

.form {
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-gap: 24px;
}

.form-group {
  display: grid;
  grid-gap: 16px;
}
</style>
