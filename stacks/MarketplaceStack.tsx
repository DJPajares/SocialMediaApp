import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationsScreen from '../containers/NotificationsScreen';
import TransactionScreen from '../containers/TransactionScreen';
import MarketplaceScreen from '../containers/MarketplaceScreen';
import MarketplaceItemScreen from '../containers/MarketplaceItemScreen';
import UserProfileScreen from '../containers/UserProfileScreen';
import {useColorScheme} from 'nativewind';
import colors from 'tailwindcss/colors';

const Stack = createNativeStackNavigator();

const MarketplaceStack = () => {
  const isDarkMode = useColorScheme().colorScheme === 'dark';

  return (
    <Stack.Navigator
      initialRouteName="Marketplace"
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
        <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
        <Stack.Screen
          name="MarketPlaceItem"
          component={MarketplaceItemScreen}
        />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        {/* <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Transaction" component={TransactionScreen} /> */}
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MarketplaceStack;
