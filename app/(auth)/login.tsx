import { View, Text, TouchableOpacity, TextInput, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";

const Login = () => {
    const router = useRouter()

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1 justify-center items-center bg-gray-50 p-6">

                {/* Header Section */}
                <View className="w-full mb-8">
                    <Text className="text-3xl font-bold text-gray-800 text-center">Welcome Back</Text>
                    <Text className="text-gray-500 text-center mt-2">Login to your account</Text>
                </View>

                {/* Form Section */}
                <View className="w-full space-y-4">

                    {/* Email Input */}
                    <View>
                        <Text className="text-gray-700 mb-2 font-medium ml-1">Email</Text>
                        <TextInput
                            className="w-full bg-white border border-gray-300 rounded-xl p-4 text-gray-700 focus:border-green-500"
                            placeholder="Enter your email"
                            placeholderTextColor={"#9CA3AF"}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    {/* Password Input */}
                    <View className="mt-4">
                        <Text className="text-gray-700 mb-2 font-medium ml-1">Password</Text>
                        <TextInput
                            className="w-full bg-white border border-gray-300 rounded-xl p-4 text-gray-700 focus:border-green-500"
                            placeholder="Enter your password"
                            placeholderTextColor={"#9CA3AF"}
                            secureTextEntry
                        />
                    </View>

                    {/* Login Button */}
                    <Pressable
                        className="w-full bg-blue-500 p-4 rounded-xl mt-6 shadow-sm active:bg-green-600"
                        onPress={() => router.replace("/home")}
                    >
                        <Text className="text-white text-center font-bold text-lg">Login</Text>
                    </Pressable>
                </View>

                {/* Footer / Register Link */}
                <View className="flex-row justify-center mt-8">
                    <Text className="text-gray-500">Do not have an account? </Text>
                    <TouchableOpacity
                        onPress={() => router.replace("/register")}>
                        <Text className="text-green-500 font-bold">Register</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}
export default Login