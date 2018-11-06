/**
 * System.js creates the Design System Library.
 * It’s used in the system itself and when exporting it.
 *
 * You should & can add your own dependencies here if needed.
 */

// Define contexts to require
const contexts = require.context("@/components/", true, /\.vue$/);

import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import FormGroupH from "@/components/FormGroupH";
import FormGroupV from "@/components/FormGroupV";
import HelloWorld from "@/components/HelloWorld";
import ProgressBadge from "@/components/ProgressBadge";
import Slider from "@/components/Slider";
import Selector from "@/components/Selector";
import Tabs from "@/components/Tabs";

// Define components
const components = [
  Accordion,
  Button,
  FormGroupH,
  FormGroupV,
  HelloWorld,
  ProgressBadge,
  Selector,
  Slider,
  Tabs
];

// Install the above defined components
// const System = {
//   install(Vue) {
//     components.forEach(component => Vue.component(component.name, component));
//   }
// };

// Automatic installation if Vue has been added to the global scope
// if (typeof window !== "undefined" && window.Vue) {
//   window.Vue.use(System);
// }

// Finally export as default
export default components;
