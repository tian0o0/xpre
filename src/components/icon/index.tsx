import { createNamespace, addUnit } from '../../utils';
import { inherit } from '../../utils/functional';
// import Info from '../../info';
import Image from '../image';

// Types
import { CreateElement, RenderContext } from 'vue/types';
import { DefaultSlots } from '../../utils/types';

export type IconProps = {
  tag: keyof HTMLElementTagNameMap | string;
  name: string;
  size?: string | number;
  color?: string;
  info?: string | number;
  classPrefix: string;
};

export type IconEvents = {
  onClick?(event: Event): void;
};

const [createComponent, bem] = createNamespace('icon');

function isImage(name?: string): boolean {
  return name ? name.indexOf('/') !== -1 : false;
}

function Icon(
  h: CreateElement,
  props: IconProps,
  slots: DefaultSlots,
  ctx: RenderContext<IconProps>
) {
  const { classPrefix, name, size, color } = props;

  const imageIcon = isImage(name);
  return (
    <props.tag
      class={[classPrefix, imageIcon ? '' : `${classPrefix}-${name}`]}
      style={{
        color,
        fontSize: addUnit(size)
      }}
      {...inherit(ctx, true)}
    >
      {slots.default && slots.default()}
      {imageIcon && (
        <Image class={bem('image')} fit="contain" src={props.name} showLoading={false} />
      )}
      {/* <Info info={props.info} /> */}
    </props.tag>
  );
}

Icon.props = {
  name: String,
  size: [Number, String],
  info: [Number, String],
  color: String,
  tag: {
    type: String,
    default: 'i'
  },
  classPrefix: {
    type: String,
    default: bem()
  }
};

export default createComponent<IconProps, IconEvents>(Icon);
