import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, TextInput, Alert, Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import axios from "axios"
import Toast from 'react-native-toast-message';
import Tabs from '../navigation/tabs';
const Stack = createNativeStackNavigator();

const LoginScreen = ({ navigation }) => {

    const onSignInKakaoPress = () => {
        navigation.navigate('Kakao Sign In', {})
    }
    const [ID, setID] = useState('')
    const [password, setPassword] = useState('')
    const [Login, setLogin] = useState('')
    
    const connect = async () => {
        
        const data_url = "http://192.249.18.167:443/api/movie"
        try {
            //const response = await fetch(URL + "/" + this.state.name);
            //const responseText = await response.text();
            //setID(responseText)
            axios.get(data_url)
            .then((Response)=>{
                const datas = Response.data;
                for(var data of datas){
                    if((ID===data.id) && (password===data.pw)) setLogin(true);//this.setState({id: "success"});
                    else {
                        Toast.show({
                            type:'error',
                            position:'top',
                            text1:'login fail',
                            text2:'try again',
                            visibilityTime: 1000,
                            autoHide: true,
                            onShow: () => {},
                            onHide: () => {},
                        });
                    }
                } 
                
            })
            .catch((Error)=>{console.log(Error)})

            //this.setState({id: user});
          
        }catch(error) {
            Alert.alert(error.message);

        }
    }
    const logout = () =>{
        setLogin(false);
        //setID("");
        //setPassword("");
    }
    if(Login) return(<NavigationContainer independent={true}> 

            <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name={ID} component={Tabs} />
            
            </Stack.Navigator>
            <Button title="LOGOUT" onPress={logout} style={styles.button}></Button>
                                
                         
      </NavigationContainer>)

    else return (
        < View style={styles.container} >
            <View style={styles.bookContainer}>
                <ImageBackground source={require('../assets/books.jpg')}
                    style={styles.image}
                />
                <View style={styles.titles}>
                    <Text style={styles.title}> BookApp </Text>
                    <Text style={styles.subtitle}> Only for students </Text>
                    <Toast ref={(ref)=>{Toast.setRef(ref)}}/>
                    <View style={[styles.inputContainer, styles.centerbox]}>
                        <TextInput
                            placeholder="ID"
                            value={ID}
                            onChangeText={text => setID(text)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                            style={styles.input}
                            secureTextEntry
                        />

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={connect}
                                style={styles.button}>
                                <Text style={styles.buttonText}> Login </Text>

                            </TouchableOpacity> 
                        </View>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                onPress={onSignInKakaoPress}
                                style={styles.kakao}>
                                <Text style={styles.buttonText2}> Sign in with Kakao </Text>

                            </TouchableOpacity>
                        </View>


                    </View>

                </View>


            </View>

            <StatusBar style="auto" />
        </View >

    )
}

export default LoginScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    bookContainer: {
        width: '100%',
        height: '100%',
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',


    },
    title: {
        fontSize: 40,
        fontWeight: '500',

    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',

    },
    centerbox: {
        marginTop: '20%',

    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        backgroundColor: '#C2D5DA',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',

    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    kakao: {
        backgroundColor: 'yellow',
        width: '100%',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonText2: {
        color: 'black',
        fontWeight: '700',
        fontSize: 16,
    },


})
