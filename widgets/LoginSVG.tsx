import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import StyleGuide from '../styles/StyleGuide';

const LIGHT_PRIMARY = StyleGuide.colors.brand.primary[100];
const { width } = Dimensions.get('window');

export function LoginSVG() {
  return (
    <Svg height={300} width={width} viewBox="0 0 300 300" preserveAspectRatio="none">
      <Path
        d="M-20.5 368.5C31.5 15.5 302.5 463 330 9C337.5 -6 375 500 375 644H0C0 644 -66.5 74.5 -188.5 258.5Z" // put your path here
        fill={LIGHT_PRIMARY}
        stroke={LIGHT_PRIMARY}
      />
    </Svg>
  );
}

export function BottomSVG() {
  return (
    <Svg height={350} width={width} viewBox="0 0 300 300" preserveAspectRatio="none">
      <Path
        d="M 458.05,381.50
            C 457.77,385.36 454.42,388.26 450.56,387.98
              450.56,387.98 -97.02,348.52 -97.02,348.52
              -100.87,348.24 -103.77,344.89 -103.50,341.03
              -103.50,341.03 -81.93,41.74 -81.93,41.74
              -81.65,37.83 -76.09,37.36 -75.16,41.17
              -52.46,133.69 54.66,176.27 134.68,124.57
              134.68,124.57 219.77,69.60 219.77,69.60
              297.22,25.36 391.09,20.55 472.66,56.65
              472.66,56.65 480.69,60.21 480.69,60.21
              480.98,60.34 481.17,60.64 481.14,60.97
              481.14,60.97 458.05,381.50 458.05,381.50 Z"
        fill="white"
        stroke="white"
      />
    </Svg>
  );
}
