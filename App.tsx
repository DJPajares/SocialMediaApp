import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './components/tab/BottomTabs';
import ReviewScreen from './containers/ReviewScreen';
import {useColorScheme} from 'nativewind';
import colors from 'tailwindcss/colors';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme().colorScheme === 'dark';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: isDarkMode ? colors.stone[900] : colors.stone[200],
          },
        }}>
        <Stack.Group>
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="Review" component={ReviewScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
