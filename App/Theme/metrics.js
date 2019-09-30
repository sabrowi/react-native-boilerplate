/**
 * This file contains metric's application
 */

import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navbarHeight: Platform.OS === 'ios' ? 54 : 66,
  marginTop: 30,
  marginHorizontal: 25,
};
