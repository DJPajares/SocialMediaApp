import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

type ModalHeaderProps = {
  title: string;
};

const ModalHeader = ({title}: ModalHeaderProps) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-row justify-between items-center p-4 border-b border-b-neutral-200 dark:border-b-neutral-800">
      <View className="flex-row grow justify-end">
        <TouchableOpacity onPress={handleBack}>
          <Text className="text-text dark:text-text-dark">Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalHeader;
