import React from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
} from 'react-native';
import StickerProps from '../interfaces/StickerInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Award } from 'react-native-feather';
import { COLORS } from '../assets/GlobalStyles';

const NewStickers = ({ stickerStyle, allStickers, setChangeSomething, loading }: StickerProps) => {
    const setData = async (initial: string, number: number, isGolden: boolean) => {
        try {
            var localStorage: any[] = [];
            let val = { initials: initial, number: number, isGolden: isGolden };
            await AsyncStorage.getItem('MyStickers').then((value) => {
                if (value !== null) {
                    localStorage = JSON.parse(value);
                }
                localStorage.push(val);
            });

            const jsonValue = JSON.stringify(localStorage);
            await AsyncStorage.setItem('MyStickers', jsonValue).then(() => {
                setChangeSomething(true);
            });
        } catch (e) {
            // error reading value
        }
    }

    return (
        <View>
            {allStickers.length > 0 && allStickers.map((stickerGroup, index) => {
                return (
                    <View key={index} style={{ marginVertical: 10 }}>
                        <View style={stickerStyle.containerTitle}>
                            <Image style={stickerStyle.logo} source={stickerGroup.flag} />
                            <Text style={stickerStyle.title}>{stickerGroup.title} ({stickerGroup.initials})</Text>
                        </View>
                        <View style={stickerStyle.containerNumbers}>
                            {stickerGroup.numbers.map((numberObject, i) => {
                                return (
                                    <Pressable
                                        onPress={() => setData(stickerGroup.initials, numberObject.number, numberObject.isGolden)}
                                        key={i}
                                        style={({ pressed }) => [{ opacity: pressed ? 0.4 : 1 }, numberObject.isGolden ? stickerStyle.containerGold : stickerStyle.containerWhite]}
                                    >
                                        <Text style={numberObject.isGolden ? stickerStyle.numberGold : stickerStyle.numberWhite}>{numberObject.number}</Text>
                                    </Pressable>
                                )
                            })}
                        </View>
                    </View>
                )
            })}

            {(!loading && allStickers.length == 0) &&
                <View style={stickerStyle.containerMessage}>
                    <Award width={80} height={80} style={stickerStyle.iconAward} color={COLORS.gold} />
                    <View style={stickerStyle.containerTitle}>
                        <Text style={[stickerStyle.numberWhite, { fontWeight: 'bold', fontSize: 18 }]}>Parabés! </Text>
                        <Text style={stickerStyle.numberWhite}>Você completou o Album!</Text>
                    </View>
                </View>
            }
        </View>
    )
}

export default NewStickers;