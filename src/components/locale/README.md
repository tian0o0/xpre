# Internationalization

### Intro

The default language of Xpre is Chinese. If you want to use other languages, you can follow the instructions below.

### Switch languages

Xpre supports multiple languages with the Locale component, and the `Locale.use` method allows you to switch to diffrent languages.

```js
import { Locale } from 'xpre';
import enUS from 'xpre/lib/locale/lang/en-US';

Locale.use('en-US', enUS);
```

### Modify default configs

Use `Locale.add` method to modify the default configs.

```js
import { Locale } from 'xpre';

const messages = {
  'en-US': {
    vanPicker: {
      confirm: 'Close'
    }
  }
};

Locale.add(messages);
```

### Config files

Current supported languages:

| Language | Filename |
|------|------|
| Chinese | zh-CN |
| Traditional Chinese (HK) | zh-HK |
| Traditional Chinese (TW) | zh-TW |
| English | en-US |
| Turkish | tr-TR |

<!-- View all language configs [Here](https://github.com/youzan/vant/tree/dev/src/locale/lang). -->
