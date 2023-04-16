
import { StyleSheet } from "react-native";
export const primary = '#FFA3FD';
export const secondary = "#191825";
export const pink = '#E384FF'
export const lightPink = '#865DFF'

export const commonStyles = StyleSheet.create({
    shadows: {
        shadowColor: secondary,
        shadowOffset: {
            width: 12,
            height: 12,
        },
        shadowOpacity: .58,
        shadowRadius: 16.00,
        elevation: 24
    }
})

export const { shadows } = commonStyles;