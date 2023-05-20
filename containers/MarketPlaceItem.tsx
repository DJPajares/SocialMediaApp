import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ModalHeader from '../components/ModalHeader';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatCurrency} from '../utils/formatUtils';

const MarketPlaceItem = ({navigation, route}) => {
  const {
    image,
    name,
    price,
    currency,
    username,
    userImage,
    description,
    likeCount,
    category,
    country,
  } = route.params?.item;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.flex}>
      <ModalHeader title={name} handleBack={handleBack} />

      <Image style={styles.image} source={{uri: image}} />

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.likeContainer}>
            <MaterialCommunityIcons
              name="heart-outline"
              color="black"
              size={25}
            />
            <Text style={styles.likeText}>{likeCount}</Text>
          </View>

          <Text style={styles.priceText}>
            {formatCurrency({value: price, currency})}
          </Text>
        </View>

        <View style={styles.titleContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.nameText}>
            {name}
          </Text>
          <Text style={styles.categoryText}>{category}</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <View style={styles.userContainer}>
            <Image style={styles.userImage} source={{uri: userImage}} />

            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.usernameText}>
              {username}
            </Text>
          </View>

          <Text style={styles.countryText}>{country}</Text>

          <View style={styles.divider} />
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default MarketPlaceItem;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    margin: 16,
  },
  image: {
    aspectRatio: 1,
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginTop: 16,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    // maxWidth: '70%',
  },
  categoryText: {
    fontSize: 14,
    color: '#999999',
    marginTop: 4,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#43a2ea',
  },
  descriptionContainer: {
    marginTop: 16,
    backgroundColor: '#ffffff', // Set desired background color
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dddddd',
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.4,
    // shadowRadius: 4,
    // elevation: 4,
    padding: 16,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    marginRight: 8,
  },
  usernameText: {
    fontSize: 14,
  },
  countryText: {
    fontSize: 12,
    color: '#999999',
    marginTop: 8,
  },
  divider: {
    borderBottomColor: '#cdd1ce',
    borderBottomWidth: 1,
    marginVertical: 16,
  },
  descriptionText: {
    paddingTop: 8,
    fontSize: 16,
  },
});
