import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ReviewScreen from '../../containers/ReviewScreen';
import HomeStack from '../../stacks/HomeStack';
import MarketplaceStack from '../../stacks/MarketplaceStack';
import ProfileStack from '../../stacks/ProfileStack';
import ExploreStack from '../../stacks/ExploreStack';
import {useColorScheme} from 'nativewind';

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

    // <LinearGradient
    //   colors={['#74c0f4', '#1a6cb1']}
    //   start={{x: 0, y: 0}}
    //   end={{x: 1, y: 1}}
    //   style={styles.middleButton}>
    //   {/* Render your button content */}
    //   <MaterialCommunityIcons name={name} color={color} size={size} />
    // </LinearGradient>
  );
};

const BottomTabs = () => {
  const {colorScheme} = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        tabBarStyle: styles.tabBar(isDarkMode),
        tabBarActiveTintColor: isDarkMode ? '#0369a1' : '#0369a1',
        tabBarInactiveTintColor: isDarkMode ? '#ffffff' : '#000000',
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) =>
            TabBarIcon({name: 'home-variant', color, size}),
        }}
      />
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size}) =>
            TabBarIcon({name: 'magnify', color, size}),
        }}
      />
      <Tab.Screen
        name="ReviewDummy"
        component={ReviewScreen}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({size}) =>
            TabBarMiddleIcon({name: 'plus-thick', color: 'white', size}),
          tabBarButton: props => <TouchableOpacity {...props} />,
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Review');
          },
        })}
      />
      <Tab.Screen
        name="MarketplaceStack"
        component={MarketplaceStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Marketplace',
          tabBarIcon: ({color, size}) =>
            TabBarIcon({name: 'storefront', color, size}),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) =>
            TabBarIcon({name: 'account', color, size}),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabBar: (isDarkMode: boolean) => ({
    // height: 90,
    // paddingTop: 10,
    // height: '10%',
    backgroundColor: isDarkMode ? '#292524' : 'white',
    borderTopWidth: 0,
  }),
  middleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#0369a1',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
  },
});
