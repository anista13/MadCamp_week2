import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import HomeScreen from "../screens/HomeScreen";
import FindScreen from "../screens/FindScreen";
import PostScreen from "../screens/PostScreen";
import axios from "axios"

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const connect = async () => {

        const table_url = "http://192.249.18.167:443/api/timetable"
        console.log("Data");
        const URL = "http://192.249.18.167:443/api/search"
        const data_url = "http://192.249.18.167:443/api/movie"

        try {

            axios.post(URL, { type: "기필", class: "인문", grade: "100번대" })
                .then((Response) => {
                    const datas = Response.data;
                    console.log("start");
                    for (var data of datas) {
                        console.log(data);
                        console.log("Data");
                    }
                }

                )
                .catch((Error) => { console.log(Error) })
        }
        catch (error) {
            Alert.alert(error.message);

        }
    }
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    display: 'flex',
                    // position: 'absolute',
                    // bottom: 10,
                    // left: 10,
                    // right: 10,
                    elevation: 0,
                    borderRadius: 15,
                    height: 80,
                    ...style.shadow
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 4 }}>
                            <Image
                                source={require('../assets/home.png')}
                                resizeMode="contain"
                                style={{
                                    marginTop: 20,
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#c8a2c8' : '#d3d3d3',
                                }} />
                            <Text
                                style={{ color: focused ? '#c8a2c8' : '#d3d3d3', fontSize: 12 }}>HOME </Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Find" component={FindScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 4 }}>
                            <Image
                                source={require('../assets/find.png')}
                                resizeMode="contain"
                                style={{
                                    marginTop: 20,
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#c8a2c8' : '#d3d3d3',
                                }} />
                            <Text
                                style={{ color: focused ? '#c8a2c8' : '#d3d3d3', fontSize: 12 }}>FIND </Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Post" component={PostScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 4 }}>
                            <Image
                                source={require('../assets/post.png')}
                                resizeMode="contain"
                                style={{
                                    marginTop: 20,
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#c8a2c8' : '#d3d3d3',
                                }} />
                            <Text
                                style={{ color: focused ? '#c8a2c8' : '#d3d3d3', fontSize: 12 }}>POST </Text>

                        </View>

                    )
                }} />

        </Tab.Navigator>
    );
}



const style = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
        ...StyleSheet.shadow
    }
});

export default Tabs;