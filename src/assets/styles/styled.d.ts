import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth: string;
    wrapWidth: string;
    color: {
      main: string;
      sub: string;
    };
  }
}