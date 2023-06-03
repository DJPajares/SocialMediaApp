import React from 'react';
import {
  // SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MainHeader from '../components/header/MainHeader';
import mockData from '../mockData/mockData.json';
import Card from '../components/card/Card';
import CardDetails from '../components/card/CardDetails';
import {SafeAreaView} from 'react-native-safe-area-context';

const MarketplaceScreen = ({navigation}) => {
  const {items} = mockData;

  const handleOpenItem = ({item}) => {
    navigation.navigate('MarketPlaceItem', {item});
  };

  return (
    <SafeAreaView className="flex-1">
      <MainHeader />

      <View className="m-4">
        <FlatList
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View className="grow-1/2 shrink-1/2 basis-1/2 mb-5 mx-2">
              <TouchableOpacity
                key={item.id}
                onPress={() => handleOpenItem({item})}>
                <Card item={item} />
              </TouchableOpacity>

              <CardDetails item={item} />
            </View>
          )}
          ListHeaderComponent={
            <View className="mb-4">
              <TextInput
                className="border border-stone-300 dark:border-stone-800 rounded-lg p-3 text-text dark:text-text-dark"
                placeholder="Search"
              />
            </View>
          }
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default MarketplaceScreen;
