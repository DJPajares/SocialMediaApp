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
    navigation.navigate('UserProfile');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleOpenItem()}>
        <Image style={styles.card} source={{uri: item.image}} />
      </TouchableOpacity>

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={styles.overlay}>
        <View style={styles.labelContainer}>
          <TouchableOpacity onPress={() => handleNavigateToProfile()}>
            <View className="flex-row items-center">
              <Avatar url={item.userImage} width={20} />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                className="text-xs text-text-dark max-w-[80%] pl-2">
                {item.username}
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
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  card: {
    aspectRatio: 1,
    // resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: '#fff',
    // marginBottom: 8,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  labelContainer: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 8,
    paddingBottom: 8,
  },
});
