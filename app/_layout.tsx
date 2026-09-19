import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import useAuthStore from '@/store/authStore';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  return (
    <SafeAreaProvider >
      <SafeAreaView style={{ flex: 1 }} >
        <ThemeProvider
          value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Protected guard={!isAuthenticated}>
              <Stack.Screen
                name="(auth)"
                options={{ headerShown: false }}
              />
            </Stack.Protected>
            <Stack.Protected guard={isAuthenticated}>
              <Stack.Screen
                name="(tabs)"
                options={{ headerShown: false }}
              />
            </Stack.Protected>

          </Stack>

          <StatusBar style="auto" />
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}