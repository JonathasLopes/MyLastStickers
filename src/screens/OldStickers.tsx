import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import StickerProps from '../interfaces/StickerInterface';

const OldStickers = ({ stickerStyle, allStickers, setChangeSomething, loading }: StickerProps) => {
    const setData1 = async (initial: string, number: number) => {
        try {
            var localStorage: any[] = [];
            const value = await AsyncStorage.getItem('MyStickers');
            localStorage = JSON.parse(value != null ? value : "[]");
            var newLocal = localStorage.filter(x => x.initials != initial || (x.initials == initial && x.number != number));
            const jsonValue = JSON.stringify(newLocal);
            await AsyncStorage.setItem('MyStickers', jsonValue).then(() => {
                setChangeSomething(true);
            });
        } catch (e) {
            // error reading value
        }
    }

    return (
        <View>
            {allStickers.map((stickerGroup, index) => {
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
                                        onPress={() => setData1(stickerGroup.initials, numberObject.number)}
                                        key={i}
                                        style={({ pressed }) => [{ opacity: pressed ? 0.4 : 1 }, numberObject.isGolden ? stickerStyle.backgroundGold : stickerStyle.backgroundWhite]}
                                    >
                                        <Text style={stickerStyle.numberBlack}>{numberObject.number}</Text>
                                    </Pressable>
                                )
                            })}
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

export default OldStickers;