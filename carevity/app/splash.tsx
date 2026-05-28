import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/entry');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carevity AI</Text>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#102d62',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
