import {View, Text} from 'react-native'
import React from 'react'
import {Stack} from "expo-router";

const TaskLayout = () => {
    return (
        <Stack>

            <Stack.Screen
                name="index"
                options={{
                    title: 'Task List',
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="form"
                options={{
                    title: 'Task Form',
                    headerShown: false
                }}
            />

        </Stack>
    )
}
export default TaskLayout
