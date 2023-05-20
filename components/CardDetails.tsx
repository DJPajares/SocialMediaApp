import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatCurrency} from '../utils/formatUtils';

type CardDetailsProps = {
  name: string;
  price: number;
  currency: string;
  category: string;
  likeCount: number;
};

const CardDetails = ({
  name,
  price,
  currency,
  category,
  likeCount,
}: CardDetailsProps) => {
  return (
    <View>
      <View style={styles.boxContainer}>
        <View style={styles.likeContainer}>
          <MaterialCommunityIcons
            name="heart-outline"
            color="black"
            size={20}
          />
          <Text style={styles.likeText}>{likeCount}</Text>
        </View>

        <Text style={styles.priceText}>
          {formatCurrency({value: price, currency})}
        </Text>
      </View>

      <View style={styles.boxContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.nameText}>
          {name}
        </Text>
      </View>

      <View style={styles.boxContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.categoryText}>
          {category}
        </Text>
      </View>
    </View>
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    fontSize: 12,
    marginLeft: 4,
  },
  nameText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 12,
    color: '#999999',
  },
  priceText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#43a2ea',
  },
});
