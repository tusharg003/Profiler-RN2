//@ts-nocheck
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {deleteProfile, editProfile} from './redux/action';

const ProfileCard = ({prop, navigation}) => {
  const dispatch = useDispatch();

  const handleDelete = item => {
    console.log('Delete was clicked');
    dispatch(deleteProfile(item));
  };

  const handleEdit = item => {
    console.log('Edit was clicked');
    navigation.navigate('EditProfileForm', {prevData: item});
    dispatch(editProfile(item));
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('Details', {
          name: prop.name,
          age: prop.age,
          mail: prop.mail,
          bio: prop.bio,
          image: prop.image,
        });
      }}>
      <Image
        source={{uri: prop.image}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.details}>
        <Text style={styles.name}> {prop.name}</Text>
        <Text style={styles.text}> {prop.age}</Text>
        <Text style={styles.text}> {prop.mail}</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity
          style={[styles.menuBtn, styles.editBtn]}
          onPress={() => handleEdit(prop)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.menuBtn, styles.deleteBtn]}
          onPress={() => handleDelete(prop)}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: 450,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 5,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 2,
  },
  text: {
    paddingLeft: 4,
    fontSize: 12,
    color: 'gray',
  },
  menu: {},
  menuBtn: {
    padding: 10,
    borderRadius: 12,
    margin: 2,
    alignItems: 'center',
  },
  editBtn: {
    backgroundColor: '#0A79DF',
  },
  deleteBtn: {
    backgroundColor: '#E83350',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 10,
  },
});
