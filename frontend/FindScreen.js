import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';



const FindScreen = () => {

    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData("https://randomuser.me/api/?results=20");
    }, []);

    React.useEffect(() => {

        navigation.setOptions({
            headerSearchBar: {
                placeholder: "Book Name",
                onChangeText: (event) => {
                    searchFilterFunction(event.nativeEvent.text);

                }

            },
            headerLargeTitle: true,
            headerTitle: "Find",
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.navigate("PostScreen")} //add here navigation to the PostScreen 
                    style={{
                        backgroundColor: '#66023C',
                        width: 30,
                        height: 30,
                        borderRadius: 10,
                        justifyContent: 'center',
                        marginRight: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            textAlign: "center",
                            color: 'white'
                        }}>+
                    </Text>
                </TouchableOpacity>
            ),


        });
    },
        [navigation]);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            setFilteredData(json.results);
            console.log(data)
        } catch (eroor) {
            console.error(error)
        }
    };

    // const searchFilterFunction = (text) => {
    //     if (text) {
    //         const newData = data.filter(item => {
    //             const itemData = item.name.first ? item.name.first.toUpperCase() : ''.toUpperCase
    //             const textData = text.toUpperCase();
    //             return itemData.indexOf(textData) > -1;
    //         })
    //         setFilteredData(newData);
    //     } else {
    //         setFilteredData(data);
    //     }
    // }

    return (


        <ScrollView >

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <TextInput placeholder='Book Name...' style={styles.inputField} />
                    {/* <TextInput style={[styles.container, {
                    width: '20%', fontSize: 18, marginLeft: 15,
                    color: '#008080', fontWeight: 'bold'
                }]}
                /> */}
                </View>

                <View>
                    <TouchableOpacity
                        // onPress={ }
                        style={{
                            borderRadius: 10,
                            marginLeft: "68%",
                            marginTop: 10,
                            backgroundColor: '#914b55',
                            width: '20%',
                            padding: 10,
                            alignItems: 'center',
                            textAlign: 'center',

                        }}>
                        <Text style={{ color: 'white' }}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <Text style={styles.textBook}>Book List</Text>
            {
                filteredData.map((item, index) => {
                    return (
                        <View key={index} style={styles.itemContainer}>
                            <Image
                                source={{ uri: item.picture.large }}
                                style={styles.image}
                            />
                            <View >
                                {/* book name */}
                                <Text style={styles.textName}>{item.name.first} {item.name.last}</Text>
                                {/*book author*/}
                                <Text style={styles.textEmail}>{item.login.username}</Text>
                                {/*price*/}
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={styles.bookPrice}>Price</Text>
                                    <Text style={styles.bookRealPrice}>Book real Price</Text>
                                </View>
                            </View>
                        </View>
                    )
                })
            }

        </ScrollView>

    );

};
export default FindScreen;

const styles = StyleSheet.create({
    textBook: {
        fontSize: 20,
        textAlign: 'left',
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    textName: {
        fontSize: 20,
        marginLeft: 15,
        fontWeight: "600"
    },
    textEmail: {
        marginTop: 10,
        fontSize: 14,
        marginLeft: 20,
        color: "grey"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    inputField: {
        height: 40,
        width: "320%",
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 10,
        paddingLeft: 15
    },

    bookPrice: {
        marginLeft: 50,
        marginTop: 15,
    },
    bookRealPrice: {
        marginLeft: 50,
        marginTop: 15,
    }


});

