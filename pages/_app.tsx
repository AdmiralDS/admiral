import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { DropdownProvider, LIGHT_THEME } from '@admiral-ds/react-ui';
import '@admiral-ds/fonts/VTBGroupUI.css';
import 'public/font/type.today-loos-latin-cyrillic-wide-web/font.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #E5E5E5;
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DropdownProvider>
      <ThemeProvider theme={LIGHT_THEME}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </DropdownProvider>
  );
}
