import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

export default class Welcome extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Início',
      headerRight: (
        <TouchableOpacity onPress={navigation.getParam('increaseCount')}>
          <Icon name="rocket" size={30} color="#000" style={styles.iconRight} />
        </TouchableOpacity>
      ),
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount })
  }

  state = {
    count: 0,
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 })
  }

  nextPage = () => {
    this.props.navigation.navigate('Repositories')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.nextPage}>
          <Text>Class Welcome</Text>
        </TouchableOpacity>
        <Text>Count: {this.state.count}</Text>
      </View>
    )
  }
}
