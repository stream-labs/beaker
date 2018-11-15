<template>
  <div id="app" :class="[ nightTheme ? nightClasses : '', appClass ]">
    <div id="nav">
      <toggle
        :values="toggleOptions"
        :selected.sync="toggleSelected"
        :default="'visible'">
      </toggle>

      <div class="theme-toggle">
        <button @click="toggleDayTheme()" class="button">
          <i class="fas fa-sun"></i>
        </button>
        <button @click="toggleNightTheme()" class="button">
          <i class="fas fa-moon"></i>
        </button>
      </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/documentation">Documentation</router-link>
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
  dayTheme = true;
  nightTheme = false;

  toggleOptions = {};

  toggleDayTheme() {
    this.dayTheme = true;
    this.nightTheme = false;
  }

  toggleNightTheme() {
    this.dayTheme = false;
    this.nightTheme = true;
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
