import tr_TR from './tr_TR.js';
import en_US from './en_US.js';

export const locales = {
    TR : tr_TR,
    EN : en_US,
}

const defaultLocale = locales.TR;

export const i18n = function (key, args) {
  let localeValue = defaultLocale[key];
  if (typeof localeValue !== 'undefined'&& localeValue) {
    if (typeof args !== 'undefined' && args) {
      return localeValue.replace(/\{(\d+)\}/g, function() {
        return args[arguments[1]];
      });
    }
    else {
      return localeValue;
    }

  }
  else
  {
    return "$$"+key+"$$";
  }
}
