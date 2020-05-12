
import 'react-native-gesture-handler';
import React from 'react';
import { Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/types';
import MyList from './src/MyList';
import Main from './src/Main';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen
          name="Home"
          component={MyList}
          options={{
            title: 'Overview',
          }}
          initialParams={{ greet: 'Hello World' }}
        />
        <Stack.Screen name="Details" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
