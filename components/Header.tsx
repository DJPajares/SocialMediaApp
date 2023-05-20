import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type ModalHeaderProps = {
  // title: string;
  // handleBack: () => void;
};

const Header = ({title}: ModalHeaderProps) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack}>
        <MaterialCommunityIcons name="chevron-left" size={24} color="black" />
      </TouchableOpacity>

      {/* <View>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.headerText}>
          {title}
        </Text>
      </View> */}

      <View style={styles.rightContainer}>
        {/* <TouchableOpacity onPress={handleBack}>
          <Text>Cancel</Text>
        </TouchableOpacity> */}
        <TouchableOpacity>
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
    alignItems: 'center',
    borderBottomColor: '#ebe8e8',
    borderBottomWidth: 1,
  },
  middleContainer: {
    flexDirection: 'row',
  },
  rightContainer: {
    flexDirection: 'row',
    // flexGrow: 1,
    // justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    // width: '75%',
  },
});
