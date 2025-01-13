import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'

const Textinput = () => {

    const [text, setText] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>TextInput</Text>
      {/* <Text>{text}</Text> */}
      <TextInput
        style={{
          height: 40,
          borderWidth: 1, // Ajoute une bordure de 1 unité
          borderColor: 'gray', // Définit la couleur de la bordure
          borderRadius: 5, // (Optionnel) Arrondit les coins de la bordure
          padding: 3
        }}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

      <Text style={{padding: 10, fontSize: 42}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')
        }
      </Text>
    </View>
  )
}

export default Textinput


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        padding:20,
        marginBottom:30,
        fontWeight: 'bold'
    },
    text:{
        color: 'black',
        fontSize: 22
    }
})