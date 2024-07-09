
export enum SCREENS_ENUM {
    SCREEN_NAME  = "screen_name",
    COMPONENT = "Component"
}


export interface IScreens{
    [SCREENS_ENUM.COMPONENT] : React.FC,
    [SCREENS_ENUM.SCREEN_NAME] : React.Key | string
    
}

export interface IScreenInView {
    screenInView : string
}