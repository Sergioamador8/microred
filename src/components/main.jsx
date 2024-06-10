// src/components/main.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './LoginScreen'; // Ruta ajustada

const Main = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
