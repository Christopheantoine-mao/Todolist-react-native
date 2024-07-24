import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

export default function DataDog() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    axios.get('https://bunny-relaxing-quickly.ngrok-free.app/api/dog', {
      headers: {
        'ngrok-skip-browser-warning': 'true'
      }
    })
    .then(response => {
      setDogs(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dogs}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  item: {
    fontSize: 18,
  },
});
