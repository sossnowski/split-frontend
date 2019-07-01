import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LinearGradient } from 'expo';

export default function App() {
  const {navigate} = this.props.navigation;
  return (
    <LinearGradient 
      start={{
        x: 0.31,
        y: 1.11,
      }}
      end = {{
        x: 0.61,
        y: -0.1,
      }}
      locations = {[0, 1]}
      colors = {["rgb(233, 145, 133)", "rgb(123, 167, 198)"]}
      style = {styles.container}>
    <View>
      <Text>Open up App.jsqqo start working on your app!</Text>
    </View>
    <Button
          title="START"
          onPress={() => navigate('Calculate', {name: 'Jane'})}
        />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
});
