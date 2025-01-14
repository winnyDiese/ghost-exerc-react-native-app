import {FlatList, StyleSheet, Text, View} from 'react-native';
import renderer from 'react-test-renderer';

const Data = () => {

    return (
        <View >
            <FlatList
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
        </View>
    )
}

export default Data


const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
})