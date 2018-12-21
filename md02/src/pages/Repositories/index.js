import React, { Component } from 'react'
import PropTypes from 'prop-types'
import api from '~/services/api'

import {
  View, AsyncStorage, ActivityIndicator, FlatList,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import Header from '~/components/Header'
import RepositoryItem from './RepositoryItem'
import styles from './styles'

class Repositories extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={32} color={tintColor} />,
  }

  state = {
    data: [],
    loading: true,
    refreshing: false,
  }

  // eslint-disable-next-line react/sort-comp
  componentDidMount() {
    this.loadRepositories()
  }

  static propTypes = {
    navigation: PropTypes.shape({
      tintColor: PropTypes.func,
    }).isRequired,
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true })

    const username = await AsyncStorage.getItem('@Githuber:username')
    const { data } = await api.get(`/users/${username}/repos`)

    this.setState({ data, loading: false, refreshing: false })
  }

  renderListItem = ({ item }) => {
    return <RepositoryItem repository={item} />
  }

  renderList = () => {
    const { data, refreshing } = this.state
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    )
  }

  render() {
    const { loading } = this.state

    return (
      <View style={styles.container}>
        <Header title="Repositórios" />
        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    )
  }
}

export default Repositories
