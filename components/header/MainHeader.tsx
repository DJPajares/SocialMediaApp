import {useNavigation} from '@react-navigation/native';
import {useColorScheme} from 'nativewind';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MainHeader = () => {
  const navigation = useNavigation();

  const {colorScheme, toggleColorScheme} = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const handleNavigateToNotifications = () => {
    navigation.navigate('Notifications');
  };

  const handleNavigateToHome = () => {
    navigation.navigate('HomeStack');
  };

  return (
    <View className="flex-row justify-between items-center p-4 border-b border-b-divider dark:border-b-divider-dark">
      <TouchableOpacity onPress={handleNavigateToHome}>
        <Text className="text-lg font-bold text-primary">atrillion</Text>
      </TouchableOpacity>

      <View className="flex-row">
        <TouchableOpacity className="ml-2" onPress={toggleColorScheme}>
          <MaterialCommunityIcons
            name={
              colorScheme === 'dark' ? 'white-balance-sunny' : 'brightness-2'
            }
            size={24}
            color={isDarkMode ? 'white' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          className="ml-2"
          onPress={handleNavigateToNotifications}>
          <MaterialCommunityIcons
            name="bell"
            size={24}
            color={isDarkMode ? 'white' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity className="ml-2">
          <MaterialCommunityIcons
            name="cog"
            size={24}
            color={isDarkMode ? 'white' : 'black'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainHeader;
