import React from 'react';
import { StyleSheet, Text, View, FlatList, } from 'react-native';
import constans from '../../constans';

const transactionsListComponent = props => {
    return (
        <View style={styles.mainWrapper}>
            <FlatList
                data={props.bill.participants}
                renderItem={({ item, index }) =>
                    <View style = {styles.userExpenses} key = {index}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <FlatList
                            data={item.expenses}
                            renderItem={({ item, index }) =>
                                <View key = {index} style ={styles.expense}>
                                    <Text style={styles.itemPurpose}>{item.purpose}</Text>
                                    <Text style = {styles.itemCost}>{item.amount}</Text>
                                </View>
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                        <View style = {styles.borderBottom}></View>
                    </View>
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

export default transactionsListComponent;


const styles = StyleSheet.create({
    mainWrapper: {
        width: "100%",
        // backgroundColor: "black"
    },
    userExpenses: {
        minHeight: 50,
        backgroundColor: "white",
        marginBottom: 10,
        width: "100%",

    },
    userName: {
        fontSize: 20,
        textAlign: "left",
        marginLeft: 30,
        marginRight: 10,
    },
    expense: {
        flexDirection: "row",
        marginLeft: 150,
        textAlign: "left"
    },
    itemPurpose: {
        color: constans.gradientStart,
        fontSize: 20,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 1.5,
        textAlign: "left",
    },
    itemCost: {
        color: constans.gradientEnd,
        fontSize: 20,
        marginTop: 1.5,
        marginLeft: 10,
    },
    borderBottom: {
        height: 1,
        backgroundColor: "gray",
        width: "40%",
        marginLeft: 60,
        marginTop: 5
    }
});