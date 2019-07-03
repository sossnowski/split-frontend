import React from 'react';
import {StyleSheet, Text, View, FlatList, Image,} from 'react-native';
import constans from '../../constans';

const transactionsListComponent = props => {
    return (
        <View style={styles.mainWrapper}>
            <FlatList
                data={props.transactions}
                renderItem={({ item, index }) =>
                    <View key = {index} style ={styles.items}>
                        <Text style={styles.itemPurpose}>{item.name_from}</Text>
                        <Image
                            source={require('../../assets/arrow-right.png')}
                            style={styles.arrow}
                        />
                        <Text style = {styles.itemTo}>{item.name_to}</Text>
                        <Text style = {styles.itemCost}>{item.amount}</Text>
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
        textAlign: "left",
    },
    arrow: {
        marginLeft: 20,
        marginRight: 20
    },
    itemTo: {
        color: "black",
        fontSize: 20,
        marginRight: 40
    },
    itemCost: {
        color: constans.gradientEnd,
        fontSize: 20,
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