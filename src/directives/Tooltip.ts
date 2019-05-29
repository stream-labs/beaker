import { DirectiveOptions } from "vue/types/options";

function queryElement(el) {
  let e = el.getBoundingClientRect(el);
  let r: any = getComputedStyle(el);
  let q = {
    width: e.width,
    height: e.height,
    top: e.left,
    left: e.left,
    paddingLeft: parseInt(r.paddingLeft.replace(/\D/g, "")),
    paddingTop: parseInt(r.paddingTop.replace(/\D/g, ""))
  };
  return q;
}

// css resize sensor broken down, removed z-index sensor
function ResizeSensor(el: Element, callback) {
  let expand = document.createElement("div");
  expand.style.position = "absolute";
  expand.style.left = "0px";
  expand.style.top = "0px";
  expand.style.right = "0px";
  expand.style.bottom = "0px";
  expand.style.overflow = "hidden";
  expand.style.visibility = "hidden";
  let expandChild = document.createElement("div");
  expandChild.style.position = "absolute";
  expandChild.style.left = "0px";
  expandChild.style.top = "0px";
  expandChild.style.width = "10000000px";
  expandChild.style.height = "10000000px";
  expand.appendChild(expandChild);
  let shrink = document.createElement("div");
  shrink.style.position = "absolute";
  shrink.style.left = "0px";
  shrink.style.top = "0px";
  shrink.style.right = "0px";
  shrink.style.bottom = "0px";
  shrink.style.overflow = "hidden";
  shrink.style.visibility = "hidden";
  let shrinkChild = document.createElement("div");
  shrinkChild.style.position = "absolute";
  shrinkChild.style.left = "0px";
  shrinkChild.style.top = "0px";
  shrinkChild.style.width = "200%";
  shrinkChild.style.height = "200%";
  shrink.appendChild(shrinkChild);
  el.appendChild(expand);
  el.appendChild(shrink);
  function setScroll() {
    expand.scrollLeft = 10000000;
    expand.scrollTop = 10000000;
    shrink.scrollLeft = 10000000;
    shrink.scrollTop = 10000000;
  }
  setScroll();
  let size = el.getBoundingClientRect();
  let currentWidth = size.width;
  let currentHeight = size.height;
  let onScroll = function() {
    let size = el.getBoundingClientRect();
    let newWidth = size.width;
    let newHeight = size.height;
    if (newWidth != currentWidth || newHeight != currentHeight) {
      currentWidth = newWidth;
      currentHeight = newHeight;
      callback();
    }
    setScroll();
  };
  expand.addEventListener("scroll", onScroll);
  shrink.addEventListener("scroll", onScroll);
}


// simple debounce promise
function debounce() {
  return new Promise(resolve => {
    if (!debouncedTooltip) {
      debouncedTooltip = true;
      setTimeout(() => {
        debouncedTooltip = false;
        resolve();
      }, 500);
    }
  });
}









function init(el, binding) {
  el.parentElement.style.position = "relative";
  let rect = queryElement(el);
  let hover = document.createElement("div");

  hover.style.width = rect.width + "px";
  hover.style.height = rect.height + "px";
  hover.style.backgroundColor = "#ff000025";
  hover.style.transform = "translate(-" + rect.paddingLeft + "px,-" + rect.paddingTop + "px)";
  hover.className = "s-tooltip__hover";
  let tooltip = document.createElement("div");

  tooltip.className = "s-tooltip";
  tooltip.innerHTML =
    '<div class="s-tooltip__label">' +
    binding.value +
    '</div><div class="s-tooltip__caret"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 5" width="16px" height="5px"><path d="M16 0c-1.11 0-2.17.44-2.96 1.23l-2.83 2.85C8.99 5.31 7 5.31 5.78 4.08L2.96 1.23C2.17.44 1.11 0 0 0h16z"></path></svg></div>';
  hover.insertAdjacentElement("afterbegin", tooltip);
   el.insertAdjacentElement("afterbegin", hover);
   el.parentElement
    .querySelector(".s-tooltip__hover")
    .addEventListener("mouseover", () => {
      handleMouseOver(el);
    });
  el.parentElement
    .querySelector(".s-tooltip__hover")
    .addEventListener("mouseout", () => {
      handleMouseOut(el);
    });
    el.parentElement
    .querySelector(".s-tooltip__hover")
    .addEventListener("mousedown", () => {
      handleMouseClick(el, event);
    });
    let placement = getPlacement(el);
    tooltip.style.transform =
    "translate(" + placement.leftOffset + "px," + placement.topOffset + "px)";
}

function handleMouseOver(el) {
  el.querySelector(".s-tooltip").classList.add("s-tooltip-visible");
}

function handleMouseOut(el) {
  el.querySelector(".s-tooltip").classList.remove("s-tooltip-visible");
}

function handleMouseClick(el, event) {
  el.querySelector(".s-tooltip__hover").style.pointerEvents = "none";
  let element:any = document.elementFromPoint(event.clientX, event.clientY);
  element.click();
  el.querySelector(".s-tooltip__hover").style.pointerEvents = "inherit";
}

function getPlacement(el) {
  let element = queryElement(el);
  let tooltip = queryElement(el.parentElement.querySelector("div.s-tooltip"))
  let placement = {
    topOffset: -Math.abs(tooltip.height + 8 + element.paddingTop),
    leftOffset: element.width / 2 - tooltip.width / 2 - element.paddingLeft,
    elementWidth: element.width,
    elementHeight: element.height
  };
  return placement;
}


function redrawTooltip(el) {
  let placement = getPlacement(el);
  let rect = queryElement(el);
  let tooltip = el.parentElement.parentElement.querySelector(".s-tooltip");
  let hover = el.parentElement.parentElement.querySelector(".s-tooltip__hover");
  let ht = getComputedStyle(tooltip).height;
  let hh = getComputedStyle(hover).height;
  let wt = getComputedStyle(tooltip).width;
  let wh = getComputedStyle(hover).width;
  tooltip.style.height = 0;
  hover.style.height = 0;
  tooltip.style.width = 0;
  hover.style.width = 0;
  setTimeout(() => {
    tooltip.style.height = ht;
    hover.style.height = hh;
    tooltip.style.width = wt;
    hover.style.width = wh;
  });
  tooltip.style.transform =
    "translate(" + placement.leftOffset + "px," + placement.topOffset + "px)";
    hover.style.transform = "translate(-" + rect.paddingLeft + "px,-" + rect.paddingTop + "px)";
}

var debouncedTooltip: boolean = false;

const Tooltip: DirectiveOptions = {
  inserted(el, binding) {
    //initHover(el);
    //initTooltip(el, binding);
    init(el,binding);
    new ResizeSensor(el, function() {
      if (!debouncedTooltip) {
        debounce().then(() => {
          redrawTooltip(el);
        });
      }
    });
  },
  unbind(el) {
    el.removeEventListener("mouseover", () => {
      handleMouseOver(el);
    });
    el.removeEventListener("mouseout", () => {
      handleMouseOut(el);
    });
  }
};

export default Tooltip;
