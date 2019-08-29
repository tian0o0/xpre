import Vue from 'vue';
import Toast from '..';
import ToastVue from '../Toast';
import { transitionStub, later } from '../../../../test/utils';

transitionStub();

test('create a forbidClick toast', async () => {
  const toast = Toast({
    forbidClick: true,
    type: 'success'
  });

  await later();
  expect(toast.$el.outerHTML).toMatchSnapshot();

  await later();
  expect(document.body.classList.contains('x-toast--unclickable')).toBeTruthy();
  toast.forbidClick = false;

  await later();
  expect(document.body.classList.contains('x-toast--unclickable')).toBeFalsy();
});

it('toast disappeared after duration', async () => {
  const toast = Toast({
    duration: 10
  });

  await later(50);
  expect(toast.$el.style.display).toEqual('none');
});

test('show loading toast', async () => {
  const toast = Toast.loading({
    message: 'Message'
  });

  await later();
  expect(toast.$el.outerHTML).toMatchSnapshot();
});

test('show html toast', async () => {
  const toast = Toast({
    type: 'html',
    message: '<div>Message</div>'
  });

  await later();
  expect(toast.$el.outerHTML).toMatchSnapshot();
});

test('icon prop', async () => {
  const toast = Toast({
    message: 'Message',
    icon: 'star-o'
  });

  await later();
  expect(toast.$el.outerHTML).toMatchSnapshot();
});

test('icon-prefix prop', async () => {
  const toast = Toast({
    message: 'Message',
    icon: 'star-o',
    iconPrefix: 'my-icon'
  });

  await later();
  expect(toast.$el.outerHTML).toMatchSnapshot();
});

test('clear toast', () => {
  const toast1 = Toast();
  expect(toast1.value).toBeTruthy();
  Toast.clear();
  expect(toast1.value).toBeFalsy();

  Toast.allowMultiple();
  const toast2 = Toast('2');
  const toast3 = Toast('3');
  Toast.clear(true);
  expect(toast2.value).toBeFalsy();
  expect(toast3.value).toBeFalsy();
  Toast.allowMultiple(false);
});

test('clear multiple toast', () => {
  Toast.allowMultiple();
  Toast.clear(true);
  const toast1 = Toast.success('1');
  const toast2 = Toast.success('2');
  Toast.clear();
  expect(toast1.value).toBeFalsy();
  expect(toast2.value).toBeTruthy();
  Toast.clear();
  Toast.clear();
  expect(toast2.value).toBeFalsy();
  Toast.allowMultiple(false);
});

test('remove toast DOM when cleared in multiple mode', async () => {
  Toast.allowMultiple();
  Toast.clear(true);
  const toast = Toast({ message: '1' });
  await later();

  // mock onAfterLeave
  toast.clear();
  toast.onAfterLeave();
  await later();

  expect(toast.$el.parentNode).toEqual(null);
  Toast.allowMultiple(false);
});

test('set default options', () => {
  const className = 'my-toast';
  Toast.setDefaultOptions({ className });
  expect(Toast().className).toEqual(className);
  Toast.resetDefaultOptions();
  expect(Toast().className).toEqual('');
});

test('toast duration 0', () => {
  Toast.allowMultiple();
  const toast = Toast({
    message: 'toast',
    duration: 0
  });
  expect(toast.timer).toBeFalsy();
  Toast.allowMultiple(false);
});

test('onClose callback', () => {
  Toast.allowMultiple();
  const onClose = jest.fn();
  const toast = Toast({
    message: 'toast',
    onClose
  });

  toast.clear();
  Toast.allowMultiple(false);
  expect(onClose).toHaveBeenCalledTimes(1);
});

test('register component', () => {
  Vue.use(Toast);
  expect(Vue.component(ToastVue.name)).toBeTruthy();
});
