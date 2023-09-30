import React, {useState} from "react";
import {Text,Button,View,StyleSheet} from "react-native";

const CounterScreen = ()=>{

    const [counter, setCounter] = useState(0);
    return (
    <View>
        <Button title="Increase" onPress={()=>{
            setCounter(counter+1);
        }} />
        <Button title="Decrease" onPress={()=>{
            setCounter(counter-1);
        }}/>
       <Text> Counter: {counter}</Text>
    </View>
    );

}

const style = StyleSheet.create({});

export default CounterScreen;