
import { View, Text, TouchableOpacity, Image} from 'react-native'
import styles from './etyle'

const SymptomeItem = ({item}) => {
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <Image style={styles.itemImg} source={require('../../assets/images/react-logo.png')} />
                <Text style={{color:"white"}}>{item.libelle}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default SymptomeItem
