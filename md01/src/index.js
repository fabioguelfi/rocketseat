import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import './config/ReactotronConfig'
import Todo from './components/Todo'

console.tron.log('Teste')

export default class App extends Component {
  state = {
    todos: [
      { id: 0, text: 'Estudar RN' },
      { id: 1, text: 'Estudar iOS' },
      { id: 2, text: 'Estudar Kotlin' },
    ],
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: 'Novo Todo' }],
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.todos.map(todo => <Todo key={todo.id} title={todo.text} />)}
        <Button title="Adicionar todo" onPress={this.addTodo} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
})
