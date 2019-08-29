// JSX 元素隐式具有类型 "any"，因为不存在接口 "JSX.IntrinsicElements"

import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
