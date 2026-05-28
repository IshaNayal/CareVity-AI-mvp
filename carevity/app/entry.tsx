import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function EntryScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
           
            
          </View>
          
        </View>

        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome to CareVity AI</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.createAccountButton} onPress={() => router.push('/signup')}>
            <Text style={styles.createAccountButtonText}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/login')}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.socialContainer}>
          <Text style={styles.socialText}>Or continue with</Text>
          <View style={styles.socialButtons}>
            <TouchableOpacity>
              <Text style={styles.socialButtonText}>Sign in with Apple</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
          </View>
          
        </View>

        <View style={styles.footer}>
          <View style={styles.footerLinks}>
            
          </View>
          
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
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
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 20,
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '500',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  createAccountButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  createAccountButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  socialText: {
    color: 'gray',
    marginBottom: 15,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginBottom: 15,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },
  guestText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  footerLink: {
    color: 'gray',
    fontSize: 12,
  },
  pagination: {
    flexDirection: 'row',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  
  
});
