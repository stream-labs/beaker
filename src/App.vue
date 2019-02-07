<template>
  <div id="app" :class="[ nightTheme ? nightClasses : '', appClass ]">
    <div id="nav">
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
  a {
    .weight(@medium);
    color: @day-paragraph;

    &.router-link-exact-active {
      color: @teal;
    }
  }
}

.app-wrapper {
  .padding(3);
  overflow-y: auto;
  height: 100%;
}

.logo {
  width: 180px;
}
</style>
