import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import avatars from '../avatarImages/images';
import GridView from './GridView'; // Importing GridView

const AvatarList = () => {
  return (
    <GridView
      data={Object.values(avatars)}
      col={3} // Set the number of columns
      renderItem={avatar => (
        <TouchableOpacity style={styles.avatarButton}>
          <Image source={avatar} style={styles.avatar} />
        </TouchableOpacity>
      )}
    />
  );
};

export default AvatarList;

const styles = StyleSheet.create({
  avatarButton: {
    backgroundColor: 'white',
    borderRadius: 40, // Circular shape
    width: 80, // Button size
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    elevation: 5, // Shadow for Android
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  avatar: {
    width: 40, // Size of avatar image
    height: 40,
    borderRadius: 20,
  },
});
