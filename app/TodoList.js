// app/TodoList.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

export default function TodoList() {
  const [task, setTask] = useState('');
  const [list, setList] = useState(['Task 1', 'Task 2', 'Task 3']);
  const [startPosition, setStartPosition] = useState(0);

  const addToList = () => {
    setList([...list, task]);
    setTask(''); // Réinitialiser la tâche après l'ajout
  };

  const removeTask = (indexToRemove) => {
    setList(list.filter((item, index) => index !== indexToRemove));
  };

  const swipeHandle = (endPosition, index) => {
    if (endPosition < startPosition - 100) {
      removeTask(index);
    }
  };

  const renderRightActions = (index) => (
    <Button title="Delete" onPress={() => removeTask(index)} color="red" />
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Add a new task"
      />
      <Button title="Add Task" onPress={addToList} />
      {list.map((item, index) => (
        <Swipeable
          key={index}
          renderRightActions={() => renderRightActions(index)}
        >
          <View
            style={styles.taskContainer}
            onTouchStart={(event) => setStartPosition(event.nativeEvent.locationX)}
            onTouchEnd={(event) => swipeHandle(event.nativeEvent.locationX, index)}
          >
            <Text style={styles.item}>{item}</Text>
          </View>
        </Swipeable>
      ))}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  item: {
    fontSize: 18,
  },
});
