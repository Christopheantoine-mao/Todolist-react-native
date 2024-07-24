import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ExpoRouter } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ExpoRouter />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
