import * as React from 'react';

// Library Components
import { StyleSheet, StyleProp, TextStyle, TouchableOpacity, ViewStyle, View } from 'react-native';

// Custom Components
import Text from './Text';

// Styling
import StyleGuide from '../styles/StyleGuide';

// Variant Colors
const PRIMARY = StyleGuide.colors.brand.primary[350];
const SECONDARY = StyleGuide.colors.brand.secondary[300];
const ERROR = StyleGuide.colors.state.error[300];
const SUCCESS = StyleGuide.colors.state.success[300];
const WARNING = StyleGuide.colors.state.warning[300];
const LIGHT = StyleGuide.colors.neutral[150];
const DARK = StyleGuide.colors.neutral[400];

// Button variants
const variants = {
  primary: PRIMARY,
  secondary: SECONDARY,
  error: ERROR,
  succes: SUCCESS,
  warning: WARNING,
  light: LIGHT,
  dark: DARK,
};

// BUTTON PROPS
interface ButtonProps {
  label: string;
  variant?: keyof typeof variants;
  block?: boolean;
  circle?: boolean;
  shadow?: boolean;
  icon?: JSX.Element;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress: (() => void) | ((e: any) => void);
}

// BUTTON STYLES
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: StyleGuide.spacing.tiny,
    paddingHorizontal: StyleGuide.spacing.medium,
  },
  label: {
    textAlign: 'center',
  },
});

const Button = ({
  label,
  variant,
  circle,
  block,
  icon,
  shadow,
  buttonStyle,
  labelStyle,
  onPress,
}: ButtonProps) => {
  const BUTTON_COLOR = variant ? variants[variant] : PRIMARY;
  const RADIUS = circle ? 200 : 5;
  const SHADOW = shadow ? StyleGuide.shadow : undefined;
  const OUTLINE =
    variant === 'light'
      ? { borderWidth: 1, borderColor: StyleGuide.colors.neutral[400] }
      : undefined;
  const TEXT_COLOR =
    variant === 'light' ? StyleGuide.colors.neutral.black : StyleGuide.colors.neutral.white;

  const blockButton = (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        SHADOW,
        OUTLINE,
        {
          backgroundColor: BUTTON_COLOR,
          width: '100%',
          paddingVertical: StyleGuide.spacing.tiny + 6,
          borderRadius: RADIUS,
        },
        buttonStyle,
      ]}>
      {icon && icon}
      <Text
        type="largeBodyRegular"
        style={[
          styles.label,
          labelStyle,
          { color: TEXT_COLOR },
          icon && { marginLeft: StyleGuide.spacing.tiny },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  const fitButton = (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button,
          SHADOW,
          OUTLINE,
          {
            backgroundColor: BUTTON_COLOR,
            paddingVertical: 16,
            paddingHorizontal: 8,
            minWidth: 100,
            borderRadius: RADIUS,
          },
          buttonStyle,
        ]}>
        {icon && icon}
        <Text
          type="largeBodyBold"
          style={[
            styles.label,
            { color: TEXT_COLOR },
            icon && { marginLeft: StyleGuide.spacing.tiny },
            labelStyle,
          ]}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );

  if (block) return blockButton;
  else return fitButton;
};

export default Button;
