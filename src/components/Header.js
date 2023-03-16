import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


const Header = (props) => {
    const { textStyling, viewStyle, blueTick, mainViewStyle } = styles;
    return (
        <View style={viewStyle}>
            <View style={mainViewStyle}>
                <TouchableOpacity onPress={() => { }}><Icon name="chevron-back" color="black" size={26}></Icon></TouchableOpacity>
            </View>
            <Text style={textStyling}>{props.title}</Text>
            <Image style={blueTick} source={require('../assets/blue_tick.png')}></Image>
        </View>
    );
}

const styles = {
    textStyling: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 17,
        lineHeight: 19,
        display: "flex",
        alignItems: "center",
        color: "#212121",
    },

    mainViewStyle: {
        position: "absolute",
        left: 0,

    },

    viewStyle: {
        backgroundColor: '#FFFFFF',
        height: 55,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',


    },

    blueTick: {
        width: 14,
        height: 14,
        marginLeft: 5,
    }
};

export default Header