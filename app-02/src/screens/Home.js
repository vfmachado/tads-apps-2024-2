import { StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import { mainStyle } from "../utils/CSS"
import CategoryCard from "../components/CategoryCard"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Button } from "react-native"
import { ActivityIndicator } from "react-native"


export default Home = () => {

  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  const [nome, setNome] = useState('');
  const [loading, setLoading] = useState(false);

  const carreganome = async () => {
    // buscar um nome da api do star wars
    setLoading(true);
    setNome('');
    const id = Math.floor(Math.random() * 82) + 1;
    const url = `https://swapi.dev/api/people/${id}/`;
    const response = await fetch(url);
    const data = await response.json();
    setNome(data.name);
    setLoading(false);
  }

  // monitora o counter
  useEffect(() => {
    console.log('Counter: ', counter);
    setTimer(0);
    
    // resolvo meu problema
    carreganome();

  }, [counter]);

  // COMPONENT DID MOUNT (montagem do componente)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(old => old + 1);
    }, 1000);

    // COMPONENT WILL UNMOUNT (desmontagem do componente)
    return () => {
      clearInterval(interval);
    };
  }, []);

  // monitora o timer
  useEffect(() => {
    // console.log(timer);
  }, [timer]);

  // Simulating an expensive calculation
  const expensiveCalculation = (num) => {
    console.log('Expensive calculation running...');
    return num * 2;
  };

  const memoizedValue = useMemo(() => expensiveCalculation(counter), [counter]);

  const incrementar = useCallback(() => {
    setCounter(counter + 1)
  }, [counter]);

  return (
    <View style={mainStyle.container}>
      <Text>FUNCIONA</Text>
      <Text>Counter: {counter}</Text>
      <Text>Memorizado: {memoizedValue}</Text>
      <Button title="Incrementar" onPress={incrementar} />
      <Text>Timer: {timer}</Text>

      {loading && <ActivityIndicator size="large" />}
      <Text>{'\n\n'}{nome}</Text>
      
      {/* { loading && <CompA />} */}
      <CompA click={incrementar} />
      

    </View>
  );
};

function CompA({ click }) {
  console.log('CompA renderizado');
  useEffect(() => {
    console.log('CompA montado');
    return () => {
      console.log('CompA desmontado');
    }
  }, []);

  return (
    <View>
      <Text>CompA</Text>
      <Button title="Clique" onPress={click} />
  
    </View>
  );
}