import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

type CardProps = {
  image: string;
};

const Card = ({image}: CardProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    aspectRatio: 1,
    // resizeMode: 'contain',
    borderRadius: 8,
    borderWidth: 0.3,
    borderColor: '#ccc',
  },
});
