import { DirectiveOptions } from "vue/types/options";

function queryElement(el) {
  let e = el.getBoundingClientRect(el);
  let q = {
    width: e.width,
    height: e.height,
    top: e.left,
    left: e.left
  };
  return q;
}

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

function initHover(el) {
  let rect = queryElement(el);
  let hover = document.createElement("div");
  hover.style.position = "absolute";
  hover.style.left = -Math.abs(el.padding) + "px";
  hover.style.top = -Math.abs(el.padding) + "px";
  hover.style.width = rect.width + "px";
  hover.style.height = rect.height + "px";

  hover.style.zIndex = "40";
  hover.className = "s-tooltip__hover";
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
}

function handleMouseOver(el) {
  el.querySelector(".s-tooltip").classList.add("s-tooltip-visible");
}

function handleMouseOut(el) {
  el.querySelector(".s-tooltip").classList.remove("s-tooltip-visible");
}

function getPlacement(el) {
  let element = queryElement(el);
  let tooltip = queryElement(el.parentElement.querySelector("div.s-tooltip"))
  let placement = {
    topOffset: -Math.abs(tooltip.height + 8),
    leftOffset: element.width / 2 - tooltip.width / 2,
    elementWidth: element.width,
    elementHeight: element.height
  };
  return placement;
}

function initTooltip(el, binding) {
  let tooltip = document.createElement("div");
  tooltip.style.left = "inherit";
  tooltip.style.top = "inherit";
  tooltip.className = "s-tooltip";
  tooltip.innerHTML =
    '<div class="s-tooltip__label">' +
    binding.value +
    '</div><div class="s-tooltip__caret"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 5" width="16px" height="5px"><path d="M16 0c-1.11 0-2.17.44-2.96 1.23l-2.83 2.85C8.99 5.31 7 5.31 5.78 4.08L2.96 1.23C2.17.44 1.11 0 0 0h16z"></path></svg></div>';
  el.insertAdjacentElement("afterbegin", tooltip);
  let placement = getPlacement(el);
  tooltip.style.transform =
    "translate(" + placement.leftOffset + "px," + placement.topOffset + "px)";
}

function redrawTooltip(el) {
  let placement = getPlacement(el);
  let tooltip = el.parentElement.parentElement.querySelector(".s-tooltip");
  let h = getComputedStyle(tooltip).height;
  tooltip.style.height = 0;
  setTimeout(() => {
    tooltip.style.height = h;
  });
  tooltip.style.transform =
    "translate(" + placement.leftOffset + "px," + placement.topOffset + "px)";
}

var debouncedTooltip: boolean = false;

const Tooltip: DirectiveOptions = {
  inserted(el, binding) {
    initHover(el);
    initTooltip(el, binding);

    new ResizeSensor(el, function() {
      if (!debouncedTooltip) {
        debounce().then(() => {
          redrawTooltip(el);
        });
      }
    });
  },
  update(vnode, oldVnode) {
    console.log(vnode);
  },
  unbind(el, binding) {
    el.removeEventListener("mouseover", () => {
      handleMouseOver(el);
    });
    el.removeEventListener("mouseout", () => {
      handleMouseOut(el);
    });
  }
};

export default Tooltip;



// Todo Get Proper location for all Elements, right now only small ones work.
