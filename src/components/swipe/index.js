import { createNamespace } from '../../utils';
import { preventDefault } from '../../utils/dom/event';
import { TouchMixin } from '../../mixins/touch';
import { BindEventMixin } from '../../mixins/bind-event';
import { doubleRaf } from '../../utils/dom/raf';
import { range } from '../../utils/format/number';

const [createComponent, bem] = createNamespace('swipe');

export default createComponent({
  mixins: [
    TouchMixin,
    BindEventMixin(function (bind, isBind) {
      bind(window, 'resize', this.onResize, true);

      if (isBind) {
        this.initialize();
      } else {
        this.clear();
      }
    })
  ],

  props: {
    width: Number,
    height: Number,
    autoplay: Number,
    vertical: Boolean,
    indicatorColor: String,
    loop: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 500
    },
    touchable: {
      type: Boolean,
      default: true
    },
    initialSwipe: {
      type: Number,
      default: 0
    },
    showIndicators: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      computedWidth: 0,
      computedHeight: 0,
      offset: 0,
      active: 0,
      deltaX: 0,
      deltaY: 0,
      swipes: [],
      swiping: false
    };
  },

  watch: {
    swipes() {
      this.initialize();
    },

    initialSwipe() {
      this.initialize();
    },

    autoplay(autoplay) {
      if (!autoplay) {
        this.clear();
      } else {
        this.autoPlay();
      }
    }
  },

  computed: {
    count() {
      return this.swipes.length;
    },

    delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },

    size() {
      return this[this.vertical ? 'computedHeight' : 'computedWidth'];
    },

    trackSize() {
      return this.count * this.size;
    },

    activeIndicator() {
      return (this.active + this.count) % this.count;
    },

    isCorrectDirection() {
      const expect = this.vertical ? 'vertical' : 'horizontal';
      return this.direction === expect;
    },

    trackStyle() {
      const mainAxis = this.vertical ? 'height' : 'width';
      const crossAxis = this.vertical ? 'width' : 'height';

      return {
        [mainAxis]: `${this.trackSize}px`,
        [crossAxis]: this[crossAxis] ? `${this[crossAxis]}px` : '',
        transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
        transform: `translate${this.vertical ? 'Y' : 'X'}(${this.offset}px)`
      };
    },

    indicatorStyle() {
      return {
        backgroundColor: this.indicatorColor
      };
    },

    minOffset() {
      const rect = this.$el.getBoundingClientRect();
      return (this.vertical ? rect.height : rect.width) - this.size * this.count;
    }
  },

  methods: {
    // initialize swipe position
    initialize(active = this.initialSwipe) {
      clearTimeout(this.timer);

      if (this.$el) {
        const rect = this.$el.getBoundingClientRect();
        this.computedWidth = this.width || rect.width;
        this.computedHeight = this.height || rect.height;
      }

      this.swiping = true;
      this.active = active;
      this.offset = this.count > 1 ? -this.size * this.active : 0;
      this.swipes.forEach(swipe => {
        swipe.offset = 0;
      });
      this.autoPlay();
    },

    onResize() {
      this.initialize(this.activeIndicator);
    },

    onTouchStart(event) {
      if (!this.touchable) return;

      this.clear();
      this.swiping = true;
      this.touchStart(event);
      this.correctPosition();
    },

    onTouchMove(event) {
      if (!this.touchable || !this.swiping) return;

      this.touchMove(event);

      if (this.isCorrectDirection) {
        preventDefault(event, true);
        this.move({ offset: this.delta });
      }
    },

    onTouchEnd() {
      if (!this.touchable || !this.swiping) return;

      if (this.delta && this.isCorrectDirection) {
        const offset = this.vertical ? this.offsetY : this.offsetX;
        this.move({
          pace: offset > 0 ? (this.delta > 0 ? -1 : 1) : 0,
          emitChange: true
        });
      }

      this.swiping = false;
      this.autoPlay();
    },

    getTargetActive(pace) {
      const { active, count } = this;

      if (pace) {
        if (this.loop) {
          return range(active + pace, -1, count);
        }

        return range(active + pace, 0, count - 1);
      }

      return active;
    },

    getTargetOffset(targetActive, offset) {
      let currentPosition = targetActive * this.size;
      if (!this.loop) {
        currentPosition = Math.min(currentPosition, -this.minOffset);
      }

      let targetOffset = Math.round(offset - currentPosition);
      if (!this.loop) {
        targetOffset = range(targetOffset, this.minOffset, 0);
      }

      return targetOffset;
    },

    move({ pace = 0, offset = 0, emitChange }) {
      const { loop, count, active, swipes, trackSize, minOffset } = this;

      if (count <= 1) {
        return;
      }

      const targetActive = this.getTargetActive(pace);
      const targetOffset = this.getTargetOffset(targetActive, offset);

      // auto move first and last swipe in loop mode
      if (loop) {
        if (swipes[0]) {
          const outRightBound = targetOffset < minOffset;
          swipes[0].offset = outRightBound ? trackSize : 0;
        }

        if (swipes[count - 1]) {
          const outLeftBound = targetOffset > 0;
          swipes[count - 1].offset = outLeftBound ? -trackSize : 0;
        }
      }

      this.active = targetActive;
      this.offset = targetOffset;

      if (emitChange && targetActive !== active) {
        this.$emit('change', this.activeIndicator);
      }
    },

    swipeTo(index, options = {}) {
      this.swiping = true;
      this.resetTouchStatus();
      this.correctPosition();

      doubleRaf(() => {
        this.move({
          pace: (index % this.count) - this.active,
          emitChange: true
        });

        if (options.immediate) {
          doubleRaf(() => {
            this.swiping = false;
          });
        } else {
          this.swiping = false;
        }
      });
    },

    correctPosition() {
      if (this.active <= -1) {
        this.move({ pace: this.count });
      }

      if (this.active >= this.count) {
        this.move({ pace: -this.count });
      }
    },

    clear() {
      clearTimeout(this.timer);
    },

    autoPlay() {
      const { autoplay } = this;

      if (autoplay && this.count > 1) {
        this.clear();
        this.timer = setTimeout(() => {
          this.swiping = true;
          this.resetTouchStatus();
          this.correctPosition();

          doubleRaf(() => {
            this.swiping = false;
            this.move({
              pace: 1,
              emitChange: true
            });
            this.autoPlay();
          });
        }, autoplay);
      }
    },

    renderIndicator() {
      const { count, activeIndicator } = this;
      const slot = this.slots('indicator');

      if (slot) {
        return slot;
      }

      if (this.showIndicators && count > 1) {
        return (
          <div class={bem('indicators', { vertical: this.vertical })}>
            {Array(...Array(count)).map((empty, index) => (
              <i
                class={bem('indicator', { active: index === activeIndicator })}
                style={index === activeIndicator ? this.indicatorStyle : null}
              />
            ))}
          </div>
        );
      }
    }
  },

  render(h) {
    return (
      <div class={bem()}>
        <div
          ref="track"
          style={this.trackStyle}
          class={bem('track')}
          onTouchstart={this.onTouchStart}
          onTouchmove={this.onTouchMove}
          onTouchend={this.onTouchEnd}
          onTouchcancel={this.onTouchEnd}
        >
          {this.slots()}
        </div>
        {this.renderIndicator()}
      </div>
    );
  }
});
