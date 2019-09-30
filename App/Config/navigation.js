import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../Theme/colors';

/* Import Screen */
import Main from '../Screens/Main';
import Loader from '../Screens/Loader';
import Login from '../Screens/Login';

const headerConfig = {
  defaultNavigationOptions: {
    headerTintColor: Colors.white,
    headerStyle: {
      backgroundColor: Colors.primary,
    },
  },
};

const AppStack = createStackNavigator(
  {
    Main,
  },
  {
    initialRouteName: 'Main',
    headerConfig,
  },
);

const AuthStack = createStackNavigator(
  {
    Login,
  },
  {
    initialRouteName: 'Login',
    headerConfig,
  },
);

export default createAppContainer(
  createSwitchNavigator({
    Loader,
    Auth: AuthStack,
    App: AppStack,
  }),
);
