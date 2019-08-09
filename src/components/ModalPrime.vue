<template>
  <modal
    :name="name"
    :classes="'s-modal-wrapper'"
    :width="width"
    :minWidth="minWidth"
    height="auto"
    :adaptive="true"
    v-on="$listeners"
  >
    <div class="s-modal-container s-modal-welcome-prime">
      <div class="modal-prime__close" v-if="hasPrimeCloseButton">
        <i class="icon-close" @click="$modal.hide(name)"></i>
      </div>
      <div class="modal-prime">
        <video loop muted autoplay class="modal-prime__video">
          <source
            src="https://cdn.streamlabs.com/videos/Welcome_Confetti_Gold_1.webm"
            type="video/webm"
          />
        </video>
        <div class="modal-prime__heading">
          Welcome to
          <span>Prime</span>
          !
        </div>
        <p class="modal-prime__desc">You just unlocked a TON of benefits</p>
        <div class="modal-prime__images"></div>
        <div class="modal-prime__features">
          <p>Just a few of your exclusive features and services.</p>
          <ul v-for="(feature, index) in primeFeatureListDefault" :key="index">
            <li>{{feature}}</li>
          </ul>
        </div>
        <div class="modal-prime__button">
          <Button
            :size="'large'"
            :title="primeButtonText"
            @click="onPrimeButtonHandler"
            :bgColor="'#CAA368'"
            :textColor="'#fff'"
          ></Button>
        </div>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Button from "./../components/Button.vue";

@Component({
  components: {
    Button
  }
})
export default class ModalPrime extends Vue {
  @Prop({ default: "modal-welcome-prime" })
  name!: string;

  @Prop()
  width!: number;

  @Prop()
  minWidth!: number;

  @Prop({ default: "Continue" })
  primeButtonText!: string;

  @Prop({ default: false })
  hasPrimeCloseButton!: boolean;

  primeFeatureListDefault: string[] = [
    "Merch Store with Wholesale Pricing",
    "Custom Branded Website and Tip Page",
    "Custom Web Domain and Email Address",
    "Automatic Gold All-Star Status",
    "Protected Mobile Streaming",
    "Priority Support + More"
  ];

  onPrimeButtonHandler() {
    this.$emit("onClickPrime");
  }
}
</script>

<style lang="less" scoped>
@import "./../styles/Imports";
@import "./../styles/components/Modals";

.s-modal-welcome-prime {
  .padding(0);
}

.modal-prime__close {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .padding(3);
  .padding-bottom(0);

  .icon-close {
    z-index: 100;
    cursor: pointer;
  }
}

.modal-prime {
  .padding(5);

  .modal-prime__video {
    display: none;
    @media (min-width: 768px) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  .modal-prime__heading {
    font-family: "Barlow", sans-serif;
    font-size: 32px !important;
    font-weight: 800;
    text-align: center;
    color: #ffffff;
    line-height: 40px;

    span {
      color: #caa368;
    }
  }

  .modal-prime__desc {
    color: @white;
    font-size: 20px;
    font-weight: 800;
    .margin-top(4);
    text-align: center;
    line-height: 24px;
  }

  .modal-prime__images {
    display: none;

    @media (min-width: 768px) {
      display: block;
      background: url("https://cdn.streamlabs.com/static/welcome-prime.png")
        no-repeat;
      background-position: center 45px;
      height: 238px;
    }
  }

  .modal-prime__features {
    background: rgba(43, 56, 63, 0.7);
    border-radius: 8px;
    .margin-bottom(3);
    width: 100%;
    .padding(2);
    .margin-top(2.5);

    @media (min-width: 768px) {
      width: 516px;
      margin: 0 auto;
      .margin-bottom(3);
      .margin-top(0);
      .padding-v-sides(3);
      .padding-h-sides(4);
    }

    p {
      color: @white;
      font-size: 18px;
      text-align: left;
      line-height: 24px;
    }

    ul {
      line-height: 30px;
      .padding-left(2);
      .margin(0);
    }
  }

  .modal-prime__button {
    text-align: center;

    .s-button {
      font-style: italic;
      font-weight: bold;
    }
  }
}
</style>
