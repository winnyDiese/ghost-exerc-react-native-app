
import { PADDING } from "@/outils/constant"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    item: {
        marginRight: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
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