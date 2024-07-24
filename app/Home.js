// app/Home.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page</Text>
      <Button
        title="Go to TodoList"
        onPress={() => navigation.navigate('TodoList')}
      />
      <Button
        title="Go to Gestures"
        onPress={() => navigation.navigate('Gesture')}
      />
      <Button
        title="Go to DataDog"
        onPress={() => navigation.navigate('data-dog')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});


