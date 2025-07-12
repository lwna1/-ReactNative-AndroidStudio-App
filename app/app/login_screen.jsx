import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import {Role, useLogin} from "@/components/loginContext";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Login_screen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setLogin} = useLogin();

    const handleLogin = () => {
        // 假设用户名和密码是 'user' 和 '1234'
        // if (username === 'user' && password === '1234') {
        //     Alert.alert('登录成功', '欢迎进入网课平台!');
        //     navigation.navigate('/index'); // 导航到主页面
        // } else {
        //     Alert.alert('登录失败', '用户名或密码错误，请重试!');
        // }

        let role = Role.STUDENT;

        switch (username) {
            case 'stu':
                role = Role.STUDENT;
                break
            case 'tea':
                role = Role.TEACHER;
                break
            case 'adm':
                role = Role.ADMIN;
                break
            default:
                Alert.alert('登录失败', '用户名或密码错误，请重试!');
                return
        }

        if (password === '1234') {
            setLogin( true, role );
            Alert.alert('登录成功', '欢迎进入网课平台!');
        } else {
            Alert.alert('登录失败', '用户名或密码错误，请重试!');
        }
    };

    const loginBtnStyle= { ...styles.loginButton, backgroundColor: username && password ? '#DBD9FF' : '#E0E0E0' };

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image source={require('@/assets/images/cathead.jpg')} style={styles.avatar}></Image>
            </View>
            {/*<Text style={styles.schoolName}>(njust)南京理工大学</Text>*/}
            <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                    {/*<Image source={require('@/assets/images/cathead.jpg')} style={styles.inputIcon}></Image>*/}
                    <MaterialIcons name="account-circle" size={24} color="black" style={styles.inputIcon} />
                    <TextInput style={styles.input}
                               placeholder={"请输入账号"}
                               placeholderTextColor={'#999'}
                               value={username}
                               onChangeText={setUsername}
                    ></TextInput>
                </View>
                <View style={styles.inputWrapper}>
                    <MaterialIcons name="lock" size={24} color="black" style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="请输入密码"
                        placeholderTextColor="#999"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    ></TextInput>
                </View>
            </View>
            <TouchableOpacity style={loginBtnStyle} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>登录</Text>
            </TouchableOpacity>
            <Text style={styles.versionText}>版本 1.1.2</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    // input: {
    //     height: 64,
    //     borderColor: '#ccc',
    //     borderWidth: 1,
    //     marginBottom: 20,
    //     paddingLeft: 10,
    //     borderRadius: 5,
    //     fontSize: 16,
    // },
    avatarContainer:{
        alignItems:'center',
        marginBottom:20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E0E0E0',
    },
    schoolName:{
        fontSize:16,
        color:'#666666',
        marginBottom:40,
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 32,
    },
    inputWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        borderRadius: 10,
        marginBottom: 16,
        paddingHorizontal: 12,
        height: 48,
    },
    inputIcon:{
        width:24,
        height:24,
        marginRight:18,
        tintColor:'#999',
    },
    input:{
        flex:1,
        fontSize:16,
        color:'#333',
    },
    loginButton:{
        borderRadius: 24,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        marginTop: 16,
    },
    loginButtonText:{
        fontSize:18,
        color:'#666666',
    },
    versionText:{
      fontSize:14,
        color:'#999999',
        marginTop:16,
    },
});

export default Login_screen;
