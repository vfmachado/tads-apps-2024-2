import { StyleSheet, Text, View } from "react-native"


export default Home = () => {

  return (
    <View>
      <Text>Home</Text>

      {/* <Title></Title> */}
      <Text style={styles.title}>Texto Titulo da PROFILE</Text>

    </View>
  )

}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue'
  }
})