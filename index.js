/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import React from 'react';// removing this gives eslint error but idky

const ReduxWrapper = () => (
    <Provider store={store}>
        <App />
    </Provider>
);


AppRegistry.registerComponent(appName, () => ReduxWrapper);
