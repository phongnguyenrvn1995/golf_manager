import { Platform } from 'react-native';

export const fonts = {
  robotoRegular: Platform.select({
    ios: 'Roboto', // Family name trên iOS
    android: 'Roboto-Regular', // Tên file font trên Android
  }),
  latoThin: Platform.select({
    ios: 'Lato',
    android: 'Lato-Thin',
  }),
  playwriteVN: Platform.select({
    ios: 'Playwrite VN', // Family name trên iOS
    android: 'PlaywriteVN-VariableFont_wght', // Tên file font trên Android
  }),
  uKIJTuz: Platform.select({
    ios: 'UKIJ Tuz', // Family name trên iOS
    android: 'UKIJTuz', // Tên file font trên Android
  }),
};
