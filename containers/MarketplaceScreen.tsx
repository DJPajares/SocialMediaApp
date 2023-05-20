import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import mockData from '../mockData/mockData.json';
import Card from '../components/Card';
import CardDetails from '../components/CardDetails';

const MarketplaceScreen = ({navigation}) => {
  const {items} = mockData;

  const handleOpenItem = ({item}) => {
    navigation.navigate('MarketPlaceItem', {item});
  };

  return (
    <SafeAreaView style={styles.flex}>
      <Header />

      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.cardsContainer}>
            <TouchableOpacity
              key={item.id}
              onPress={() => handleOpenItem({item})}>
              <Card image={item.image} />
            </TouchableOpacity>

            <CardDetails
              name={item.name}
              price={item.price}
              likeCount={item.likeCount}
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
    padding: 16,
  },
  searchBarContainer: {
    // width: '100%',
    // marginVertical: 16,
  },
  searchBar: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
  cardsContainer: {
    flex: 0.5, // prevent last column from stretching
    aspectRatio: 1,
    marginVertical: 32,
    marginHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
});
