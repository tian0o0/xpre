import { createNamespace, noop } from '../../utils';
import { emit, inherit } from '../../utils/functional';
import { routeProps, RouteProps, functionalRoute } from '../../utils/router';
import { WHITE } from '../../utils/color';
import Icon from '../icon';
import Loading, { LoadingType } from '../loading';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../../utils/types';

export type ButtonType = 'default' | 'primary' | 'info' | 'warning' | 'danger';

export type ButtonSize = 'large' | 'normal' | 'small' | 'mini';

export type ButtonProps = RouteProps & {
  tag: keyof HTMLElementTagNameMap | string;
  type: ButtonType;
  size: ButtonSize;
  text?: string;
  icon?: string;
  block?: boolean;
  plain?: boolean;
  round?: boolean;
  square?: boolean;
  loading?: boolean;
  hairline?: boolean;
  disabled?: boolean;
  nativeType?: string;
  loadingSize: string;
  loadingType?: LoadingType;
  loadingText?: string;
  ripple?: boolean;
  raised?: boolean;
  color?: string;
};

export type ButtonEvents = {
  onClick?(event: Event): void;
};


const [createComponent, bem] = createNamespace('button');

function Button(
  h: CreateElement,
  props: ButtonProps,
  slots: DefaultSlots,
  ctx: RenderContext<ButtonProps>
) {

  const { icon, type, size, nativeType, disabled, loading, hairline, loadingText, block, plain, round, square, ripple, raised, color } = props;

  function onClick(event: Event) {
    if (!loading && !disabled) {
      emit(ctx, 'click', event);
      functionalRoute(ctx);
    }
  }

//   function onTouchstart(event: TouchEvent) {
//     emit(ctx, 'touchstart', event);
//   }

  // const style: {[propName: string]: string | number} = {};
  // Record(https://www.leevii.com/2018/10/record-in-typescript.html)
  const style: Record<string, string | number> = {};
  if(color) {
    if (plain) {
      style.color = color
    } else {
      style.color = WHITE
      style.background = color
    }

    // hide border when color is linear-gradient
    if (color.indexOf('gradient') !== -1) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
  }


  const classes = [
    bem([
      type,
      size,
      {
        disabled,
        hairline,
        block,
        plain,
        round,
        square,
        ripple: ripple && !disabled && !loading,
        raised: raised && !plain
      }
    ]),
    { 'x-hairline--surround': hairline }
  ];

  // 内容返回一个数组
  function Content() {
    const content = [];
    if (loading) {
      content.push(
        <Loading
          class={bem('loading')}
          size={props.loadingSize}
          type={props.loadingType}
          color={type === 'default' ? undefined : ''}
        />
      );
    } else if (icon) {
      content.push(<Icon name={icon} class={bem('icon')} />);
    }

    let text;
    if (loading) {
      text = loadingText;
    } else {
      text = slots.default ? slots.default() : props.text;
    }

    if (text) {
      content.push(<span class={bem('text')}>{text}</span>);
    }

    return content;
  }
  // inherit(ctx)
  // don't inherit listeners, need handle listeners in the component（相当于把组件上绑定的事件拿到组件内部处理后再执行）
  // inherit(ctx, true)
  // 执行组件绑定的事件，组件内部不去处理
  return (
    <props.tag
      style={style}
      class={classes}
      type={nativeType}
      disabled={disabled}
      onClick={onClick}
      onTouchstart={ctx.listeners['touchstart'] || noop}
      {...inherit(ctx)}
    >
      {Content()}
    </props.tag>
  );
}

Button.props = {
  ...routeProps,
  text: String,
  icon: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  nativeType: String,
  loadingText: String,
  loadingType: String,
  ripple: Boolean,
  raised: Boolean,
  color: String,
  tag: {
    type: String,
    default: 'button'
  },
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'large'
  },
  loadingSize: {
    type: String,
    default: '20px'
  }
};

export default createComponent<ButtonProps, ButtonEvents>(Button);
