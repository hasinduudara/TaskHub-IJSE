import React from 'react'
import {Tabs} from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const tabs = [
    { name: "home", title: "Home", icon: "home" },
    { name: "tasks", title: "Tasks", icon: "check-circle" },
    { name: "news", title: "News", icon: "article" },
    { name: "profile", title: "Profile", icon: "person" },
] as const;

const DashboardLayout = () => {
    return <Tabs screenOptions={{headerShown: false}}>
        {tabs.map(({ name, title, icon }: any, index) => (
            <Tabs.Screen
                key={index}
                name={name}
                options={{
                    title: title,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name={icon}
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        ))}
    </Tabs>
}
export default DashboardLayout
