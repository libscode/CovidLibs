import { Platform, ToastAndroid, Alert } from 'react-native'

const ErrorHandler = (payload) => {
  switch (payload.problem) {
    case 'CLIENT_ERROR':
      // console.tron.warn(payload.data.message)
      if (Platform.OS === 'android') return ToastAndroid.show(`Sorry something error`, ToastAndroid.LONG)
      console.tron.warn(payload)
      return console.tron.warn('Sorry something error')
    case 'SERVER_ERROR':
      if (Platform.OS === 'android') return ToastAndroid.show('Server under maintenance', ToastAndroid.SHORT)
      console.tron.warn(payload)
      return console.tron.warn('Server under maintenance')
    case 'TIMEOUT_ERROR':
      if (Platform.OS === 'android') return ToastAndroid.show(`Server didn't respond`, ToastAndroid.SHORT)
      console.tron.warn(payload)
      return console.tron.warn(`Server didn't respond`)
    case 'CONNECTION_ERROR':
      if (Platform.OS === 'android') return ToastAndroid.show('Server not available', ToastAndroid.SHORT)
      console.tron.warn(payload)
      return console.tron.warn(`Server not available`)
    case 'NETWORK_ERROR':
      if (Platform.OS === 'android') return ToastAndroid.show('Network not available', ToastAndroid.SHORT)
      console.tron.warn(payload)
      return console.tron.warn(`Network not available`)
    case 'CANCEL_ERROR':
      if (Platform.OS === 'android') return ToastAndroid.show('Request has been canceled', ToastAndroid.SHORT)
      console.tron.warn(payload)
      return console.tron.warn(`Request has been canceled`)
    // default:
    //   if (Platform.OS === 'android') return ToastAndroid.show('Sorry something error', ToastAndroid.SHORT)
    //   console.tron.warn(payload)
    //   return console.tron.warn('Sorry something error')
  }
}

function ErrorAlert(msg) {
  return setTimeout(function () {
    Alert.alert(
      "",
      msg,
      [{
        text: "Coba Lagi",
        style: 'cancel',
      }]
    )
  }, 25);
}

export {
  ErrorHandler,
  ErrorAlert,
}
