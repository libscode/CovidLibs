import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import osmi, { colors } from 'osmicsx'
import Icon from 'react-native-vector-icons/FontAwesome5'

import styles from './Styles/StatCardStyle'

const card = props => {
  const { ...restProps } = props
  const { title, data, type, fetching } = restProps

  const _renderEmoji = () => {
    switch (type) {
      case "sembuh":
        return (
          <Icon name="grin" size={60} color={colors["green-500"]} />
        )

      case "perawatan":
        return (
          <Icon name="sad-tear" size={60} color={colors["yellow-500"]} />
        )

      case "meninggal":
        return (
          <Icon name="sad-cry" size={60} color={colors["red-500"]} />
        )

      case "kasus":
        return (
          <Icon name="chart-line" size={60} color={colors["blue-700"]} solid />
        )

      default:
        break;
    }
  }

  return (
    <View style={styles.container}>
      <View style={osmi("flex-11")}>
        <Text style={styles.cardLabel}>{title}</Text>
        <View style={osmi("items-start")}>
          {fetching ? <ActivityIndicator size="large" color={colors["white"]} /> : <Text style={styles.countLabel}>{data}</Text>}
        </View>
      </View>

      <View style={osmi(["flex-1", "items-end"])}>
        {_renderEmoji()}
      </View>
    </View>
  )
}

export default card
