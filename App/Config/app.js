import Config from 'react-native-config';

/* Basic Configuration */

const APP_NAME = Config.APP_NAME ? Config.APP_NAME : 'React Native Boilerplate';
const API_URL = Config.API_URL ? Config.API_URL : 'https://reqres.in/api/';

export {APP_NAME, API_URL};
