
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyList from './src/MyList';
import Main from './src/Main';
import { RootStackParamList } from './src/types';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen
          name="Home"
          component={MyList}
          options={{ title: 'Overview' }}
          initialParams={{ greet: 'Hello World' }}
        />
        <Stack.Screen name="Details" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
