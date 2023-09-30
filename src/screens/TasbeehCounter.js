import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TasbeehCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {count}</Text>
      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.smallButton} onPress={resetCount}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.wideButton} onPress={incrementCount}>
                  <Text style={styles.buttonText}>+1</Text>
         </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f4f4', // Background color for the counter area
    width: 500
  },
  countText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wideButton: {
    backgroundColor: 'green', // Button background color
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 10,
    width:130,
    height:80,
    justifyContent:'center',
    alignItems:'center'
  },
  smallButton: {
    backgroundColor: '#dc3545', // Button background color
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white', // Button text color
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TasbeehCounter;
