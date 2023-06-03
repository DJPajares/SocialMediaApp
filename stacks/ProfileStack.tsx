import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationsScreen from '../containers/NotificationsScreen';
import TransactionScreen from '../containers/TransactionScreen';
import ProfileScreen from '../containers/ProfileScreen';
import {useColorScheme} from 'nativewind';
import colors from 'tailwindcss/colors';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  const isDarkMode = useColorScheme().colorScheme === 'dark';

  return (
    <Stack.Navigator
      initialRouteName="Profile"
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
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ProfileStack;
