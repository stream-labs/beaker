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
import FormGroupH from "@/components/FormGroupH";
import FormGroupV from "@/components/FormGroupV";
import HelloWorld from "@/components/HelloWorld";
import PaymentForm from "@/components/PaymentForm";
import Slider from "@/components/Slider";
import Selector from "@/components/Selector";
import Tabs from "@/components/Tabs";
import TextInput from "@/components/TextInput";
import Toggle from "@/components/Toggle";
import Pagination from "@/components/Pagination";

// Define components

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


export default {
  Accordion,
  Badge,
  Button,
  Callout,
  Checkbox,
  ColorPicker,
  FormGroupH,
  FormGroupV,
  HelloWorld,
  PaymentForm,
  Selector,
  Slider,
  Tabs,
  TextInput,
  Toggle,
  Pagination
};