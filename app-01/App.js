import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  // let counter = 0;
  const [counter, setCounter] = useState(0);

  const [name, setName] = useState('');
  const [names, setNames] = useState(['vini']);

  const increment = () => {
    setCounter(counter + 1);
    console.log('Counter:', counter);
  }

  const addName = (name) => {
    setNames([...names, name]);
    setName('')
  }

  return (
    <View style={styles.container}>
      <Text>TADS - APPS</Text>
      <Text>Counter: {counter}</Text>
      <Button onPress={increment} title='ADD'></Button>
      <View style={{marginBottom: 20}}></View>
      
      <Text>NOMES</Text>
      <Text>{names.toString()}</Text>

      {/* {names.map((name, index) => { 
        return <Text key={index}>{name}</Text>
      })} */}

      {names.map((name, index) => ( 
        <View style={styles.card}>
          <Text key={index}>{name}</Text>
        </View>
      ))}

      <TextInput value={name} onChangeText={(texto) => setName(texto)} />
      <Button onPress={() => addName(name)} title='ADD'></Button>

      <StatusBar style="auto" />
    </View>
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
