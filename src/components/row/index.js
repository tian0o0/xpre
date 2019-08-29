import { createNamespace } from '../../utils';

const [createComponent, bem] = createNamespace('row');

export default createComponent({
  props: {
    type: String,
    align: String,
    justify: String,
    tag: {
      type: String,
      default: 'div'
    },
    gap: {
      type: [Number, String],
      default: 0
    }
  },

  render(h) {
    const { align, justify } = this;
    const flex = this.type === 'flex';
    const margin = `-${Number(this.gap) / 2}px`;
    const style = this.gap ? { marginLeft: margin, marginRight: margin } : {};

    return (
      <this.tag
        style={style}
        class={bem({
          flex,
          [`align-${align}`]: flex && align,
          [`justify-${justify}`]: flex && justify
        })}
      >
        {this.slots()}
      </this.tag>
    );
  }
});
