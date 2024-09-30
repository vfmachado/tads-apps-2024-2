import { StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import { mainStyle } from "../utils/CSS"
import CategoryCard from "../components/CategoryCard"
import { useState } from "react"


export default Home = () => {

  // const categorias = ['Tecnologia', 'Esportes', 'Cinema', 'Moda', 'Música'];
  const categoriasInitial = [
    {
      id: 1,
      highlight: true,
      name: 'Tecnologia',
      icon: require('../../assets/tech.png')
    },
    {
      id: 2,
      highlight: false,
      name: 'Esportes',
      icon: require('../../assets/missing.png')

    },
    {
      id: 3,
      highlight: true,
      name: 'Cinema',
      icon: require('../../assets/missing.png')
      // icon: 'cinema.png',
      // icon: require('../assets/cinema.png')

    },
    {
      id: 4,
      highlight: false,
      name: 'Moda',
      icon: require('../../assets/missing.png')
      // icon: 'fashion.png',
      // icon: require('../assets/fashion.png')

    },
    {
      id: 5,
      highlight: false,
      name: 'Música',
      icon: require('../../assets/missing.png')
      // icon: 'music.png',
      // icon: require('../assets/music.png')
    }
  ]

  const [categorias, setCategorias] = useState(categoriasInitial);

  const switchHightlight = (id) => {
    const newCategorias = categorias.map(categoria => {
      if (categoria.id === id) {
        categoria.highlight = !categoria.highlight;
      }
      return categoria;
    })
    setCategorias(newCategorias);
  }

  return (
    <View style={mainStyle.container}>
      
      {/* <Title></Title> */}
      {/* <Text style={styles.title}>Texto Titulo da Home</Text> */}
      <Title text="HOME" />

      {/* searchbar */}

      {/* categorias */}
      <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}>
      {categorias.map((categoria, index) => {
        return (
          <CategoryCard
            key={categoria.id}
            name={categoria.name}  
            highlight={categoria.highlight}
            icon={categoria.icon}
            onPress={() => switchHightlight(categoria.id)}
          />  
        )
      })}
      </View>


      {/* menu de navegacao ou algo parecido */}

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