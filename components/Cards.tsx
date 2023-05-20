import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

type CardsProps = {
  image: string;
  name: string;
  price: number;
};

const Cards = ({image, name, price}: CardsProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />

      <View style={styles.textContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.nameText}>
          {name}
        </Text>
        <Text style={styles.priceText}>{`$${price}`}</Text>
      </View>
    </View>
  );
};

export default Cards;

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
    // marginTop: 16,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  nameText: {
    fontSize: 14,
    width: '60%',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
