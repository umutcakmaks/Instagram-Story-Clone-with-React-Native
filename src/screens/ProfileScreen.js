import { View } from 'react-native'
import React from 'react'

import Header from '../components/Header'
import Story from '../components/Story'


//Ekran Kalabalık olmaması için Story.js adında komponent oluşturdum ve buraya çağırdım
const ProfileScreen = () => {

  return (
    <View style={styles.viewStyle}>
      <Header title="Revy" />
      <Story />
    </View>
  )
}

const styles = {
  
  viewStyle: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
}

export default ProfileScreen