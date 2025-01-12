import { StyleSheet, Text, View } from "react-native";
import Routes from "../../routes"

export default function HomeScreen() {
  return (
    <View>
      <Routes/>
    </View>
    
    // <View style={styles.container}>
    //   <Text style={styles.text}>This text is black !</Text>
    //   <Routes />
    // </View>
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