import { createAppContainer, createStackNavigator } from 'react-navigation'
import { colors } from '~/styles'

import Main from '~/pages/main'
import Album from '~/pages/album'
import Search from '~/pages/search'

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: { screen: Main },
      Album: { screen: Album },
      Search: { screen: Search },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.secundary,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.white,
        headerBackTitle: null,
      },
    },
  ),
)

export default Routes
