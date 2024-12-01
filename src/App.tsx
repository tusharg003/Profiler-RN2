import React from 'react';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screen
import Home from './screens/Home';
import Details from './screens/Details';
import ProfileForm from './screens/ProfileForm';

export type RootStackParamList = {
  Home: undefined;
  ProfileForm: undefined;
  Details: {
    productId?: string;
    name: string;
    age: string;
    mail: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="ProfileForm"
          component={ProfileForm}
          options={{
            title: 'Enter your details',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Profile Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
