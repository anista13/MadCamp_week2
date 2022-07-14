import registerRootComponent from 'expo/build/launch/registerRootComponent';

import App from '../../App';
import {AppRegistry} from 'react-native'
import app from '../../ServerExample'
import {name as appName} from '../../app.json';

//AppRegistry.registerComponent(appName, () => app);
//registerRootComponent(app);
registerRootComponent(App);
