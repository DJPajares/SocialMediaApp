import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type CardDetailsProps = {
  name: string;
  price: number;
  likeCount: number;
};

const CardDetails = ({name, price, likeCount}: CardDetailsProps) => {
  return (
    <View>
      <View style={styles.textContainer}>
        <View style={styles.likeContainer}>
          <MaterialCommunityIcons
            name="heart-outline"
            color="black"
            size={20}
          />
          <Text style={styles.likeText}>{likeCount}</Text>
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.nameText}>
          {name}
        </Text>
        <Text style={styles.priceText}>{`$${price}`}</Text>
      </View>
    </View>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 4,
  },
  likeText: {
    fontSize: 12,
    marginLeft: 4,
  },
  nameText: {
    fontSize: 14,
    width: '60%',
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
