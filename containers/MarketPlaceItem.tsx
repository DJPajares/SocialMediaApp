import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Cards from '../components/Cards';
import ModalHeader from '../components/ModalHeader';

const MarketPlaceItem = ({navigation, route}) => {
  const {id, image, name, price} = route.params?.item;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.flex}>
      <ModalHeader title={name} handleBack={handleBack} />

      <View style={styles.container}>
        <Cards image={image} name={name} price={price} />
        {/* <Text style={styles.headerText}>Review</Text> */}
      </View>
    </SafeAreaView>
  );
};

export default MarketPlaceItem;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    // flex: 1,
    // marginHorizontal: 16,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
