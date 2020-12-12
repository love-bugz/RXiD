import * as React from 'react';
import { StyleSheet, StyleProp, TextStyle, TouchableOpacity, ViewStyle, View } from 'react-native';

import StyleGuide from '../styles/StyleGuide';
import Text from './Text';

interface ButtonProps {
  label: string;
  secondary?: boolean;
  danger?: boolean;
  block?: boolean;
  noShadow?: boolean;
  icon?: JSX.Element;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress: (() => void) | ((e: any) => void);
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: StyleGuide.spacing,
    paddingHorizontal: StyleGuide.spacing * 2,
    borderRadius: 5,
  },
  label: {
    color: StyleGuide.colors.contrastText,
    textAlign: 'center',
  },
});

const Button = ({
  label,
  secondary,
  danger,
  block,
  noShadow,
  icon,
  buttonStyle,
  labelStyle,
  onPress,
}: ButtonProps) => {
  const BUTTON_COLOR = secondary
    ? StyleGuide.colors.secondary
    : danger
    ? StyleGuide.colors.danger
    : StyleGuide.colors.primary;

  const shadows = noShadow ? undefined : StyleGuide.shadow;

  const blockButton = (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        buttonStyle,
        shadows,
        {
          backgroundColor: BUTTON_COLOR,
          width: '100%',
          paddingVertical: StyleGuide.spacing + 2,
        },
      ]}>
      {icon && icon}
      <Text
        type="headline"
        style={[styles.label, labelStyle, icon && { marginLeft: StyleGuide.spacing }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const fitButton = (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, buttonStyle, shadows, { backgroundColor: BUTTON_COLOR }]}>
        {icon && icon}
        <Text
          type="headline"
          style={[styles.label, labelStyle, icon && { marginLeft: StyleGuide.spacing }]}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );

  if (block) return blockButton;
  else return fitButton;
};

export default Button;
