import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
// import Form from '../../components/Form';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome
        <Text style={styles.exclamation}>!</Text>
      </Text>
      <TouchableOpacity
        style={styles.inputButton}
        onPress={() => {
          navigation.navigate('ProfileForm');
        }}>
        <Text style={styles.inputButtonText}>Create your Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAF0F1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 70,
    fontWeight: 'bold',
  },
  exclamation: {
    fontSize: 90,
    color: '#FF3E4D',
  },
  smallText: {
    color: 'black',
  },
  inputButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A79DF',
    height: 100,
    paddingHorizontal: 100,
    borderRadius: 60,
    marginVertical: 20,
    elevation: 5,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
  inputButtonText: {
    color: 'white',
    fontSize: 30,
  },
});
