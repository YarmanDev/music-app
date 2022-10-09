import { IColors } from '../colors';

export type IThemeColors = 'light' | 'dark';
export type ITheme = Record<IColors, string>;
export type IThemes = Record<IThemeColors, ITheme>;
