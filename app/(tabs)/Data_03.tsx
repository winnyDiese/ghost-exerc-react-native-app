import { useState } from 'react';
import {FlatList, SectionList, StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
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
        <ScrollView>
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

                <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 20}}>Custom first List</Text>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <Text style={styles.item}>{item}</Text>
                    )}
                >
                </FlatList>

                <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 20}}>Second List</Text>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
                        {
                            title: 'J',
                            data: [
                            'Jackson',
                            'James',
                            'Jillian',
                            'Jimmy',
                            'Joel',
                            'John',
                            'Julie',
                            ],
                        },
                    ]}

                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => (
                        <Text style={styles.sectionHeader2}>{section.title}</Text>
                    )}
                    keyExtractor={item => `basicListEntry-${item}`}
                >

                </SectionList>

            </View>
        </ScrollView>
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
    },

    // Second list
    container2: {
        flex: 1,
        paddingTop: 22,
      },
      sectionHeader2: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
      },
      item2: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
})