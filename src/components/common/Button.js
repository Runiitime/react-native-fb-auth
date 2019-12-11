import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'

const Button = ({onPress, btnText}) => {
  const {button, text} = styles

  return (
    <TouchableOpacity style={button} onPress={onPress}>
      <Text style={text}>{btnText}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ddd',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#42455B',
    marginRight: 5,
    marginLeft: 5
  },
  text: {
    alignSelf: 'center',
    color: '#222235',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
})

export {Button}