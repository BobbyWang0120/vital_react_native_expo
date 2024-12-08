import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

// 重构的类别数据
const categories = [
  {
    id: 'chest',
    name: 'Chest',
    subCategories: [
      { id: 'upper-chest', name: 'Upper Chest' },
      { id: 'lower-chest', name: 'Lower Chest' },
    ]
  },
  {
    id: 'back',
    name: 'Back',
    subCategories: []
  },
  {
    id: 'legs',
    name: 'Legs',
    subCategories: [
      { id: 'quads', name: 'Quadriceps' },
      { id: 'hamstrings', name: 'Hamstrings' },
    ]
  },
  {
    id: 'shoulders',
    name: 'Shoulders',
    subCategories: [
      { id: 'front-deltoids', name: 'Front Deltoids' },
      { id: 'side-deltoids', name: 'Side Deltoids' },
      { id: 'rear-deltoids', name: 'Rear Deltoids' },
    ]
  },
  {
    id: 'obliques',
    name: 'Obliques',
    subCategories: []
  },
  {
    id: 'biceps',
    name: 'Biceps',
    subCategories: []
  },
  {
    id: 'triceps',
    name: 'Triceps',
    subCategories: []
  },
  {
    id: 'calves',
    name: 'Calves',
    subCategories: []
  },
  {
    id: 'forearms',
    name: 'Forearms',
    subCategories: []
  },
  {
    id: 'core',
    name: 'Core',
    subCategories: []
  },
  {
    id: 'abs',
    name: 'Abs',
    subCategories: []
  },
  {
    id: 'popular',
    name: 'Popular',
    subCategories: []
  },
  {
    id: 'stretching',
    name: 'Stretching',
    subCategories: []
  },
  {
    id: 'cardio',
    name: 'Cardio',
    subCategories: []
  },
  {
    id: 'combinations',
    name: 'Combinations',
    subCategories: []
  }
];

const filterTabs = ['Common', 'Barbell', 'Dumbbell', 'Cable'];

const exercises = [
  {
    id: 1,
    name: 'Barbell Bench Press',
    type: 'Pro',
    image: 'https://placehold.co/200x150',
  },
  {
    id: 2,
    name: 'Pause Bench Press',
    type: 'Pro',
    image: 'https://placehold.co/200x150',
  },
  {
    id: 3,
    name: 'Wide Grip Bench Press',
    type: 'Pro',
    image: 'https://placehold.co/200x150',
  },
  {
    id: 4,
    name: 'Incline Bench Press',
    type: 'Pro',
    image: 'https://placehold.co/200x150',
  },
  {
    id: 5,
    name: 'Decline Bench Press',
    type: 'Pro',
    image: 'https://placehold.co/200x150',
  },
  {
    id: 6,
    name: 'Dumbbell Press',
    type: 'Pro',
    image: 'https://placehold.co/200x150',
  },
];

export default function ExercisesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('chest');

  const handleCategoryPress = (categoryId: string) => {
    // 如果点击的是当前选中的类别，不做任何改变
    if (selectedCategory === categoryId) {
      return;
    }
    // 否则切换到新的类别
    setSelectedCategory(categoryId);
  };

  // 检查一个类别是否应该展开其子类别
  const shouldShowSubCategories = (category: typeof categories[0]) => {
    // 如果当前类别被选中，展开子类别
    if (selectedCategory === category.id) {
      return true;
    }
    // 如果当前类别的任何子类别被选中，也展开子类别
    return category.subCategories.some(sub => sub.id === selectedCategory);
  };

  // 检查一个类别是否处于激活状态
  const isCategoryActive = (category: typeof categories[0]) => {
    return selectedCategory === category.id || 
           category.subCategories.some(sub => sub.id === selectedCategory);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <FontAwesome name="search" size={16} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search exercise name"
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity style={styles.addButton}>
          <FontAwesome name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* 左侧类别栏 */}
        <View style={styles.categorySidebarContainer}>
          <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.categorySidebarContent}
          >
            {categories.map((category) => (
              <View key={category.id}>
                <TouchableOpacity
                  style={[
                    styles.categoryItem,
                    isCategoryActive(category) && styles.categoryItemActive
                  ]}
                  onPress={() => handleCategoryPress(category.id)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      isCategoryActive(category) && styles.categoryTextActive
                    ]}
                  >
                    {category.name}
                  </Text>
                </TouchableOpacity>
                
                {/* 子类别 - 在父类别或任何子类别被选中时显示 */}
                {shouldShowSubCategories(category) && category.subCategories.map((subCategory) => (
                  <TouchableOpacity
                    key={subCategory.id}
                    style={[
                      styles.subCategoryItem,
                      selectedCategory === subCategory.id && styles.categoryItemActive
                    ]}
                    onPress={() => setSelectedCategory(subCategory.id)}
                  >
                    <Text
                      style={[
                        styles.subCategoryText,
                        selectedCategory === subCategory.id && styles.categoryTextActive
                      ]}
                    >
                      {subCategory.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </ScrollView>
        </View>

        {/* 右侧内容区 */}
        <View style={styles.mainContent}>
          {/* 过滤标签 */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterTabs}
            contentContainerStyle={styles.filterTabsContent}
          >
            {filterTabs.map((tab, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.filterTab,
                  index === 0 && styles.filterTabActive
                ]}
              >
                <Text
                  style={[
                    styles.filterTabText,
                    index === 0 && styles.filterTabTextActive
                  ]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* 动作列表 */}
          <ScrollView style={styles.exerciseList}>
            <View style={styles.exerciseGrid}>
              {exercises.map((exercise) => (
                <TouchableOpacity key={exercise.id} style={styles.exerciseCard}>
                  <Image
                    source={{ uri: exercise.image }}
                    style={styles.exerciseImage}
                  />
                  <View style={styles.exerciseInfo}>
                    <Text style={styles.exerciseName}>{exercise.name}</Text>
                    <View style={styles.proTag}>
                      <Text style={styles.proTagText}>{exercise.type}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
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
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginRight: 10,
    height: 36,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333',
    height: '100%',
  },
  addButton: {
    width: 36,
    height: 36,
    backgroundColor: '#4A90E2',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  categorySidebarContainer: {
    borderRightWidth: 1,
    borderRightColor: '#f0f0f0',
  },
  categorySidebarContent: {
    paddingTop: 4,
  },
  categoryItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderLeftWidth: 3,
    borderLeftColor: 'transparent',
  },
  subCategoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    paddingLeft: 32,
    borderLeftWidth: 3,
    borderLeftColor: 'transparent',
  },
  categoryItemActive: {
    borderLeftColor: '#4A90E2',
    backgroundColor: '#fff',
  },
  categoryText: {
    fontSize: 15,
    color: '#666',
  },
  subCategoryText: {
    fontSize: 14,
    color: '#888',
  },
  categoryTextActive: {
    color: '#4A90E2',
    fontWeight: '500',
  },
  mainContent: {
    flex: 1,
  },
  filterTabs: {
    maxHeight: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  filterTabsContent: {
    paddingHorizontal: 10,
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 8,
  },
  filterTabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#4A90E2',
  },
  filterTabText: {
    fontSize: 14,
    color: '#666',
  },
  filterTabTextActive: {
    color: '#4A90E2',
    fontWeight: '500',
  },
  exerciseList: {
    flex: 1,
  },
  exerciseGrid: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  exerciseCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  exerciseImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#f5f5f5',
  },
  exerciseInfo: {
    padding: 10,
  },
  exerciseName: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  proTag: {
    position: 'absolute',
    top: -110,
    left: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  proTagText: {
    fontSize: 11,
    color: '#666',
  },
});
