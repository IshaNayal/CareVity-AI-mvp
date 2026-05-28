import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 CareVity AI Home</Text>
      <Text style={styles.subtitle}>
        Welcome! Your health dashboard is ready.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Quick Actions</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/assessment')}
        >
          <Text style={styles.buttonText}>Update Health Info</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => router.push('/explore')}
        >
          <Text style={styles.buttonText}>Explore AI Features</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Stay consistent 💙 Stay healthy</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },

  secondaryButton: {
    backgroundColor: '#007BFF',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  footer: {
    position: 'absolute',
    bottom: 30,
  },

  footerText: {
    color: 'gray',
    fontSize: 12,
  },
});