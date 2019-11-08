import React from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import ar from './ar';
import en from './en';
i18n.fallbacks = true;
i18n.translations = { ar, en };
state = {
    locale: Localization.locale,
};

let t = (scope, options) => {
    return i18n.t(scope, { locale: state.locale, ...options });
};

export {
    t
}