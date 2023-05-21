import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Avatar from './Avatar';

type AvatarWithNameProps = {
  src: string;
  username: string;
  color?: string;
  size?: 'small' | 'normal' | 'large';
};

const AvatarWithName = ({
  src,
  username,
  color = '#000000',
  size = 'normal',
}: AvatarWithNameProps) => {
  const {width, fontSize, fontWeight} = {
    small: {width: 20, fontSize: 12, fontWeight: 'normal'},
    normal: {width: 30, fontSize: 14, fontWeight: 'bold'},
    large: {width: 40, fontSize: 16, fontWeight: 'bold'},
  }[size];

  return (
    <View style={styles.container}>
      <Avatar src={src} width={width} />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.username({fontSize, fontWeight, color})}>
        {username}
      </Text>
    </View>
  );
};

export default AvatarWithName;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: ({
    fontSize,
    fontWeight,
    color,
  }: {
    fontSize: number;
    fontWeight: string;
    color: string;
  }) => ({
    fontSize,
    fontWeight,
    color,
    paddingLeft: 8,
    maxWidth: '80%',
  }),
});
