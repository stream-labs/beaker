export enum EInputType {
  bool = 'bool',
  number = 'number',
  text = 'text',
  slider = 'slider',
  color = 'color',
  list = 'list',
  textArea = 'textArea',
  fontSize = 'fontSize',
  fontFamily = 'fontFamily',
  code = 'code',
  file = 'file',
  timer = 'timer',
  toggle = 'toggle',
  mediaGallery = 'mediaGallery',
  sound = 'sound',
}

export interface IInputMetadata {
  required?: boolean;
  description?: string;
  type?: EInputType;
  title?: string;
  tooltip?: string;
  disabled?: boolean;
  uuid?: string;
  name?: string;
}

export interface ISliderMetadata extends IInputMetadata {
  min: number;
  max: number;
  interval?: number;
  usePercentages?: boolean;
  hasValueBox?: boolean;
}

export const metadata = {
  slider: (options: ISliderMetadata) => ({ type: EInputType.slider, ...options } as ISliderMetadata),
};