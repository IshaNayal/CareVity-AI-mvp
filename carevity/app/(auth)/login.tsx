import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { users } from '../../lib/db';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('you@healthmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [useBiometrics, setUseBiometrics] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    const user = users.get(email);
    if (user && user.password === password) {
      router.replace('/(tabs)');
    } else {
      alert.alert('Login Failed', 'Invalid credentials');
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
           
            
          </View>
          
        </View>

        

        <View style={styles.formContainer}>
          <Text style={styles.welcomeTitle}>Welcome back</Text>
          <Text style={styles.welcomeSubtitle}>Sign in to continue your CareVity AI journey</Text>

          <Text style={styles.label}>Email or Username</Text>
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
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Text style={styles.showHideText}>{showPassword ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.optionsContainer}>
            <View style={styles.biometricsContainer}>
              
             
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.signInButton} onPress={handleLogin} disabled={loading}>
            <Text style={styles.signInButtonText}>{loading ? 'Signing In...' : 'Sign In'}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appleButton}>
            <Text style={styles.appleButtonText}>Continue with Apple</Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <Text style={styles.orText}>or</Text>
          </View>

          <View style={styles.createAccountContainer}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/signup')}>
              <Text style={styles.createAccountText}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            
          </Text>
          <View style={styles.footerLinks}>
            <View style={styles.footerIcons}>
              
            </View>
           
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f8fa',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  welcomeBanner: {
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 20,
    marginBottom: 300,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 60,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  welcomeSubtitle: {
    color: 'gray',
    marginBottom: 50,
  },
  label: {
    color: 'gray',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f7f8fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f8fa',
    borderRadius: 10,
    marginBottom: 15,
  },
  showHideText: {
    padding: 15,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  biometricsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  biometricsText: {
    marginLeft: 8,
  },
  forgotPasswordText: {
    fontWeight: 'bold',
  },
  signInButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  appleButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  appleButtonText: {
    fontWeight: 'bold',
  },
  orContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  orText: {
    color: 'gray',
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountText: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  footer: {
    marginTop: 'auto',
    paddingBottom: 20,
  },
  footerText: {
    color: 'gray',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerIcons: {
    flexDirection: 'row',
  },
  privacyText: {
    color: 'gray',
    fontSize: 12,
  },
});
