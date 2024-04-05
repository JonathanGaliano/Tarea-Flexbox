import React from "react";
import { Text, TouchableOpacity, Alert } from "react-native";

interface ButtonProps {
    text: string;
    variant?: "default" | "danger";
    size?: "xs" | "sm" | "md" | "lg";
    onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onPress,variant = "default", size = "md" }) => {
    let backgroundColor = "gray";
    let paddingVertical = 10;
    let paddingHorizontal = 20;

    switch (size) {
    case "xs":
        paddingVertical = 5;
        paddingHorizontal = 10;
        break;
    case "sm":
        paddingVertical = 8;
        paddingHorizontal = 15;
        break;
    case "md":
        paddingVertical = 10;
        paddingHorizontal = 20;
        break;
    case "lg":
        paddingVertical = 15;
        paddingHorizontal = 25;
        break;
        default:
        break;
    }

    if (variant === "danger") {
    backgroundColor = "red";
    }

    return (
    <TouchableOpacity
        onPress={() => Alert.alert("Boton presionado", text)}
        style={{
        backgroundColor,
        paddingHorizontal,
        paddingVertical,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        }}
    >
        <Text style={{ color: "white", fontSize: 16 }}>{text}</Text>
    </TouchableOpacity>
    );
};

export default Button;