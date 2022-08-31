import StickerStyles from "../styles/StickerStyles";
import AllStickers from "../utils/AllStickers";

export interface LocalStorageProps {
    initials: string,
    number: number
}

interface StickerProps {
    stickerStyle: typeof StickerStyles,
    allStickers: typeof AllStickers,
    setChangeSomething: React.Dispatch<React.SetStateAction<boolean>>,
}

export default StickerProps;