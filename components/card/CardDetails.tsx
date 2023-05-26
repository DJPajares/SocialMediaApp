import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatCurrency} from '../../utils/formatUtils';
import {useNavigation} from '@react-navigation/native';
import colors from 'tailwindcss/colors';
import {useColorScheme} from 'nativewind';

type CardDetailsProps = {
  // navigation: any;
  item: any;
  // id: number;
  // name: string;
  // price: number;
  // currency: string;
  // category: string;
  // likeCount: number;
};

const CardDetails = ({item}: CardDetailsProps) => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme().colorScheme === 'dark';

  const handleOpenItem = () => {
    navigation.navigate('MarketPlaceItem', {item});
  };

  return (
    <View>
      <View className="flex-row justify-between items-center mt-1">
        <View className="flex-row items-center">
          <MaterialCommunityIcons
            name="heart-outline"
            color={isDarkMode ? colors.stone[50] : colors.stone[950]}
            size={20}
          />
          <Text className="text-xs text-text dark:text-text-dark font-bold ml-1">
            {item.likeCount}
          </Text>
        </View>

        <Text className="text-xs text-primary font-bold">
          {formatCurrency({value: item.price, currency: item.currency})}
        </Text>
      </View>

      <View className="flex-row justify-between mt-1">
        <TouchableOpacity onPress={() => handleOpenItem()}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            className="text-xs text-text dark:text-text-dark font-bold">
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>

      <View className="flex-row justify-between mt-1">
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className="text-xs text-subtext">
          {item.category}
        </Text>
      </View>
    </View>
  );
};

export default CardDetails;
