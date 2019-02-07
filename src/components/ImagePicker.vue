<template>




<div>
  <input :key="fileInputKey" ref="fileInput" type="file" @change="upload($event)" accept=".gif,.jpg,.jpeg,.png,.svg" multiple style="display: none" />


  <div>Image</div>
  <div>



    <div class="dropzone" @click.prevent="openFilePicker()">
      <div>
        <i class="fas fa-cloud-upload-alt"></i>Upload an Image
      </div>
    </div>




  </div>
  <div>Button</div>
</div>





</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { map, get, union, filter } from "lodash";
import axios from 'axios';



@Component({})
export default class ImagePicker extends Vue {
  // type = this.defaultType;
  selectedFile = null;
  totalUsage: number = 0;
  fileInputKey = Date.now();
  busy: boolean = false;
  maxUsage = get(window, 'currentUser.max_allowed_upload_usage', 1024 * Math.pow(1024, 2));
  maxFileSize = get(window, 'currentUser.max_allowed_upload_file_size', 15 * Math.pow(1024, 2));
  dragOver: boolean = false;
  uploads = [];

  //@Prop()
  //defaultType!: any;



  files() {

    let files = this.uploads;

    let totalUsage = 0;

    files = map(files, (item: any) => {
      if (item.size) {
        totalUsage += parseInt(item.size, 10);
      }
      const filename = decodeURIComponent(item.href.split(/[\\/]/).pop());
      const ext:any = filename.toLowerCase().split('.').pop();

      const map = {
        jpg: 'image',
        png: 'image',
        gif: 'image',
        jpeg: 'image',
        svg: 'image',
      };

      item.filename = filename;
      item.type = get(map, ext);

      return item;
    });

    this.totalUsage = totalUsage;

/*
    if(this.type) {
      files = filter(files, { type: this.type });
    }
*/
    return files;
  }










  onFileChanged() {
    const file = event.target.files[0];
  }

  onUpload() {
    //add upload from that other file
  }



usagePct() {
  return this.totalUsage / this.maxUsage;
}

totalUsageLabel() {
  return this.formatBytes(this.totalUsage, 2);
}

maxUsageLabel() {
  return this.formatBytes(this.maxUsage, 2);
}


getUploads() {
  axios.get('/api/uploads').then((response: any) => {
    this.uploads = response;
  }).catch((res: any) => {
  });
}

formatBytes(bytes: number, places: number) {
  if (!bytes) { return '0KB'; }
  var places = places || 1;
  const divisor: number = Math.pow(10, places);
  const base: number = Math.log(bytes) / Math.log(1024);
  const suffix = ['', 'KB', 'MB', 'GB', 'TB'][Math.floor(base)];
  return (Math.round(Math.pow(1024, base - Math.floor(base)) * divisor) / divisor) + suffix;
}

selectFile(file: any, select: any) {
  this.selectedFile = file.href;
  if (select === true) {
    this.handleSelect();
  }
}

handleSelect() {
  this.$emit('selected-file', this.selectedFile);
}

  openFilePicker() {
   this.$refs.fileInput.click();
  }

  isDoneUploading() {
    this.busy = false;
    this.fileInputKey = Date.now();
  }

  isUploading() {
    this.busy = true;
  }


    upload(e:any) {
      this.isUploading();


      let files;
      if (e.dataTransfer) {
        files = e.dataTransfer.files;
      } else if (e.target) {
        files = e.target.files;
      }

      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
          // if (files[i].size > this.state.maxFileSize) {
          //     alert('The file you are trying to upload is ' + this.formatBytes(files[i].size, 1) + ' which is larger than the ' + this.formatBytes(this.state.maxFileSize, 1) + ' limit.');
          //     return;
          // }
        formData.append('uploads[]', files[i]);
      }

      axios.post('/api/uploads', {
        data: formData,
        contentType: false,
        pocessData: false
      }).then((r:any) => {
        this.uploads = union(r, this.uploads);
        this.isDoneUploading();
      }).catch((r:any) => {
        this.isDoneUploading();
      });
      }

      /*

      $.ajax('/api/uploads', {
        data: formData,
        contentType: false,
        processData: false,
        method: 'POST',
      }).done((r:any) => {
        this.uploads = _.union(r, this.uploads);
        this.isDoneUploading();

      }).fail((r:any) => {
        this.isDoneUploading();
      });
    }
    */

    onDragOver() {
      this.dragOver = true;
    }

    onDragEnter() {
      this.dragOver = true;
    }

    onDragLeave() {
      this.dragOver = false;
    }

    onDropIt(e:any) {
      this.dragOver = false;

      this.upload(e);
    }

    handleSuccess() {
     // this.success(this.$t('URL Copied'));
    }

    handleError() {
     // this.error(this.$t('Failed to Copy'));
    }




}










</script>

<style lang="less">

@import "./../styles/Imports";


.dropzone {
background-color: #ddd;
padding: 20px;

border-radius: @radius;
}


</style>