import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Convert to normal JS, no typing needed
const ProfileCard = ({prop, navigation}) => {
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
        <TouchableOpacity style={[styles.menuBtn, styles.editBtn]}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuBtn, styles.deleteBtn]}>
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
