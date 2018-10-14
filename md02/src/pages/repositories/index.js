import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View } from 'react-native'

export default class Repositories extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Repositórios',
      title: 'Repositórios',
      tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={28} color={tintColor} />,
    }
  }

  render() {
    return <View />
  }
}
