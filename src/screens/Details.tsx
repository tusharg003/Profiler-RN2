import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import avatars from '../../avatarImages/images';

// Define the type for the navigation prop
type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Details'>;

// Define the type for the props passed to the Details screen
type DetailsProps = {
  route: {
    params: {
      userId?: string;
      name?: string;
      age?: string;
      mail?: string;
      bio?: string;
    };
  };
};

const Details = ({route}: DetailsProps) => {
  const navigation = useNavigation<NavigationProps>();
  const {name, age, mail, bio} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* <Text style={styles.text}>Details: {userId}</Text> */}
        <View style={styles.avatarCard}>
          <Image source={avatars.user} style={styles.avatarImg} />
        </View>
        <Text style={styles.text}> {name}</Text>
        <Text style={styles.text}> {age} years old</Text>
        <Text style={styles.text}>{mail}</Text>
        <Text style={[styles.text, styles.aboutMe]}>{bio}</Text>
      </View>

      <TouchableOpacity
        style={styles.inputButton}
        onPress={() => navigation.popTo('Home')}>
        <Text style={styles.inputButtonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1287A5',
    // alignContent: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 20,
    marginVertical: 20,
    backgroundColor: '#EAF0F1',
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
  },
  avatarImg: {
    width: 300,
    height: 300,
    borderRadius: 150,
    padding: 20,
  },
  avatarCard: {
    padding: 20,
    margin: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2F363F',
    marginBottom: 8,
  },
  inputButton: {
    // margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A79DF',
    height: 50,
    borderRadius: 4,
    marginVertical: 20,
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
  },
  inputButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  aboutMe: {
    marginTop: 40,
    fontWeight: '100',
    fontStyle: 'italic',
  },
});
