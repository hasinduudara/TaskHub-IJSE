import React from 'react'
import { Slot } from 'expo-router'
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context'
import {View} from "react-native";

const RootLayout = () => {
    const inssets =  useSafeAreaInsets()
    console.log(inssets)

    return (
        <View className="flex-1 style={{ marginTop: inssets.top }}" >
            <Slot />
        </View>
    )
}
export default RootLayout
