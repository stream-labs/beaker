export class Util {
  static attachListeners(
    listeners: Record<string, Function | Function[]>,
    target: any,
    exclude: string[] = []
  ) {
    for (const key in listeners) {
      if (listeners.hasOwnProperty(key) && exclude.indexOf(key) === -1) {
        const func = listeners[key];

        target.addEventListener(key, func);
      }
    }
  }

  static detachListeners(
    listeners: Record<string, Function | Function[]>,
    target: any
  ) {
    for (const key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        const func = listeners[key];

        target.removeEventListener(key, func);
      }
    }
  }
}
