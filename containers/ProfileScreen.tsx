import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, SafeAreaView, StyleSheet, View} from 'react-native';
import MainHeader from '../components/header/MainHeader';

type RootStackParamList = {
  Notifications: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Notifications'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const ProfileScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.flex}>
      <MainHeader />

      <View style={styles.container}>
        <Text style={styles.headerText}>Profile screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

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
  bodyText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'blue',
    marginVertical: 5,
  },
});
