import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default class Repositories extends Component {
  static navigationOptions = {
    title: 'Repositórios',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Class Repositories</Text>
      </View>
    )
  }
}
