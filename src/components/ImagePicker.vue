<template>
  <div class="image-picker">
    <div class="image-picker__thumb" @click="chooseImage">
      <img :src="this.imageThumb" v-if="imageSelected">
      <div class="upload-icon" v-if="!imageSelected">
        <i class="icon-upload-image"></i>
      </div>
    </div>
    <div class="image-picker__filename">
      <input
        ref="fileInput"
        class="file-input"
        type="file"
        accept=".jpg, .jpeg, .png, .gif, .svg"
        @input="onSelectFile"
      >
      {{ this.imageFileName }}
    </div>
    <div class="button-container button-container--right">
      <Button
        v-if="!imageSelected"
        :variation="'default'"
        :title="'Select Image'"
        @click="chooseImage"
      />
      <Button v-if="imageSelected" :variation="'action'" :title="'Upload'"/>
      <Button v-if="imageSelected" :variation="'warning'" :title="'Delete'" @click="deleteImage"/>
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
  $refs!: {
    fileInput: HTMLElement;
  };

  private imageData: any = null;
  private imageFileName: any = "Click here to add image...";
  private imageThumb: any = null;
  private imageSelected: Boolean = false;

  chooseImage() {
    if (!this.imageSelected) {
      this.$refs.fileInput.click();
    }
  }

  deleteImage() {
    this.imageFileName = "Click here to add image...";
    this.imageThumb = null;
    this.imageSelected = false;
  }

  uploadImage() {
    this.$emit("upload", this.imageData);
  }

  onSelectFile(event: any) {
    var files = event.target.files;
    var output: any = [];
    for (var i = 0, f; (f = files[i]); i++) {
      output.push(f.name, f.size);
    }
    this.imageFileName = output[0];
    this.imageData = event.target.files[0];
    this.imageThumb = URL.createObjectURL(files[0]);
    this.imageSelected = true;
  }
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

.upload-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: @light-4;
  width: 40px;
  height: 40px;
  i {
    font-size: 24px;
  }
}

.image-picker__thumb {
  display: inline-flex;
  flex-grow: 0;
  height: 40px;
  width: 40px;
  background-color: @light-4;
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
  color: @day-paragraph;
  font-size: 14px;
  background-color: @day-section;
  border-bottom-right-radius: @radius;
  border-top-right-radius: @radius;
  .padding-left(2);
}

.night,
.night-theme {
  .upload-icon,
  .image-picker__thumb {
    background-color: @dark-4;
  }
  .image-picker__filename {
    background-color: @night-section;
    color: @night-paragraph;
  }
}
</style>
