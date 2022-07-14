import React from 'react'
import { StyleSheet, Text, View, Button, StatusBar, Image, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import axios from "axios"


const FindScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const theme = useTheme();
    console.log("findscrren");
    const connect = async () => {
        
        console.log("Data");
        const URL = "http://192.249.18.167:443/api/shop"
        
        try {
            axios.get(URL, {})
            .then((Response)=>{
                const datas = Response.data;
                console.log(Response);
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
        <View style={styles.container}>
        <Image style={{width: 100, height: 100}}
                source={{uri: ('http://image.kyobobook.co.kr/images/book/xlarge/599/x9781292153599.jpg')}} />
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
            <Text style={{ color: colors.text }}> Home Screen</Text>
            <Button
                title="Go to details creens"
                onPress={() => connect()}
            />
        </View >

    );
};

export default FindScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});