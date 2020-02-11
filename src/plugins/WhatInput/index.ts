import _Vue from "vue";
import whatInput from "what-input";

const plugin = {
  install(Vue: typeof _Vue) {
    Vue.prototype.$whatInput = whatInput;
  }
};

interface IWhatInput {
  ask(intent?: string): string;
  element(): string;
  ignoreKeys(keyCodes: number[]): void;
  specificKeys(keyCodes: number[]): void;
  registerOnChange(callback: () => void, option?: string);
  unRegisterOnChange(callback: () => void);
  clearStorage(): void;
}

declare module "vue/types/vue" {
  interface Vue {
    $whatInput: IWhatInput;
  }
}

export default plugin;
