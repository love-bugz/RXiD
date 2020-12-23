import React, { ReactNode, useEffect, useState } from 'react';

// Props and Library Components
import { TextProps as OriginalTextProps, Text as RNText } from 'react-native';

// Styling
import StyleGuide from '../styles/StyleGuide';

// Text Props
export interface TextProps extends OriginalTextProps {
  white?: boolean;
  stateColor?: keyof typeof StyleGuide.colors.state;
  brandColor?: keyof typeof StyleGuide.colors.brand;
  type?: keyof typeof StyleGuide['typeography'];
  children?: ReactNode;
}

// EXPORTED TEXT COMPONENT ------------------------
const Text = ({ white, stateColor, brandColor, type, style, children }: TextProps) => {
  const [textColor, setTextColor] = useState('');

  // UseEffect Determining which color to assign the text based on props
  useEffect(() => {
    // if nothing given, text is black
    if (!stateColor && !brandColor && !white) {
      setTextColor(StyleGuide.colors.neutral.black);
      return;
    }
    // if white, text is white
    if (white) {
      setTextColor(StyleGuide.colors.neutral.white);
      return;
    }
    // Switch statement for state color options
    if (stateColor) {
      switch (stateColor) {
        case 'info':
          setTextColor(StyleGuide.colors.state.info[300]);
          break;
        case 'error':
          setTextColor(StyleGuide.colors.state.error[350]);
          break;
        case 'success':
          setTextColor(StyleGuide.colors.state.success[300]);
          break;
        case 'warning':
          setTextColor(StyleGuide.colors.state.warning[250]);
          break;
        default:
          return undefined;
      }
    }
    // Switch statement for brand color options
    if (brandColor) {
      switch (brandColor) {
        case 'primary':
          setTextColor(StyleGuide.colors.brand.primary[300]);
          break;
        case 'secondary':
          setTextColor(StyleGuide.colors.brand.secondary[300]);
          break;
        default:
          return undefined;
      }
    }
  }, []);

  if (textColor.length === 0) return null;
  return (
    <RNText
      style={[StyleGuide.typeography[type || 'normalBodyRegular'], { color: textColor }, style]}>
      {children}
    </RNText>
  );
};

export default Text;
