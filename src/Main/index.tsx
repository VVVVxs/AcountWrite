import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'

const Main = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Hello World
            </Text>
            <TouchableOpacity onPress={() => navigation.push('Home')}>
                <Text>点击跳转</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Main;