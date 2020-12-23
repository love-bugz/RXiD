import React, { RefObject } from 'react';

// Props and Library Components
import { TextInput, TextInputProps, View } from 'react-native';

// Custom Components
import Text from './Text';

// Styling
import StyleGuide from '../styles/StyleGuide';

// Input Style
const inputStyle = {
  height: StyleGuide.spacing.smallBlock,
  width: '100%',
  borderRadius: 5,
  backgroundColor: StyleGuide.colors.neutral.white,
  paddingLeft: StyleGuide.spacing.medium,
  ...StyleGuide.typeography.normalBodyRegular,
  color: StyleGuide.colors.neutral.black,
};

// possible input states
const states = {
  rest: StyleGuide.colors.neutral[350],
  error: StyleGuide.colors.state.error[300],
  primary: StyleGuide.colors.brand.primary[300],
  success: StyleGuide.colors.state.success[300],
};

// Input Props
type InputProps = React.ComponentPropsWithRef<typeof TextInput> &
  TextInputProps & {
    state: keyof typeof states;
    label?: string;
  };

// EXPORTED INPUT COMPONENT
export default React.forwardRef<TextInput, InputProps>(
  (
    { ...props },
    ref: string | ((instance: TextInput | null) => void) | RefObject<TextInput> | null | undefined
  ) => (
    <View style={{ width: '100%', margin: 0 }}>
      {props.label && props.state !== 'error' && <Text type="mediumBodyBold">{props.label}</Text>}
      <TextInput
        ref={ref}
        {...props}
        style={{
          ...inputStyle,
          borderColor: states[props.state],
          borderWidth: props.state === 'rest' || props.state === 'primary' ? 1 : 2,
        }}
      />
    </View>
  )
);
