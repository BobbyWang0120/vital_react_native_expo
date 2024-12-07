import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';

export default function NutritionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Record Nutrition</Text>
          <Text style={styles.subtitle}>Track your meals and water intake</Text>
        </View>
        
        <View style={styles.buttonGrid}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="egg" size={32} color="#4A90E2" />
            <Text style={styles.buttonText}>Breakfast</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="utensils" size={32} color="#4A90E2" />
            <Text style={styles.buttonText}>Lunch</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="moon" size={32} color="#4A90E2" />
            <Text style={styles.buttonText}>Dinner</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="cookie-bite" size={32} color="#4A90E2" />
            <Text style={styles.buttonText}>Snacks</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="glass-water" size={32} color="#4A90E2" />
            <Text style={styles.buttonText}>Water</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="weight" size={32} color="#4A90E2" />
            <Text style={styles.buttonText}>Weight</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  button: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
});
