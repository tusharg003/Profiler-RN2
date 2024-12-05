import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ProfileCardProps {
  prop: {
    name: string;
    image: string;
    mail: string;
    age: number;
  };
}

const ProfileCard = ({prop}: ProfileCardProps) => {
  return (
    <View style={styles.container}>
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
    </View>
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
    fontSize: 15,
    color: 'gray',
  },
});
