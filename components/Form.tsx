import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../src/App';
import * as Yup from 'yup';

type formProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProfileForm'>; // Form component in ProfileForm route
};

const FormSchema = Yup.object().shape({
  name: Yup.string().required('Name cannot be empty!'),
  mail: Yup.string()
    .email('Email is invalid!')
    .required('Email cannot be empty'),
  age: Yup.number()
    .typeError('Age must be a number')
    .min(1, 'Age must be greater than 0')
    .required('Age is required!'),
  bio: Yup.string().max(200, 'Bio cannot exceed 300 characters!'), // Bio validation
});

const Form = ({navigation}: formProps) => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState(''); // Bio state
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleProfileCreation = async () => {
    const inputs = {name, age, mail, bio};
    try {
      setErrors({});
      await FormSchema.validate(inputs, {abortEarly: false});
      navigation.navigate('Details', inputs);
    } catch (validationErrors: any) {
      const errorMessages: {[key: string]: string} = {};
      validationErrors.inner.forEach((error: any) => {
        errorMessages[error.path] = error.message;
      });
      setErrors(errorMessages);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your name"
          onChangeText={setName}
          value={name}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Age</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your age"
          keyboardType="numeric"
          onChangeText={setAge}
          value={age}
        />
        {errors.age && <Text style={styles.errorText}>{errors.age}</Text>}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your email"
          keyboardType="email-address"
          onChangeText={setMail}
          value={mail}
        />
        {errors.mail && <Text style={styles.errorText}>{errors.mail}</Text>}
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.inputLabel}>About Yourself</Text>
        <TextInput
          style={[styles.inputBox, styles.inputAbout]}
          placeholder="Write a short bio..."
          multiline={true}
          maxLength={200}
          textAlignVertical="top"
          onChangeText={setBio}
          value={bio}
        />
        {errors.bio && <Text style={styles.errorText}>{errors.bio}</Text>}
      </View>

      <TouchableOpacity
        style={styles.inputButton}
        onPress={handleProfileCreation}>
        <Text style={styles.inputButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2F363F',
    borderRadius: 8,
    padding: 20,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  inputGroup: {
    marginVertical: 5,
  },
  inputBox: {
    backgroundColor: 'white',
    color: 'black',
    height: 40,
    width: 400,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  inputAbout: {
    height: 150,
    padding: 10,
  },
  inputLabel: {
    color: 'white',
    marginBottom: 8,
    fontSize: 16,
  },
  inputButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A79DF',
    height: 70,
    width: 400,
    borderRadius: 4,
    marginTop: 30,
    marginBottom: 30,
  },
  inputButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 9,
  },
});
