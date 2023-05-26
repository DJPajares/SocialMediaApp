import {useNavigation} from '@react-navigation/native';
import {useColorScheme} from 'nativewind';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from 'tailwindcss/colors';

type ModalHeaderProps = {
  // title: string;
  // handleBack: () => void;
};

const Header = ({title}: ModalHeaderProps) => {
  const navigation = useNavigation();

  const isDarkMode = useColorScheme().colorScheme === 'dark';

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-row justify-between items-center p-4 border-b border-b-divider dark:border-divider-dark">
      <TouchableOpacity onPress={handleBack}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={24}
          color={isDarkMode ? colors.stone[50] : colors.stone[950]}
        />
      </TouchableOpacity>

      {/* <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        className="text-base text-text dark:text-text-dark font-bold uppercase">
        {title}
      </Text> */}

      <TouchableOpacity>
        <MaterialCommunityIcons
          name="cog"
          size={24}
          color={isDarkMode ? colors.stone[50] : colors.stone[950]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
