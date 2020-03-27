import React from 'react'
import { FlatList, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import osmi, { colors } from 'osmicsx'

import styles from './Styles/StateMenuStyle'

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let newArr = [...data]

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    newArr.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }

  return newArr;
};

const _renderItem = ({ item, index}) => {
  if (item.empty) {
    return <View style={styles.emptyMenu} />
  } else {
    return (
      <TouchableOpacity style={styles.menuWrapper} activeOpacity={0.9}>
        <Text style={styles.menuLabel}>{item.provinsi}</Text>
      </TouchableOpacity>
    )
  }
}

const menu = props => {
  const { ...restProps } = props
  const { dataList, fetching } = restProps

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Provinsi</Text>

      {fetching || !dataList ? <ActivityIndicator size="large" color={colors["white"]} /> :
      <View style={osmi("p-3")}>
        <FlatList
          {...restProps}
          data={formatData(dataList, 2)}
          renderItem={_renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>}
    </View>
  )
}

export default menu
