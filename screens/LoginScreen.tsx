import React, { useState, useRef } from 'react';

// Hooks
import { useNavigation } from '@react-navigation/native';

// Library Components
import { View, Dimensions, TextInput, StyleSheet, Keyboard, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Utility functions
import { validateEmail, validatePassword } from '../utils/formValidation';

// Custom Components
import Button from '../customComponents/Button';
import Text from '../customComponents/Text';
import Input from '../customComponents/Input';
import { LoginSVG, BottomSVG } from '../widgets/LoginSVG';
import error_icon from '../assets/error.png';

// Styling
import StyleGuide from '../styles/StyleGuide';

// Types
import { HomeScreenNavigationProp } from '../types';

// CONSTANTS
const { height, width } = Dimensions.get('window');
const GREY = StyleGuide.colors.neutral[350];
const LIGHT_PRIMARY = StyleGuide.colors.brand.primary[100];
const PRIMARY = StyleGuide.colors.brand.primary[150];
const MEDIUM_PRIMARY = StyleGuide.colors.brand.primary[250];
const DARK_PRIMARY = StyleGuide.colors.brand.primary[400];
const BLACK = StyleGuide.colors.brand.primary[450];

const states = { rest: 'rest', error: 'error', primary: 'primary', success: 'success' };

// EXPORTED LOGIN SCREEN COMPONENT ---------------
export default function LoginScreen() {
  // Hooks
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // State Hooks
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailState, setEmailState] = useState(states.rest);
  const [passwordState, setPasswordState] = useState(states.rest);

  // Ref Hooks
  const emailRef = useRef<TextInput>(null);
  const passRef = useRef<TextInput>(null);

  // Function to login user
  function login(e: any) {
    e.preventDefault();
    console.log(`EMAIL: ${email}\nPASSWORD: ${password}`);
    console.log('login');
    navigation.navigate('Home');
  }

  // validate emai and password, set errors if necessary
  function validate(e: any) {
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    if (typeof emailValidation === 'string') {
      setEmailError(emailValidation);
      setEmailState(states.error);
      resetErrors();
    }
    if (typeof passwordValidation === 'string') {
      setPasswordError(passwordValidation);
      setPasswordState(states.error);
      resetErrors();
    }
    if (!passwordValidation && !emailValidation) {
      checkErrors(e);
    }
  }

  function reset() {
    setEmailState(states.rest);
    setPasswordState(states.rest);
    setEmailError('');
    setPasswordError('');
  }

  function resetErrors() {
    setTimeout(() => {
      reset();
    }, 9500);
  }

  // if no errors, continue to login
  function checkErrors(e: any) {
    if (emailError.length === 0 && passwordError.length === 0) {
      setEmailState(states.success);
      setPasswordState(states.success);
      login(e);
    }
  }

  // Function to focus on next input after entering email
  function focusNext() {
    passRef.current?.focus();
  }

  return (
    <View style={{ flex: 1 }} onTouchStart={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text type="heading1" style={{ position: 'absolute', top: 70, left: 20 }}>
          RXiD
        </Text>

        <LoginSVG />
        <LinearGradient
          colors={[LIGHT_PRIMARY, PRIMARY, MEDIUM_PRIMARY, DARK_PRIMARY, BLACK]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}>
          <View style={styles.container}>
            <View
              style={{
                width: '100%',
                height: height / 3.3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
              }}>
              <View>
                {emailError.length > 0 && (
                  <Text type="mediumBodyBold">
                    <ErrorIcon />
                    {emailError}
                  </Text>
                )}
                <Input
                  value={email}
                  placeholder="Email"
                  onChangeText={text => setEmail(text)}
                  ref={emailRef}
                  underlineColorAndroid="transparent"
                  autoCompleteType="email"
                  autoCorrect={false}
                  placeholderTextColor={GREY}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={focusNext}
                  onFocus={() => setEmailState(states.primary)}
                  onBlur={() => setEmailState(states.rest)}
                  onTouchStart={reset}
                  //@ts-ignore
                  state={emailState}
                  label="Enter your email"
                />
              </View>
              <View>
                {passwordError.length > 0 && (
                  <Text type="mediumBodyBold">
                    <ErrorIcon />
                    {passwordError}
                  </Text>
                )}
                <Input
                  ref={passRef}
                  //@ts-ignore
                  state={passwordState}
                  underlineColorAndroid="transparent"
                  placeholder="Password"
                  autoCompleteType="password"
                  autoCorrect={false}
                  secureTextEntry={true}
                  placeholderTextColor={GREY}
                  autoCapitalize="none"
                  keyboardType="visible-password"
                  passwordRules="required: upper; required: lower; required: digit; minlength: 8"
                  maxLength={25}
                  onChangeText={text => setPassword(text)}
                  onFocus={() => setPasswordState(states.primary)}
                  onBlur={() => setPasswordState(states.rest)}
                  onTouchStart={reset}
                  returnKeyType="done"
                  onSubmitEditing={validate}
                  label="Enter your password"
                />
              </View>
            </View>
            <Button
              circle
              shadow
              block
              label="Login"
              onPress={validate}
              buttonStyle={{
                backgroundColor: 'transparent',
                borderWidth: 1,
                borderColor: 'white',
              }}
              labelStyle={{ color: 'white' }}
            />
          </View>
          <BottomSVG />
        </LinearGradient>
      </View>
    </View>
  );
}

const ErrorIcon = () => <Image source={error_icon} style={{ height: 24, width: 24 }} />;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: StyleGuide.spacing.large,
    marginTop: -10,
  },
});
