import { createStackNavigator } from 'react-navigation'

import Welcome from './page/welcome'
import Repositories from './page/repositories'

const RootStack = createStackNavigator({
  Welcome: {
    screen: Welcome,
  },
  Repositories: {
    screen: Repositories,
  },
})

export default RootStack
