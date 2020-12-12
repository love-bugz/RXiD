import React, { ReactNode } from 'react';
import { TextProps as OriginalTextProps, Text as RNText } from 'react-native';

import StyleGuide from '../styles/StyleGuide';

export interface TextProps extends OriginalTextProps {
  white?: boolean;
  type?: keyof typeof StyleGuide['typeography'];
  children?: ReactNode;
}

const Text = ({ white, type, style, children }: TextProps) => {
  const color = white ? StyleGuide.colors.contrastText : StyleGuide.colors.text;
  return (
    <RNText style={[StyleGuide.typeography[type || 'body'], { color }, style]}>{children}</RNText>
  );
};

export default Text;
