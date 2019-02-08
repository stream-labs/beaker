/**
 * System.js creates the Design System Library.
 * It’s used in the system itself and when exporting it.
 *
 * You should & can add your own dependencies here if needed.
 */

// Define contexts to require
// const contexts = require.context("@/components/", true, /\.vue$/);

import Accordion from "@/components/Accordion";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Callout from "@/components/Callout";
import FormGroupH from "@/components/FormGroupH";
import FormGroupV from "@/components/FormGroupV";
import HelloWorld from "@/components/HelloWorld";
import Slider from "@/components/Slider";
import Selector from "@/components/Selector";
import Tabs from "@/components/Tabs";
import Pagination from "@/components/Pagination";
import ProgressBar from "@/components/ProgressBar";

// Define components
const components = [
  Accordion,
  Badge,
  Button,
  Callout,
  FormGroupH,
  FormGroupV,
  HelloWorld,
  Selector,
  Slider,
  Tabs,
  Pagination,
  ProgressBar
];

// Install the above defined components
// const System = {
//   install(Vue) {
//     components.forEach(component => Vue.component(component.name, component));
//   }
// };

// if (typeof window !== "undefined" && window.Vue) {
//   window.Vue.use(System);
// }

// Finally export as default
export {
  Accordion,
  Badge,
  Button,
  Callout,
  FormGroupH,
  FormGroupV,
  HelloWorld,
  Selector,
  Slider,
  Tabs,
  Pagination,
  ProgressBar
};
