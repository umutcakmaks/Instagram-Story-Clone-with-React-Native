import { View, Text } from 'react-native'
import React from 'react'

const AddScreen = () => {
  const { viewStyle, textStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Add</Text>
    </View>
  )
}

const styles = {
  
  viewStyle: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontSize: 45,
    fontWeight: "bold",
    letterSpacing: 3,
  }
}

export default AddScreen