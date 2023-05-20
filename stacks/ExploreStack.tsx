import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NotificationsScreen from '../containers/NotificationsScreen';
import TransactionScreen from '../containers/TransactionScreen';
import ExploreScreen from '../containers/ExploreScreen';

const Stack = createNativeStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
