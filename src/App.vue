<template>
  <div id="app" :class="[ nightTheme ? nightClasses : '', appClass ]">
    <div id="nav">
      <div class="logo">
        <img v-if="nightTheme" src="./assets/imgs/beaker-full-night.svg">
        <img v-else src="./assets/imgs/beaker-full.svg">
      </div>
      <toggle
        :values="themes"
        :selected.sync="theme"
        :default="'day'"
        @click.native="toggleTheme()">
      </toggle>
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/documentation">Documentation</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Toggle from "./components/Toggle.vue";

@Component({
  components: {
    Toggle
  }
})
export default class App extends Vue {
  appClass = "app-wrapper";
  nightClasses = ["night", "night-theme"];
  nightTheme = false;
  theme = "";

  themes = {
    day: "Day",
    night: "Night"
  };

  toggleTheme() {
    if (this.theme === "night") {
      this.nightTheme = true;
    } else {
      this.nightTheme = false;
    }
  }
}
</script>

<style lang="less">
@import "./styles/App";

#nav {
  border-bottom: 1px solid @day-border;
  .margin-bottom(3);
  position: relative;
  .padding-bottom();

  a {
    .weight(@medium);
    color: @day-paragraph;

    &.router-link-exact-active {
      color: @teal;
    }
  }

  .toggle {
    position: absolute;
    left: 0;
    bottom: -54px;
  }
}

.app-wrapper {
  .padding(3);
  overflow-y: auto;
  height: 100%;
}

.logo {
  width: 120px;
}

.night,
.night-theme {
  #nav {
    border-bottom-color: @night-border;
  }
}
</style>
