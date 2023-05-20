import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type CardProps = {
  image: string;
  username: string;
  userImage: string;
};

const Card = ({image, username, userImage}: CardProps) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: image}} />

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)']}
        style={styles.overlay}
      />

      <View style={styles.userContainer}>
        <Image style={styles.userImage} source={{uri: userImage}} />

        <View style={styles.usernameContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.username}>
            {username}
          </Text>
        </View>
      </View>
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
