const REGULAR = 'Inter';
const BOLD = 'Inter-Bold';

const StyleGuide = {
  spacing: {
    tiny: 8,
    small: 16,
    medium: 24,
    large: 32,
    extraLarge: 40,
    smallBlock: 56,
    mediumBlock: 72,
    largeBlock: 80,
    extraLargeBlock: 96,
    giant: 120,
  },
  round: 4,
  colors: {
    brand: {
      primary: {
        '100': '#CAE3FC',
        '150': '#62ACF8',
        '200': '#5697D9',
        '250': '#2d90f5',
        '300': '#277ED6',
        '350': '#226CB8',
        '400': '#1C5A99',
        '450': '#16487A',
        '500': '#25405D',
      },
      secondary: {
        '100': '#F1BF8A',
        '150': '#EB9E50',
        '200': '#E78E32',
        '250': '#E47E15',
        '300': '#D68027',
        '350': '#B86E22',
        '400': '#8A521A',
        '450': '#734515',
        '500': '#5C3711',
      },
    },
    state: {
      info: {
        '150': '#C99FF1',
        '200': '#A866E9',
        '250': '#9856D9',
        '300': '#834ABA',
        '350': '#6D3D9B',
        '400': '#57317C',
      },
      success: {
        '150': '#BAF97C',
        '200': '#90F52D',
        '250': '#7ED627',
        '300': '#6CB822',
        '350': '#487A16',
        '400': '#365C11',
      },
      error: {
        '150': '#FA9696',
        '200': '#F64847',
        '250': '#F52E2D',
        '300': '#D62827',
        '350': '#B82322',
        '400': '#7A1716',
      },
      warning: {
        '150': '#F8EA8E',
        '200': '#F2D51C',
        '250': '#E4CA28',
        '300': '#D5C035',
        '350': '#C7B541',
        '400': '#978511',
      },
    },
    neutral: {
      white: '#ffffff',
      '100': '#F5F5F5',
      '150': '#EBEBEB',
      '200': '#C7C7C7',
      '250': '#949494',
      '300': '#616161',
      '350': '#3D3D3D',
      '400': '#292929',
      '450': '#1F1F1F',
      black: '#000000',
    },
  },
  typeography: {
    heading1: {
      fontFamily: BOLD,
      fontSize: 56,
      lineHeight: 62,
    },
    heading2: {
      fontFamily: BOLD,
      fontSize: 48,
      lineHeight: 53,
    },
    heading3: {
      fontFamily: BOLD,
      fontSize: 40,
      lineHeight: 44,
    },
    heading4: {
      fontFamily: BOLD,
      fontSize: 32,
      lineHeight: 36,
    },
    heading5: {
      fontFamily: BOLD,
      fontSize: 24,
      lineHeight: 27,
    },
    heading6: {
      fontFamily: BOLD,
      fontSize: 20,
      lineHeight: 22,
    },
    largeBodyBold: {
      fontFamily: BOLD,
      fontSize: 20,
      lineHeight: 28,
    },
    largeBodyRegular: {
      fontFamily: REGULAR,
      fontSize: 20,
      lineHeight: 28,
    },
    mediumBodyBold: {
      fontFamily: BOLD,
      fontSize: 18,
      lineHeight: 26,
    },
    mediumBodyRegular: {
      fontFamily: REGULAR,
      fontSize: 18,
      lineHeight: 26,
    },
    normalBodyBold: {
      fontFamily: BOLD,
      fontSize: 16,
      lineHeight: 23,
    },
    normalBodyRegular: {
      fontFamily: REGULAR,
      fontSize: 16,
      lineHeight: 23,
    },
    smallBodyBold: {
      fontFamily: BOLD,
      fontSize: 14,
      lineHeight: 20,
    },
    smallbodyRegular: {
      fontFamily: REGULAR,
      fontSize: 14,
      lineHeight: 20,
    },
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
};

export default StyleGuide;
