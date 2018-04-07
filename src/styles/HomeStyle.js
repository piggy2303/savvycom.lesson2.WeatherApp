import React, {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    View_Main: {
        flex: 1,
        backgroundColor: "rgb(21,101,192)"

    },
    Touch_main:{
        flex: 1,
        backgroundColor: "rgb(236,240,241)",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        height: 70,
        padding: 20,
        borderRadius: 8,

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