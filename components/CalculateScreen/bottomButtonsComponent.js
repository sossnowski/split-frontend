import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import constans from '../../constans';


const bottomButtonsComponent = props => {
    return (
        <View
                    style = {styles.buttonView}>
                    <TouchableOpacity
                        style = {styles.startButton}
                        onPress={props.addNewMember}>
                        <Image 
                            source = {require("../../assets/accounting.png")}
                            style = {styles.startButtonImg}/>
                        <Text
                            style = {styles.startButtonText}>Calculate
                        </Text>  
                    </TouchableOpacity>
                    <View 
                        style = {{
                            flex: 1
                        }}/>
                    <TouchableOpacity
                        style = {styles.startButton}
                        onPress={() => props.navigate('Calculate')}>
                        <Image 
                            source = {require("../../assets/view.png")}
                            style = {styles.startButtonImg}/>
                        <Text
                            style = {styles.startButtonText}>Add member
                        </Text>  
                    </TouchableOpacity>
                </View>
    );
}

export default bottomButtonsComponent;


    const styles = StyleSheet.create({
    buttonView: {
        backgroundColor: "transparent",
        alignSelf: "stretch",
        flexDirection: "row",
        height: 60,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        alignItems: "flex-end"
    },
    startButton: {
        backgroundColor: "white",
        borderRadius: 2,
        shadowColor: "rgba(0,0,0, 0.2)",
        shadowRadius: 25,
        shadowOpacity: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        width: 148,
        height: 60
    },
    startButtonImg: {
        resizeMode: "contain",
        marginRight: 10,
        marginLeft: -10
    },
    startButtonText: {
        fontSize: 16,
        fontStyle: "normal",
        textAlign: "center",
        color: constans.gradientStart
    },
});