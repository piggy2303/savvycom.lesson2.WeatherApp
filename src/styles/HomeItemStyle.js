import React, {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    View_main:{
        flex: 1,
        flexDirection: 'row',
    },
    child_view_left :{
        flex: 3,
        flexDirection: "row",
        alignItems: 'flex-end',
    },
    text_city_name :{
        fontSize: 20,
    },
    text_nation :{
        fontSize: 10,
    },

    child_view_middle :{
        alignItems: 'center',
        flex: 2,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text_temp :{
        fontSize: 20,
    },


    child_view_right :{
        flex: 2,
        alignItems: 'center',
    }
});

export default styles;