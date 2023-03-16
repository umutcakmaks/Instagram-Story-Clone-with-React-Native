import React, { useState } from 'react';
import { View, Image, Dimensions, Text, Pressable, Button } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import { useSelector, useDispatch } from "react-redux";

import StatusWrapper from './StatusWrapper';

const { width } = Dimensions.get("window")


const Story = () => {
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const storyComplete = useSelector(story => story.storyComplete)
    const follower = useSelector(story => story.follower)
    const isFollowing = useSelector(story => story.isFollowing)

    return (
        <>
            <View style={styles.viewStyle}>
                <Pressable onPress={() => {
                    setVisible(true);
                }}>
                    <LinearGradient colors={storyComplete ? ["#D9D9D9", "#D9D9D9"] : ["#8A3BEE", "#F200B7", "#FE9402"]} useAngle={true} angle={225} style={styles.borderStory}>
                        <Image style={styles.profilePhoto} resizeMode="cover" source={require("../assets/profile_photo.png")}></Image>
                    </LinearGradient>
                </Pressable>
                <View style={styles.followerStyle}>
                    <View>
                        <Text style={styles.numberStyle}>{follower}</Text>
                        <Text style={styles.textStyle}>Takipçi</Text>
                    </View>
                    <View>
                        <Text style={styles.numberStyle}>27,7m</Text>
                        <Text style={styles.textStyle}>Takip Ediyor</Text>
                    </View>
                </View>

            </View>
            <View style={styles.buttonStyle}>
                <Button title={isFollowing ? "Takip Ediliyor" : "Takip Et"} color={isFollowing ? "#6d6d6d" : "#2196F3"} onPress={() => dispatch({ type: "FOLLOW" })} />
            </View>
            {visible && <StatusWrapper visible={visible} onClose={() => setVisible(false)} />}
        </>
    );
}


const styles = {
    
    borderStory: {
        padding: 3,
        borderRadius: 100,
        marginLeft: RFValue(15),
        marginTop: RFValue(5),
        marginBottom: RFValue(5),
    },

    profilePhoto: {
        height: width * 0.21,
        width: width * 0.21,
    },

    viewStyle: {

        flexDirection: "row",
        alignItems: "center",
    },

    followerStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: RFValue(50),
    },

    textStyle: {
        fontWeight: 600,
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: 19,
        color: "#212121",
        marginLeft: RFValue(25),

    },

    numberStyle: {
        fontWeight: 700,
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: 19,
        color: "#212121",
        marginLeft: RFValue(25),
        marginBottom: RFValue(5),

    },

    buttonStyle: {
        marginLeft: RFValue(135),
        marginRight: RFValue(135),
        marginTop: RFValue(5),

    },
}

export default Story;