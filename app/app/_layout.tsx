import {Tabs} from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import {LoginProvider, Role} from "@/components/loginContext";
import React, {useState} from "react";
import Login_screen from "@/app/login_screen";

export default function RootLayout() {

    const [login, setLogin] = useState(false);
    const [role, setRole] = useState(Role.STUDENT);

    const tabs = <Tabs

        screenOptions={{tabBarActiveTintColor: 'blue', headerShown: false}}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: '首页',
                tabBarIcon: ({color}) => <Ionicons name="home" color={color} size={24}/>,
            }}
        />

        <Tabs.Screen
            name="courses"
            options={{
                title: '课程',
                tabBarIcon: ({color}) => <Ionicons name="book" color={color} size={24}/>,
            }}
        />

        <Tabs.Screen
            name="settings"
            options={{
                title: '设置',
                tabBarIcon: ({color}) => <Ionicons name="settings" color={color} size={24}/>,
            }}
        />

        <Tabs.Screen
            name="login_screen"
            options={{
                href: null
            }}
        />

        <Tabs.Screen
            name="course_detail/[courseId]"
            options={{
                href: null
            }}
        />


    </Tabs>;

    return (
        <LoginProvider value={{
            login, role, setLogin: (login, role = Role.STUDENT) => {
                setLogin(login);
                setRole(role);
            }
        }}>
            {login ? tabs as React.ReactElement : <Login_screen/> as React.ReactElement}
        </LoginProvider>
    );
}
