import React from 'react';
import {
    View,
    Text,
    Image,
    Pressable,
} from 'react-native';
import StickerProps from '../interfaces/StickerInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewStickers = ({ stickerStyle, allStickers, setChangeSomething }: StickerProps) => {
    const setData = async (initial: string, number: number) => {
        try {
            var localStorage: any[] = [];
            let val = { initials: initial, number: number };
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
                                        onPress={() => setData(stickerGroup.initials, numberObject.number)}
                                        key={i}
                                        style={({pressed}) => [{opacity: pressed ? 0.4 : 1}, numberObject.isGolden ? stickerStyle.containerGold : stickerStyle.containerWhite]}
                                    >
                                        <Text style={numberObject.isGolden ? stickerStyle.numberGold : stickerStyle.numberWhite}>{numberObject.number}</Text>
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

export default NewStickers;