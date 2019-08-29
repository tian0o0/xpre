import { createNamespace, isDef } from '../../utils';
import { raf, doubleRaf } from '../../utils/dom/raf';
import Cell from '../cell';
import { cellProps } from '../cell/shared';
import { ChildrenMixin } from '../../mixins/relation';

const [createComponent, bem] = createNamespace('collapse-item');
const CELL_SLOTS = ['title', 'icon', 'right-icon'];

export default createComponent({
  mixins: [ChildrenMixin('xCollapse')],

  props: {
    ...cellProps,
    name: [Number, String],
    disabled: Boolean,
    isLink: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      show: null,
      inited: null
    };
  },

  computed: {
    currentName() {
      return isDef(this.name) ? this.name : this.index;
    },

    expanded() {
      if (!this.parent) {
        return null;
      }

      const { value } = this.parent;
      return this.parent.accordion
        ? value === this.currentName
        : value.some(name => name === this.currentName);
    }
  },

  created() {
    this.show = this.expanded;
    this.inited = this.expanded;
  },

  watch: {
    expanded(expanded, prev) {
      if (prev === null) {
        return;
      }

      if (expanded) {
        this.show = true;
        this.inited = true;
      }

      // Use raf: flick when opened in safari
      // Use nextTick: closing animation failed when set `user-select: none`
      const nextTick = expanded ? this.$nextTick : raf;

      nextTick(() => {
        console.log(this.$refs);
        const { content, wrapper } = this.$refs;
        if (!content || !wrapper) {
          return;
        }

        const { offsetHeight } = content;
        if (offsetHeight) {
          const contentHeight = `${offsetHeight}px`;
          wrapper.style.height = expanded ? 0 : contentHeight;

          // use double raf to ensure animation can start in mobile safari
          doubleRaf(() => {
            wrapper.style.height = expanded ? contentHeight : 0;
          });
        } else {
          this.onTransitionEnd();
        }
      });
    }
  },

  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }

      const { parent } = this;
      const name =
        parent.accordion && this.currentName === parent.value ? '' : this.currentName;
      this.parent.switch(name, !this.expanded);
    },

    onTransitionEnd() {
      if (!this.expanded) {
        this.show = false;
      } else {
        this.$refs.wrapper.style.height = '';
      }
    }
  },

  render(h) {
    const { disabled, expanded } = this;

    const titleSlots = CELL_SLOTS.reduce((slots, name) => {
      if (this.slots(name)) {
        slots[name] = () => this.slots(name);
      }
      return slots;
    }, {});

    if (this.slots('value')) {
      titleSlots.default = () => this.slots('value');
    }

    const Title = (
      <Cell
        role="button"
        class={bem('title', { disabled, expanded })}
        onClick={this.onClick}
        scopedSlots={titleSlots}
        tabindex={disabled ? -1 : 0}
        aria-expanded={String(expanded)}
        {...{ props: this.$props }}
      />
    );

    const Content = this.inited && (
      <div
        vShow={this.show}
        ref="wrapper"
        class={bem('wrapper')}
        onTransitionend={this.onTransitionEnd}
      >
        <div ref="content" class={bem('content')}>
          {this.slots()}
        </div>
      </div>
    );

    return (
      <div class={[bem(), { 'x-hairline--top': this.index }]}>
        {Title}
        {Content}
      </div>
    );
  }
});
