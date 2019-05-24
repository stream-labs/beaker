import { DirectiveOptions } from 'vue/types/options';

function queryElement(el) {
  let e = el.getBoundingClientRect(el);
  let q = {
    width: e.width,
    height: e.height,
    top: e.left,
    left: e.left
  }
  return q;
}

function initHover(el,) {
  let rect = queryElement(el);
  let hover = document.createElement("div");
  hover.style.position = "absolute";
  hover.style.width = rect.width + "px";
  hover.style.height = rect.height + "px";
  hover.style.top = "inherit";
  hover.style.left = "inherit";
  hover.style.zIndex = "40";
  hover.className = "s-tooltip__hover";
  el.insertAdjacentElement("afterbegin", hover);
  el.parentElement.querySelector(".s-tooltip__hover").addEventListener("mouseover", () => { handleMouseOver(el) });
  el.parentElement.querySelector(".s-tooltip__hover").addEventListener("mouseout", () => { handleMouseOut(el) });
}

function handleMouseOver(el) {
    el.querySelector(".s-tooltip").classList.add("s-tooltip-visible");
}

function handleMouseOut(el) {
  el.querySelector(".s-tooltip").classList.remove("s-tooltip-visible");
}

function getPlacement(el) {
  let element = el.getBoundingClientRect();
  let tooltip = el.parentElement.querySelector("div.s-tooltip").getBoundingClientRect();
  let placement = {
    topOffset: -Math.abs(tooltip.height + 8),
    leftOffset: (element.width / 2 - tooltip.width / 2),
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
  tooltip.innerHTML = "<div class=\"s-tooltip__label\">" + binding.value + "</div><div class=\"s-tooltip__caret\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 5\" width=\"16px\" height=\"5px\"><path d=\"M16 0c-1.11 0-2.17.44-2.96 1.23l-2.83 2.85C8.99 5.31 7 5.31 5.78 4.08L2.96 1.23C2.17.44 1.11 0 0 0h16z\"></path></svg></div>";
  el.insertAdjacentElement("afterbegin", tooltip);
  let placement = getPlacement(el);
  tooltip.style.transform = "translate(" + placement.leftOffset + "px," + placement.topOffset + "px)";

}

const Tooltip: DirectiveOptions = {
    inserted(el, binding) {
      initHover(el);
      initTooltip(el,binding);
    },
    update(el, value: any) {
    },
    unbind(el, binding) {
      el.removeEventListener("mouseover", () => { handleMouseOver(el) });
      el.removeEventListener("mouseout", () => { handleMouseOut(el) });
    }
}

export default Tooltip;
