import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TodoList from '~/components/TodoList'

const bgColor = '#F5FCFF'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

const App = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <TodoList />
  </View>
)

export default App
