import { ThemeProvider } from 'styled-components';
import GlobalStyle from './global';
import theme from './theme';
import { Props } from './types';

const DesignSystemProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default DesignSystemProvider;
