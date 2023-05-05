import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  const navigation = useNavigation();

  const handleNotifications = () => {
    navigation.navigate('Notifications');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appNameText}>atrillion</Text>

      <View style={styles.iconMenu}>
        <TouchableOpacity
          style={styles.iconSpacing}
          onPress={handleNotifications}>
          <MaterialCommunityIcons name="bell" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconSpacing}>
          <MaterialCommunityIcons name="cog" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ebe8e8',
    borderBottomWidth: 1,
  },
  iconMenu: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginLeft: 8,
  },
  appNameText: {
    color: '#2b7bd6',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
