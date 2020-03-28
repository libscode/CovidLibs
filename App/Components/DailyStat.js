import React, { useState, useEffect } from 'react'
import { ScrollView, TouchableOpacity, View, Text, ActivityIndicator } from 'react-native'
import moment from 'moment'
import osmi, { colors } from 'osmicsx'

import styles from './Styles/DailyStatStyle'

const daily = props => {
  const { ...restProps } = props
  const { data, fetching } = restProps

  const _renderLoading = () => {
    const arr = [1,2,3]

    return arr.map((item, index) => (
      <View
        key={index}
        style={[styles.statWrapper, index == arr.length - 1 && osmi("mr-5")]}>
        <Text style={styles.dateLabel}>DD/MM/YYYY</Text>

        <View style={osmi(["my-2"])}>
          <ActivityIndicator size="large" color={colors["white"]} />
        </View>

        <Text style={styles.helpLabel}>KASUS BARU</Text>
      </View>
    ))
  }

  return (
    <View style={styles.container}>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
        {fetching ? _renderLoading() : data && [...data].reverse().map((item, index) => (
          <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          style={[styles.statWrapper, index == data.length - 1 && osmi("mr-5")]}>
            <Text style={styles.dateLabel}>{moment(new Date(item.tanggal)).format("DD/MM/YYYY")}</Text>
            <Text style={styles.countLabel}>{item.jumlahKasusBaruperHari}</Text>
            <Text style={styles.helpLabel}>KASUS BARU</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default daily
