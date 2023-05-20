import React from 'react';
import HomeScreen from '../containers/HomeScreen';
import MarketplaceScreen from '../containers/MarketplaceScreen';
import ReviewScreen from '../containers/ReviewScreen';
import ExploreScreen from '../containers/ExploreScreen';
import ProfileScreen from '../containers/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  name: string;
  color: string;
  size: number;
};

const TabBarIcon = ({name, color, size}: TabBarIconProps) => {
  return <MaterialCommunityIcons name={name} color={color} size={size} />;
};

const TabBarMiddleIcon = ({name, color, size}: TabBarIconProps) => {
  return (
    <View style={styles.middleButton}>
      <MaterialCommunityIcons name={name} color={color} size={size} />
    </View>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        tabBarStyle: styles.tabBar,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({color, size}) =>
            TabBarIcon({name: 'home-variant', color, size}),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Explore',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({color, size}) =>
            TabBarIcon({name: 'magnify', color, size}),
        }}
      />
      <Tab.Screen
        name="Review"
        component={ReviewScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({size}) =>
            TabBarMiddleIcon({name: 'plus-thick', color: 'white', size}),
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('CreateNew');
          },
        })}
      />
      <Tab.Screen
        name="Marketplace"
        component={MarketplaceScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Marketplace',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({color, size}) =>
            TabBarIcon({name: 'storefront', color, size}),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({color, size}) =>
            TabBarIcon({name: 'account', color, size}),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabBar: {
    height: 90,
    paddingTop: 10,
  },
  middleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#43a2ea',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
  },
});
