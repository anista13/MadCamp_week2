import React from 'react'
import { StyleSheet, Text, View, Button, StatusBar, TextInput, ImageBackground } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Placeholder from 'react-bootstrap/Placeholder'
import { TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import { useEffect, useState } from 'react';
import axios from "axios"
import DatePicker from "react-datepicker";

const PostScreen = (props) => {
    const { colors } = useTheme();
    const theme = useTheme();
    console.log(props);
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [originalPrice, setOriginalPrice] = useState('')
    const [condition, setCondition] = useState('')
    const [place, setPlace] = useState('')
    const post = async () => {
        const now = new Date();
        const date = now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate()+" "+now.getHours()+":"+now.getMinutes();
        console.log(props.name);
        console.log("!!!");
        console.log(typeof(price));
        const URL = "http://192.249.18.167:443/api/post"
        try {
            if(name=="" || price=="" || originalPrice=="" || condition=="" || place=="")    Toast.show({
                type:'error',
                position:'top',
                text1:'emtpy string',
                text2:'try again',
                visibilityTime: 1000,
                autoHide: true,
                onShow: () => {},
                onHide: () => {},
            });
            else axios.post(URL, {name, price, originalPrice, condition, place, date, seller:props.route.name})
            .then((Response)=>{
                const datas = Response.data;
                console.log("start");
                for(var data of datas){
                   console.log(data);
                   console.log("Data");
                    }
                } 
                
            )
            .catch((Error)=>{console.log(Error)})
        }
        catch(error) {
            Alert.alert(error.message);
    
        }    
    }
    return (
        < View style={styles.container} >
            <View style={styles.bookContainer}>
             
                <View style={styles.titles}>
                    <Text style={styles.title}> BookApp </Text>
                    <Text style={styles.subtitle}> Only for students </Text>
                    <Toast ref={(ref)=>{Toast.setRef(ref)}}/>
                    <View style={[styles.inputContainer, styles.centerbox]}>
                        <TextInput
                            placeholder="책 이름"
                            onChangeText={text => setName(text)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="판매가"
                            keyboardType = 'numeric'
                            onChangeText={text => setPrice(text)}
                            style={styles.input}
                            secureTextEntry
                        />
                        <TextInput
                            placeholder="정가"
                            keyboardType = 'numeric'
                            onChangeText={text => setOriginalPrice(text)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="책 상태"
                            onChangeText={text => setCondition(text)}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="원하는 거래 장소"
                            onChangeText={text => setPlace(text)}
                            style={styles.input}
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={post}>
                                <Text style={styles.buttonText}> POST </Text>

                            </TouchableOpacity> 
                        </View>



                    </View>

                </View>


            </View>
      
    </View >


    );
};

export default PostScreen;
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
