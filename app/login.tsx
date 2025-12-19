import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {useRouter} from "expo-router";


const Login = () => {
    const router = useRouter()
    return (
        <View className= "flex-1 justify-center items-center bg-gray-50 p-6">
            <TouchableOpacity
                className="p-3 bg-green-500 rounded"
                onPress={() => {
                    router.push('/register')
                }}>
                <Text className="color-amber-50">Register</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Login
