import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo';
import constans from '../constans';

export default class MainScreen extends React.Component {
    static navigationOptions = {
        header: null,
        headerLeft: null,
        headerRight: null
    };
    constructor(props){
        super(props);
        this.state = {
            logoTranslateY: new Animated.Value(0.01),
            logoOpacity: new Animated.Value(1)
        }  
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation() {
        this.state.logoTranslateY.setValue(300);
        this.state.logoOpacity.setValue(0);

        Animated.parallel([Animated.parallel([Animated.timing(this.state.logoTranslateY, {
            duration: 850,
            easing: Easing.bezier(0.29, 0.87, 1, 1),
            toValue: 0,
        }), Animated.timing(this.state.logoOpacity, {
            duration: 350,
            easing: Easing.bezier(0.42, 0, 0.58, 1),
            toValue: 1,
        })])]).start()
    }
    render() {
        const {navigate} = this.props.navigation;
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
                <Animated.View
                    style = {[{
                        opacity: this.state.logoOpacity,
                        transform: [{
                            translateY: this.state.logoTranslateY
                        }]
                    },
                    styles.logoWrapper
                    ]}>
                    <Image
                        source = {require('../assets/money-bag.png')}/>
                    </Animated.View>
                <View style = {styles.titleWrapper}>
                    <Text style={styles.title}>S p l i t</Text>
                    <Text style = {styles.subTitle}>Sign expenses and calm down {"\n"} Let's go dutch!</Text>
                </View>
                <View
                    style = {styles.buttonView}>
                    <TouchableOpacity
                        style = {styles.startButton}
                        onPress={() => navigate('Calculate', { name: 'Jane' })}>
                        <Image 
                            source = {require("../assets/accounting.png")}
                            style = {styles.startButtonImg}/>
                        <Text
                            style = {styles.startButtonText}>Create bill
                        </Text>  
                    </TouchableOpacity>
                    <View 
                        style = {{
                            flex: 1
                        }}/>
                    <TouchableOpacity
                        style = {styles.startButton}
                        onPress={() => navigate('ShowBill', { name: 'Jane' })}>
                        <Image 
                            source = {require("../assets/view.png")}
                            style = {styles.startButtonImg}/>
                        <Text
                            style = {styles.startButtonText}>See bill
                        </Text>  
                    </TouchableOpacity>
                </View>
                <Text 
                    style = {styles.footerText}>Split 2019 ©
                </Text>
            </LinearGradient>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: "center"
    },
    logoWrapper: {
        width: 80,
        height: 80,
        marginTop: 50,
        alignItems: "center"
    },
    titleWrapper: {
        alignItems: "row",
        alignItems: "center",
        marginTop: 80,
        marginBottom: 80
    },
    title: {
        color: "white",
        fontSize: 42,
        textAlign: "center",
    },
    subTitle: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        marginTop: 20
    },
    buttonView: {
        backgroundColor: "transparent",
        alignSelf: "stretch",
        flexDirection: "row",
        height: 60,
        marginBottom: 85,
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
    footerText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20
    }
  });