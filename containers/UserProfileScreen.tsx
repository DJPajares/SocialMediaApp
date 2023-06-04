import React from 'react';
import {View} from 'react-native';
import Header from '../components/header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import ProfileInfo from '../components/profile/ProfileInfo';

const UserProfileScreen = ({navigation, route}) => {
  const {user} = route.params;

  return (
    <SafeAreaView className="flex-1">
      <Header />

      <ProfileInfo user={user} />
    </SafeAreaView>
  );
};

export default UserProfileScreen;
