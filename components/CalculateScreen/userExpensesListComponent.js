import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import constans from '../../constans';

const userExpensesListComponent = props => {
    return (
        <View style={styles.mainWrapper}>
            <FlatList
                data={props.expensesList}
                renderItem={({ item, index }) => 
                <View key = {index} style ={styles.items}>
                    <Text style={styles.itemPurpose}>{item.purpose}</Text>
                    <Text style = {styles.itemCosts}>{item.cost}</Text>
                    <TouchableOpacity
                        style = {styles.cancelWrapper}
                        onPress = {() => props.deleteUserExpense(index)}>
                        <Image
                        source = {require('../../assets/cancel.png')}
                        style = {styles.cancelImage}/>
                    </TouchableOpacity>
                </View>
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

export default userExpensesListComponent;


const styles = StyleSheet.create({
    mainWrapper: {
        width: "90%",
        marginTop: 15,
        alignItems: "center",
        maxHeight: 150,
        // backgroundColor: "black"
    },
    items: {
        maxWidth: "100%",
        minWidth: 230,
        
        minHeight: 33,
        flexDirection: "row",
        borderRadius: 5,
        backgroundColor: "white",
        marginBottom: 2,

    },
    itemPurpose: {
        color: constans.gradientStart,
        fontSize: 20,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 1.5,
        textAlign: "left",
        width: "65%"
    },
    itemCosts: {
        color: "blue",
        fontSize: 20,
        marginTop: 1.5,
        backgroundColor: "blue"
    },
    cancelWrapper: {
        width: 20,
        height: 20,
        position: "absolute",
        right: 5
    },
    cancelImage: {
        marginTop: 9
    },
});