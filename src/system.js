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
import CallToAction from "@/components/CallToAction";
import Callout from "@/components/Callout";
import Checkbox from "@/components/Checkbox";
import ColorPicker from "@/components/ColorPicker";
import FormGroupH from "@/components/FormGroupH";
import FormGroupV from "@/components/FormGroupV";
import HelloWorld from "@/components/HelloWorld";
import ImagePicker from "@/components/ImagePicker";
import ItemGrid from "@/components/ItemGrid";
import PaymentForm from "@/components/PaymentForm";
import Slider from "@/components/Slider";
import Selector from "@/components/Selector";
import Spinner from "@/components/Spinner";
import Tabs from "@/components/Tabs";
import TextInput from "@/components/TextInput";
import Toggle from "@/components/Toggle";
import Pagination from "@/components/Pagination";
import ProgressBar from "@/components/ProgressBar";
import VirtualItem from "@/components/VirtualItem";

// Define components
const components = [
  Accordion,
  Badge,
  Button,
  CallToAction,
  Callout,
  ColorPicker,
  FormGroupH,
  FormGroupV,
  HelloWorld,
  ImagePicker,
  ItemGrid,
  Selector,
  Slider,
  Spinner,
  Tabs,
  TextInput,
  Pagination,
  ProgressBar,
  VirtualItem
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
  CallToAction,
  Callout,
  Checkbox,
  ColorPicker,
  FormGroupH,
  FormGroupV,
  HelloWorld,
  ImagePicker,
  ItemGrid,
  PaymentForm,
  Selector,
  Slider,
  Spinner,
  Tabs,
  TextInput,
  Pagination,
  ProgressBar,
  VirtualItem
};
