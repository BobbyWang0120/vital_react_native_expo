import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const NutritionCard = () => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>Daily Nutrition</Text>
    <Text style={styles.calories}>0/-- kcal</Text>
    
    <View style={styles.nutritionGrid}>
      <View style={[styles.nutritionItem, { backgroundColor: '#FFF5F0' }]}>
        <Text style={styles.nutritionValue}>0</Text>
        <Text style={styles.nutritionLabel}>Protein (g)</Text>
        <Text style={styles.nutritionPercentage}>0%</Text>
      </View>
      
      <View style={[styles.nutritionItem, { backgroundColor: '#F0F5FF' }]}>
        <Text style={styles.nutritionValue}>0</Text>
        <Text style={styles.nutritionLabel}>Carbs (g)</Text>
        <Text style={styles.nutritionPercentage}>0%</Text>
      </View>
      
      <View style={[styles.nutritionItem, { backgroundColor: '#FFF0F5' }]}>
        <Text style={styles.nutritionValue}>0</Text>
        <Text style={styles.nutritionLabel}>Fat (g)</Text>
        <Text style={styles.nutritionPercentage}>0%</Text>
      </View>
      
      <View style={[styles.nutritionItem, { backgroundColor: '#F0FFFF' }]}>
        <Text style={styles.nutritionValue}>0</Text>
        <Text style={styles.nutritionLabel}>Water (ml)</Text>
        <Text style={styles.nutritionPercentage}>0/0</Text>
      </View>
    </View>
    
    <View style={styles.quickActions}>
      <TouchableOpacity style={styles.actionButton}>
        <MaterialCommunityIcons name="food-apple" size={24} color="#333" />
        <Text style={styles.actionText}>Breakfast</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.actionButton}>
        <MaterialCommunityIcons name="food" size={24} color="#333" />
        <Text style={styles.actionText}>Lunch</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.actionButton}>
        <MaterialCommunityIcons name="food-turkey" size={24} color="#333" />
        <Text style={styles.actionText}>Dinner</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.actionButton}>
        <MaterialCommunityIcons name="cookie" size={24} color="#333" />
        <Text style={styles.actionText}>Snacks</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.actionButton}>
        <MaterialCommunityIcons name="cup-water" size={24} color="#333" />
        <Text style={styles.actionText}>Water</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.actionButton}>
        <MaterialCommunityIcons name="scale-bathroom" size={24} color="#333" />
        <Text style={styles.actionText}>Weight</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const WorkoutSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Today's Workout</Text>
    <TouchableOpacity style={styles.workoutCard}>
      <View style={styles.workoutInfo}>
        <Text style={styles.workoutTitle}>Workout #1</Text>
        <Text style={styles.workoutSubtitle}>Personal • 1 Set</Text>
      </View>
      <TouchableOpacity style={styles.goButton}>
        <Text style={styles.goButtonText}>GO!</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  </View>
);

const PlansSection = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Official Plans</Text>
    <View style={styles.planTags}>
      <TouchableOpacity style={[styles.planTag, styles.activeTag]}>
        <Text style={styles.activeTagText}>Fat Loss</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.planTag}>
        <Text style={styles.planTagText}>Target Area</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.planTag}>
        <Text style={styles.planTagText}>Muscle Gain</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function TrainingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <NutritionCard />
        <WorkoutSection />
        <PlansSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  calories: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  nutritionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  nutritionItem: {
    width: '48%',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  nutritionValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  nutritionLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  nutritionPercentage: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    width: '16%',
    alignItems: 'center',
    marginBottom: 16,
  },
  actionText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  workoutCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutInfo: {
    flex: 1,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  workoutSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  goButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  goButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  planTags: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  planTag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  activeTag: {
    backgroundColor: '#333',
  },
  planTagText: {
    color: '#666',
  },
  activeTagText: {
    color: 'white',
  },
});
