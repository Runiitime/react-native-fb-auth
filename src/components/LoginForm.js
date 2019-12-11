import React, {useState} from 'react'
import {StyleSheet, Text} from 'react-native';
import {Button, Card, Section, Input, Spinner} from './common'
import * as firebase from 'firebase'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handlePress = () => {
    setError('')
    setIsLoading(true)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(onLoginSuccess)
          .catch(onLoginFail)
      })
  }

  const onLoginSuccess = () => {
    setError('')
    setIsLoading(false)
    setEmail('')
    setPassword('')
  }

  const onLoginFail = () => {
    setError('Authentication failed')
    setIsLoading(false)
  }

  const renderBtn = () => {
    if(isLoading) {
      return (<Spinner/>)
    } 

    return (<Button btnText="Log in" onPress={handlePress}/>)
  }

  return (
    <Card>
      <Section>
        <Input
          label="Email"
          placeholder="user@gmail.com"
          value={email}
          onChangeText={email => setEmail(email)}
        />
      </Section>
      <Section>
      <Input
          label="Password"
          placeholder="password"
          value={password}
          onChangeText={password => setPassword(password)}
          isHide={true}
        />
      </Section>

      <Text style={styles.errStyle}>
        {error}
      </Text>

      <Section>
        {renderBtn()}
      </Section>
    </Card>
  )
}

const styles = StyleSheet.create({
  errStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
})


export default LoginForm