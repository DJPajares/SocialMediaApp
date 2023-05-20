import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type CardDetailsProps = {
  name: string;
  price: number;
  // username: string;
  // userImage: string;
  likeCount: number;
};

const CardDetails = ({
  name,
  price,
  // username,
  // userImage,
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

        <Text style={styles.priceText}>{`$${price}`}</Text>

        {/* <View style={styles.userContainer}>
          <Image style={styles.userImage} source={{uri: userImage}} />
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.username}>
            {username}
          </Text>
        </View> */}
      </View>

      <View style={styles.boxContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.nameText}>
          {name}
        </Text>
        {/* <Text style={styles.priceText}>{`$${price}`}</Text> */}
      </View>

      {/* TODO: Separate as Avatar component */}
      {/* <View style={styles.boxContainer}>
        <View style={styles.userContainer}>
          <Image style={styles.userImage} source={{uri: userImage}} />
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.username}>
            {username}
          </Text>
        </View>
      </View> */}
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
  // userContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   // width: '50%',
  // },
  // userImage: {
  //   width: 20,
  //   height: 20,
  //   borderRadius: 10,
  //   marginRight: 4,
  // },
  // username: {
  //   fontSize: 12,
  //   // width: '75%',
  // },
  nameText: {
    fontSize: 12,
    // width: '60%',
  },
  priceText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
