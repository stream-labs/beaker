import { provide, inject } from 'vue';

interface IWhatInput {
  ask(intent?: string): string;
  element(): string | null;
  ignoreKeys(keyCodes: number[]): void;
  specificKeys(keyCodes: number[]): void;
  registerOnChange(callback: () => void, option?: string): void;
  unRegisterOnChange(callback: () => void): void;
  clearStorage(): void;
}

const WhatInputSymbol = Symbol('whatInput');

export function provideWhatInput(plugin: IWhatInput) {
  provide(WhatInputSymbol, plugin);
}

export function useWhatInput() {
  const whatInput = inject(WhatInputSymbol) as IWhatInput;
  return whatInput;
}
