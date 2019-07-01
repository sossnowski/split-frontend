import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';


const addUserComponent = (props) => {
    return (
        <View>
            <Text style = {styles.commponentHeader}>Add {props.userName}'s expenses</Text>
            <View style={styles.inputWrapperSecond}>
                <View style={styles.forInputWrapper}>
                    <TextInput
                        autoCorrect={false}
                        placeholder={"For?"}
                        style={styles.addTextInput}
                        onChangeText={(userExpense) => props.getUserExpense(userExpense)}
                        value = {props.inputValue}
                        >
                    </TextInput>
                </View>
                <View style={styles.amountInputWrapper}>
                    <TextInput
                        autoCorrect={false}
                        placeholder={"Amount"}
                        style={styles.addCostTextInput}
                        keyboardType={'numeric'}
                        onChangeText={(userCost) => props.getUserCost(userCost)}
                        value = {props.numericInputValue}
                        >
                    </TextInput>
                </View>
            </View>
            <View style={styles.addButtonWrapper}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={props.addUserExpenses}>
                    <Text
                        style={styles.addButtonText}>Add
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default addUserComponent;


const styles = StyleSheet.create({
    commponentHeader: {
        color: "white",
        fontSize: 22,
        textAlign: "center",
        marginBottom: 12,
    },
    inputWrapperSecond: {
        flexDirection: "row",
        width: "90%",
        justifyContent: "center"
    },
    forInputWrapper: {
        width: "54.75%",
        backgroundColor: "white",
        marginRight: "0.5%",
        height: 42,
        justifyContent: "center",
    },
    addTextInput: {
        backgroundColor: "transparent",
        marginLeft: "5%",
        marginRight: "5%",
        fontSize: 16,
    },
    amountInputWrapper: {
        width: "44.75%",
        backgroundColor: "white",
        height: 42,
        justifyContent: "center",
    },
    addCostTextInput: {
        backgroundColor: "white",
        marginRight: "5%",
        marginLeft: "5%",
        fontSize: 16,
    },
    addButtonWrapper: {
        alignItems: "center",
    },
    addButton: {
        backgroundColor: "white",
        borderRadius: 2,
        shadowColor: "rgba(0,0,0, 0.2)",
        shadowRadius: 25,
        shadowOpacity: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 0,
        width: "100%",
        height: 40,
        marginTop: 15,
    },
    addButtonText: {
        color: constans.gradientStart,
        fontSize: 15,
    },
});

