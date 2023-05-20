import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './components/BottomTabs';
import ReviewScreen from './containers/ReviewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: 'modal',
          }}>
          <Stack.Screen name="Review" component={ReviewScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
