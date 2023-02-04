import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet, Dimensions} from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Icons from "react-native-heroicons/solid";

export type TIcons = "plusIcon" 

const IconMap: {
    [key in TIcons]: React.ReactElement
} = {
    plusIcon: <Icons.PlusIcon  color={"white"} size={22} />,
}

const screenWidth = Dimensions.get('screen').width;

export const HeaderBtn = (props: {text:string, action: Function, icon: TIcons }) => (
       <TouchableOpacity onPress={() => {}}>
       <View style={StyleHeaderBtn.wrapper}>
       {IconMap[props.icon]}
       <Text style={StyleHeaderBtn.text}>{props.text}</Text>
       </View>
       </TouchableOpacity>
    )




//button styles
const StyleHeaderBtn = StyleSheet.create({
    wrapper: {
        backgroundColor: "black",
        display: "flex",
        flexDirection: "row",
        width: screenWidth * 0.253 ,
        height: screenWidth * 0.1,
        borderRadius: 14,
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: "Nunito-Bold",
        color: "#fff",
        fontSize: 22,
        padding: 1.5
    }
})

