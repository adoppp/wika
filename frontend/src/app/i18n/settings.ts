export type Language = 'uk' | 'ru';

export const fallbackLng: Language = 'uk';
export const languages: Language[] = [fallbackLng, 'ru'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
