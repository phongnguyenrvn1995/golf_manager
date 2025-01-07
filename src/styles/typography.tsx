import { TextStyle } from "react-native";

// src/styles/typography.tsx
export const typography = {
    heading1: {
      fontSize: 32,
      fontWeight: 'bold' as TextStyle["fontWeight"],
      lineHeight: 40,
    },
    heading2: {
      fontSize: 24,
      fontWeight: 'bold' as TextStyle["fontWeight"],
      lineHeight: 32,
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal' as TextStyle["fontWeight"],
      lineHeight: 24,
    },
    caption: {
      fontSize: 12,
      fontWeight: 'normal' as TextStyle["fontWeight"],
      lineHeight: 16,
    },
};