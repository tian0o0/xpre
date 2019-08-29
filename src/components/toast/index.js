/**
 * Toast 本质是函数
 */

import Vue from 'vue';
import VueToast from './Toast';
import { isObj, isServer } from '../../utils';

const defaultOptions = {
  icon: '',
  type: 'text',
  overlay: false,
  value: true,
  message: '',
  className: '',
  onClose: null,
  onOpened: null,
  duration: 3000,
  iconPrefix: undefined,
  position: 'middle',
  forbidClick: false,
  loadingType: undefined,
  getContainer: 'body'
};

let queue = []; // 存储toast实例
let multiple = false; // 是否允许同时存在多个toast实例
let currentOptions = {
  ...defaultOptions
};

// Toast options支持 object / string
function parseOptions(message) {
  if (isObj(message)) {
    return message;
  }
  return { message };
}

function createInstance() {
  if (isServer) {
    return {};
  }

  if (!queue.length || multiple) {
    const toast = new (Vue.extend(VueToast))({
      el: document.createElement('div')
    });
    queue.push(toast);
  }

  return queue[queue.length - 1]; // 返回toast实例，如果有多个，返回最新的一个
}

// transform toast options to popup props
function transformOptions(options) {
  options = { ...options };
  //   options.overlay = options.overlay;

  //   delete options.overlay;
  delete options.duration;

  return options;
}

function Toast(options = {}) {
  const toast = createInstance();
  // should add z-index if previous toast has not disappeared
  if (toast.value) {
    toast.updateZIndex();
  }

  options = {
    ...currentOptions,
    ...parseOptions(options),
    clear() {
      toast.value = false;

      if (options.onClose) {
        options.onClose();
      }

      if (multiple && !isServer) {
        toast.$on('closed', () => {
          clearTimeout(toast.timer);
          queue = queue.filter(item => item !== toast);

          const parent = toast.$el.parentNode;
          if (parent) {
            parent.removeChild(toast.$el);
          }

          toast.$destroy();
        });
      }
    }
  };
  //   console.log(toast);
  Object.assign(toast, transformOptions(options));
  //   console.log(toast);

  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

const createMethod = type => options =>
  Toast({
    type,
    ...parseOptions(options)
  });

['loading', 'success', 'fail'].forEach(method => {
  Toast[method] = createMethod(method);
});

Toast.clear = all => {
  if (queue.length) {
    if (all) {
      queue.forEach(toast => {
        toast.clear();
      });
      queue = [];
    } else if (!multiple) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = options => {
  Object.assign(currentOptions, options);
};

Toast.resetDefaultOptions = () => {
  currentOptions = { ...defaultOptions };
};

Toast.allowMultiple = (value = true) => {
  multiple = value;
};

Toast.install = () => {
  Vue.use(VueToast);
};

Vue.prototype.$toast = Toast;

export default Toast;
