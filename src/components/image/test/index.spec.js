
import { mount } from '../../../../test/utils';
import Image from '..';

test('click event', () => {
  const wrapper = mount(Image);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')[0][0]).toBeTruthy();
  wrapper.destroy();
});

test('load event', () => {
  const wrapper = mount(Image, {
    propsData: {
      src: 'https://ae01.alicdn.com/kf/H6e5e22c9a0214cf692a69097c342e981T.png'
    }
  });

  wrapper.find('img').trigger('load');

  expect(wrapper.emitted('load')[0][0]).toBeTruthy();
  expect(wrapper).toMatchSnapshot();

  wrapper.setProps({ src: '' });
  expect(wrapper).toMatchSnapshot();
});

test('error event', () => {
  const wrapper = mount(Image, {
    propsData: {
      src: 'https://ae01.alicdn.com/kf/H6e5e22c9a0214cf692a69097c342e981T.png'
    }
  });

  wrapper.find('img').trigger('error');

  expect(wrapper.emitted('error')[0][0]).toBeTruthy();
});

test('lazy load', () => {
  const wrapper = mount(Image, {
    propsData: {
      src: 'https://ae01.alicdn.com/kf/H6e5e22c9a0214cf692a69097c342e981T.png',
      lazyLoad: true
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('lazy-load load event', done => {
  const wrapper = mount(Image, {
    propsData: {
      lazyLoad: true,
      src: 'https://ae01.alicdn.com/kf/H6e5e22c9a0214cf692a69097c342e981T.png'
    },
    mocks: {
      $Lazyload: {
        $on(eventName, hanlder) {
          if (eventName === 'loaded') {
            setTimeout(() => {
              hanlder({ el: null });
              hanlder({ el: wrapper.find('img').element });
              expect(wrapper.emitted('load').length).toEqual(1);
              expect(wrapper).toMatchSnapshot();
              wrapper.destroy();
            });
          }
        },
        $off() {
          done();
        }
      }
    }
  });
});

test('lazy-load error event', done => {
  const wrapper = mount(Image, {
    propsData: {
      lazyLoad: true
    },
    mocks: {
      $Lazyload: {
        $on(eventName, hanlder) {
          if (eventName === 'error') {
            setTimeout(() => {
              hanlder({ el: null });
              hanlder({ el: wrapper.find('img').element });
              expect(wrapper.emitted('error').length).toEqual(1);
              expect(wrapper).toMatchSnapshot();
              wrapper.destroy();
            });
          }
        },
        $off() {
          done();
        }
      }
    }
  });
});

test('show-loading prop', () => {
  const wrapper = mount(Image, {
    propsData: {
      showLoading: false
    }
  });

  expect(wrapper).toMatchSnapshot();
});

test('show-error prop', () => {
  const wrapper = mount(Image, {
    propsData: {
      showError: false,
      src: 'https://ae01.alicdn.com/kf/H6e5e22c9a0214cf692a69097c342e981T.png'
    }
  });

  wrapper.find('img').trigger('error');

  expect(wrapper).toMatchSnapshot();
});
