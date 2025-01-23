
import { View, Text, TouchableOpacity, Image} from 'react-native'

const SymptomeItem = ({item}) => {
    return (
        <TouchableOpacity>
            <View>
                <Image source={require('../../assets/images/react-logo.png')} />
                <Text style={{color:"white"}}>{item.libelle}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default SymptomeItem