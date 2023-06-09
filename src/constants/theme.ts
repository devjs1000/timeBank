
import { StyleSheet } from "react-native";
export const color2 = '#fff';
export const secondary = "#191825";
export const color1 = '#E384FF'
export const primary = '#865DFF'
export const dark900='black'
export const dark100='#000'

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