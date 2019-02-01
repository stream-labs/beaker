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
import Checkbox from "@/components/Checkbox";
import ColorPicker from "@/components/ColorPicker";
import CreditCardForm from "@/components/CreditCardForm";
import FormGroupH from "@/components/FormGroupH";
import FormGroupV from "@/components/FormGroupV";
import HelloWorld from "@/components/HelloWorld";
import Slider from "@/components/Slider";
import Selector from "@/components/Selector";
import Tabs from "@/components/Tabs";
import TextInput from "@/components/TextInput";
import Toggle from "@/components/Toggle";
import Pagination from "@/components/Pagination";

// Define components
<<<<<<< HEAD
// const components = [
//   Accordion,
//   Button,
//   Callout,
//   Checkbox,
//   ColorPicker,
//   CreditCardForm,
//   FormGroupH,
//   FormGroupV,
//   HelloWorld,
//   Badge,
//   Selector,
//   Slider,
//   Tabs,
//   Pagination
// ];
=======
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
  Pagination
];
>>>>>>> a413767c41d3d6090beb315d3f1e925f71b8b3e1

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
<<<<<<< HEAD
// export {
//   Accordion,
//   Button,
//   FormGroupH,
//   FormGroupV,
//   HelloWorld,
//   Badge,
//   Selector,
//   Slider,
//   Tabs,
//   Pagination
// };

export default {
=======
export {
>>>>>>> a413767c41d3d6090beb315d3f1e925f71b8b3e1
  Accordion,
  Badge,
  Button,
  Callout,
<<<<<<< HEAD
  Checkbox,
  ColorPicker,
  CreditCardForm,
=======
>>>>>>> a413767c41d3d6090beb315d3f1e925f71b8b3e1
  FormGroupH,
  FormGroupV,
  HelloWorld,
  Selector,
  Slider,
  Tabs,
  TextInput,
  Toggle,
  Pagination
};

// export default {
//   Accordion,
//   Badge,
//   Button,
//   FormGroupH,
//   FormGroupV,
//   HelloWorld,
//   Selector,
//   Slider,
//   Tabs,
//   Pagination
// };
