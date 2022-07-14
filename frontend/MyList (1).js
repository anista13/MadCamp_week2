import React, { Component } from "react";
import { Platform, StyleSheet, View, Image, TouchableOpacity, Text, Dimensions, FlatList } from "react-native";

const MyList = (props) => {
    // console.log(props)

    return (
        <View style={styles.cardContainer}>
            <Image style={styles.subjectStyle}
                source={require('../assets/wallpaper.jpg')} />
            <Text style={{ position: 'absolute', fontSize: 20, color: 'white', marginLeft: 10, marginTop: 6 }} >{props.info.subjectName}</Text>
            <View>

                <Text style={styles.ProfStyle}>{props.info.profname}</Text>
                <Text style={styles.SubjectStyle}>{props.info.subjectCode}</Text>
                <Text style={styles.DivisionStyle}>{props.info.division}</Text>
                <Text style={styles.DeptStyle}>{props.info.department}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <View>
                        <TouchableOpacity
                            // onPress={ }
                            style={{
                                borderRadius: 10,
                                marginLeft: 80,
                                marginTop: 30,
                                backgroundColor: '#914b55',
                                width: '70%',
                                padding: 10,
                                alignItems: 'center',
                                textAlign: 'center',

                            }}>
                            <Text style={{ color: 'white' }}>Buy</Text>
                        </TouchableOpacity>

                    </View>


                    <View >
                        <TouchableOpacity
                            // onPress={ }
                            style={{
                                borderRadius: 10,
                                marginRight: 100,
                                marginTop: 30,
                                backgroundColor: '#914b55',
                                width: '61%',
                                padding: 10,
                                alignItems: 'center',
                                textAlign: 'center',

                            }}>
                            <Text style={{ color: 'white' }}>E-buy</Text>
                        </TouchableOpacity>
                    </View>

                </View>


            </View>
        </View>
    );
};


const deviceWidth = Math.round(Dimensions.get('window').width)
const radius = 15

const styles = StyleSheet.create({

    cardContainer: {
        marginLeft: 4,
        marginTop: 5,
        marginBottom: 70,
        width: deviceWidth - 28,
        backgroundColor: '#e5e5e5',
        height: 200,
        borderRadius: radius,
        overflow: 'visible',
        shadowColor: '#000000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.3,
        elevation: 9,
        shadowRadius: 5,
    },
    subjectStyle: {
        height: 40,
        width: deviceWidth - 25,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.7
    },
    ProfStyle: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: '500',
        marginHorizontal: 10,
        marginVertical: 5
    },
    SubjectStyle: {
        fontSize: 20,
        fontWeight: '500',
        marginHorizontal: 10,
        marginVertical: 5

    },
    DivisionStyle: {
        fontSize: 20,
        fontWeight: '500',
        marginHorizontal: 10,
        marginVertical: 5
    },
    DeptStyle: {
        fontSize: 20,
        fontWeight: '500',
        marginHorizontal: 10,
        marginVertical: 5
    },

    button: {

        flexDirection: 'row',
        marginLeft: 50,
        marginTop: 30,
        backgroundColor: '#66023C',
        width: '20%',
        padding: 10,
        alignItems: 'center',
        color: 'white',
        right: 5,
        top: 5,
        borderRadius: 15,
        // overflow: 'hidden',
        textAlign: 'center',

    },
    button2: {
        flexDirection: 'row',
        marginLeft: 200,
        marginTop: 30,
        backgroundColor: 'black',
        width: '20%',
        padding: 10,
        alignItems: 'center',
        color: 'white',
        right: 5,
        top: 5,
        borderRadius: 15,
        // overflow: 'hidden',
        textAlign: 'center',

    },
    // buttonContainer: {
    //     flex: 1,
    // }


})
export default MyList; 