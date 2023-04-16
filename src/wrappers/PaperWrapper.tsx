import React from 'react';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {primary, secondary} from '../constants/theme';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: primary,
    secondary: secondary,
  },
};

const PaperWrapper = ({children}: PaperWrapperProps) => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </SafeAreaProvider>
  );
};

export default PaperWrapper;

interface PaperWrapperProps {
  children: React.ReactNode;
}
