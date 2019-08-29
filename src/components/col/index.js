import { createNamespace } from '../../utils';

const [createComponent, bem] = createNamespace('col');

export default createComponent({
  props: {
    span: [Number, String],
    offset: [Number, String],
    tag: {
      type: String,
      default: 'div'
    }
  },

  computed: {
    gap() {
      return (this.$parent && Number(this.$parent.gap)) || 0;
    },

    style() {
      const padding = `${this.gap / 2}px`;
      return this.gap ? { paddingLeft: padding, paddingRight: padding } : {};
    }
  },

  render(h) {
    const { span, offset } = this;
    return (
      <this.tag class={bem({ [span]: span, [`offset-${offset}`]: offset })} style={this.style}>
        {this.slots()}
      </this.tag>
    );
  }
});
