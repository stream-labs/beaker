type MDCRippleFactory = (
  el: Element,
  foundation?: MDCRippleFoundation
) => MDCRipple;

class MDCFoundation<AdapterType extends {} = {}> {
  static get cssClasses(): { [key: string]: string } {
    return {};
  }

  static get strings(): { [key: string]: string } {
    return {};
  }

  static get numbers(): { [key: string]: number } {
    return {};
  }

  static get defaultAdapter(): {} {
    return {};
  }

  protected adapter_: AdapterType;

  constructor(adapter: AdapterType = {} as AdapterType) {
    this.adapter_ = adapter;
  }

  init() {}

  destroy() {}
}

class MDCComponent<FoundationType extends MDCFoundation> {
  static attachTo(root: Element): MDCComponent<MDCFoundation<{}>> {
    return new MDCComponent(root, new MDCFoundation({}));
  }

  protected root_: Element;
  protected foundation_: FoundationType;

  constructor(
    root: Element,
    foundation?: FoundationType,
    ...args: Array<unknown>
  ) {
    this.root_ = root;
    this.initialize(...args);

    this.foundation_ =
      foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  initialize(..._args: Array<unknown>) {}

  getDefaultFoundation(): FoundationType {
    throw new Error(
      "Subclasses must override getDefaultFoundation to return a properly configured " +
        "foundation class"
    );
  }

  initialSyncWithDOM() {}

  destroy() {
    this.foundation_.destroy();
  }

  listen<K extends EventType>(
    evtType: K,
    handler: SpecificEventListener<K>
  ): void;
  listen<E extends Event>(
    evtType: string,
    handler: CustomEventListener<E>
  ): void;
  listen(evtType: string, handler: EventListener) {
    this.root_.addEventListener(evtType, handler);
  }

  unlisten<K extends EventType>(
    evtType: K,
    handler: SpecificEventListener<K>
  ): void;
  unlisten<E extends Event>(
    evtType: string,
    handler: CustomEventListener<E>
  ): void;
  unlisten(evtType: string, handler: EventListener) {
    this.root_.removeEventListener(evtType, handler);
  }

  emit<T extends object>(evtType: string, evtData: T, shouldBubble = false) {
    let evt: CustomEvent<T>;
    if (typeof CustomEvent === "function") {
      evt = new CustomEvent<T>(evtType, {
        bubbles: shouldBubble,
        detail: evtData
      });
    } else {
      evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(evtType, shouldBubble, false, evtData);
    }

    this.root_.dispatchEvent(evt);
  }
}

class MDCRipple extends MDCComponent<MDCRippleFoundation>
  implements MDCRippleCapableSurface {
  static attachTo(
    root: Element,
    opts: MDCRippleAttachOpts = { isUnbounded: undefined }
  ): MDCRipple {
    const ripple = new MDCRipple(root);
    if (opts.isUnbounded !== undefined) {
      ripple.unbounded = opts.isUnbounded;
    }
    return ripple;
  }

 static createAdapter(instance: MDCRippleCapableSurface): MDCRippleAdapter {
    return {
      addClass: className => instance.root_.classList.add(className),
      browserSupportsCssVars: () => util.supportsCssVariables(window),
      computeBoundingRect: () => instance.root_.getBoundingClientRect(),
      containsEventTarget: target => instance.root_.contains(target as Node),
      deregisterDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.removeEventListener(
          evtType,
          handler,
          util.applyPassive()
        ),
      deregisterInteractionHandler: (evtType, handler) =>
        instance.root_.removeEventListener(
          evtType,
          handler,
          util.applyPassive()
        ),
      deregisterResizeHandler: handler =>
        window.removeEventListener("resize", handler),
      getWindowPageOffset: () => ({
        x: window.pageXOffset,
        y: window.pageYOffset
      }),
      isSurfaceActive: () => matches(instance.root_, ":active"),
      isSurfaceDisabled: () => Boolean(instance.disabled),
      isUnbounded: () => Boolean(instance.unbounded),
      registerDocumentInteractionHandler: (evtType, handler) =>
        document.documentElement.addEventListener(
          evtType,
          handler,
          util.applyPassive()
        ),
      registerInteractionHandler: (evtType, handler) =>
        instance.root_.addEventListener(evtType, handler, util.applyPassive()),
      registerResizeHandler: handler =>
        window.addEventListener("resize", handler),
      removeClass: className => instance.root_.classList.remove(className),
      updateCssVariable: (varName, value) =>
        (instance.root_ as HTMLElement).style.setProperty(varName, value)
    };
  }

  root_!: Element;

  disabled = false;

  private unbounded_?: boolean;

  get unbounded(): boolean {
    return Boolean(this.unbounded_);
  }

  set unbounded(unbounded: boolean) {
    this.unbounded_ = Boolean(unbounded);
    this.setUnbounded_();
  }

  activate() {
    this.foundation_.activate();
  }

  deactivate() {
    this.foundation_.deactivate();
  }

  layout() {
    this.foundation_.layout();
  }

  getDefaultFoundation() {
    return new MDCRippleFoundation(MDCRipple.createAdapter(this));
  }

  initialSyncWithDOM() {
    const root = this.root_ as HTMLElement;
    this.unbounded = "mdcRippleIsUnbounded" in root.dataset;
  }

  private setUnbounded_() {
    this.foundation_.setUnbounded(Boolean(this.unbounded_));
  }
}

// base types

type EventType = keyof GlobalEventHandlersEventMap;
type SpecificEventListener<K extends EventType> = (
  evt: GlobalEventHandlersEventMap[K]
) => void;
type CustomEventListener<E extends Event> = (evt: E) => void;

// ADAPTER

interface MDCRippleAdapter {
  browserSupportsCssVars(): boolean;

