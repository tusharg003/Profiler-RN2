import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import ProfileCard from '../../components/ProfileCard';
import userData from '../../backend/db.json';
// import Form from '../../components/Form';
import {useSelector} from 'react-redux';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  const profiles = userData.users;
  const profileData = useSelector(state => state.reducer);
  // console.log('From the home page', profileData);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome {profileData.length}
        <Text style={styles.exclamation}>!</Text>
      </Text>
      <ScrollView style={styles.profileListScrollView}>
        {profileData.map((profile, idx) => (
          <ProfileCard key={idx} prop={profile} navigation={navigation} />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.inputButton}
        onPress={() => {
          navigation.navigate('ProfileForm', {isEditMode: false});
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
    justifyContent: 'space-between',
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
  profileListScrollView: {
    paddingHorizontal: 20,
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
