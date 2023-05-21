import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MainHeader from '../components/header/MainHeader';
import mockData from '../mockData/mockData.json';
import Card from '../components/card/Card';
import CardDetails from '../components/card/CardDetails';

const MarketplaceScreen = ({navigation}) => {
  const {items} = mockData;

  const handleOpenItem = ({item}) => {
    navigation.navigate('MarketPlaceItem', {item});
  };

  return (
    <SafeAreaView style={styles.flex}>
      <MainHeader />

      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.cardsContainer}>
            <TouchableOpacity
              key={item.id}
              onPress={() => handleOpenItem({item})}>
              <Card item={item} />
              {/* <Card
                image={item.image}
                username={item.username}
                userImage={item.userImage}
              /> */}
            </TouchableOpacity>

            <CardDetails
              item={item}
              // id={item.id}
              // name={item.name}
              // price={item.price}
              // currency={item.currency}
              // category={item.category}
              // likeCount={item.likeCount}
            />
          </View>
        )}
        ListHeaderComponent={
          <View style={styles.searchBarContainer}>
            <TextInput style={styles.searchBar} placeholder="Search..." />
          </View>
        }
        numColumns={2}
        // columnWrapperStyle={styles.cardsContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      />
    </SafeAreaView>
  );
};

export default MarketplaceScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    margin: 16,
  },
  searchBarContainer: {
    marginBottom: 16,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
  cardsContainer: {
    flex: 0.5, // prevent last column from stretching
    aspectRatio: 1,
    marginBottom: 80, // add space between cards vertically
    marginHorizontal: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});
