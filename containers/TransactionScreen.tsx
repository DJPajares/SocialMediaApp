import type {RouteProp} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type RootStackParamList = {
  Notifications: undefined;
  Transactions: undefined;
  Transaction: {id: string};
};

type TransactionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Notifications',
  'Transactions'
>;

type TransactionScreenRouteProp = RouteProp<RootStackParamList, 'Transaction'>;

type Props = {
  navigation: TransactionScreenNavigationProp;
  route: TransactionScreenRouteProp;
};

const TransactionScreen = ({navigation, route}: Props) => {
  const {id} = route.params;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <MaterialCommunityIcons
          name="arrow-left"
          testID="back-button"
          size={20}
          color="white"
        />
      </TouchableOpacity>

      <View style={styles.subContainer}>
        <Text style={styles.headerText}>Transaction screen</Text>

        <Text style={styles.bodyText}>{`Transaction ID is ${id}`}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#adadad',
    padding: 10,
    borderRadius: 30,
    width: 40,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '500',
    marginVertical: 20,
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 20,
  },
});
