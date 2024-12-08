//@ts-nocheck
import React from 'react';
import {StyleSheet, View} from 'react-native';

import EditForm from '../../components/EditForm';

const EditProfileForm = ({navigation, route}) => {
  const {prevData} = route.params;
  // console.log(route.params.prevData);
  // console.log(prevData);
  return (
    <View style={styles.container}>
      <EditForm navigation={navigation} prevData={prevData} />
    </View>
  );
};
export default EditProfileForm;

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
