import React, { Component } from 'react'
import { StatusBar, ScrollView, View, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/HomeScreenStyle'
import { colors } from 'osmicsx'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerShown: false
  })

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors["gray-800"]} barStyle="light-content" />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
