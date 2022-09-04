import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import TopNavigationComponent from "../components/TopNavigatorComponent";
import NewStickers from "./NewStickers";
import OldStickers from "./OldStickers";
import AllStickers from '../utils/AllStickers';
import StickerStyles from "../styles/StickerStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LocalStorageProps } from "../interfaces/StickerInterface";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { COLORS } from "../assets/GlobalStyles";

const Home = () => {
    const [screen, setScreen] = useState('NewStickers');
    const [AllMyStickers, setAllMyStickers] = useState<any[]>([]);
    const [Missing, setMissing] = useState<any[]>([]);
    const [changeSomething, setChangeSomething] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            //await AsyncStorage.removeItem('MyStickers');
            var value = await AsyncStorage.getItem('MyStickers');

            if (value !== null) {
                var missing: any = [];
                var myStickers: any = [];
                var saved: LocalStorageProps[] = JSON.parse(value);

                AllStickers.map((stick) => {
                    let allNumbers: number[] = [];
                    let aux: any[] = [];
                    let aux2: any[] = [];
                    saved.map((save) => {
                        if (save.initials == stick.initials) {
                            allNumbers.push(save.number);
                        }
                    });

                    stick.numbers.map((number) => {
                        if (allNumbers.includes(number.number)) {
                            aux2.push(number);
                        } else {
                            aux.push(number);
                        }
                    })

                    if (aux.length > 0) {
                        let stickMiss = {
                            title: stick.title,
                            initials: stick.initials,
                            flag: stick.flag,
                            numbers: aux
                        }
                        missing.push(stickMiss);
                    }

                    if (aux2.length > 0) {
                        let stickMy = {
                            title: stick.title,
                            initials: stick.initials,
                            flag: stick.flag,
                            numbers: aux2
                        }
                        myStickers.push(stickMy);
                    }
                });

                setMissing(missing);
                setAllMyStickers(myStickers);

            } else {
                setMissing(AllStickers);
                setAllMyStickers([]);
            }

            if (changeSomething) {
                setChangeSomething(false);
            }
            setLoading(false);
        } catch (e) {
            setLoading(false);
            // error reading value
        }
    }

    useEffect(() => {
        if (changeSomething) {
            getData();
        }
    }, [changeSomething]);

    useEffect(() => {
        getData();
    }, []);

    return (
        <View>
            <Spinner
                visible={loading}
                textContent={'Carregando...'}
                color={COLORS.white}
            />
            <TopNavigationComponent setScreen={setScreen} screen={screen} />
            <View style={{ marginHorizontal: 15 }}>
                {screen === 'NewStickers' ?
                    <NewStickers setChangeSomething={setChangeSomething} stickerStyle={StickerStyles} allStickers={Missing} />
                    :
                    <OldStickers setChangeSomething={setChangeSomething} stickerStyle={StickerStyles} allStickers={AllMyStickers} />
                }
            </View>
        </View>
    )
}

export default Home;