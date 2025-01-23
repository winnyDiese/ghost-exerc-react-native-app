
import { PADDING } from "@/outils/constant"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    item: {
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingVertical: PADDING.veritcal,
        paddingHorizontal: PADDING.horizontal
    },
    itemImg: {
        width: 30,
        height: 30,
        marginRight: 3
    }
})

export default styles