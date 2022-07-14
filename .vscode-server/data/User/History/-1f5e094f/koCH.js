import React, {Component} from 'react'
import { Text, StyleSheet, View, Button, Alert, TextInput} from 'react-native'
import App from './App'

export default class ServerExample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          response: "click to connect to server",
          name: "ddf"
        }
      }
    
      connect = async () => {
        const URL = "http://192.249.18.167:443/welcome"
        try {
            const response = await fetch(URL + "/" + this.state.name);
            if(response.status != 200){
                throw new Error("Something is wrong"+response.status +  this.state.name)
            }
            const responseText = await response.text();
            this.setState({response: responseText});
        }catch(error) {
            Alert.alert(error.message);

        }


        // fetch(URL).then(response => {
        //   if(response.status == 200) {
        //     return response.text()
        //   }
        //   else {
        //       throw new Error("Something is wrong")
        //   }
        // }).then(resonseText => {
        //     this.setState({response: resonseText});
        // }).catch(error => {
        //     console.error(error.message)
        // });
      }
    
    setText = (text) => {
        throw new Error("Something is wrong"+text)
        this.setState({name: text});
    }


    render() {
        return (
            <View style={styles.title}>
                <TextInput placeholder ="your name" on ChangeText={this.setText}/>
                <Text style={styles.title}> {this.state.response} </Text>
                <Button title="connect" style={styles.title} onPress={this.connect}></Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginTop: 100,
        margin: 10,
        textAlign: 'center'
    }
})