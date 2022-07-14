import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import CheckBox from '@react-native-community/checkbox';
import axios from "axios"
import Toast from 'react-native-toast-message';
import MyList from '../navigation/MyList';

// Options data must contain 'item' & 'id' keys
                                    
const K_OPTIONS = [
    {
        item: '전체',
        id: 'all',
    },
    {
        item: '기필',
        id: 'BR',
    },
    {
        item: '기선',
        id: 'BE',
    },
    {
        item: '전필',
        id: 'MR',
    },
    {
        item: '전선',
        id: 'ME',
    },
    {
        item: '교필',
        id: 'MGC',
    },
    {
        item: '인선',
        id: 'HSE',
    },
    {
        item: '공통',
        id: 'GR',
    },
    {
        item: '석박',
        id: 'EG',
    },
    {
        item: '자선',
        id: 'OE',
    },
    {
        item: '기타',
        id: 'ETC',
    },
]

const K_DEPT = [
    {
        item: '전체',
        id: 'ALL',
    },
    {
        item: '인문',
        id: 'HSS',
    },
    {
        item: '건환',
        id: 'AE',
    },
    {
        item: '기경',
        id: 'BS',
    },
    {
        item: '기계',
        id: 'BiS',
    },
    {
        item: '물리',
        id: 'CBE',
    },
    {
        item: '바공',
        id: 'CE',
    },
    {
        item: '산공',
        id: 'CH',
    },
    {
        item: '산디',
        id: 'CS',
    },
    {
        item: '생명',
        id: 'EE',
    },
    {
        item: '생화공',
        id: 'ID',
    },
    {
        item: '수리',
        id: 'IE',
    },
    {
        item: '신소재',
        id: 'MAS',
    },
    {
        item: '원양',
        id: 'ME',
    },
    {
        item: '융인',
        id: 'MS',
    },
    {
        item: '전산',
        id: 'MSB',
    },
    {
        item: '전자',
        id: 'NQE',
    },
    {
        item: '항공',
        id: 'PH',
    },
    {
        item: '화확',
        id: 'TS',
    },
    {
        item: '기타',
        id: 'ETC',
    },

]

const K_YEAR = [
    {
        item: '전체',
        id: 'all'
    },
    {
        item: '100번대',
        id: '100'
    },
    {
        item: '200번대',
        id: '200'
    },
    {
        item: '300번대',
        id: '300'
    },
    {
        item: '400번대',
        id: '400'
    }
]
function HomeScreen() {
    const [selectedTeam, setSelectedTeam] = useState({})
    const [selectedDept, setSelectedDept] = useState({})
    const [selectedYear, setSelectedYear] = useState({})
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [SubjectList, setSubjectList] = useState([])

    const connect = async () => {
        
        const table_url = "http://192.249.18.167:443/api/timetable"
        console.log("Data");
        const URL = "http://192.249.18.167:443/api/search"
        const data_url = "http://192.249.18.167:443/api/movie"
        
        try {
            if((selectedTeam.item=="전체") && (selectedDept.item=="전체") && (selectedYear.item=="전체")) {
                Toast.show({
                type:'error',
                position:'top',
                text1:'항목을 선택해주세요',
                text2:'try again',
                visibilityTime: 1000,
                autoHide: true,
                onShow: () => {},
                onHide: () => {},
            });
        }
            else axios.post(URL, {type: selectedTeam.item, class: selectedDept.item, grade: selectedYear.item})
            .then((Response)=>{
                const datas = Response.data;
                console.log("start");
                setSubjectList(datas)
                console.log()
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
        <View style={{ margin: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: '800', color: '#66023C' }}>구분</Text>
            <SelectBox
                label={false}
                options={K_OPTIONS}
                value={selectedTeam}
                onChange={onChange()}
                hideInputFilter={false}
            />
            <Text style={{ marginTop: 15, fontSize: 18, fontWeight: '800', color: '#66023C' }}>학과</Text>
            <SelectBox
                label={false}
                options={K_DEPT}
                value={selectedDept}
                onChange={onChangeDept()}
                hideInputFilter={false}
            />
            <Text style={{ marginTop: 15, fontSize: 18, fontWeight: '800', color: '#66023C' }}>학년</Text>
            <SelectBox
                label={false}
                options={K_YEAR}
                value={selectedYear}
                onChange={onChangeYear()}
                hideInputFilter={false}
            />
            <View style={{ marginTop: 10, marginBottom: 50 }}>
                <TouchableOpacity onPress={connect}>
                    <Text style={styles.button} >검색</Text>
                </TouchableOpacity>
            </View>
            <View >
                {/* {SubjectList.map((SubjectList) => {
                    return (
                        <View>
                            <Text style={styles.SubjectList}>{SubjectList.profname}</Text>
                        </View>
                    )
                })} */}
                <View>
                    <FlatList style={{
                        width: "120%",
                        height: 280,
                        backgroundColor: "#e5e5e5",
                        top: 50,
                        position: "absolute",
                        zIndex: 10,
                    }} data={SubjectList}
                        renderItem={({ item }) => {
                            // console.log(item)
                            return <MyList info={item} />
                        }}
                        keyExtractor={(SubjectList) => SubjectList.index}
                        contentContainerStyle={{
                            flexGrow: 1,
                        }} />
                    {/* <StatusBar style="auto" /> */}
                </View>

            </View>

        </View >


    )

    function onChange() {
        return (val) => setSelectedTeam(val)
    }

    function onChangeDept() {
        return (val) => setSelectedDept(val)
    }
    function onChangeYear() {
        return (val) => setSelectedYear(val)
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100%"

    },
    button: {

        backgroundColor: '#66023C',
        width: '20%',
        padding: 10,
        alignItems: 'center',
        color: 'white',
        position: 'absolute',
        right: 5,
        top: 5,
        borderRadius: 15,
        overflow: 'hidden',
        textAlign: 'center',

    },

})
