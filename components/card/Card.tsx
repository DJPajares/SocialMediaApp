import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Avatar from '../avatar/Avatar';

type CardProps = {
  item: any;
  // image: string;
  // username: string;
  // userImage: string;
};

const Card = ({item}: CardProps) => {
  const navigation = useNavigation();

  const handleOpenItem = () => {
    navigation.navigate('MarketPlaceItem', {item});
  };

  const handleNavigateToProfile = () => {
    navigation.navigate('UserProfile', {
      user: item.user,
    });
  };

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleOpenItem()}>
          <Image
            className="aspect-square rounded-lg"
            source={{uri: item.image}}
          />
        </TouchableOpacity>
      </View>

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        className="absolute left-0 right-0 bottom-0 h-[30%] rounded-bl-lg rounded-br-lg">
        <View className="flex-1 grow items-end justify-end pr-2 pb-2">
          <TouchableOpacity onPress={() => handleNavigateToProfile()}>
            <View className="flex-row items-center">
              <Avatar url={item.user.image} width={20} />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                className="text-xs text-text-dark max-w-[80%] pl-2">
                {item.user.name}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  // keep this style for shadow
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
});
