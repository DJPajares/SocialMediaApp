import React from 'react';
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import ModalHeader from '../components/ModalHeader';

const ScanScreen = ({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.flex}>
      <ModalHeader title="SCANNER" handleBack={handleBack} />

      <View style={styles.container}>
        <Text style={styles.headerText}>Scanning...</Text>
      </View>
    </SafeAreaView>
  );
};

export default ScanScreen;

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
