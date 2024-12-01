import React from 'react';
import {StyleSheet, View} from 'react-native';
import Form from '../../components/Form';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type ProfileFormProps = NativeStackScreenProps<
  RootStackParamList,
  'ProfileForm'
>;

const ProfileForm = ({navigation}: ProfileFormProps) => {
  return (
    <View style={styles.container}>
      <Form navigation={navigation} />
    </View>
  );
};
export default ProfileForm;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#74B9FF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: 'black',
  },
});
