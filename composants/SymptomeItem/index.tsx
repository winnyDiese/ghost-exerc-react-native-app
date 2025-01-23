
import { View, Text, TouchableOpacity} from 'react-native'

const SymptomeItem = ({item}) => {
    return (
        <TouchableOpacity>
            <View>
                <Text style={{color:"white"}}>{item.libelle}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default SymptomeItem