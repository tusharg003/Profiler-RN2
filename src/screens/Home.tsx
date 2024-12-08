//@ts-nocheck

import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import ProfileCard from '../../components/ProfileCard';

import {useDispatch, useSelector} from 'react-redux';
import {gettingProfiles} from '../../components/redux/action';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  // const profiles = userData.users;

  const {profiles = [], loading = true} = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gettingProfiles()); // Fetch profiles on app load
  }, [dispatch]);

  console.log('Profiles in Home:', profiles);

  // console.log('From the home page', profileData);
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome {profiles.length}
        <Text style={styles.exclamation}>!</Text>
      </Text>

      {loading ? (
        <ActivityIndicator size={'large'} color="#0A79DF" />
      ) : (
        <ScrollView style={styles.profileListScrollView}>
          {profiles.map(profile => (
            <ProfileCard
              key={profile.id}
              prop={profile}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      )}

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