  isUnbounded(): boolean;

  isSurfaceActive(): boolean;

  isSurfaceDisabled(): boolean;

  addClass(className: string): void;

  removeClass(className: string): void;

  containsEventTarget(target: EventTarget | null): boolean;

  registerInteractionHandler<K extends EventType>(
    evtType: K,
    handler: SpecificEventListener<K>
  ): void;

  deregisterInteractionHandler<K extends EventType>(
    evtType: K,
    handler: SpecificEventListener<K>
  ): void;

  registerDocumentInteractionHandler<K extends EventType>(
    evtType: K,
    handler: SpecificEventListener<K>
  ): void;

  deregisterDocumentInteractionHandler<K extends EventType>(
    evtType: K,
    handler: SpecificEventListener<K>
  ): void;

  registerResizeHandler(handler: SpecificEventListener<"resize">): void;

  deregisterResizeHandler(handler: SpecificEventListener<"resize">): void;

  updateCssVariable(varName: string, value: string | null): void;

  computeBoundingRect(): ClientRect;

  getWindowPageOffset(): MDCRipplePoint;
}

// UTIL

let supportsCssVariables_: boolean | undefined;

let supportsPassive_: boolean | undefined;

function detectEdgePseudoVarBug(windowObj: Window): boolean {
  const document = windowObj.document;
  const node = document.createElement("div");
  node.className = "mdc-ripple-surface--test-edge-var-bug";
  document.body.appendChild(node);

  const computedStyle = windowObj.getComputedStyle(node);
  const hasPseudoVarBug =
    computedStyle !== null && computedStyle.borderTopStyle === "solid";
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
  return hasPseudoVarBug;
}

export function supportsCssVariables(
  windowObj: Window,
  forceRefresh = false
): boolean {
  const { CSS } = windowObj;
  let supportsCssVars = supportsCssVariables_;
  if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) {
    return supportsCssVariables_;
  }

  const supportsFunctionPresent = CSS && typeof CSS.supports === "function";
  if (!supportsFunctionPresent) {
    return false;
  }

  const explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");

  const weAreFeatureDetectingSafari10plus =
    CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVars = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVars = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVars;
  }
  return supportsCssVars;
}

