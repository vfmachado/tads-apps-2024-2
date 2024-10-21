import { StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import { mainStyle } from "../utils/CSS"
import CategoryCard from "../components/CategoryCard"
import React, { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { Button } from "react-native"
import { ActivityIndicator } from "react-native"
import { AuthContext } from "../contexts/auth-context"


export default Profile = ({ navigation }) => {

  const { logout } = useContext(AuthContext);
  
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Dashboard" onPress={() => navigation.navigate('dashboard')} />

      <Button title="Deslogar" onPress={() => logout()} />
    </View>
  );
};
