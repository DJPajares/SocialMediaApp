import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Avatar = ({src, width}) => {
  return <Image style={styles.avatar({width})} source={{uri: src}} />;
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: ({width}) => ({
    aspectRatio: 1,
    height: width,
    width,
    borderRadius: width / 2,
  }),
});
