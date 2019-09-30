import React from 'react';
import {View, StyleSheet} from 'react-native';
import Metrics from '../Theme/metrics';

const Container = props => {
  return (
    <View
      style={[
        styles.container,
        props.style,
        !props.noMargin ? styles.marginContainer : null,
        props.center ? styles.center : null,
      ]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Metrics.marginTop,
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginContainer: {
    marginHorizontal: Metrics.marginHorizontal,
  },
});
export default Container;
