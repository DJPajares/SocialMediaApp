import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import mockData from '../mockData/mockData.json';
import Header from '../components/Header';

type RootStackParamList = {
  Transaction: {id: string};
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Transaction'
>;

type Props = {
  navigation: NavigationProp;
};

const TransactionsScreen = ({navigation}: Props) => {
  const data = mockData.transactions;

  const handleNavigateTransaction = (id: string) => {
    navigation.navigate('Transaction', {id});
  };

  return (
    <SafeAreaView style={styles.flex}>
      <Header />

      <View style={styles.container}>
        <Text style={styles.headerText}>Transactions screen</Text>

        {data.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleNavigateTransaction(item.id)}>
            <Text style={styles.bodyText}>{`Transaction ${item.id}`}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default TransactionsScreen;

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
