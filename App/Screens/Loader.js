import React, {Component} from 'react';
import {Text, ActivityIndicator, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Container} from '../Components/';
import Colors from '../Theme/colors';

class Loader extends Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    setTimeout(() => {
      this.checkUserSignedIn();
    }, 10000);
  }

  checkUserSignedIn = async () => {
    try {
      let jwt = await AsyncStorage.getItem('jwt');
      if (jwt !== null) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Auth');
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container center>
        <View style={styles.top}>
          <ActivityIndicator size={50} color={Colors.primary} />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.text}>React Native Boilerplate</Text>
          <Text style={styles.textSmall}>By Sabrowi</Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  top: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 20,
  },
  textSmall: {
    fontSize: 12,
  },
});

export default Loader;
