import React, { useState, useRef, useLayoutEffect } from 'react';

// Library Components
import { View, Dimensions, TextInput, StyleSheet } from 'react-native';

import { validateEmail, validatePassword } from '../utils/formValidation';

// Custom Components
import Button from '../customComponents/Button';
import Text from '../customComponents/Text';
import FullPageView from '../customComponents/FullPageView';

import StyleGuide from '../styles/StyleGuide';

const { height } = Dimensions.get('window');

// EXPORTED COMPONENT
export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const emailRef = useRef<TextInput>(null);
  const passRef = useRef<TextInput>(null);

  function login(e: any) {
    e.preventDefault();
    console.log(`EMAIL: ${email}\nPASSWORD: ${password}`);
    console.log('login');
  }

  function validate(e: any) {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    if (emailValidation) setEmailError(emailValidation);
    if (passwordValidation) setPasswordError(passwordValidation);
    setErrors(e);
  }

  function setErrors(e: any) {
    if (emailError.length === 0 && passwordError.length === 0) {
      login(e);
    }
  }

  function clearError(type: string) {
    if (type === 'email') setEmailError('');
    if (type === 'password') setPasswordError('');
  }

  return (
    <FullPageView style={{ justifyContent: 'center' }}>
      <View
        style={{
          alignItems: 'center',
          height: height / 1.5,
          paddingHorizontal: 20,
        }}>
        <Text type="title1">RXiD</Text>
        <TextInput
          ref={emailRef}
          style={[
            styles.input,
            {
              borderColor:
                emailError.length > 0 ? StyleGuide.colors.danger : StyleGuide.colors.primary,
            },
          ]}
          underlineColorAndroid="transparent"
          placeholder="Email"
          autoCompleteType="email"
          autoCorrect={false}
          placeholderTextColor={StyleGuide.colors.primary}
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          onSubmitEditing={() => passRef.current?.focus()}
          onFocus={() => clearError('email')}
        />
        {emailError ? (
          <Text type="footnote" style={styles.errorText}>
            {emailError}
          </Text>
        ) : null}
        <TextInput
          ref={passRef}
          style={[
            styles.input,
            {
              borderColor:
                passwordError.length > 0 ? StyleGuide.colors.danger : StyleGuide.colors.primary,
            },
          ]}
          underlineColorAndroid="transparent"
          placeholder="Password"
          autoCompleteType="password"
          autoCorrect={false}
          secureTextEntry={true}
          placeholderTextColor={StyleGuide.colors.primary}
          autoCapitalize="none"
          keyboardType="visible-password"
          passwordRules=""
          maxLength={25}
          onChangeText={text => setPassword(text)}
          onFocus={() => clearError('password')}
        />
        {passwordError ? (
          <Text type="footnote" style={styles.errorText}>
            {passwordError}
          </Text>
        ) : null}
        <Button block label="Login" onPress={validate} />
      </View>
    </FullPageView>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 15,
    height: 45,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
  },
  errorText: {
    textAlign: 'center',
    color: StyleGuide.colors.danger,
  },
});