export function applyPassive(
  globalObj: Window = window,
  forceRefresh = false
): boolean | EventListenerOptions {
  if (supportsPassive_ === undefined || forceRefresh) {
    let isSupported = false;
    try {
      globalObj.document.addEventListener("test", () => undefined, {
        get passive() {
          isSupported = true;
          return isSupported;
        }
      });
    } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? ({ passive: true } as EventListenerOptions) : false;
}

export function getNormalizedEventCoords(
  evt: Event | undefined,
  pageOffset: MDCRipplePoint,
  clientRect: ClientRect
): MDCRipplePoint {
  if (!evt) {
    return { x: 0, y: 0 };
  }
  const { x, y } = pageOffset;
  const documentX = x + clientRect.left;
  const documentY = y + clientRect.top;

  let normalizedX;
  let normalizedY;
  // Determine touch point relative to the ripple container.
  if (evt.type === "touchstart") {
    const touchEvent = evt as TouchEvent;
    normalizedX = touchEvent.changedTouches[0].pageX - documentX;
    normalizedY = touchEvent.changedTouches[0].pageY - documentY;
  } else {
    const mouseEvent = evt as MouseEvent;
    normalizedX = mouseEvent.pageX - documentX;
    normalizedY = mouseEvent.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

// INTERFACES AND TYPES

interface MDCRipplePoint {
  x: number;
  y: number;
}

interface MDCRippleAttachOpts {
  isUnbounded?: boolean;
}

interface MDCRippleCapableSurface {
  readonly root_: Element;
  unbounded?: boolean;
  disabled?: boolean;
}

interface ActivationStateType {
  isActivated?: boolean;
  hasDeactivationUXRun?: boolean;
  wasActivatedByPointer?: boolean;
  wasElementMadeActive?: boolean;
  activationEvent?: Event;
  isProgrammatic?: boolean;
}

interface FgTranslationCoordinates {
  startPoint: MDCRipplePoint;
  endPoint: MDCRipplePoint;
}

interface Coordinates {
  left: number;
  top: number;
}

type ActivationEventType =
  | "touchstart"
  | "pointerdown"
  | "mousedown"
  | "keydown";
type DeactivationEventType =
  | "touchend"
  | "pointerup"
  | "mouseup"
  | "contextmenu";

const ACTIVATION_EVENT_TYPES: ActivationEventType[] = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
];

const POINTER_DEACTIVATION_EVENT_TYPES: DeactivationEventType[] = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
];

// simultaneous nested activations
let activatedTargets: Array<EventTarget | null> = [];

class MDCRippleFoundation extends MDCFoundation<MDCRippleAdapter> {
  static get cssClasses() {
    return cssClasses;
  }

  static get strings() {
    return strings;
  }

  static get numbers() {
    return numbers;
  }

  static get defaultAdapter(): MDCRippleAdapter {
    return {
      addClass: () => undefined,
      browserSupportsCssVars: () => true,
      computeBoundingRect: () => ({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 0,
        height: 0
      }),
      containsEventTarget: () => true,
      deregisterDocumentInteractionHandler: () => undefined,
      deregisterInteractionHandler: () => undefined,
      deregisterResizeHandler: () => undefined,
      getWindowPageOffset: () => ({ x: 0, y: 0 }),
      isSurfaceActive: () => true,
      isSurfaceDisabled: () => true,
      isUnbounded: () => true,
      registerDocumentInteractionHandler: () => undefined,
      registerInteractionHandler: () => undefined,
      registerResizeHandler: () => undefined,
      removeClass: () => undefined,
      updateCssVariable: () => undefined
    };
  }

  private activationAnimationHasEnded_ = false;
  private activationState_: ActivationStateType;
  private activationTimer_ = 0;
  private fgDeactivationRemovalTimer_ = 0;
  private fgScale_ = "0";
  private frame_ = { width: 0, height: 0 };
  private initialSize_ = 0;
  private layoutFrame_ = 0;
  private maxRadius_ = 0;
  private unboundedCoords_: Coordinates = { left: 0, top: 0 };

  private readonly activationTimerCallback_: () => void;
  private readonly activateHandler_: EventHandlerNonNull;
  private readonly deactivateHandler_: EventHandlerNonNull;
  private readonly focusHandler_: EventHandlerNonNull;
  private readonly blurHandler_: EventHandlerNonNull;
  private readonly resizeHandler_: EventHandlerNonNull;

  private previousActivationEvent_?: Event;

  constructor(adapter?: Partial<MDCRippleAdapter>) {
    super({ ...MDCRippleFoundation.defaultAdapter, ...adapter });

    this.activationState_ = this.defaultActivationState_();

    this.activationTimerCallback_ = () => {
      this.activationAnimationHasEnded_ = true;
      this.runDeactivationUXLogicIfReady_();
    };
    this.activateHandler_ = e => this.activate_(e);
    this.deactivateHandler_ = () => this.deactivate_();
    this.focusHandler_ = () => this.handleFocus();
    this.blurHandler_ = () => this.handleBlur();
    this.resizeHandler_ = () => this.layout();
  }

  init() {
    const supportsPressRipple = this.supportsPressRipple_();

    this.registerRootHandlers_(supportsPressRipple);

    if (supportsPressRipple) {
      const { ROOT, UNBOUNDED } = MDCRippleFoundation.cssClasses;
      requestAnimationFrame(() => {
        this.adapter_.addClass(ROOT);
        if (this.adapter_.isUnbounded()) {
          this.adapter_.addClass(UNBOUNDED);
          // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
          this.layoutInternal_();
        }
      });
    }
  }

  destroy() {
    if (this.supportsPressRipple_()) {
      if (this.activationTimer_) {
        clearTimeout(this.activationTimer_);
        this.activationTimer_ = 0;
        this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
      }

      if (this.fgDeactivationRemovalTimer_) {
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.fgDeactivationRemovalTimer_ = 0;
        this.adapter_.removeClass(
          MDCRippleFoundation.cssClasses.FG_DEACTIVATION
        );
      }

      const { ROOT, UNBOUNDED } = MDCRippleFoundation.cssClasses;
      requestAnimationFrame(() => {
        this.adapter_.removeClass(ROOT);
        this.adapter_.removeClass(UNBOUNDED);
        this.removeCssVars_();
      });
    }

    this.deregisterRootHandlers_();
    this.deregisterDeactivationHandlers_();
  }

  /**
   * @param evt Optional event containing position information.
   */
  activate(evt?: Event): void {
    this.activate_(evt);
  }

  deactivate(): void {
    this.deactivate_();
  }

  layout(): void {
    if (this.layoutFrame_) {
      cancelAnimationFrame(this.layoutFrame_);
    }
    this.layoutFrame_ = requestAnimationFrame(() => {
      this.layoutInternal_();
      this.layoutFrame_ = 0;
    });
  }

  setUnbounded(unbounded: boolean): void {
    const { UNBOUNDED } = MDCRippleFoundation.cssClasses;
    if (unbounded) {
      this.adapter_.addClass(UNBOUNDED);
    } else {
      this.adapter_.removeClass(UNBOUNDED);
    }
  }

  handleFocus(): void {
    requestAnimationFrame(() =>
      this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
    );
  }

  handleBlur(): void {
    requestAnimationFrame(() =>
      this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED)
    );
  }

  private supportsPressRipple_(): boolean {
    return this.adapter_.browserSupportsCssVars();
  }

  private defaultActivationState_(): ActivationStateType {
    return {
      activationEvent: undefined,
      hasDeactivationUXRun: false,
      isActivated: false,
      isProgrammatic: false,
      wasActivatedByPointer: false,
      wasElementMadeActive: false
    };
  }

  private registerRootHandlers_(supportsPressRipple: boolean) {
    if (supportsPressRipple) {
      ACTIVATION_EVENT_TYPES.forEach(evtType => {
        this.adapter_.registerInteractionHandler(
          evtType,
          this.activateHandler_
        );
      });
      if (this.adapter_.isUnbounded()) {
        this.adapter_.registerResizeHandler(this.resizeHandler_);
      }
    }

    this.adapter_.registerInteractionHandler("focus", this.focusHandler_);
    this.adapter_.registerInteractionHandler("blur", this.blurHandler_);
  }

  private registerDeactivationHandlers_(evt: Event) {
    if (evt.type === "keydown") {
      this.adapter_.registerInteractionHandler(
        "keyup",
        this.deactivateHandler_
      );
    } else {
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(evtType => {
        this.adapter_.registerDocumentInteractionHandler(
          evtType,
          this.deactivateHandler_
        );
      });
    }
  }

  private deregisterRootHandlers_() {
    ACTIVATION_EVENT_TYPES.forEach(evtType => {
      this.adapter_.deregisterInteractionHandler(
        evtType,
        this.activateHandler_
      );
    });
    this.adapter_.deregisterInteractionHandler("focus", this.focusHandler_);
    this.adapter_.deregisterInteractionHandler("blur", this.blurHandler_);

    if (this.adapter_.isUnbounded()) {
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
    }
  }

  private deregisterDeactivationHandlers_() {
    this.adapter_.deregisterInteractionHandler(
      "keyup",
      this.deactivateHandler_
    );
    POINTER_DEACTIVATION_EVENT_TYPES.forEach(evtType => {
      this.adapter_.deregisterDocumentInteractionHandler(
        evtType,
        this.deactivateHandler_
      );
    });
  }

  private removeCssVars_() {
    const rippleStrings = MDCRippleFoundation.strings;
    const keys = Object.keys(rippleStrings) as Array<
      keyof typeof rippleStrings
    >;
    keys.forEach(key => {
      if (key.indexOf("VAR_") === 0) {
        this.adapter_.updateCssVariable(rippleStrings[key], null);
      }
    });
  }

  private activate_(evt?: Event) {
    if (this.adapter_.isSurfaceDisabled()) {
      return;
    }

    const activationState = this.activationState_;
    if (activationState.isActivated) {
      return;
    }

    const previousActivationEvent = this.previousActivationEvent_;
    const isSameInteraction =
      previousActivationEvent &&
      evt !== undefined &&
      previousActivationEvent.type !== evt.type;
    if (isSameInteraction) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = evt === undefined;
    activationState.activationEvent = evt;
    activationState.wasActivatedByPointer = activationState.isProgrammatic
      ? false
      : evt !== undefined &&
        (evt.type === "mousedown" ||
          evt.type === "touchstart" ||
          evt.type === "pointerdown");

    const hasActivatedChild =
      evt !== undefined &&
      activatedTargets.length > 0 &&
      activatedTargets.some(target =>
        this.adapter_.containsEventTarget(target)
      );
    if (hasActivatedChild) {
      this.resetActivationState_();
      return;
    }

    if (evt !== undefined) {
      activatedTargets.push(evt.target);
      this.registerDeactivationHandlers_(evt);
    }

    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
    if (activationState.wasElementMadeActive) {
      this.animateActivation_();
    }

    requestAnimationFrame(() => {
      activatedTargets = [];

      if (
        !activationState.wasElementMadeActive &&
        evt !== undefined &&
        ((evt as KeyboardEvent).key === " " ||
          (evt as KeyboardEvent).keyCode === 32)
      ) {
        activationState.wasElementMadeActive = this.checkElementMadeActive_(
          evt
        );
        if (activationState.wasElementMadeActive) {
          this.animateActivation_();
        }
      }

      if (!activationState.wasElementMadeActive) {
        // Reset activation state immediately if element was not made active.
        this.activationState_ = this.defaultActivationState_();
      }
    });
  }

  private checkElementMadeActive_(evt?: Event) {
    return evt !== undefined && evt.type === "keydown"
      ? this.adapter_.isSurfaceActive()
      : true;
  }

  private animateActivation_() {
    const {
      VAR_FG_TRANSLATE_START,
      VAR_FG_TRANSLATE_END
    } = MDCRippleFoundation.strings;
    const { FG_DEACTIVATION, FG_ACTIVATION } = MDCRippleFoundation.cssClasses;
    const { DEACTIVATION_TIMEOUT_MS } = MDCRippleFoundation.numbers;

    this.layoutInternal_();

    let translateStart = "";
    let translateEnd = "";

    if (!this.adapter_.isUnbounded()) {
      const { startPoint, endPoint } = this.getFgTranslationCoordinates_();
      translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
    }

    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
    this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);

    clearTimeout(this.activationTimer_);
    clearTimeout(this.fgDeactivationRemovalTimer_);
    this.rmBoundedActivationClasses_();
    this.adapter_.removeClass(FG_DEACTIVATION);

    this.adapter_.computeBoundingRect();
    this.adapter_.addClass(FG_ACTIVATION);
    this.activationTimer_ = setTimeout(
      () => this.activationTimerCallback_(),
      DEACTIVATION_TIMEOUT_MS
    );
  }

  private getFgTranslationCoordinates_(): FgTranslationCoordinates {
    const { activationEvent, wasActivatedByPointer } = this.activationState_;

    let startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(
        activationEvent,
        this.adapter_.getWindowPageOffset(),
        this.adapter_.computeBoundingRect()
      );
    } else {
      startPoint = {
        x: this.frame_.width / 2,
        y: this.frame_.height / 2
      };
    }

    startPoint = {
      x: startPoint.x - this.initialSize_ / 2,
      y: startPoint.y - this.initialSize_ / 2
    };

    const endPoint = {
      x: this.frame_.width / 2 - this.initialSize_ / 2,
      y: this.frame_.height / 2 - this.initialSize_ / 2
    };

    return { startPoint, endPoint };
  }

  private runDeactivationUXLogicIfReady_() {
    const { FG_DEACTIVATION } = MDCRippleFoundation.cssClasses;
    const { hasDeactivationUXRun, isActivated } = this.activationState_;
    const activationHasEnded = hasDeactivationUXRun || !isActivated;

    if (activationHasEnded && this.activationAnimationHasEnded_) {
      this.rmBoundedActivationClasses_();
      this.adapter_.addClass(FG_DEACTIVATION);
      this.fgDeactivationRemovalTimer_ = setTimeout(() => {
        this.adapter_.removeClass(FG_DEACTIVATION);
      }, numbers.FG_DEACTIVATION_MS);
    }
  }

  private rmBoundedActivationClasses_() {
    const { FG_ACTIVATION } = MDCRippleFoundation.cssClasses;
    this.adapter_.removeClass(FG_ACTIVATION);
    this.activationAnimationHasEnded_ = false;
    this.adapter_.computeBoundingRect();
  }

  private resetActivationState_() {
    this.previousActivationEvent_ = this.activationState_.activationEvent;
    this.activationState_ = this.defaultActivationState_();

    setTimeout(
      () => (this.previousActivationEvent_ = undefined),
      MDCRippleFoundation.numbers.TAP_DELAY_MS
    );
  }

  private deactivate_(): void {
    const activationState = this.activationState_;

    if (!activationState.isActivated) {
      return;
    }

    const state: ActivationStateType = { ...activationState };

    if (activationState.isProgrammatic) {
      requestAnimationFrame(() => this.animateDeactivation_(state));
      this.resetActivationState_();
    } else {
      this.deregisterDeactivationHandlers_();
      requestAnimationFrame(() => {
        this.activationState_.hasDeactivationUXRun = true;
        this.animateDeactivation_(state);
        this.resetActivationState_();
      });
    }
  }

  private animateDeactivation_({
    wasActivatedByPointer,
    wasElementMadeActive
  }: ActivationStateType) {
    if (wasActivatedByPointer || wasElementMadeActive) {
      this.runDeactivationUXLogicIfReady_();
    }
  }

  private layoutInternal_() {
    this.frame_ = this.adapter_.computeBoundingRect();
    const maxDim = Math.max(this.frame_.height, this.frame_.width);

    const getBoundedRadius = () => {
      const hypotenuse = Math.sqrt(
        Math.pow(this.frame_.width, 2) + Math.pow(this.frame_.height, 2)
      );
      return hypotenuse + MDCRippleFoundation.numbers.PADDING;
    };

    this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

    this.initialSize_ = Math.floor(
      maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE
    );
    this.fgScale_ = `${this.maxRadius_ / this.initialSize_}`;

    this.updateLayoutCssVars_();
  }

  private updateLayoutCssVars_() {
    const {
      VAR_FG_SIZE,
      VAR_LEFT,
      VAR_TOP,
      VAR_FG_SCALE
    } = MDCRippleFoundation.strings;

    this.adapter_.updateCssVariable(VAR_FG_SIZE, `${this.initialSize_}px`);
    this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

    if (this.adapter_.isUnbounded()) {
      this.unboundedCoords_ = {
        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
      };

      this.adapter_.updateCssVariable(
        VAR_LEFT,
        `${this.unboundedCoords_.left}px`
      );
      this.adapter_.updateCssVariable(
        VAR_TOP,
        `${this.unboundedCoords_.top}px`
      );
    }
  }
}

// PONY FILL ------------------------------------------------------------------------------------------------------------------------------------------

export function closest(element: Element, selector: string): Element | null {
  if (element.closest) {
    return element.closest(selector);
  }

  let el: Element | null = element;
  while (el) {
    if (matches(el, selector)) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

export function matches(element: Element, selector: string): boolean {
  const nativeMatches =
    element.matches ||
    element.webkitMatchesSelector ||
    element.msMatchesSelector;
  return nativeMatches.call(element, selector);
}
