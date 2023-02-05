import React from "react";
import { View, Text, Image } from "react-native";

export default function SplashScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#DBE6E4" }}>
            {/* <Text style={{ color: "black", textAlign: "center" }}>Smart-e-Pharmacist</Text> */}
            <Image source={require('../assets/logo1.png')} />
        </View>
    )
}