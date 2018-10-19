import React, { Component } from 'react'
import {
  View, FlatList, AsyncStorage, ActivityIndicator,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import api from '../../services/api'
import OrganizationItem from './components/organizationItems'

import styles from './styles'

export default class Organizations extends Component {
  static navigationOptions = {
    title: 'Organizações',
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />,
  }

  state = {
    data: [],
    loading: true,
    refreshing: false,
  }

  componentDidMount() {
    this.loadOrganizations()
  }

  loadOrganizations = () => {
    this.setState({ refreshing: true })

    setTimeout(async () => {
      const username = await AsyncStorage.getItem('@Githuber:username')

      const response = await api.get(`/users/${username}/orgs`)

      this.setState({
        data: response.data,
        loading: false,
        refreshing: false,
      })
    }, 4000)
  }

  renderListItem = ({ item }) => <OrganizationItem organization={item} />

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadOrganizations}
      refreshing={this.state.refreshing}
      ListFooterComponent={<View style={styles.listFooter} />}
      numColumns={2}
      columnWrapperStyle={styles.columnContainer}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    )
  }
}
