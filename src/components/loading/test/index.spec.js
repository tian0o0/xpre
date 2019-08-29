import { mount } from '../../../../test/utils';
import Loading from '..';

test('size prop', () => {
  const wrapper = mount(Loading, {
    propsData: {
      size: 20
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('text-size prop', () => {
  const wrapper = mount(Loading, {
    propsData: {
      textSize: 20,
      text: 'Loading text'
    }
  });

  expect(wrapper).toMatchSnapshot();
});
