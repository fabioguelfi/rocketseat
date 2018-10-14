import React from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import HeaderRight from './components/headerRight'

import Welcome from './pages/welcome'
import Repositories from './pages/repositories'
import Organizations from './pages/organizations'

import { colors } from './styles'

const createNavigator = (isLogged = false) => createStackNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    User: {
      screen: createBottomTabNavigator(
        {
          Repositories: {
            screen: Repositories,
          },
          Organizations: {
            screen: Organizations,
          },
        },
        {
          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            activeTintColor: colors.white,
            inactiveTintColor: colors.whiteTransparent,
            style: {
              backgroundColor: colors.secundary,
            },
          },
        },
      ),
    },
  },
  {
    initialRouteName: isLogged ? 'User' : 'Welcome',
    navigationOptions: ({ navigation }) => ({
      headerRight: <HeaderRight navigation={navigation} />,
    }),
  },
)

export default createNavigator
