import Locale from '../../../src/components/locale';
import zhCN from '../../../src/components/locale/lang/zh-CN';
import enUS from '../../../src/components/locale/lang/en-US';

const langMap = {
  'en-US': {
    title: 'Xpre - Exploring Endless Possibilities',
    messages: enUS
  },
  'zh-CN': {
    title: 'Xpre | 一个差不多的组件库',
    messages: zhCN
  }
};

let currentLang = '';

function getDefaultLang() {
  const langs = Object.keys(langMap);
  const { hash } = location;

  for (let i = 0; i < langs.length; i++) {
    if (hash.indexOf(langs[i]) !== -1) {
      return langs[i];
    }
  }

  const userLang = localStorage.getItem('VANT_LANGUAGE') || navigator.language || 'en-US';
  return userLang.indexOf('zh-') !== -1 ? 'zh-CN' : 'en-US';
}

export function setLang(lang) {
  if (currentLang === lang) {
    return;
  }

  currentLang = lang;
  if (window.localStorage) {
    localStorage.setItem('VANT_LANGUAGE', lang);
  }
  Locale.use(lang, langMap[lang].messages);
  document.title = langMap[lang].title;
}

setLang(getDefaultLang());
