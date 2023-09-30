import React from "react";
import { Text, StyleSheet,Button,TouchableOpacity,View } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
  <View>
  <Text style={styles.text}>HomeScreen</Text>

  <Text style={styles.textStyle}></Text>

    <Button style={styles.buttonStyle} title="Go to ComponentsScreen!" onPress={()=>
    {
    navigation.navigate("Components");
    console.log("Button has been pressed")
    }
    }/>

      <Text style={styles.textStyle}></Text>
  <Button title="Go to ListScreen!" onPress={()=>
  {
  navigation.navigate("ListScreen");
  console.log("Button has been pressed")
  }
  }/>
  <Text style={styles.textStyle}></Text>
   <Button style={styles.buttonStyle} title="Go to ImageScreen!" onPress={()=>
      {
      navigation.navigate("ImageScreen");
      console.log("Button has been pressed")
      }
      }/>
      <Text style={styles.textStyle}></Text>
      <Button title="Go to Counter Screen" onPress={()=>{
      navigation.navigate("CounterScreen");
      console.log("clicked on CounterScreen buton...");
      }} />

       <Text style={styles.textStyle}></Text>
            <Button title="Go to Color Screen" onPress={()=>{
            navigation.navigate("ColorScreen");
            console.log("clicked on ColorScreen buton...");
            }} />

       <Text style={styles.textStyle}></Text>
             <Button title="Go to TasbeehCounter Screen" onPress={()=>{
             navigation.navigate("TasbeehScreen");
             console.log("clicked on TasbeehScreen buton...");
             }} />

  </View>);

}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor:"red",
    marginVertical:12
  },
  buttonStyle: {
//    color:"black",
    fontSize:22
  }
});

export default HomeScreen;
