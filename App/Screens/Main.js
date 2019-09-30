import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Container, Button, Input} from '../Components/';
import {LOGOUT} from '../Config/types';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  logout = async () => {
    await this.props.logout();
    await this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <Container center>
        <Text style={styles.hello}>Hello World!</Text>
        <Button onPress={this.logout}>Logout</Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    fontSize: 20,
    marginBottom: 30,
  },
});

const mapsDispatchProps = dispatch => ({
  logout: () => dispatch({type: LOGOUT}),
});

export default connect(
  null,
  mapsDispatchProps,
)(Main);
