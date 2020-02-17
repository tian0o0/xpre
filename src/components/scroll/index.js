/* eslint-disable no-underscore-dangle */
import BScroll from '@better-scroll/core';
import ScrollBar from '@better-scroll/scroll-bar';
import { createNamespace } from '../../utils';

BScroll.use(ScrollBar);
const [createComponent, bem] = createNamespace('scroll');

const hooks = [
  'beforeScrollStart',
  'scrollStart',
  'scroll',
  'scrollCancel',
  'scrollEnd',
  'touchEnd',
  'flick',
  'refresh',
  'disable',
  'enable',
  'destroy'
];

export default createComponent({
  props: {
    list: {
      type: Array,
      default: () => []
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    freeScroll: {
      type: Boolean,
      default: false
    },
    probeType: {
      type: Number,
      default: 3 // listening scroll hook
    },
    click: {
      type: Boolean,
      default: false
    },
    dblclick: {
      type: Boolean,
      default: false
    },
    startY: {
      type: Number,
      default: 0
    },
    startX: {
      type: Number,
      default: 0
    },
    scrollbar: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.init();
    if (this.horizontal) {
      // console.log(this.$slots.default);
      // hack: 如果是水平滚动，那么其子元素需设置'inline-block'
      this.slots()[0].elm.classList.add('x-scroll__childwrap');
      this.bs.refresh();
    }
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        scrollY: !this.horizontal,
        scrollX: this.horizontal,
        freeScroll: this.freeScroll,
        probeType: this.probeType,
        click: this.click,
        dblclick: this.dblclick,
        startY: this.startY,
        startX: this.startX,
        scrollbar: this.scrollbar
      });
      hooks.forEach((hook) => {
        this.bs.on(hook, (pos) => {
          this.$emit(hook, pos);
        });
      });
    },
  },
  render(h) {
    return (
        <div class={bem({ horizontal: this.horizontal })} ref="scroll">{this.slots()}</div>
    );
  }
});
