import { createNamespace, noop } from '../../utils';
import { inherit } from '../../utils/functional';
import Icon from '../icon';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { ScopedSlot, DefaultSlots } from '../../utils/types';

export type NavBarProps = {
  title?: string;
  fixed?: boolean;
  zIndex: number;
  border: boolean;
  leftText?: string;
  rightText?: string;
  leftArrow?: boolean;
};

export type NavBarSlots = DefaultSlots & {
  left?: ScopedSlot;
  title?: ScopedSlot;
  right?: ScopedSlot;
};

export type NavBarEvents = {
  'click-left'?(event: Event): void;
  'click-right'?(event: Event): void;
};

const [createComponent, bem] = createNamespace('nav-bar');

function NavBar(
  h: CreateElement,
  props: NavBarProps,
  slots: NavBarSlots,
  ctx: RenderContext<NavBarProps>
) {
  const { title, fixed, zIndex, border, leftText, rightText, leftArrow } = props;

  return (
    <div
      class={[
        bem({ fixed }),
        { 'x-hairline--bottom': border }
      ]}
      style={{ zIndex }}
      {...inherit(ctx)}
    >
      <div class={bem('left')} onClick={ctx.listeners['click-left'] || noop}>
        {slots.left
          ? slots.left()
          : [
            leftArrow && (
              <Icon class={bem('arrow')} name="arrow-left" />
            ),
            leftText && (
              <span class={bem('text')}>{leftText}</span>
            )
          ]}
      </div>
      <div class={[bem('title'), 'x-ellipsis']}>
        {slots.title ? slots.title() : title}
      </div>
      <div class={bem('right')} onClick={ctx.listeners['click-right'] || noop}>
        {slots.right
          ? slots.right()
          : rightText && (
              <span class={bem('text')}>{rightText}</span>
          )}
      </div>
    </div>
  );
}

NavBar.props = {
  title: String,
  fixed: Boolean,
  leftText: String,
  rightText: String,
  leftArrow: Boolean,
  border: {
    type: Boolean,
    default: true
  },
  zIndex: {
    type: Number,
    default: 1
  }
};

export default createComponent<NavBarProps, NavBarEvents>(NavBar);
