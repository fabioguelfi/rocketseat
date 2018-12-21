import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '~/components/Header'

class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />,
  }

  static propTypes = {
    navigation: PropTypes.shape({
      tintColor: PropTypes.func,
    }).isRequired,
  }

  render() {
    return (
      <View>
        <Header title="Organizações" />
      </View>
    )
  }
}

export default Organizations
