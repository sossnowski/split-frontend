import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import TransactionsListComponents from '../components/ShowBillScreen/transactionsListComponent';
import BillDisplayComponent from '../components/ShowBillScreen/billDisplayComponent';

// const transactions = [
//     {
//         "bill_participant_id_from": 12,
//         "bill_participant_id_to": 14,
//         "name_from": "kamil",
//         "name_to": "maciek",
//         "amount": 420
//     },
//     {
//         "bill_participant_id_from": 12,
//         "bill_participant_id_to": 14,
//         "name_from": "kamil",
//         "name_to": "maciek",
//         "amount": 420
//     },
// ];
// const bill = {
//     "name": "pierwszy praw",
//     "participants": [
//         {
//             "name": "kamil",
//             "expenses": [
//                 {
//                     "amount": 12,
//                     "purpose": "piwo"
//                 },
//                 {
//                     "amount": 87,
//                     "purpose": "szama"
//                 }
//             ]
//
//         },
//         {
//             "name": "maciek",
//             "expenses": [
//                 {
//                     "amount": 42,
//                     "purpose": "piwo"
//                 },
//                 {
//                     "amount": 897,
//                     "purpose": "szama"
//                 }
//             ]
//
//         }
//     ]
// }

export default class ShowBill extends React.Component {
    static navigationOptions = {
        header: null,
        headerLeft: null,
        headerRight: null
    };

    constructor(props) {
        super(props);
        console.log(this.props.navigation.state.params.bill)
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView scrollEnabled = {true}>
                <Text style = {styles.sectionHeader}>Transactions</Text>
                <TransactionsListComponents
                    transactions = {this.props.navigation.state.params.transactions}
                />
                <Text style = {styles.sectionHeader}>Expenses</Text>
                <BillDisplayComponent
                    bill = {this.props.navigation.state.params.bill}
                />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
   sectionHeader: {
      fontSize: 30,
      textAlign: "center",
      marginTop: 50,
      marginBottom: 35
   } ,
});