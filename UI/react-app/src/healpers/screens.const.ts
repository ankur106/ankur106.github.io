import {  Profile } from "../content/AboutMe/Profile";
import { Contact } from "../content/Contact/Contact";
import { Education } from "../content/Education/Education";
import { Intro } from "../content/Intro/Intro";
// import { Projects } from "../content/Projects/Projects";
import { Skills } from "../content/Skills/Skills";
// import { WorkEx } from "../content/WorkEx/WorkEx";
import { IScreens, SCREENS_ENUM } from "./util.model";

export const content : IScreens[] = [
    {
        [SCREENS_ENUM.COMPONENT] :   Intro,
        [SCREENS_ENUM.SCREEN_NAME]:  "Intro"
    },
    {
        [SCREENS_ENUM.COMPONENT] : Profile,
        [SCREENS_ENUM.SCREEN_NAME] : "Profile"
    },
    {
        [SCREENS_ENUM.COMPONENT] : Education,
        [SCREENS_ENUM.SCREEN_NAME] : "Education"
    },
    {
        [SCREENS_ENUM.COMPONENT] : Skills,
        [SCREENS_ENUM.SCREEN_NAME] : "Skills"
    },
    // {
    //     [SCREENS_ENUM.COMPONENT] : WorkEx,
    //     [SCREENS_ENUM.SCREEN_NAME] : "WorkEx"
    // },
    // {
    //     [SCREENS_ENUM.COMPONENT] : Projects,
    //     [SCREENS_ENUM.SCREEN_NAME] : "Projects"
    // },
    {
        [SCREENS_ENUM.COMPONENT] : Contact,
        [SCREENS_ENUM.SCREEN_NAME] : "Contact"
    },
]