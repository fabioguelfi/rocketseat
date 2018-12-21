import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '~/components/Header'

class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
  }

  static propTypes = {
    navigation: PropTypes.shape({
      tintColor: PropTypes.func,
    }).isRequired,
  }

  render() {
    return (
      <View>
        <Header title="Repositórios" />
      </View>
    )
  }
}

export default Repositories
