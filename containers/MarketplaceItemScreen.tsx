import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatCurrency} from '../utils/formatUtils';
import {SafeAreaView} from 'react-native';
import Header from '../components/Header';
import AvatarWithName from '../components/AvatarWithName';

const MarketplaceItemScreen = ({navigation, route}) => {
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

  const handleNavigateToProfile = () => {
    navigation.navigate('UserProfile');
  };

  return (
    <SafeAreaView style={styles.flex}>
      <Header title={name} handleBack={handleBack} />

      <ScrollView showsVerticalScrollIndicator={false}>
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
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.nameText}>
              {name}
            </Text>
            <Text style={styles.categoryText}>{category}</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <TouchableOpacity onPress={() => handleNavigateToProfile()}>
              <AvatarWithName src={userImage} username={username} />
            </TouchableOpacity>

            <Text style={styles.countryText}>{country}</Text>

            <View style={styles.divider} />
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MarketplaceItemScreen;

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
