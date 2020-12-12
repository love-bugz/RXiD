import React, { useReducer, useEffect, useRef } from 'react';
import { TextInputSubmitEditingEventData } from 'react-native';
import { NativeSyntheticEvent } from 'react-native';
import { View, Text, TextInput, StyleSheet, Platform, Animated } from 'react-native';

type InputState = {
  value: string;
  isValid: boolean;
  focus: boolean;
  touched: boolean;
};

type Action =
  | { type: 'INIT'; value: string; isValid: boolean; touched: boolean }
  | {
      type: 'INPUT_CHANGE';
      value: string;
      isValid: boolean;
      touched: boolean;
    }
  | { type: 'INPUT_BLUR'; touched: boolean; focus: boolean }
  | { type: 'INPUT_FOCUSE'; focus: boolean };

function inputReducer(state: InputState, action: Action): InputState {
  console.log('STATE: ', state);
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
        touched: true,
      };
    case 'INPUT_BLUR':
      return {
        ...state,
        touched: true,
        focus: false,
      };
    case 'INPUT_FOCUSE':
      return {
        ...state,
        focus: true,
      };
    default:
      return state;
  }
}

interface InputProps {
  id: string;
  value?: string;
  label?: string;
  required?: boolean;
  submit?: (text: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  email?: boolean;
  contain?: string;
  errorText?: string;
  onInputChange: (id: string, initialValue?: string, isValid?: boolean) => void;
  initialValue?: string;
  initiallyValid?: boolean;
  outlined?: boolean;
  borderColor?: string;
  fontSize?: number;
  right?: boolean;
  formControlStyle?: object;
  errorContainerStyle?: object;
  errorTextStyle?: object;
  labelStyle?: object;
  inputStyle?: object;
}

const Input = (props: InputProps) => {
  const textAnim = useRef(new Animated.Value(0)).current;

  const handleAnimation = () => {
    Animated.timing(textAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const fontSize = textAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [props.fontSize || 18, 13],
  });

  const marginTop = textAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [10, -7],
  });

  const color = textAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgb(70,70,90)', props.borderColor || 'rgb(70,70,90)'],
  });

  const animatedStyle = {
    fontSize,
    marginTop,
    color: props.borderColor && color,
  };

  const initialValue = props.initialValue ? props.initialValue : '';
  const initialIsValid = props.initiallyValid ? props.initiallyValid : false;

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue,
    isValid: initialIsValid,
    touched: false,
    focus: false,
  });

  const { onInputChange, id } = props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, id]);

  const textChangeHandler = (text: string) => {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    if (props.contain && !text.includes(props.contain)) {
      isValid = false;
    }
    dispatch({ type: 'INPUT_CHANGE', value: text, isValid, touched: true });
  };

  const lostFocusHandler = () => {
    dispatch({ type: 'INPUT_BLUR', touched: true, focus: false });
  };

  if (props.outlined) {
    return (
      <Animated.View style={[styles.formControl, props.formControlStyle]}>
        <Animated.Text
          style={[
            styles.label,
            (inputState.touched || inputState.focus) && styles.endLabel,
            props.initialValue ? styles.basic : animatedStyle,
            !inputState.isValid && inputState.touched && styles.redColor,
            {
              color: props.borderColor && inputState.focus && props.borderColor,
            },
            props.right && styles.labelRight,
            props.labelStyle,
          ]}>
          {props.label}
        </Animated.Text>
        <TextInput
          onSubmitEditing={text => (props.submit ? props.submit(text) : null)}
          onFocus={() => {
            dispatch({ type: 'INPUT_FOCUSE', focus: true });
            handleAnimation();
          }}
          textAlignVertical="top"
          {...props}
          style={[
            styles.input,
            {
              borderColor: inputState.isValid || !inputState.touched ? '#ccc' : 'rgb(211,55,83)',
            },
            {
              borderColor: inputState.focus && props.borderColor && props.borderColor,
            },
            props.inputStyle,
          ]}
          value={props.value || inputState.value}
          onChangeText={textChangeHandler}
          onBlur={lostFocusHandler}
        />
        {!inputState.isValid && inputState.touched && props.errorText && (
          <View style={[styles.errorContainer, props.errorContainerStyle]}>
            <Text
              style={[
                styles.errorText,
                {
                  textAlign: props.right ? 'right' : undefined,
                  color: props.borderColor && inputState.focus ? props.borderColor : undefined,
                },
                props.errorTextStyle,
              ]}>
              {props.errorText}
            </Text>
          </View>
        )}
      </Animated.View>
    );
  }
  return (
    <View style={[styles.formControl, props.formControlStyle]}>
      <Text style={[styles.lineLabel, props.right && styles.lineLabelRight, props.labelStyle]}>
        {props.label}
      </Text>
      <TextInput
        onFocus={() => {
          dispatch({ type: 'INPUT_FOCUSE', focus: true });
        }}
        onSubmitEditing={text => (props.submit ? props.submit(text) : null)}
        textAlignVertical="top"
        {...props}
        style={[
          styles.inputLine,
          {
            borderBottomColor:
              inputState.isValid || !inputState.touched ? '#ccc' : 'rgb(211,55,83)',
          },
          {
            borderBottomColor:
              inputState.focus && props.borderColor ? props.borderColor : undefined,
          },
          props.inputStyle,
        ]}
        value={props.value || inputState.value}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
      />
      {!inputState.isValid && inputState.touched && props.errorText && (
        <View style={[styles.errorContainer, props.errorContainerStyle]}>
          <Text
            style={[styles.errorText, props.right && styles.errorTxtRight, props.errorTextStyle]}>
            {props.errorText}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  basic: {
    fontSize: 13,
    marginTop: -7,
    zIndex: 10,
  },
  label: {
    marginVertical: 8,
    color: 'rgb(70,70,90)',
    position: 'absolute',
    marginTop: 13,
    left: 20,
    backgroundColor: 'white',
    paddingHorizontal: 5,
  },
  lineLabel: {
    marginVertical: 8,
    fontSize: 15,
    color: 'rgb(60,60,70)',
  },
  endLabel: {
    zIndex: 10,
  },
  redColor: {
    color: 'rgb(211,55,83)',
  },
  input: {
    fontSize: 22,
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: Platform.OS === 'ios' ? 8 : 3,
    borderWidth: 1.5,
    borderRadius: 5,
  },
  inputLine: {
    fontSize: 22,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    paddingHorizontal: 15,
    color: 'rgb(211,55,83)',
    fontSize: 13,
  },
  errorTxtRight: { textAlign: 'right' },
  labelRight: { right: 20, left: undefined },
  lineLabelRight: { textAlign: 'right' },
});

export default Input;
