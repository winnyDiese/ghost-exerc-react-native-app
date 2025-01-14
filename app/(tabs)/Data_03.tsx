import { useState } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import renderer from 'react-test-renderer';

const Data = () => {

    const [data, setData] = useState([
        'Devin',
        'Dan',
        'Dominic',
        'Jackson',
        'James',
        'Joel',
        'John',
        'Jillian',
        'Jimmy',
        'Julie',
    ])

    return (
        <View style={{padding: 20, backgroundColor:'white'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>First list</Text>
            <FlatList
                style={{marginBottom:20}}
                data={[
                    {key: 'Devin'},
                    {key: 'Dan'},
                    {key: 'Dominic'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                ]}

                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            >

            </FlatList>

            <Text style={{padding: 20, backgroundColor:'white', marginBottom: 30}}>Second Text</Text>
            <FlatList

            >

            </FlatList>
        </View>
    )
}

export default Data


const styles = StyleSheet.create({
    container:{
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 12,
        height: 30
    }
})