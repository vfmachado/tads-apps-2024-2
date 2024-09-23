import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
 
  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    backgroundColor: 'lightgray',
    padding: 20,
    margin: 10,
    borderRadius: 10
  }
});
