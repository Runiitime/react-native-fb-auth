import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import firebase from './src/module/config'
import {Header, Button, Section, Card, Spinner} from './src/components/common'
import LoginForm from './src/components/LoginForm'

const App = () => {
  const [isLogged, setIsLogged] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
    })
  }, [])
  
  const logOut = () => {
    firebase.auth().signOut()
  }

  const renderContent = () => {
    if(isLogged == null) {
      return <Spinner/>
    }

    if(isLogged) {
      return (
        <Card>
          <Section>
            <Button btnText="Log out" onPress={logOut}/>
          </Section>
        </Card>
      )
    }

    return  (<LoginForm/>)
  }

  return (
    <View style={styles.container}>
      <Header title="Authentication"/>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42455B'
  }
});

export default App;