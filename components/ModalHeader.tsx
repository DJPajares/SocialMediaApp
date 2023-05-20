import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type ModalHeaderProps = {
  title: string;
  handleBack: () => void;
};

const ModalHeader = ({title, handleBack}: ModalHeaderProps) => {
  return (
    <View style={styles.container}>
      {/* <Text numberOfLines={1} ellipsizeMode="tail" style={styles.headerText}>
        {title}
      </Text> */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBack}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ebe8e8',
    borderBottomWidth: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  headerText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '75%',
  },
});
