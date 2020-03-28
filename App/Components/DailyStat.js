import React from 'react'
import { ScrollView, TouchableOpacity, View, Text } from 'react-native'
import moment from 'moment'
import osmi from 'osmicsx'

import styles from './Styles/DailyStatStyle'

const daily = props => {
  const { ...restProps } = props
  const { data, fetching } = restProps

  return (
    <View style={styles.container}>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
        {data && data.map((item, index) => (
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
