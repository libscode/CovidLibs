import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import BottomNavigation from './BottomNavigation'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const AppStack = createStackNavigator({
  MainScreen: {
    screen: BottomNavigation,
    navigationOptions: ({ navigation }) => ({
      headerShown: false
    })
  },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(AppStack)
