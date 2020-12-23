import React, { ReactNode } from 'react';

// Hooks
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Props and Library Components
import { ViewProps as OriginalViewProps, View, Dimensions } from 'react-native';

// Styling
import StyleGuide from '../styles/StyleGuide';

// Types of Edge Insets
const insetTypes = {
  horizontal: 'horizontal',
  vertical: 'vertical',
  none: 'none',
};

// View Props
export interface ViewProps extends OriginalViewProps {
  insets?: keyof typeof insetTypes;
  children: ReactNode;
}

// Constants
const { width, height } = Dimensions.get('window');

// EXPORTED FULLPAGEVIEW COMPONENT ------------------------------------
const FullPageView = ({ style, insets, children }: ViewProps) => {
  // Hooks
  const edgeInsets = useSafeAreaInsets();

  // Determining padding based on props given
  const paddingRight = !insets ? 10 : insets === 'horizontal' ? 10 : undefined;
  const paddingLeft = !insets ? 10 : insets === 'horizontal' ? 10 : undefined;
  const paddingTop = !insets ? edgeInsets.top : insets === 'vertical' ? edgeInsets.top : undefined;
  const paddingBottom = !insets
    ? edgeInsets.bottom
    : insets === 'vertical'
    ? edgeInsets.bottom
    : undefined;

  return (
    <View
      style={[
        insets != 'none' && {
          paddingRight,
          paddingLeft,
          paddingTop,
          paddingBottom,
        },
        {
          width,
          height,
          backgroundColor: StyleGuide.colors.neutral.white,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default FullPageView;
