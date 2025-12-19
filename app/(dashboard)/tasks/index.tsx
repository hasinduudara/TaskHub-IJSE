import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {useRouter} from "expo-router";

const Index = () => {
    const router = useRouter();
    return (
        <View className="flex-1 justify-center items-center">

            <Text className="text-3xl font-bold text-gray-800 text-center">
                Tasks
            </Text>

            <TouchableOpacity
                className="absolute bottom-10 right-10"
                onPress={() => router.push('/tasks/form')}
            >
                <MaterialIcons name="add-circle-outline" size={50} color="#4F46E5" />
            </TouchableOpacity>
        </View>
    )
}
export default Index
