import React from 'react';
import {Text, StyleSheet,View} from 'react-native';

const ComponentsScreen = ()=>{

    const myName ="My name is Aman";

    return <View>
    <Text style={styles.textStyle}>Getting started with React Native</Text>
    <Text style={{fontSize:20}}>{myName}</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:40
    }
})

export default ComponentsScreen;