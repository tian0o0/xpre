import { createNamespace, isDef } from '../../utils';
import { PopupMixin } from '../../mixins/popup';
import Icon from '../icon';
import Loading from '../loading';

const [createComponent, bem] = createNamespace('toast');

export default createComponent({
  mixins: [PopupMixin],

  props: {
    icon: String,
    iconPrefix: String,
    className: null,
    loadingType: String,
    forbidClick: Boolean,
    message: [Number, String],
    type: {
      type: String,
      default: 'text'
    },
    position: {
      type: String,
      default: 'middle'
    },
    // lockScroll: {
    //   type: Boolean,
    //   default: false
    // }
  },

  data() {
    return {
      clickable: false
    };
  },

  mounted() {
    this.toggleClickable();
  },

  destroyed() {
    this.toggleClickable();
  },

  watch: {
    value() {
      this.toggleClickable();
    },

    // 可手动设置：toast.forbidClick = false;
    forbidClick() {
      this.toggleClickable();
    }
  },

  methods: {
    toggleClickable() {
      const clickable = this.value && this.forbidClick;

      if (this.clickable !== clickable) {
        this.clickable = clickable;
        const action = clickable ? 'add' : 'remove';
        document.body.classList[action]('x-toast--unclickable');
      }
    },

    /* istanbul ignore next */
    onAfterEnter() {
      this.$emit('opened');
      if (this.onOpen) {
        this.onOpen();
      }
    },

    onAfterLeave() {
      this.$emit('closed');
      if (this.onClose) {
        this.onClose();
      }
    }
  },

  render() {
    const { type, icon, message, iconPrefix, loadingType } = this;

    const hasIcon = icon || (type === 'success' || type === 'fail');

    function ToastIcon() {
      if (hasIcon) {
        return <Icon class={bem('icon')} classPrefix={iconPrefix} name={icon || type} />;
      }

      if (type === 'loading') {
        return <Loading class={bem('loading')} color="white" type={loadingType} />;
      }
    }

    function Message() {
      if (!isDef(message) || message === '') {
        return;
      }

      if (type === 'html') {
        return <div class={bem('text')} domPropsInnerHTML={message} />;
      }

      return <div class={bem('text')}>{message}</div>;
    }

    return (
      <transition
        name="x-fade"
        onAfterEnter={this.onAfterEnter}
        onAfterLeave={this.onAfterLeave}
      >
        <div
          vShow={this.value}
          class={[
            bem([this.position, { text: !hasIcon && type !== 'loading' }]),
            this.className
          ]}
        >
          {ToastIcon()}
          {Message()}
        </div>
      </transition>
    );
  }
});
