import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrinkList from './components/DrinkList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    marginTop: 70
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Random drinks 0.1</Text>
        <DrinkList />
      </View>
    );
  }
}


