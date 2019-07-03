import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { LinearGradient } from 'expo';
import { Header } from 'react-navigation';
import constans from '../constans';
import AddUserComponent from '../components/CalculateScreen/addUserComponent'
import UserExpensesListComponent from '../components/CalculateScreen/userExpensesListComponent'
import BottomButtonsComponent from '../components/CalculateScreen/bottomButtonsComponent';

export default class CalculateScreen extends React.Component {
    static navigationOptions = {
        header: null,
        headerLeft: null,
        headerRight: null
    };

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            showAdditionalInput: false,
            userExpenses: [],
            allUsersExpenses: [],
            expense: '',
            cost: 0,
            inputValue: '',
            numericInputValue: '',
            showBottomButtons: false,
        };
        this.deleteUserExpense = this.deleteUserExpense.bind(this);
    }

    addUser = () => {
        this.setState({
            showAdditionalInput: true
        })
    }

    addUserExpenses = async () => {
        Keyboard.dismiss();
        await this.setState({
            userExpenses: [...this.state.userExpenses, {
                purpose: this.state.expense,
                amount: this.state.cost
            }],
            inputValue: '',
            numericInputValue: ''
        });
        this.setState({showBottomButtons: true});
        console.log(this.state.cost)
        
    }

    getUserExpense = (value) => {
         this.setState({
            // expense: '', tu tez
            expense: value,
            inputValue: value,
        });
    }

    getUserCost = (value) => {
         this.setState({
            // cost: 0,
            cost: value,
            numericInputValue: value
        });
    }

    addNewMember = () => {
        const userExpenses = Object.assign([], this.state.userExpenses);
        const allUsers = Object.assign([], this.state.allUsersExpenses);
        const userName = this.state.userName;
        allUsers.push({
            name: userName,
            expenses: userExpenses
        });
        this.setState({
            allUsersExpenses: allUsers,
            userName: '',
            userExpenses: [],
            showAdditionalInput: false,
            expense: '',
            cost: 0,
            inputValue: '',
            numericInputValue: '',
            showBottomButtons: false,

        });
    }

    makeCalculation = async () => {
        await this.addNewMember();
        let result;
        try {
            let response = await fetch('http://192.168.0.157:8000/api/bill', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: "testowy rachunek",
                    participants: this.state.allUsersExpenses,
                })
            });
            let responseJson = await response.json();
            result = responseJson;
        }
        catch (error) {
            console.error(error);
        }
        console.log(result);
        this.props.navigation.navigate(
            'ShowBill', {
                bill: {
                    name: "testowy rachunek",
                    participants: this.state.allUsersExpenses,
                },
                transactions: result,
            });
    }

    deleteUserExpense = async (id) => {
        const userExpenses = Object.assign([], this.state.userExpenses);
        userExpenses.splice(id, 1);
        this.setState({userExpenses: userExpenses});
        // console.log(this.state.userExpenses)
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            
            <LinearGradient
                start={{
                    x: constans.gradientStartX,
                    y: constans.gradientStartY,
                }}
                end={{
                    x: constans.gradientEndX,
                    y: constans.gradientEndY,
                }}
                locations={[constans.gradientLocationFirst, constans.gradientLocationSecond]}
                colors={[constans.gradientStart, constans.gradientEnd]}
                style={styles.container}>
                <KeyboardAvoidingView
                        // behavior = {Platform.OS === "ios" ? "padding" : null}
                        behavior = {"padding"}
                        style = {{flex: 1}}
                        keyboardVerticalOffset = {Header.HEIGHT}>
                <View style={styles.wrapper}>
                    <Text style={styles.pageHeader}>Add bill's members</Text>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            autoCorrect={false}
                            placeholder={"Name"}
                            style={styles.mainTextInput}
                            onChangeText={(value) => this.setState({ userName: value })}
                            value = {this.state.userName}>
                        </TextInput>
                        <TouchableOpacity
                            onPress={this.addUser.bind(this)} >
                            <Image
                                source={require('../assets/arrow-right.png')}
                                style={styles.arrowRight} />
                        </TouchableOpacity>
                    </View> 
                        {this.state.showAdditionalInput && 
                            <AddUserComponent 
                            userName = {this.state.userName} 
                            addUserExpenses = {this.addUserExpenses}
                            getUserExpense = {this.getUserExpense}
                            getUserCost = {this.getUserCost}
                            inputValue = {this.state.inputValue}
                            numericInputValue = {this.state.numericInputValue}
                            />
                        }
                        {this.state.showAdditionalInput && 
                            <UserExpensesListComponent
                                expensesList = {this.state.userExpenses}
                                deleteUserExpense = {this.deleteUserExpense} />
                        }
                   
                </View>
                </KeyboardAvoidingView>
                {this.state.showBottomButtons && 
                    <BottomButtonsComponent 
                        navigate = {navigate}
                        addNewMember = {this.addNewMember}
                        makeCalculation = {this.makeCalculation}/>}
            </LinearGradient>
           

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        width: '100%',
        alignItems: "center",
        
    },
    wrapper: {
        marginTop: 50,
        width: "95%",
        alignItems: "center",
        justifyContent: "flex-end",

    },
    pageHeader: {
        color: "white",
        fontSize: 30,
        marginBottom: 20,
    },
    inputWrapper: {
        backgroundColor: "white",
        height: 50,
        justifyContent: "center",
        width: "90%",
        flexDirection: "row",
        marginBottom: 15
    },
    mainTextInput: {
        backgroundColor: "transparent",
        marginLeft: 15,
        marginRight: 10,
        fontSize: 20,
        width: "80%",
    },
    arrowRight: {
        alignContent: "flex-end",
        marginTop: 8,
        marginRight: 20
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