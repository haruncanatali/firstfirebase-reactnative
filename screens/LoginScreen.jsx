import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
    const navigator = useNavigation()
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            navigator.navigate('Home')
        })
    }, [])

    const handleRegister = () => {
        auth.createUserWithEmailAndPassword(mail,password).then(result => {
            console.log("kullanıcı", result.user.email)
            navigator.navigate('Home')
        }).catch((error) => console.log(error))
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(mail, password).then(result => {
            console.log('giriş yapan kullanıcı',result.user.email)
            navigator.navigate('Home')
        }).catch(error => {
            console.log(error)
        })
    }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.input_container}>
            <TextInput placeholder='E-Posta giriniz.' style={styles.input} value={mail} onChangeText={text => setMail(text)}/>
            <TextInput placeholder='Parola giriniz.' style={styles.input} secureTextEntry value={password} onChangeText={text => setPassword(text)}/>
        </View>
        <View style={styles.button_container}>
            <TouchableOpacity style={[styles.button, styles.login_button]} onPress={handleLogin}>
                <Text style={styles.button_text}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.register_button]} onPress={handleRegister}>
                <Text style={styles.button_text}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input_container: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 5,
        borderRadius: 10
    },
    button_container: {
        width: '60%',
        marginTop: 30,
    },
    button: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 11,
        marginVertical: 10
    },
    login_button: {
        backgroundColor: 'blue'
    },
    register_button: {
        backgroundColor: 'green'
    },
    button_text: {
        fontSize: 21,
        fontWeight: 'bold',
        color : 'white'
    }
})