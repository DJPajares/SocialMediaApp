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
import mockData from '../mockData/mockData.json';

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

const NotificationsScreen = ({navigation}: Props) => {
  const data = mockData.transactions;

  const handleBack = () => {
    navigation.goBack();
  };

  const handleNavigateTransaction = (id: string) => {
    navigation.navigate('Transaction', {id});
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
        <Text style={styles.headerText}>Notifications screen</Text>

        {data.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleNavigateTransaction(item.id)}>
            {!item.notification_read && (
              <Text style={styles.bodyText}>
                {`Unread notification - Transaction ID ${item.id}`}
              </Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;

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
    marginVertical: 5,
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'blue',
    marginVertical: 5,
  },
});
