import { StyleSheet } from "react-native"
import { PADDING } from "../../outils/constant"

const dashboardStyles = StyleSheet.create({
    header: {
        // backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    }
})

export default dashboardStyles
