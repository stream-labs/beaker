export interface ICopyEvent {
  action: string,
  text: string,
  trigger: HTMLElement,
  clearSelection: () => void
}
