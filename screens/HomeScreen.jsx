import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
    const navigator = useNavigation()
    const signOutHandler = () => {
        auth?.signOut().then(() => {
            navigator.navigate('Login')
        }).catch(error => {
            alert(error.message)
        })
    }
  return (
    <View>
      <Text>Anasayfa</Text>
      <Text>{auth?.currentUser?.email}</Text>
      <Button title='Çıkış Yap' color='red' onPress={signOutHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({})