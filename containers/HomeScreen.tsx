import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import MainHeader from '../components/header/MainHeader';

type RootStackParamList = {
  Notifications: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Notifications'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView className="flex-1">
      <MainHeader />

      <View className="flex-1 justify-center items-center mx-4">
        <Text className=" font-semibold text-2xl text-text dark:text-text-dark">
          Home screen
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
