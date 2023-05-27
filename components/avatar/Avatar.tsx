import React from 'react';
import {Image} from 'react-native';

type AvatarProps = {
  url: string;
  width: number;
};

const Avatar = ({url, width}: AvatarProps) => {
  return (
    <Image
      height={width}
      width={width}
      className="aspect-square rounded-full"
      source={{uri: url}}
    />
  );
};

export default Avatar;
