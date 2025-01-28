import { StyleSheet } from "react-native"
import { PADDING, COLORS } from "../../outils/constant"

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
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titleBold: {
        fontWeight: 'bold',
        color: 'white'
    },
    link: {
        color: COLORS.main
    },

    doctorsContainer: {
        paddingVertical: PADDING.vertical,
        paddingHorizontal: PADDING.horizontal
    },
    doctorCard: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: 'white',
        elevation: 5,
        padding: 10,
        paddingHorizontal: 15,
        
    }

})

export default dashboardStyles
