import React, { Component } from 'react'
import { StatusBar, ScrollView, View, Text, Image, RefreshControl } from 'react-native'
import { connect } from 'react-redux'
import IndonesiaActions from '../Redux/IndonesiaRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
import osmi, { colors } from 'osmicsx'
import { Images } from '../Themes'

// Components
import StatCard from '../Components/StatCard'
import StateMenu from '../Components/StateMenu'
import DailyStat from '../Components/DailyStat'

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerShown: false
  })

  constructor (props) {
    super(props)

    this.state = {
      refreshing: false
    }
  }

  componentDidMount () {
    this._getData()
  }

  _getData = () => {
    this.props.getSummary()
    this.props.getProvinsi()
    this.props.getDaily()
  }

  render () {
    const { data, fetching } = this.props.summary
    const dataProvinsi = this.props.provinsi.data
    const fetchProvinsi = this.props.provinsi.fetching
    const dataDaily = this.props.daily.data
    const fetchDaily = this.props.daily.fetching

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors["gray-800"]} barStyle="light-content" />

        <ScrollView
        style={osmi("flex")}
        refreshControl={<RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._getData}/>
        }>
          <View style={styles.summaryContainer}>
            <View style={osmi("flex-11")}>
              <Text style={styles.welcomeText}>Covid-19 Report of Indonesia</Text>
            </View>

            <View style={osmi(['flex-1', "items-end"])}>
              <Image source={Images.indoIcon} style={{width:75, height:75}} />
            </View>
          </View>

          <DailyStat data={dataDaily} fetching={fetchDaily} />

          <View style={osmi("p-5")}>
            <Text style={styles.summaryTitle}>Summary</Text>

            <StatCard
              title="SEMBUH"
              type="sembuh"
              data={data && data.sembuh}
              fetching={fetching}
            />
            <StatCard
              title="PERAWATAN"
              type="perawatan"
              data={data && data.perawatan}
              fetching={fetching}
            />
            <StatCard
              title="MENINGGAL"
              type="meninggal"
              data={data && data.meninggal}
              fetching={fetching}
            />
            <StatCard
              title="JUMLAH KASUS"
              type="kasus"
              data={data && data.jumlahKasus}
              fetching={fetching}
            />
          </View>

          <StateMenu
            dataList={dataProvinsi}
            fetching={fetchProvinsi}
            extraData={this.state}
            numColumns={2}
          />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    summary: state.indo.summary,
    provinsi: state.indo.provinsi,
    daily: state.indo.daily
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSummary: value => dispatch(IndonesiaActions.getSummaryRequest()),
    getProvinsi: value => dispatch(IndonesiaActions.getProvinsiRequest()),
    getDaily: value => dispatch(IndonesiaActions.getDailyRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
