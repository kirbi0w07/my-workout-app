
import HomeHeader from '@/components/Home/HomeHeader';
import HomePlanTrain from '@/components/Home/HomePlanTrain';
import HomeProgress from '@/components/Home/HomeProgress';
import HomeWeekCalendar from '@/components/Home/HomeWeekCalendar';
import { ThemedView } from '@/components/themed-view';
import HomeFastTrain from '@/components/ui/Slider';

const quickTrainings = [
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
export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      {/* Heaer */}
      <HomeHeader />

      {/* Progreso */}
      <HomeProgress />

      {/* Week Calendary */}
      <HomeWeekCalendar />

      {/* planes de entrenamiento */}
      <HomePlanTrain />

      {/* Entrenamiento rapido */}
      <HomeFastTrain data={quickTrainings} subtitle='Entrenamiento rapido' />
    </ThemedView>

  );
}

