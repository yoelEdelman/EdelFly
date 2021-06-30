import DeviceInfo from 'react-native-device-info';
import {moderateScale} from './helper';

// Font names
export const regular = 'Roboto-Regular';

const fontScale = Number(DeviceInfo.getFontScaleSync().toFixed(2));
export const heading1 = moderateScale(80) / fontScale;
export const heading2 = moderateScale(60) / fontScale;
export const heading3 = moderateScale(32) / fontScale;

export const extralargeText = moderateScale(36) / fontScale;
export const largeText = moderateScale(24) / fontScale;
export const mediumText = moderateScale(20) / fontScale;
export const captionLarge = moderateScale(22) / fontScale;
export const captionMedium = moderateScale(18) / fontScale;
export const captionNormal = moderateScale(16) / fontScale;
export const normal1 = moderateScale(17) / fontScale;
export const normal2 = moderateScale(16) / fontScale;
export const normal3 = moderateScale(15) / fontScale;
export const normal4 = moderateScale(14) / fontScale;
export const smallText = moderateScale(12) / fontScale;
export const verySmallText = moderateScale(10) / fontScale;
export const tooSmallText = moderateScale(9) / fontScale;
export const loginLogoText = moderateScale(50) / fontScale;



export type weightOptions =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
export const getFontFamilyByWeight = (
  weight: weightOptions,
  isItalic = false,
) => {
  let family;

  switch (weight) {
    case '100':
      family = 'Roboto-Thin';
      break;
    case '200':
      family = 'Roboto-Light'; // Extra light
      break;
    case '300':
      family = 'Roboto-Light';
      break;
    case '400':
      family = 'Roboto-Regular';
      break;
    case '500':
      family = 'Roboto-Medium';
      break;
    case '600':
      family = 'Roboto-Medium'; // Semi bold
      break;
    case '700':
      family = 'Roboto-Bold';
      break;
    case '800':
      family = 'Roboto-Bold'; // Should be extra bold
      break;
    case '900':
      family = 'Montserrat-Black';
      break;
  }

  if (isItalic) {
    family = family + 'Italic';
  }

  return family;
};