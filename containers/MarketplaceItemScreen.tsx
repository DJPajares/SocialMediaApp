import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatCurrency} from '../utils/formatUtils';
// import {SafeAreaView} from 'react-native';
import Header from '../components/header/Header';
import colors from 'tailwindcss/colors';
import {useColorScheme} from 'nativewind';
import {SafeAreaView} from 'react-native-safe-area-context';
import Avatar from '../components/avatar/Avatar';

const MarketplaceItemScreen = ({navigation, route}) => {
  const {
    image,
    name,
    price,
    currency,
    username,
    userImage,
    description,
    likeCount,
    category,
    country,
  } = route.params?.item;

  const isDarkMode = useColorScheme().colorScheme === 'dark';

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNavigateToProfile = () => {
    navigation.navigate('UserProfile');
  };

  return (
    <SafeAreaView className="flex-1" edges={['top']}>
      <Header title={name} handleBack={handleBack} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image className="aspect-square" source={{uri: image}} />

        <View className="m-4">
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
              <MaterialCommunityIcons
                name="heart-outline"
                color={isDarkMode ? colors.stone[50] : colors.stone[950]}
                size={25}
              />
              <Text className="text-base text-text dark:text-text-dark font-bold ml-1">
                {likeCount}
              </Text>
            </View>

            <Text className="text-lg text-primary font-bold">
              {formatCurrency({value: price, currency})}
            </Text>
          </View>

          <View className="mt-2">
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className="text-xl text-text dark:text-text-dark font-bold">
              {name}
            </Text>
            <Text className="text-sm text-subtext mt-1">{category}</Text>
          </View>

          <View className="bg-subbackground dark:bg-subbackground-dark rounded-lg mt-4 p-4">
            <TouchableOpacity onPress={() => handleNavigateToProfile()}>
              <View className="flex-row items-center">
                <Avatar url={userImage} width={30} />
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  className="text-sm text-text dark:text-text-dark font-bold max-w-[80%] pl-2">
                  {username}
                </Text>
              </View>
            </TouchableOpacity>

            <Text className="text-sm text-subtext mt-2">{country}</Text>

            <View className="border-t border-t-stone-200 dark:border-t-stone-700 my-4" />
            <Text className="text-base text-text dark:text-text-dark pt-2">
              {description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MarketplaceItemScreen;
