import React from 'react';
import {StatusBar, SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './components/tab/BottomTabs';
import ReviewScreen from './containers/ReviewScreen';
import {useColorScheme} from 'nativewind';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme().colorScheme === 'dark';
  // const backgroundStyle = 'bg-neutral-300 dark:bg-slate-100';

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: isDarkMode ? '#1c1917' : '#f0f0f0'},
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
