import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { GestureHandlerRootView, FlingGestureHandler, Directions } from 'react-native-gesture-handler';

export default function Gesture() {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const moveBox = (direction) => {
    setPosition((prevPosition) => {
      switch (direction) {
        case 'up':
          return { ...prevPosition, top: prevPosition.top - 50 };
        case 'down':
          return { ...prevPosition, top: prevPosition.top + 50 };
        case 'left':
          return { ...prevPosition, left: prevPosition.left - 50 };
        case 'right':
          return { ...prevPosition, left: prevPosition.left + 50 };
        case 'up-left':
          return { top: prevPosition.top - 50, left: prevPosition.left - 50 };
        case 'up-right':
          return { top: prevPosition.top - 50, left: prevPosition.left + 50 };
        case 'down-left':
          return { top: prevPosition.top + 50, left: prevPosition.left - 50 };
        case 'down-right':
          return { top: prevPosition.top + 50, left: prevPosition.left + 50 };
        default:
          return prevPosition;
      }
    });
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <FlingGestureHandler direction={Directions.UP} onEnded={() => moveBox('up')}>
        <FlingGestureHandler direction={Directions.DOWN} onEnded={() => moveBox('down')}>
          <FlingGestureHandler direction={Directions.LEFT} onEnded={() => moveBox('left')}>
            <FlingGestureHandler direction={Directions.RIGHT} onEnded={() => moveBox('right')}>
              <FlingGestureHandler direction={Directions.UP | Directions.LEFT} onEnded={() => moveBox('up-left')}>
                <FlingGestureHandler direction={Directions.UP | Directions.RIGHT} onEnded={() => moveBox('up-right')}>
                  <FlingGestureHandler direction={Directions.DOWN | Directions.LEFT} onEnded={() => moveBox('down-left')}>
                    <FlingGestureHandler direction={Directions.DOWN | Directions.RIGHT} onEnded={() => moveBox('down-right')}>
                      <View style={[styles.box, { top: position.top, left: position.left }]} />
                    </FlingGestureHandler>
                  </FlingGestureHandler>
                </FlingGestureHandler>
              </FlingGestureHandler>
            </FlingGestureHandler>
          </FlingGestureHandler>
        </FlingGestureHandler>
      </FlingGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    position: 'absolute',
  },
});



