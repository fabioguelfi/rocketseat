import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native'
import PropTypes from 'prop-types'
import { StackActions, NavigationActions } from 'react-navigation'
import api from '../../services/api'
import styles from './styles'

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
    loading: false,
    errorMessage: null,
  }

  state = {
    username: '',
  }

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  checkUserExists = async username => {
    const user = await api.get(`/users/${username}`)

    return user
  }

  saveUser = async username => {
    await AsyncStorage.setItem('@Githuber:username', username)
  }

  signIn = async () => {
    const { username } = this.state

    if (username.length === 0) return

    this.setState({ loading: true })

    try {
      await this.checkUserExists(username)
      await this.saveUser(username)
      const { navigation } = this.props
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'User' })],
      })
      navigation.dispatch(resetAction)
    } catch (err) {
      console.tron.log(err)
      this.setState({ loading: false, errorMessage: 'usuário não existe' })
    }
  }

  render() {
    const { errorMessage, loading } = this.state
    return (
      <View style={styles.contaier}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.text}>
          Para continuar precisamos que você informe seu usuário do github
        </Text>

        {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Prossegrir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
