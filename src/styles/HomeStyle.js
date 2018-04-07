import React, {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    View_Main: {
        flex: 1,
        backgroundColor: "rgb(129,212,250)"

    },
    Touch_main:{
        flex: 1,
        backgroundColor: "rgb(33,150,243)",

        marginTop: 7,
        marginLeft: 5,
        marginRight: 7,

        height: 80,
        padding: 10,
        borderRadius: 5,
        shadowColor: "rgb(79,195,247)",
        shadowRadius: 3,
        shadowOpacity: 1,
        // elevation:8,
        shadowOffset: {
            width: 0,
            height: 0
        },
    },
});


export default styles;