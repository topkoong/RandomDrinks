import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrinkList from './components/DrinkList';
import { getStatusBarHeight } from 'react-native-status-bar-height';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    paddingTop: getStatusBarHeight()
  },
  title: {
    margin:10,
    fontSize: 20,
    color: 'white'
  }
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Random drinks 0.1</Text>
        <DrinkList />
      </View>
    );
  }
}


