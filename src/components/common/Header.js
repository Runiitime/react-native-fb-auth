import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = ({title}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#22223B',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4
  },
  text: {
    fontSize: 20,
    color: '#fff'
  }
})

Header.defaultProps = {
  title: 'Mobile App'
}

export {Header}