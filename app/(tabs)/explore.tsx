import ExerciseCard from '@/components/Explore/ExerciseCard';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import ItemList from '@/components/ui/ItemList';
import HomeFastTrain from '@/components/ui/Slider';
import { Exercise, searchExercises } from '@bryllim/workout-guide';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';

export default function TabTwoScreen() {
  const [search, onChangeSearch] = useState('');
  const [isSearching, setisSeaching] = useState(false)
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const popularTrains = [
    {
      id: '1',
      name: 'Push Day',
      exercises: '12',
      duration: '25 min',
      image: require('../../assets/images/workout_plains/mancuernas.webp')
    },
    {
      id: '2',
      name: 'Leg Day',
      exercises: '14',
      duration: '30 min',
      image: require('../../assets/images/workout_plains/mancuernas.webp')
    },
  ];

  const muscles = [
    { id: '1', nameEn: 'Chest', nameEs: 'Pecho', icon: 'airplane' as const },
    { id: '2', nameEn: 'Back', nameEs: 'Espalda', icon: 'airplane' as const },
    { id: '3', nameEn: 'Legs', nameEs: 'Piernas', icon: 'airplane' as const },
    { id: '4', nameEn: 'Arms', nameEs: 'Brazos', icon: 'airplane' as const },
    { id: '5', nameEn: 'Shoulders', nameEs: 'Hombros', icon: 'airplane' as const },
    { id: '6', nameEn: 'Abs', nameEs: 'Abdomen', icon: 'airplane' as const },
  ];

  const exploreTrains = [
    {
      id: '1',
      name: 'Push Day',
      exercises: '12',
      duration: '25 min',
      image: require('../../assets/images/workout_plains/mancuernas.webp')
    },
    {
      id: '2',
      name: 'Leg Day',
      exercises: '14',
      duration: '30 min',
      image: require('../../assets/images/workout_plains/mancuernas.webp')
    },
    {
      id: '3',
      name: 'Leg Day',
      exercises: '14',
      duration: '30 min',
      image: require('../../assets/images/workout_plains/mancuernas.webp')
    },
  ];

  const searchData = () => {
    setisSeaching(true)
    const data = searchExercises(search)
    setExercises(data)

  }
  return (
    <>
      <ThemedView style={styles.exploreTrains}>
        <ThemedText style={styles.exploreTrains_subtitle} type='subtitle'>Explorar Ejercicios</ThemedText>

        {/* Buscar */}
        <View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeSearch}
            onSubmitEditing={searchData}
            value={search}
            placeholder="Search..."
            keyboardType="default"
          />
        </View>
      </ThemedView>

      {
        isSearching ? (
          <ThemedView style={styles.exploreTrains}>
            {/* Vista busqueda */}
            <ThemedText>Vista busqueda</ThemedText>
            <FlatList
              data={exercises}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                console.log('render:', item.name);

                return (
                  <ExerciseCard
                    exercise={item}
                  />
                );
              }}

            />
          </ThemedView >
        ) : (
          <>
            <ThemedView style={styles.exploreTrains}>
              {/* Vista principal */}
              <View>
                {/* Por músculo */}
                <ThemedText type='subtitle' style={{
                  paddingLeft: 10,
                }}>Por grupo muscular</ThemedText>
                <View style={styles.muscleGrid}>
                  {muscles.slice(0, 4).map((muscle) => (
                    <View key={muscle.id} style={styles.muscleIcon}>
                      <Ionicons name={muscle.icon} size={24} color="black" />
                      <ThemedText style={styles.workoutText}>{muscle.nameEn}</ThemedText>
                    </View>
                  ))}
                </View>
              </View>
              <HomeFastTrain data={popularTrains} subtitle='Recomendados para ti' />

              {/* Explorar entrenamientos */}
              <View style={{
                marginTop: 10,
                padding: 10,
              }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                  <ThemedText type="subtitle">Explorar entrenamientos</ThemedText>
                  <ThemedText type='smallLink'>Ver Todos   -{'>'} </ThemedText>
                </View>
                <View style={styles.exploreExersiceContainer}>
                  <ItemList data={exploreTrains} />
                </View>

              </View>
            </ThemedView>
          </>
        )
      }
    </>
  );
}

const styles = StyleSheet.create({
  exploreTrains_subtitle: {
    paddingLeft: 10,
  },
  input: {
    height: 44,
    margin: 12,
    borderWidth: 1,
    borderColor: '#1b1b1b27',
    borderRadius: 10,
    padding: 10,
  },
  muscleGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
  },
  muscleIcon: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#ebe8e828',
    backdropFilter: '',
    borderWidth: .5,
    borderColor: '#413f3f',
  },
  exploreExersiceContainer: {
    width: '100%',
    paddingHorizontal: 10,
    height: 160,
  },
  workoutText: {
    marginLeft: 10, // Separa el texto del icono
    fontSize: 16,
  },
  fastTrainInfo: {
    color: 'white',
    marginTop: 4,
  },

});
