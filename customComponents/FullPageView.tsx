import React, { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ViewProps as OriginalViewProps, View, Dimensions } from 'react-native';
import StyleGuide from '../styles/StyleGuide';

const insetTypes = {
  horizontal: 'horizontal',
  vertical: 'vertical',
  none: 'none',
};

export interface ViewProps extends OriginalViewProps {
  insets?: keyof typeof insetTypes;
  children: ReactNode;
}

const { width, height } = Dimensions.get('window');

const FullPageView = ({ style, insets, children }: ViewProps) => {
  const edgeInsets = useSafeAreaInsets();

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
          backgroundColor: StyleGuide.colors.contrastText,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default FullPageView;
