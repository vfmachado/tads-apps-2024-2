import { StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import { mainStyle } from "../utils/CSS"
import CategoryCard from "../components/CategoryCard"
import React, { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { Button } from "react-native"
import { ActivityIndicator } from "react-native"
import Dashboard from "./Dashboard"
import Profile from "./Profile"
import { NavigationContainer } from "@react-navigation/native"
import { TextInput } from "react-native-web"
import { AuthContext } from "../contexts/auth-context"


export default Home = ({ navigation }) => {

  const { login } = useContext(AuthContext);
  
  // const [tela, setTela] = useState("home");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const logar = () => {
    login(email, senha);
  }


  return (
    <>
      {/* {tela == 'profile' && <Profile backScreen={() => setTela('home')}/>}
      {tela == 'dashboard' && <Dashboard />}
      
      {tela == 'home' &&
      <View style={mainStyle.container}>
        <Title title="Home" />
        <Button title="Profile" onPress={() => setTela("profile")} />
        <Button title="Dashboard" onPress={() => setTela("dashboard")} />
      </View>
    } */}
      <Text>Home</Text>

        <TextInput placeholder="Digite seu email" onChangeText={(t) => setEmail(t)} />
        <TextInput placeholder="Digite sua senha" onChangeText={(t) => setSenha(t)} />
        <Button title="Login" onPress={() => logar()} />

      <Button title="Profile" onPress={() => navigation.navigate('profile')} />
    </>
  );
};
