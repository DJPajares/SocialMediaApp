import React from 'react';
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import Header from '../components/Header';

const UserProfileScreen = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <Header />

      <View style={styles.container}>
        <Text style={styles.headerText}>User Profile</Text>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

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
