import React from 'react'
import {View, StyleSheet} from 'react-native'

const Section = ({children}) => {
  
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#42455B',
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#22223B',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
})

export {Section}