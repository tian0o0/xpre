/* eslint-disable no-underscore-dangle */
import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';
import { createNamespace } from '../../utils';

BScroll.use(Slide);

const [createComponent, bem] = createNamespace('slide');

export default createComponent({
  data() {
    return {
      slide: null,
      currentPageIndex: 0,
      playTimer: 0
    };
  },
  props: {
    click: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    beforeScrollStart: {
      type: null,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: [Number, Boolean],
      default: 3000
    },
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    clearTimeout(this.playTimer);
    this.bs.destroy();
  },
  watch: {
    data() {
      setTimeout(() => {
        this._refresh();
      }, 20);
    }
  },
  methods: {
    init() {
      clearTimeout(this.playTimer);
      this.bs = new BScroll(this.$refs.slide, {
        scrollX: !this.vertical,
        scrollY: this.vertical,
        slide: {
          loop: this.loop,
          threshold: 100
        },
        useTransition: true,
        momentum: false,
        bounce: false,
        stopPropagation: true,
        probeType: 2
      });

      // user touches the slide area
      this.bs.on('beforeScrollStart', () => {
        clearTimeout(this.playTimer);
      });
      this.bs.on('scroll', (page) => {
        console.log(page);
      });
      // user touched the slide done
      this.bs.on('scrollEnd', (page) => {
        this.autoplay && this.autoGoNext();
      });
      this.bs.on('slideWillChange', ({ pageX, pageY }) => {
        this.currentPageIndex = this.vertical ? pageY : pageX;
        this.$emit('slideWillChange', this.currentPageIndex);
      });
      this.autoplay && this.autoGoNext();
    },
    nextPage() {
      this.bs.next();
    },
    prePage() {
      this.bs.prev();
    },
    autoGoNext() {
      clearTimeout(this.playTimer);
      this.playTimer = setTimeout(() => {
        this.nextPage();
      }, this.autoplay);
    },
    renderIndicator() {
      const children = this.$slots.default;
      const { indicator } = this.$slots;
      if (indicator) return indicator;

      return (
            <div class={bem('indicators', { vertical: this.vertical })}>
                {children.map((_, index) => (
                    <span class={bem('indicator', { active: index === this.currentPageIndex })}></span>
                ))}
            </div>
      );
    }
  },

  render(h) {
    const slideStyle = {
      height: this.$attrs.height + 'px'
    };
    return (
        <div class={bem()} ref="slide">
            <div class={bem('innerwrap')} style={slideStyle}>{this.slots()}</div>
            {this.renderIndicator()}
        </div>
    );
  }
});
