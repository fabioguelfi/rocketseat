import React, { Component } from 'react'
import {
  View, StatusBar, AsyncStorage, ActivityIndicator, FlatList,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import api from '../../services/api'
import RepositoryItem from './components/repositoryItem'
import styles from './styles'

export default class Repositories extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Repositórios',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={26} color={tintColor} />,
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true,
      refreshing: false,
    }
  }

  componentDidMount() {
    this.loadRepositories()
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true })

    setTimeout(async () => {
      const username = await AsyncStorage.getItem('@Githuber:username')
      const response = await api.get(`/users/${username}/repos`)

      this.setState({
        data: response.data,
        loading: false,
        refreshing: false,
      })
    }, 4000)
  }

  renderListItem = ({ item }) => <RepositoryItem repository={item} />

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      onRefresh={this.loadRepositories}
      refreshing={this.state.refreshing}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {this.state.loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    )
  }
}
