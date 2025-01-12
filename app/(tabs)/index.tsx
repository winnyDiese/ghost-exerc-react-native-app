import { StyleSheet, Text, View } from "react-native";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This text is black !</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  text:{
    color: 'black',
    fontSize: 22
  }
})