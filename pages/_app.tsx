import {
  ColorModeProvider,
  CSSReset,
  Flex,
  ThemeProvider,
} from '@chakra-ui/core';
import React from 'react';
import Nav from '../components/Nav';
import { AuthProvider } from '../firebase/auth';
import customTheme from '../styles/theme';

interface Props {
  Component: any;
  pageProps: object;
}
const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <Flex direction="column" align="center" justify="center">
          <AuthProvider>
            <Nav />
            <CSSReset />
            <Flex justify="center" align="center" w="100%" h="93vh">
              <Component {...pageProps} />
            </Flex>
          </AuthProvider>
        </Flex>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default MyApp;
