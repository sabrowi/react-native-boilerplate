import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = props => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F6F8FA',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'stretch',
    marginBottom: 10,
    borderRadius: 4,
  },
});

export default Input;
