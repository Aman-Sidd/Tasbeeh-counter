import React from 'react';
import {View,StyleSheet,Text,FlatList} from 'react-native';

const ListScreens = ()=>{
    const dataItems = [
        {
        name:'friend1',
        age:20
        },
        {
        name:'friend2',
        age:31
        }
    ]
return (
    <FlatList data={dataItems}
    keyExtractor={friend=>friend.name}
    renderItem={({item})=>{
    return <View>
    <Text style={styles.textStyle}>{item.name} - {item.age}</Text>

    </View>
    }
    }></FlatList>
    );
};


const styles=StyleSheet.create({
//    textStyle:{
//
//        marginVertical:30
//    }
})

export default ListScreens;