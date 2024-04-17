import { ILoadingOptions, INotifyOptions } from 'notiflix';

export const notifyOptions: INotifyOptions = {
  position: 'center-top',
  cssAnimationStyle: 'from-top',
  clickToClose: true,
  closeButton: true,
  showOnlyTheLastOne: true,
};

export const loadingOptions: ILoadingOptions = {
  backgroundColor: 'rgba(0,0,0,0.4)',
  messageColor: '#fff',
  svgColor: '#ad33ff',
};
