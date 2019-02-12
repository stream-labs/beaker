<template>
  <div class="image-picker" @click="chooseImage">

      <div class="image-picker__thumb">
        <img :src="thumbnail">
      </div>
      <div class="image-picker__filename">
        <input ref="fileInput"
          class="file-input"
          type="file"
          @input="onSelectFile"/>
         {{ this.imageData }}
      </div>

    <div class="image-picker__button">
      <Button :variation="'warning'" :title="'Delete'"/>
    </div>
  </div>
</template>



<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import Button from "./../components/Button.vue";

@Component({
  components: {
    Button
  }
})

export default class ImagePicker extends Vue {

/*

@Prop ()
imageData!: any

chooseImage () {
  this.$refs.fileInput.click();
}

onSelectFile () {
      const input = this.$refs.fileInput
      const files = input.files
      if (files && files[0]) {
        const reader = new FileReader
        reader.onload = e => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
      }
}


*/

}

</script>

<style lang="less" scoped>
@import "./../styles/Imports";

.image-picker {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
}

.file-input {
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 3;
  position: absolute;
}

.image-picker__thumb {

  display: inline-flex;

  flex-grow: 0;

  height: 40px;
  width: 40px;
  background-color: @teal;
  overflow: hidden;
  border-bottom-left-radius: @radius;
  border-top-left-radius: @radius;

  img {
    width: 100%;
    height: 100%;
  }
}

.image-picker__filename {
  position: relative;
  display: inline-flex;
  align-items: center;
  flex-grow: 3;
  height: 40px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  background-color: @day-section;
  border-bottom-right-radius: @radius;
  border-top-right-radius: @radius;

  .padding-left(2);
  .margin-right(2);
}



.call-to-action__description {
  display: inline-flex;
  flex-direction: column;
  flex-grow: 3;
}

.title {
  font-family: 'Muli';
  font-size: 22px;
  font-weight: 900;
  color: @day-title;
  .margin-bottom(2);
}

.subtitle {
  font-size: 18px;
  font-weight: medium;
  color: @day-title;
}

.night,
.night-theme {
  .call-to-action {
    background-color: @night-section-alt;
    .night-shadow();
  }
  .title,
  .subtitle {
    color: @night-title;
  }
}

</style>
