import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import ModalHeader from '../components/header/ModalHeader';

const ReviewScreen = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      <ModalHeader title="Review" />

      <View className="flex-1 justify-center items-center mx-4">
        <Text className=" font-semibold text-2xl text-text dark:text-text-dark">
          Review
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ReviewScreen;
