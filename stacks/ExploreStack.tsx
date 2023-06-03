import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationsScreen from '../containers/NotificationsScreen';
import TransactionScreen from '../containers/TransactionScreen';
import ExploreScreen from '../containers/ExploreScreen';
import {useColorScheme} from 'nativewind';
import colors from 'tailwindcss/colors';

const Stack = createNativeStackNavigator();

const ExploreStack = () => {
  const isDarkMode = useColorScheme().colorScheme === 'dark';

  return (
    <Stack.Navigator
      initialRouteName="Explore"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: isDarkMode ? colors.stone[900] : colors.stone[200],
        },
      }}>
      <Stack.Group
        screenOptions={{
          animation: 'fade_from_bottom',
        }}>
        <Stack.Screen name="Explore" component={ExploreScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ExploreStack;
