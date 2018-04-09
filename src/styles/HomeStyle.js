import React, {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    View_Main: {
        flex: 1,
        // backgroundColor: "rgb(129,212,250)"
    },

    Header_bar :{
        flex : 0.08,
        backgroundColor: "rgb(63,81,181)",
        opacity: 0.95,
    },

    Touch_main:{
        flex: 1,
        backgroundColor: "rgb(33,150,243)",
        opacity: 0.95,
        marginTop: 7,
        marginLeft: 5,
        marginRight: 7,

        height: 80,
        padding: 10,
        borderRadius: 5,
    },
});


export default styles;