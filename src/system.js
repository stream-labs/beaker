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
import ContentRow from "@/components/ContentRow";
import EmptySection from "@/components/EmptySection";
import FormGroupH from "@/components/FormGroupH";
import FormGroupV from "@/components/FormGroupV";
import HelloWorld from "@/components/HelloWorld";
import ImagePicker from "@/components/ImagePicker";
import ItemGrid from "@/components/ItemGrid";
import Loading from "@/components/Loading";
import ModalBasic from "@/components/ModalBasic";
import ModalComp from "@/components/ModalComp";
import ModalConfirmation from "@/components/ModalConfirmation";
import ModalRedirect from "@/components/ModalRedirect";
import ModalSubscribe from "@/components/ModalSubscribe";
import NewFeatureOverlay from "@/components/NewFeatureOverlay";
import PaymentForm from "@/components/PaymentForm";
import Slider from "@/components/Slider";
import Selector from "@/components/Selector";
import Spinner from "@/components/Spinner";
import SSProSimulator from "@/components/SSProSimulator";
import Tabs from "@/components/Tabs";
// import TabDevelop from "@/components/TabDevelop";
import TextInput from "@/components/TextInput";
import TooltipNotice from "@/components/TooltipNotice";
import Toggle from "@/components/Toggle";
import Pagination from "@/components/Pagination";
import ProgressBar from "@/components/ProgressBar";
import UrlBar from "@/components/UrlBar";
import VirtualItem from "@/components/VirtualItem";

// Define components
const components = [
  Accordion,
  Badge,
  Button,
  CallToAction,
  Callout,
  ColorPicker,
  ContentRow,
  EmptySection,
  FormGroupH,
  FormGroupV,
  HelloWorld,
  ImagePicker,
  ItemGrid,
  Loading,
  ModalBasic,
  ModalComp,
  ModalConfirmation,
  ModalRedirect,
  ModalSubscribe,
  NewFeatureOverlay,
  Selector,
  Slider,
  Spinner,
  SSProSimulator,
  Tabs,
  // TabDevelop,
  TextInput,
  Toggle,
  TooltipNotice,
  Pagination,
  ProgressBar,
  UrlBar,
  VirtualItem
];

export {
  Accordion,
  Badge,
  Button,
  CallToAction,
  Callout,
  Checkbox,
  ColorPicker,
  ContentRows,
  EmptySection,
  FormGroupH,
  FormGroupV,
  HelloWorld,
  ImagePicker,
  ItemGrid,
  Loading,
  ModalBasic,
  ModalComp,
  ModalConfirmation,
  ModalRedirect,
  ModalSubscribe,
  NewFeatureOverlay,
  PaymentForm,
  Selector,
  Slider,
  Spinner,
  SSProSimulator,
  Tabs,
  // TabDevelop,
  TextInput,
  Toggle,
  TooltipNotice,
  Pagination,
  ProgressBar,
  UrlBar,
  VirtualItem
};
