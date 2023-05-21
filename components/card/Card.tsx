import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AvatarWithName from '../avatar/AvatarWithName';

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
    <View>
      <TouchableOpacity onPress={() => handleOpenItem()}>
        <Image style={styles.card} source={{uri: item.image}} />
      </TouchableOpacity>

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={styles.overlay}>
        <View style={styles.labelContainer}>
          <TouchableOpacity onPress={() => handleNavigateToProfile()}>
            <AvatarWithName
              src={item.userImage}
              username={item.username}
              color="#ffffff"
              size="small"
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    aspectRatio: 1,
    // resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
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
