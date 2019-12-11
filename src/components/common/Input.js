import React from 'react'
import {TextInput, View, Text, StyleSheet} from 'react-native'

const Input = ({label, onChangeText, value, placeholder, isHide}) => {
  const {constainer, input, labelStyle} = styles

  return (
    <View style={constainer}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder=""
        autoCorrect={false}
        style={input}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#fff"
        autoFocus={false}
        secureTextEntry={isHide}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    color: '#fff'
  },
  input: {
    height: 40,
    flex:2,
    borderColor: '#42455B', 
    borderWidth: 1,
    borderRadius: 5,
    color: '#fff',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    lineHeight: 23
  }
})

Input.defaultProps = {
  label: 'Label', 
  placeholder: 'placeholder',
  isHide: false
}

export {Input}
