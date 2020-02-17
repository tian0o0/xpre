/* eslint-disable */
// This file is auto gererated by build/build-entry.js
import { VueConstructor } from 'vue/types';
import Button from './components/button';
import Cell from './components/cell';
import CellGroup from './components/cell-group';
import Col from './components/col';
import Collapse from './components/collapse';
import CollapseItem from './components/collapse-item';
import Icon from './components/icon';
import Image from './components/image';
import ImagePreview from './components/image-preview';
import Lazyload from './components/lazyload';
import Loading from './components/loading';
import Locale from './components/locale';
import NavBar from './components/nav-bar';
import Overlay from './components/overlay';
import Row from './components/row';
import Scroll from './components/scroll';
import Slide from './components/slide';
import Swipe from './components/swipe';
import SwipeItem from './components/swipe-item';
import Toast from './components/toast';
import Uploader from './components/uploader';

declare global {
  interface Window {
    Vue?: VueConstructor;
  }
}

const version = '0.0.2';
const components: any[] = [
  Button,
  Cell,
  CellGroup,
  Col,
  Collapse,
  CollapseItem,
  Icon,
  Image,
  ImagePreview,
  Loading,
  NavBar,
  Overlay,
  Row,
  Scroll,
  Slide,
  Swipe,
  SwipeItem,
  Toast,
  Uploader
];

const install = (Vue: VueConstructor) => {
  components.forEach(Component => {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Button,
  Cell,
  CellGroup,
  Col,
  Collapse,
  CollapseItem,
  Icon,
  Image,
  ImagePreview,
  Lazyload,
  Loading,
  Locale,
  NavBar,
  Overlay,
  Row,
  Scroll,
  Slide,
  Swipe,
  SwipeItem,
  Toast,
  Uploader
};

export default {
  install,
  version
};
