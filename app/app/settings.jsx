import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert ,FlatList} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import {useLogin} from "../components/loginContext";


export default function Settings(){
    const MENU_ITEMS = [
        {id:'1',title:'代办',tabBarIcon: <AntDesign name="clockcircle" color={'black'} size={24}/>},
        {id:'2',title:'课程',tabBarIcon: <Ionicons name="list" color={'black'} size={24}/>},
        {id:'3',title:'笔记本',tabBarIcon: <AntDesign name="profile" color={'black'} size={24}/>},
        {id:'4',title:'云盘',tabBarIcon: <Ionicons name="cloud" color={'black'} size={24}/>},
        {id: '5', title: '设置',tabBarIcon: <AntDesign name="setting" color={'black'} size={24}/> },
    ];
    const { setLogin } = useLogin();
    const handleLogout =()=>{
        //return login
        setLogin(false)
    }
    const renderItem = ({item}) => (
        <TouchableOpacity style={styles.menuItem}>
            {item.tabBarIcon}
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.menuText}>{item.title}</Text>
        </TouchableOpacity>
    );
    return(
        <View style={styles.contianer}>
            <View style={styles.header}>
                <Image source={require('@/assets/images/cathead.jpg')} style={styles.avatar}/>
                <Text style={styles.username}>猫猫头</Text>
            </View>
            {/*菜单*/}
            <FlatList data={MENU_ITEMS}
                      keyExtractor={(item)=>item.id}
                      renderItem={renderItem}
                      ItemSeparatorComponent={()=><View style={styles.separator}/>}
            />
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>退出登录</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    contianer:{
        flex:1,
        backgroundColor:'#f9f9f9',
    },
    header:{
        alignItems:"center",
        justifyContent:'center',
        paddingVertical: 20,
        backgroundColor:'white',
        borderBottomWidth:1,
        borderColor:'#e0e0e0',
    },
    avatar:{
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    username:{
        fontSize:18,
        fontWeight:'600',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: 'white',
    },
    icon:{
        fontSize:20,
        marginRight: 15,
    },
    menuText: {
        fontSize: 16,
        color: '#333',
    },
    separator: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 20,
    },
    logoutButton:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        marginVertical: 20,
        backgroundColor: 'white',
    },
    logoutText:{
        fontSize: 16,
        color: 'red',
        fontWeight: '600',
    },
});