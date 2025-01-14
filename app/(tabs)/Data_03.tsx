import {FlatList, StyleSheet, Text, View} from 'react-native';

const Data = () => {

    return (
        <View >
            <FlatList>

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