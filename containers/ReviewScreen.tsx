import React from 'react';
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import ModalHeader from '../components/ModalHeader';

const ReviewScreen = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.flex}>
      <ModalHeader title="Review" handleBack={handleBack} />

      <View style={styles.container}>
        <Text style={styles.headerText}>Review</Text>
      </View>
    </SafeAreaView>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500',
    marginVertical: 5,
  },
});
