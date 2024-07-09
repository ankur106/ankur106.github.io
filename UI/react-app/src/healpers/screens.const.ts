import { About } from "../content/AboutMe/About";
import { Intro } from "../content/Intro/Intro";
import { IScreens, SCREENS_ENUM } from "./util.model";

export const content : IScreens[] = [
    {
        [SCREENS_ENUM.COMPONENT] :   Intro,
        [SCREENS_ENUM.SCREEN_NAME]:  "Intro"
    },
    {
        [SCREENS_ENUM.COMPONENT] : About,
        [SCREENS_ENUM.SCREEN_NAME] : "About"
    }
]