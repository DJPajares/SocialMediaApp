import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationsScreen from '../containers/NotificationsScreen';
import TransactionScreen from '../containers/TransactionScreen';
import MarketplaceScreen from '../containers/MarketplaceScreen';
import MarketplaceItemScreen from '../containers/MarketplaceItemScreen';
import UserProfileScreen from '../containers/UserProfileScreen';

const Stack = createNativeStackNavigator();

const MarketplaceStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MarketplaceStack;
