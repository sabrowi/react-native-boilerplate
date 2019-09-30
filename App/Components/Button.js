import React from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';
import Colors from '../Theme/colors';

const Button = props => {
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={[styles.button, props.block ? styles.block : null]}
      activeOpacity={0.5}
      underlayColor="#46a7db">
      <Text style={styles.text}>{props.children}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
  },
  block: {
    alignSelf: 'stretch',
  },
  text: {
    color: Colors.white,
  },
});

export default Button;
