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
    scrollableListItem: {
        flexDirection: 'column',
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'white',
        marginRight: 15,
        elevation: 5
    }
})

export default dashboardStyles
