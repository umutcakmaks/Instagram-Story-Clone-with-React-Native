import { View, Modal, Image, TouchableOpacity, Dimensions, Text, TextInput } from "react-native";
import React, { useState } from 'react';
import Icon from "react-native-vector-icons/Ionicons"
import { useDispatch, useSelector } from "react-redux";
import GestureRecognizer from 'react-native-swipe-gestures';
import { RFValue } from "react-native-responsive-fontsize";
import * as Animatable from 'react-native-animatable';


const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const StatusWrapper = ({ visible, onClose }) => {

    const [heart, setHeart] = useState(false);
    const dispatch = useDispatch();
    const storyList = useSelector(story => story.storyList)
    const storyCounter = useSelector(story => story.storyCounter)
    const storyComplete = useSelector(story => story.storyComplete)

    const onSwipeLeft = () => {
        dispatch({ type: "FORWARD_STORY" })
        if (storyComplete && storyList[storyCounter].storyId == storyList.length) {
            onClose()
            dispatch({ type: "RESET_STORY" })
        }
    }

    const onSwipeRight = () => {
        dispatch({ type: "BACK_STORY" })
    }


    return (
        <Modal visible={visible}>
            <Animatable.View style={styles.contaier} animation="zoomIn" duration={300}>
                <View style={styles.statusTabContainer}>
                    {storyList.map((data, index) => {
                        if (storyCounter == index || storyCounter > index) {
                            return <View key={index} style={[styles.statusTab, { marginHorizontal: 2, backgroundColor: "#FFCC00", },]}></View>
                        } else {
                            return <View key={index} style={[styles.statusTab, { marginHorizontal: 2, backgroundColor: "#bbbbbb", },]}></View>
                        }
                    })}
                </View>
                <View style={styles.imageContainer}>
                    <Image style={styles.imageStyle} source={{ uri: storyList[storyCounter].storyImage }} resizeMode="contain" />
                    <View style={styles.profileStyle}>
                        <Image style={styles.profilePhoto} resizeMode="cover" source={require("../assets/profile_photo_small.png")}></Image>
                        <Text style={styles.textStyle}>Revy</Text>
                        <Text style={styles.timeStyle}>3h</Text>
                        <TouchableOpacity onPress={() => { }} style={[styles.close, { left: width * 0.78 }]}><Icon name="ellipsis-horizontal-sharp" color="white" size={26}></Icon></TouchableOpacity>
                        <TouchableOpacity onPress={() => { onClose() }} style={styles.close}><Icon name="close" color="white" size={32}></Icon></TouchableOpacity>
                    </View>
                    <View style={styles.messageStyle}>
                        <TextInput style={styles.textInputStyle} placeholder="Yorum yap" placeholderTextColor="#FFFFFF" ></TextInput>
                        <TouchableOpacity onPress={() => { heart ? setHeart(false) : setHeart(true) }}><Icon name={heart ? "heart" : "heart-outline"} color="white" size={26}></Icon></TouchableOpacity>
                        <TouchableOpacity onPress={() => { }}><Icon name="paper-plane-outline" color="white" size={26}></Icon></TouchableOpacity>
                    </View>
                </View>
            </Animatable.View>
            <GestureRecognizer onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight} onSwipeDown={onClose} config={{ velocityThreshold: 0.3, directionalOffsetThreshold: 80 }}>
                <TouchableOpacity onPress={() => {
                    onSwipeRight()
                }} style={[styles.controller]}>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    onSwipeLeft()
                }} style={[styles.controller, { right: 0 }]}>
                </TouchableOpacity>
            </GestureRecognizer>
        </Modal>
    );
}

const styles = {

    profileStyle: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        marginTop: RFValue(15),
        marginLeft: RFValue(10),
    },

    profilePhoto: {
        height: width * 0.07,
        width: width * 0.07,
    },

    textStyle: {
        fontWeight: 700,
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: 14,
        lineHeight: 19,
        color: "#FFFFFF",
        marginLeft: RFValue(10),
    },

    messageStyle: {
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: width,
        paddingBottom: RFValue(15),
        paddingLeft: RFValue(5),
        paddingRight: RFValue(5),
        paddingTop: RFValue(10),
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 1)"
    },

    textInputStyle: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        width: width * 0.70,
        height: 40,
        color: "#FFFFFF",
        paddingLeft: RFValue(20),
    },

    timeStyle: {
        fontWeight: 500,
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: 14,
        lineHeight: 19,
        color: "#FFFFFF",
        marginLeft: RFValue(10),
    },

    contaier: {
        backgroundColor: "black",
        flex: 1,
    },

    statusTabContainer: {
        marginTop: 5,
        flexDirection: "row",
        width: "100%",
    },

    statusTab: {
        height: 3,
        backgroundColor: "#bbbbbb",
        flex: 1,
    },

    imageContainer: {
        backgroundColor: "black",
        flex: 1,
    },

    imageStyle: {

        width: "100%",
        height: "100%",
        maxHeight: "100%",
    },

    controller: {
        position: "absolute",
        width: width / 2,
        height: height * 0.83,
        bottom: 70,

    },

    close: {
        position: "absolute",
        left: width * 0.87,
    },
}

export default StatusWrapper;