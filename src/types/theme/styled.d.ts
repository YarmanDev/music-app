import 'styled-components';
import { IBreakpoints } from '../breakpoints';
import { ITheme } from './index';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof IBreakpoints;
    colors: ITheme;
  }
}
