import pkgJson from '../../package.json';

const { version } = pkgJson;

export const searchConfig = {
  apiKey: '90067aecdaa2c85220e2783cd305caac',
  indexName: 'vant'
};

export const versions = [version];

export const github = 'https://github.com/tian0o0/xpre';

export default {
  'zh-CN': {
    header: {
      logo: {
        image: 'https://ae01.alicdn.com/kf/Hfa3f8503c37e4da7862d831690178610h.png',
        title: 'Xpre',
        href: '#/'
      },
      nav: {
        lang: {
          text: 'En',
          from: 'zh-CN',
          to: 'en-US'
        },
        logoLink: [
          {
            url: github,
            image: 'https://b.yzcdn.cn/vant/logo/github.svg'
          }
        ]
      },
    },
    nav: [
      {
        name: '开发指南',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: '介绍'
              },
              {
                path: '/quickstart',
                title: '快速上手'
              },
              //   {
              //     path: '/changelog',
              //     title: '更新日志'
              //   },
              //   {
              //     path: '/style',
              //     title: '内置样式'
              //   },
              {
                path: '/theme',
                title: '定制主题'
              },
              //   {
              //     path: '/contribution',
              //     title: '开发指南'
              //   },
              //   {
              //     path: '/design',
              //     title: '设计资源'
              //   },
              //   {
              //     path: '/style-guide',
              //     title: '风格指南'
              //   },
              //   {
              //     path: '/demo',
              //     title: '示例页面'
              //   },
            //   {
            //     path: '/locale',
            //     title: '国际化'
            //   }
            ]
          }
        ]
      },
      {
        name: '组件',
        showInMobile: true,
        groups: [
          {
            groupName: 'B',
            icon: 'https://img.yzcdn.cn/vant/basic-0401.svg',
            list: [
              {
                path: '/button',
                title: 'Button'
              },


            ]
          },
          {
            groupName: 'C',
            list: [

              {
                path: '/cell',
                title: 'Cell'
              },
              {
                path: '/collapse',
                title: 'Collapse'
              },
            ]
          },
          {
            groupName: 'I',
            list: [
              {
                path: '/icon',
                title: 'Icon'
              },
              {
                path: '/image',
                title: 'Image'
              },
              {
                path: '/image-preview',
                title: 'ImagePreview'
              },
            ]
          },
          {
            groupName: 'L',
            list: [
              {
                path: '/col',
                title: 'Layout'
              },
            ]
          },
          {
            groupName: 'N',
            list: [
              {
                path: '/nav-bar',
                title: 'NavBar'
              },
            ]
          },
          {
            groupName: 'O',
            list: [
              {
                path: '/overlay',
                title: 'Overlay'
              },
            ]
          },
          {
            groupName: 'S',
            list: [
              {
                path: '/scroll',
                title: 'Scroll'
              },
              {
                path: '/slide',
                title: 'Slide'
              }
            ]
          },
          {
            groupName: 'T',
            list: [
              {
                path: '/toast',
                title: 'Toast'
              }
            ]
          },
          {
            groupName: 'U',
            list: [
              {
                path: '/uploader',
                title: 'Uploader'
              },
            ]
          },
          //   {
          //     groupName: '表单组件',
          //     icon: 'https://img.yzcdn.cn/vant/form-0401.svg',
          //     list: [
          //       {
          //         path: '/checkbox',
          //         title: 'Checkbox 复选框'
          //       },
          //       {
          //         path: '/datetime-picker',
          //         title: 'DatetimePicker 时间选择'
          //       },
          //       {
          //         path: '/field',
          //         title: 'Field 输入框'
          //       },
          //       {
          //         path: '/number-keyboard',
          //         title: 'NumberKeyboard 数字键盘'
          //       },
          //       {
          //         path: '/password-input',
          //         title: 'PasswordInput 密码输入框'
          //       },
          //       {
          //         path: '/picker',
          //         title: 'Picker 选择器'
          //       },
          //       {
          //         path: '/radio',
          //         title: 'Radio 单选框'
          //       },
          //       {
          //         path: '/rate',
          //         title: 'Rate 评分'
          //       },
          //       {
          //         path: '/search',
          //         title: 'Search 搜索'
          //       },
          //       {
          //         path: '/slider',
          //         title: 'Slider 滑块'
          //       },
          //       {
          //         path: '/stepper',
          //         title: 'Stepper 步进器'
          //       },
          //       {
          //         path: '/switch',
          //         title: 'Switch 开关'
          //       },
          //       {
          //         path: '/switch-cell',
          //         title: 'SwitchCell 开关单元格'
          //       },
          //       {
          //         path: '/uploader',
          //         title: 'Uploader 文件上传'
          //       }
          //     ]
          //   },
          //   {
          // groupName: '弹框提示',
          // icon: 'passed',
          // list: [
          //   {
          //     path: '/action-sheet',
          //     title: 'ActionSheet 上拉菜单'
          //   },
          //   {
          //     path: '/dialog',
          //     title: 'Dialog 弹出框'
          //   },
          //   {
          //     path: '/dropdown-menu',
          //     title: 'DropdownMenu 下拉菜单'
          //   },
          //   {
          //     path: '/loading',
          //     title: 'Loading 加载'
          //   },
          //   {
          //     path: '/notify',
          //     title: 'Notify 消息通知'
          //   },
          // {
          //   path: '/pull-refresh',
          //   title: 'PullRefresh 下拉刷新'
          // },
          // {
          //   path: '/swipe-cell',
          //   title: 'SwipeCell 滑动单元格'
          // },


          // ]
          //   },
          //   {
          // groupName: '数据展示',
          // icon: 'photo-o',
          // list: [
          //   {
          //     path: '/circle',
          //     title: 'Circle 环形进度条'
          //   },


          //   {
          //     path: '/count-down',
          //     title: 'CountDown 倒计时'
          //   },
          //   {
          //     path: '/divider',
          //     title: 'Divider 分割线'
          //   },
          //   {
          //     path: '/image-preview',
          //     title: 'ImagePreview 图片预览'
          //   },
          //   {
          //     path: '/lazyload',
          //     title: 'Lazyload 图片懒加载'
          //   },
          //   {
          //     path: '/list',
          //     title: 'List 列表'
          //   },
          //   {
          //     path: '/notice-bar',
          //     title: 'NoticeBar 通知栏'
          //   },
          //   {
          //     path: '/panel',
          //     title: 'Panel 面板'
          //   },
          //   {
          //     path: '/progress',
          //     title: 'Progress 进度条'
          //   },
          //   {
          //     path: '/skeleton',
          //     title: 'Skeleton 骨架屏'
          //   },
          //   {
          //     path: '/steps',
          //     title: 'Steps 步骤条'
          //   },
          //   {
          //     path: '/sticky',
          //     title: 'Sticky 粘性布局'
          //   },
          //   {
          //     path: '/swipe',
          //     title: 'Swipe'
          //   },

          //   {
          //     path: '/tag',
          //     title: 'Tag 标记'
          //   }
          // ]
          //   },
          //   {
          // groupName: '导航',
          // icon: 'https://img.yzcdn.cn/vant/nav-0401.svg',
          // list: [
          //   {
          //     path: '/grid',
          //     title: 'Grid 宫格'
          //   },
          //   {
          //     path: '/index-bar',
          //     title: 'IndexBar 索引栏'
          //   },

          //   {
          //     path: '/pagination',
          //     title: 'Pagination 分页'
          //   },
          //   {
          //     path: '/sidebar',
          //     title: 'Sidebar 侧边导航'
          //   },
          //   {
          //     path: '/tab',
          //     title: 'Tab 标签页'
          //   },
          //   {
          //     path: '/tabbar',
          //     title: 'Tabbar 标签栏'
          //   },
          //   {
          //     path: '/tree-select',
          //     title: 'TreeSelect 分类选择'
          //   }
          // ]
        //   },
        //   {
        //     groupName: '业务组件',
        //     icon: 'ellipsis',
        //     list: [
        //       {
        //         path: '/address-edit',
        //         title: 'AddressEdit 地址编辑'
        //       },
        //       {
        //         path: '/address-list',
        //         title: 'AddressList 地址列表'
        //       },
        //       {
        //         path: '/area',
        //         title: 'Area 省市区选择'
        //       },
        //       {
        //         path: '/card',
        //         title: 'Card 商品卡片'
        //       },
        //       {
        //         path: '/contact-card',
        //         title: 'Contact 联系人'
        //       },
        //       {
        //         path: '/coupon-list',
        //         title: 'Coupon 优惠券'
        //       },
        //       {
        //         path: '/goods-action',
        //         title: 'GoodsAction 商品导航'
        //       },
        //       {
        //         path: '/submit-bar',
        //         title: 'SubmitBar 提交订单栏'
        //       },
        //       {
        //         path: '/sku',
        //         title: 'Sku 商品规格'
        //       }
        //     ]
        //   }
        ]
      }
    ]
  },
  'en-US': {
    header: {
      logo: {
        image:
          'https://ae01.alicdn.com/kf/Hfa3f8503c37e4da7862d831690178610h.png',
        title: 'Xpre',
        href: '#/'
      },
      nav: {
        lang: {
          text: '中文',
          from: 'en-US',
          to: 'zh-CN'
        }
      }
    },
    nav: [
      {
        name: 'Essentials',
        groups: [
          {
            list: [
              {
                path: '/intro',
                title: 'Introduction'
              },
              {
                path: '/quickstart',
                title: 'Quickstart'
              },
              {
                path: '/changelog',
                title: 'Changelog'
              },
              {
                path: '/style',
                title: 'Built-in style'
              },
              {
                path: '/theme',
                title: 'Custom Theme'
              },
              {
                path: '/demo',
                title: 'Demo pages'
              },
              {
                path: '/locale',
                title: 'Internationalization'
              }
            ]
          }
        ]
      },
      {
        name: 'Components',
        showInMobile: true,
        groups: [
          {
            groupName: 'Basic Components',
            icon: 'https://img.yzcdn.cn/vant/basic-0401.svg',
            list: [
              {
                path: '/button',
                title: 'Button'
              },
              {
                path: '/cell',
                title: 'Cell'
              },
              {
                path: '/icon',
                title: 'Icon'
              },
              {
                path: '/image',
                title: 'Image'
              },
              {
                path: '/col',
                title: 'Layout'
              },
              {
                path: '/popup',
                title: 'Popup'
              }
            ]
          },
          {
            groupName: 'Form Components',
            icon: 'https://img.yzcdn.cn/vant/form-0401.svg',
            list: [
              {
                path: '/checkbox',
                title: 'Checkbox'
              },
              {
                path: '/datetime-picker',
                title: 'DatetimePicker'
              },
              {
                path: '/field',
                title: 'Field'
              },
              {
                path: '/number-keyboard',
                title: 'NumberKeyboard'
              },
              {
                path: '/password-input',
                title: 'PasswordInput'
              },
              {
                path: '/picker',
                title: 'Picker'
              },
              {
                path: '/radio',
                title: 'Radio'
              },
              {
                path: '/rate',
                title: 'Rate'
              },
              {
                path: '/search',
                title: 'Search'
              },
              {
                path: '/slider',
                title: 'Slider'
              },
              {
                path: '/stepper',
                title: 'Stepper'
              },
              {
                path: '/switch',
                title: 'Switch'
              },
              {
                path: '/switch-cell',
                title: 'SwitchCell'
              },
              {
                path: '/uploader',
                title: 'Uploader'
              }
            ]
          },
          {
            groupName: 'Action Components',
            icon: 'passed',
            list: [
              {
                path: '/action-sheet',
                title: 'ActionSheet'
              },
              {
                path: '/dialog',
                title: 'Dialog'
              },
              {
                path: '/dropdown-menu',
                title: 'DropdownMenu'
              },
              {
                path: '/loading',
                title: 'Loading'
              },
              {
                path: '/notify',
                title: 'Notify'
              },
              {
                path: '/overlay',
                title: 'Overlay 遮罩层'
              },
              {
                path: '/pull-refresh',
                title: 'PullRefresh'
              },
              {
                path: '/swipe-cell',
                title: 'SwipeCell'
              },
              {
                path: '/toast',
                title: 'Toast'
              }
            ]
          },
          {
            groupName: 'Display Components',
            icon: 'photo-o',
            list: [
              {
                path: '/circle',
                title: 'Circle'
              },
              {
                path: '/collapse',
                title: 'Collapse'
              },
              {
                path: '/count-down',
                title: 'CountDown'
              },
              {
                path: '/divider',
                title: 'Divider'
              },
              {
                path: '/image-preview',
                title: 'ImagePreview'
              },
              {
                path: '/lazyload',
                title: 'Lazyload'
              },
              {
                path: '/list',
                title: 'List'
              },
              {
                path: '/notice-bar',
                title: 'NoticeBar'
              },
              {
                path: '/panel',
                title: 'Panel'
              },
              {
                path: '/progress',
                title: 'Progress'
              },
              {
                path: '/skeleton',
                title: 'Skeleton'
              },
              {
                path: '/steps',
                title: 'Steps'
              },
              {
                path: '/sticky',
                title: 'Sticky'
              },
              {
                path: '/swipe',
                title: 'Swipe'
              },
              {
                path: '/tag',
                title: 'Tag'
              }
            ]
          },
          {
            groupName: 'Navigation Components',
            icon: 'https://img.yzcdn.cn/vant/nav-0401.svg',
            list: [
              {
                path: '/grid',
                title: 'Grid'
              },
              {
                path: '/index-bar',
                title: 'IndexBar'
              },
              {
                path: '/nav-bar',
                title: 'NavBar'
              },
              {
                path: '/pagination',
                title: 'Pagination'
              },
              {
                path: '/sidebar',
                title: 'Sidebar'
              },
              {
                path: '/tab',
                title: 'Tab'
              },
              {
                path: '/tabbar',
                title: 'Tabbar'
              },
              {
                path: '/tree-select',
                title: 'TreeSelect'
              }
            ]
          },
          {
            groupName: 'Business Components',
            icon: 'ellipsis',
            list: [
              {
                path: '/address-edit',
                title: 'AddressEdit'
              },
              {
                path: '/address-list',
                title: 'AddressList'
              },
              {
                path: '/area',
                title: 'Area'
              },
              {
                path: '/card',
                title: 'Card'
              },
              {
                path: '/contact-card',
                title: 'Contact'
              },
              {
                path: '/coupon-list',
                title: 'Coupon'
              },
              {
                path: '/goods-action',
                title: 'GoodsAction'
              },
              {
                path: '/submit-bar',
                title: 'SubmitBar'
              },
              {
                path: '/sku',
                title: 'Sku'
              }
            ]
          }
        ]
      }
    ]
  }
};
