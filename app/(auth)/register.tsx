import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {useRouter} from "expo-router";

const Register = () => {
    const router = useRouter()
    return (
        <View className="flex-1 justify-center items-center bg-gray-50 p-6">
            <TouchableOpacity
                className="p-3 bg-blue-500 rounded"
                onPress={() => {
                    // router.push('/login')
                    // router.replace('/login')
                    router.back()
                }}>
                <Text className="color-amber-50">Login</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Register
