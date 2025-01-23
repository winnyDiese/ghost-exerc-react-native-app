import { StyleSheet } from "react-native"
import { PADDING } from "../../outils/constant"

const dashboardStyles = StyleSheet.create({
    // Style header
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white'
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50/2
    },
    userName:{
        fontSize: 16,
    },


    // Style du flatlist
    scrollableList: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    title: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    title_space_between: {
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleBold: {
        fontWeight: 'bold',
        color: 'white'
    }
})

export default dashboardStyles
