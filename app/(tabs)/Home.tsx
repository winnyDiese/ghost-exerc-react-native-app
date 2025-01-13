import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View>
            <Text style={styles.title}>My App</Text>

            <Text style={styles.text}>
                Home to tabs
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Molestiae ullam similique quia fuga tempore, officiis 
                veritatis porro dicta ea aperiam sit dolor quam tenetur, 
                harum suscipit dolores deleniti eveniet animi.
            </Text>

            <View>
                <Image
                    source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{width: 200, height: 200}}
                />

                <Text style={styles.text}>
                    Home to tabs
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Molestiae ullam similique quia fuga tempore, officiis 
                    veritatis porro dicta ea aperiam sit dolor quam tenetur, 
                    harum suscipit dolores deleniti eveniet animi.
                </Text>

                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginBottom: 10, // Ajoute une marge de 10 unités en bas

                    }}
                    defaultValue='You can type in me !'
                />
            </View>

            <Text style={styles.text}>
                Home to tabs
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Molestiae ullam similique quia fuga tempore, officiis 
                veritatis porro dicta ea aperiam sit dolor quam tenetur, 
                harum suscipit dolores deleniti eveniet animi.
            </Text>

            <Text style={styles.text}>
                Home to tabs
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Molestiae ullam similique quia fuga tempore, officiis 
                veritatis porro dicta ea aperiam sit dolor quam tenetur, 
                harum suscipit dolores deleniti eveniet animi.
            </Text>

            <Text style={styles.text}>
                Home to tabs
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Molestiae ullam similique quia fuga tempore, officiis 
                veritatis porro dicta ea aperiam sit dolor quam tenetur, 
                harum suscipit dolores deleniti eveniet animi.
            </Text>

        </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 8,
    backgroundColor: 'yellow'
  },
  text:{
    color: 'black',
    marginBottom: 30, 
    fontSize: 22
  },
  title: {
    color: 'black',
    fontSize: 40, // Taille raisonnable pour des écrans de tailles variées
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40
  },
})