import { provide, inject } from 'vue';

const WhatInputSymbol = Symbol();

export function provideWhatInput(plugin: IWhatInput) {
  provide(WhatInputSymbol, plugin);
}

export function useWhatInput() {
  const whatInput = inject(WhatInputSymbol) as IWhatInput;
  return whatInput;
}

interface IWhatInput {
  ask(intent?: string): string;
  element(): string;
  ignoreKeys(keyCodes: number[]): void;
  specificKeys(keyCodes: number[]): void;
  registerOnChange(callback: () => void, option?: string): void;
  unRegisterOnChange(callback: () => void): void;
  clearStorage(): void;
}
