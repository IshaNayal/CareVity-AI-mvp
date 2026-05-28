import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';

import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function AssessmentScreen() {
  const router = useRouter();

  const [submitting, setSubmitting] = useState(false);

  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [existingConditions, setExistingConditions] = useState('');
  const [pastHealth, setPastHealth] = useState('');

  // ✅ Check form validity
  const isFormValid =
    age.trim() &&
    gender.trim() &&
    height.trim() &&
    weight.trim() &&
    existingConditions.trim() &&
    pastHealth.trim();

  const handleContinue = async () => {
    if (submitting) return;
    setSubmitting(true);
    console.log('handleContinue invoked — submitting:', submitting);
    // ❌ Validation
    if (!isFormValid) {
      Alert.alert(
        'Incomplete Form',
        'Please fill all fields before continuing.'
      );
      return;
    }

    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACTIVITY_RECOGNITION,
          {
            title: 'Physical Activity Permission',
            message:
              'CareVity AI needs access to your physical activity to track steps.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        console.log(
          granted === PermissionsAndroid.RESULTS.GRANTED
            ? 'Activity permission granted'
            : 'Activity permission denied'
        );
      }
    } catch (err) {
      console.warn(err);
    }

    // ✅ Navigate after everything
    try {
      await router.push('/home');
      console.log('navigation to /home attempted');
      Alert.alert('Navigation', 'Navigating to home');
    } catch (navErr) {
      console.warn('Navigation error', navErr);
      Alert.alert('Navigation error', String(navErr));
    }
    setSubmitting(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Health Info Assessment</Text>

          {/* Age */}
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />

          {/* Gender */}
          <Text style={styles.label}>Gender</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue) => setGender(itemValue)}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>

          {/* Height */}
          <Text style={styles.label}>Height (cm)</Text>
          <TextInput
            style={styles.input}
            value={height}
            onChangeText={setHeight}
            keyboardType="numeric"
          />

          {/* Weight */}
          <Text style={styles.label}>Weight (kg)</Text>
          <TextInput
            style={styles.input}
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />

          {/* Current Health */}
          <Text style={styles.sectionTitle}>Current Health</Text>

          <Text style={styles.label}>
            Existing Conditions (e.g., BP, Sugar levels)
          </Text>
          <TextInput
            style={styles.inputMulti}
            value={existingConditions}
            onChangeText={setExistingConditions}
            multiline
          />

          {/* Past Health */}
          <Text style={styles.sectionTitle}>Past Health</Text>

          <Text style={styles.label}>
            Medical History (e.g., family history, past incidents)
          </Text>
          <TextInput
            style={styles.inputMulti}
            value={pastHealth}
            onChangeText={setPastHealth}
            multiline
          />

          {/* Button */}
          <TouchableOpacity
            style={[
              styles.continueButton,
              { opacity: isFormValid && !submitting ? 1 : 0.5 },
            ]}
            onPress={handleContinue}
            disabled={submitting}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f8fa',
  },
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  label: {
    color: '#000',
    marginBottom: 5,
    marginTop: 10,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#f7f8fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  inputMulti: {
    backgroundColor: '#f7f8fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    height: 100,
    textAlignVertical: 'top',
  },
  pickerBox: {
    backgroundColor: '#f7f8fa',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  continueButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});