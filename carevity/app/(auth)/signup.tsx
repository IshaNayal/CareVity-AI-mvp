import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { users } from '../../lib/db';
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('Ava Kensington');
  const [email, setEmail] = useState('ava.kensington@example.com');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('+1 415 555 2671');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    setLoading(true);
    if (users.has(email)) {
      Alert.alert('Sign Up Failed', 'User already exists.');
    } else {
      users.set(email, { password, fullName, phone });
      Alert.alert('Sign Up Successful', 'You can now log in.');
      router.replace('/login');
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            
            
            
          </View>

          <View style={styles.formContainer}>
            <View style={styles.formHeader}>
              <Ionicons name="person-circle-outline" size={40} color="gray" />
              <Text style={styles.formTitle}>Create your account</Text>
              <Text style={styles.formSubtitle}>We need a few details to personalize your CareVity AI experience.</Text>
            </View>

            <Text style={styles.label}>Full name</Text>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
            />
            
            

            <Text style={styles.label}>Email address</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            

            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                placeholder="Create a secure password"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Text style={styles.showHideText}>{showPassword ? 'Hide' : 'Show'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.strengthIndicator}>
              <View style={[styles.strengthBar, { backgroundColor: '#ccc' }]} />
              <View style={[styles.strengthBar, { backgroundColor: '#ccc' }]} />
              <View style={[styles.strengthBar, { backgroundColor: '#ccc' }]} />
              <View style={[styles.strengthBar, { backgroundColor: '#ccc' }]} />
            </View>
            <Text style={styles.strengthText}>Strength: Weak 0 / 4</Text>

            

            <Text style={styles.label}>Phone number </Text>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <Text style={styles.inputHelper}>Used for optional SMS reminders and two-factor authentication.</Text>

            <View style={styles.privacyNote}>
              <Text style={styles.privacyTitle}>Privacy note</Text>
              <Text>CareVity AI uses personal data to personalize health recommendations and to securely store medical profiles. We never share your information with advertisers. See our Privacy Policy for details.</Text>
            </View>

            

            <TouchableOpacity style={styles.proceedButton} onPress={handleSignup} disabled={loading}>
              <Text style={styles.proceedButtonText}>{loading } SignUp</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepCounter: {
    fontSize: 16,
    color: 'gray',
  },
  formContainer: {
    flex: 1,
  },
  formHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  formSubtitle: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 5,
  },
  label: {
    color: 'gray',
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#f7f8fa',
    padding: 15,
    borderRadius: 10,
  },
  inputHelper: {
    color: 'gray',
    fontSize: 12,
    marginTop: 5,
  },
  
  successText: {
    color: 'green',
    fontSize: 12,
    marginTop: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f8fa',
    borderRadius: 10,
  },
  showHideText: {
    padding: 15,
    fontWeight: 'bold',
  },
  strengthIndicator: {
    flexDirection: 'row',
    marginTop: 5,
  },
  strengthBar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 2,
  },
  strengthText: {
    color: 'gray',
    fontSize: 12,
    marginTop: 5,
  },
  passwordRules: {
    flexDirection: 'row',
    backgroundColor: '#f7f8fa',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  ruleTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  privacyNote: {
    backgroundColor: '#eef7ff',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  privacyTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  proceedButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  proceedButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#f7f8fa',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    fontWeight: 'bold',
  },
});
