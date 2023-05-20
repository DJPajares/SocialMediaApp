import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
        <Image style={styles.image} source={{uri: item.image}} />
      </TouchableOpacity>

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={styles.overlay}>
        <View style={styles.userContainer}>
          <TouchableOpacity onPress={() => handleNavigateToProfile()}>
            <Image style={styles.userImage} source={{uri: item.userImage}} />
          </TouchableOpacity>

          <View style={styles.usernameContainer}>
            <TouchableOpacity onPress={() => handleNavigateToProfile()}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.username}>
                {item.username}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
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
    height: '40%',
  },
  userContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    paddingRight: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 4,
  },
  usernameContainer: {
    maxWidth: '80%', // Adjust the width as needed
  },
  username: {
    fontSize: 12,
    color: '#fff',
  },
});
