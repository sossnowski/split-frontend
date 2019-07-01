import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MainComponent from '../components/mainScreen/main';

export default class CalculateScreen extends React.Component {
    static navigationOptions = {
        header: null,
        headerLeft: null,
        headerRight: null
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Text>jestes w trzecim ekranie</Text>
        );
    }
}