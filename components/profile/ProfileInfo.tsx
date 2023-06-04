import React from 'react';
import {Image, Text, View} from 'react-native';

const ProfileInfo = ({user}) => {
  return (
    <View className="p-4 w-screen">
      <View className="items-center p-2 border border-stone-300 dark:border-stone-800 rounded-lg">
        <Image className="h-32 w-32 rounded-full" source={{uri: user.image}} />

        <View className="flex flex-col py-2">
          <Text className="text-2xl font-bold text-text dark:text-text-dark">
            {user.name}
          </Text>
        </View>

        <View className="flex flex-row justify-between">
          <View className="flex flex-col items-center px-4">
            <Text className="font-bold text-text dark:text-text-dark">
              Followers
            </Text>
            <Text className="text-gray-500">{user.followers}</Text>
          </View>
          <View className="flex flex-col items-center px-4">
            <Text className="font-bold text-text dark:text-text-dark">
              Following
            </Text>
            <Text className="text-gray-500">{user.following}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileInfo;
