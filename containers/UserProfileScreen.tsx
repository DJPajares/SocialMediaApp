import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import Header from '../components/header/Header';

const UserProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <Header />

      <View className="flex-1 justify-center items-center mx-4">
        <Text className=" font-semibold text-2xl text-text dark:text-text-dark">
          User Profile
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;
