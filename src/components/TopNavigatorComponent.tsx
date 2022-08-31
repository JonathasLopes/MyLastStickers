import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import TopNavigatorStyles from '../styles/TopNavigatorStyles';

interface TopNavigationProps {
    setScreen: React.Dispatch<React.SetStateAction<string>>,
    screen: string
}

const TopNavigationComponent = ({ setScreen, screen }: TopNavigationProps) => {
    return (
        <View style={TopNavigatorStyles.container}>
            <View style={TopNavigatorStyles.containerButton}>
                <TouchableOpacity style={TopNavigatorStyles.buttonLeft} onPress={() => setScreen('NewStickers')}>
                    <Text style={screen === 'NewStickers' ? TopNavigatorStyles.textSelected : TopNavigatorStyles.textNoSelected}>Faltantes</Text>
                </TouchableOpacity>
                {screen === 'NewStickers' &&
                    <View style={[TopNavigatorStyles.ballMark, { marginRight: 20 }]} />
                }
            </View>
            <View style={TopNavigatorStyles.containerButton}>
                <TouchableOpacity onPress={() => setScreen('OldStickers')}>
                    <Text style={screen === 'OldStickers' ? TopNavigatorStyles.textSelected : TopNavigatorStyles.textNoSelected}>Já Tenho</Text>
                </TouchableOpacity>
                {screen === 'OldStickers' &&
                    <View style={TopNavigatorStyles.ballMark} />
                }
            </View>
        </View>
    )
};

export default TopNavigationComponent;