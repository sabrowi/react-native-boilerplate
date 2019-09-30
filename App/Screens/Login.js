import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import api from '../Config/api';
import {LOGIN} from '../Config/types';
import {Container, Button, Input} from '../Components/';
import Snackbar from 'react-native-snackbar';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleSubmit = () => {
    api.Auth.login({email: this.state.username, password: this.state.password})
      .then(res => {
        console.log(res);
        this.props.login({
          isAuthenticated: true,
          jwt: res.token,
          user: {
            nama: 'Kukuh Sabrowi',
            email: 'ku2h.sabrowi@gmail.com',
          },
        });
        this.props.navigation.navigate('Main');
      })
      .catch(err => {
        this.notify('Username / password salah!');
      });
  };

  notify = msg => {
    Snackbar.show({
      title: msg,
      duration: Snackbar.LENGTH_SHORT,
      color: 'white',
    });
  };

  render() {
    return (
      <Container center>
        <Text style={styles.hello}>LOGIN</Text>
        <Input
          placeholder="Username"
          onChangeText={val => this.setState({username: val})}
          value={this.state.username}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={val => this.setState({password: val})}
          value={this.state.password}
        />
        <Button onPress={this.handleSubmit} block>
          Submit
        </Button>
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

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch({type: LOGIN, payload}),
});

export default connect(
  null,
  mapDispatchToProps,
)(Login);
